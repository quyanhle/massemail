const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//make unique token from id for user
passport.serializeUser((user, done) => {
	done(null, user.id);
});
//deserialize user token which coming from http request
passport.deserializeUser((id, done) => {
	User.findById(id)
		.then(user => {
			done(null, user);
		});
});

//console.developers.google.com
passport.use(
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, (accessToken, refreshToken, profile, done) => {
		User.findOne({
			googleId: profile.id
		})
		.then(existingUser => {
			if (existingUser) {
				done(null, existingUser);
			} else {
				new User({ 
					googleId: profile.id,
					name: profile.displayName
				})
				.save()
				.then(user => done(null, user));
			}
		});
	})
);