Package.describe({
  name: 'proyk:meteor-cookies',
  version: '0.0.1',
  summary: 'Meteor cookies',
  git: 'https://github.com/ykptke/proyk-meteor-cookies.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('tracker', 'client');
  api.addFiles('cookie.js', 'client');
  api.export('Cookie', 'client');
});
