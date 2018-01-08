import { Job } from '../data/index';
import { LangStr } from '../components/index';
import _ from 'lodash';

const parseEncounter = db => ({
  time: db['duration'],
  zone: db['CurrentZoneName'],
  name: db['title'],
  duration: parseInt(db['DURATION'], 10),
  damage: parseDamage(db),
  healing: parseHealing(db),
  tanking: parseTanking(db),
});

const parseCombatantData = (db, Damage) => ({
  name: parseName(db),
  job: parseJob(db),
  role: parseRole(db),
  damage: parseDamage(db),
  healing: parseHealing(db),
  tanking: parseTanking(db, Damage),
  isMy: db['name'] === 'YOU',
});

// 分组：damage/healing/tanking

const parseDamage = db => ({
  total: parseInt(db['damage'], 10),
  ps: parseInt(db['encdps'], 10),
  ps10: parseInt(db['Last10DPS'], 10),
  ps30: parseInt(db['Last30DPS'], 10),
  ps60: parseInt(db['Last60DPS'], 10),
  count: parseInt(db['swings'], 10),
  percent: db['damage%'],
  criticals: db['crithit%'],
  directhit: db['DirectHitPct'],
  critdirecthit: db['CritDirectHitPct'],
  highest: parseHighest(db['maxhit']),
  kills: parseInt(db['kills'], 10),
});

const parseHealing = db => ({
  total: parseInt(db['healed'], 10),
  ps: parseInt(db['enchps'], 10),
  count: parseInt(db['heals'], 10),
  percent: db['healed%'],
  over: db['OverHealPct'],
  criticals: db['critheal%'],
  highest: parseHighest(db['maxheal']),
  deaths: parseInt(db['deaths'], 10),
});

const parseTanking = (db, Damage) => ({
  total: parseInt(db['damagetaken'], 10),
  percent: parseInt(db['damagetaken'] / Damage * 100, 10) + '%',
  parry: db['ParryPct'],
  block: db['BlockPct'],
  dodge: parseInt(100 - db['IncToHit'], 10) + '%',
});

// 处理Combatant数组

const parseCombatant = db => {
  let Combatant = [];
  let Damage = 0;
  _.forEach(db, item => {
    Damage = Damage + parseInt(item['damagetaken'], 10);
  });
  _.forEach(db, item => {
    Combatant.push(parseCombatantData(item, Damage));
  });
  return Combatant;
};

export { parseCombatant, parseEncounter };

// 格式化方法

const parseName = db => {
  if (typeof db['name'] === 'undefined') return false;
  if (db['name'].indexOf('(') !== -1) {
    return LangStr('role.chocobo');
  } else if (db['name'].toLowerCase() === 'you') {
    return LangStr('role.you');
  } else if (db['name'].toLowerCase() === 'limit break') {
    return LangStr('role.limitbreak');
  } else {
    return db['name'];
  }
};

const parseRole = db => (db['Job'] !== '' ? Job[db['Job'].toLowerCase()] : false);

const parseJob = db => {
  if (typeof db['Job'] !== 'undefined' && db['Job'] !== '') {
    return db['Job'].toLowerCase();
  } else if (typeof db['name'] !== 'undefined' && db['name'].indexOf('(') !== -1) {
    return 'chocobo';
  } else {
    return db['name'].replace(' ', '').toLowerCase();
  }
};

const parseHighest = db => db.replace('unknown', LangStr('role.other'));
