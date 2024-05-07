import { default as Server, }from 'advising.js';

const server = new Server({
  threshold: 0.5,
  bond: 5,
  logLevel: 3,
  logInterval: 5,
  logPath: '/var/log/advising/'
});

const global = {
  server,
  texts: {},
};

export default global;
