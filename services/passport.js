const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
// const instagramStrategy = require('passport-instagram').Strategy;
// const linkedinStrategy = require('passport-linkedin-oauth2').Strategy;
// const facebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys.js');

passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log('Access token: ', accessToken);
    console.log('Refresh token: ', refreshToken);
    console.log('Profile: ', profile);
  }));