const _0x1f2abd=_0x39d4;function _0x39d4(_0x295dd8,_0x33fe50){const _0x2b9f81=_0x2b9f();return _0x39d4=function(_0x39d420,_0x1f5283){_0x39d420=_0x39d420-0xca;let _0x4da090=_0x2b9f81[_0x39d420];return _0x4da090;},_0x39d4(_0x295dd8,_0x33fe50);}(function(_0x4485fc,_0x4a0471){const _0x7ce211=_0x39d4,_0x5617b4=_0x4485fc();while(!![]){try{const _0x2d3f90=-parseInt(_0x7ce211(0x108))/0x1+-parseInt(_0x7ce211(0xe5))/0x2*(-parseInt(_0x7ce211(0x115))/0x3)+parseInt(_0x7ce211(0x137))/0x4*(-parseInt(_0x7ce211(0x126))/0x5)+parseInt(_0x7ce211(0x106))/0x6+-parseInt(_0x7ce211(0x14b))/0x7*(-parseInt(_0x7ce211(0x148))/0x8)+parseInt(_0x7ce211(0x114))/0x9+-parseInt(_0x7ce211(0x122))/0xa*(parseInt(_0x7ce211(0x118))/0xb);if(_0x2d3f90===_0x4a0471)break;else _0x5617b4['push'](_0x5617b4['shift']());}catch(_0x56f3d2){_0x5617b4['push'](_0x5617b4['shift']());}}}(_0x2b9f,0x48a0a));const chalk=require(_0x1f2abd(0xe3)),{readdirSync,readFileSync,writeFileSync}=require('fs-extra'),axios=require(_0x1f2abd(0x138)),{join,resolve}=require(_0x1f2abd(0x116)),{execSync}=require(_0x1f2abd(0x117)),logger=require('./utils/log.js'),login=require(_0x1f2abd(0x142)),listPackage=JSON[_0x1f2abd(0xd7)](readFileSync(_0x1f2abd(0x13c)))['dependencies'],listbuiltinModules=require(_0x1f2abd(0x113))[_0x1f2abd(0x119)];console[_0x1f2abd(0x101)](chalk[_0x1f2abd(0xfa)][_0x1f2abd(0x120)](_0x1f2abd(0xe9))('──LOADING\x20SETTINGS─●'));const cv=chalk[_0x1f2abd(0xfa)][_0x1f2abd(0x120)](_0x1f2abd(0xe9));logger['log']([{'message':_0x1f2abd(0xfe),'color':[_0x1f2abd(0xfd),_0x1f2abd(0xe7)]},{'message':_0x1f2abd(0x146),'color':_0x1f2abd(0x10d)}]),logger[_0x1f2abd(0x101)]([{'message':'[\x20SETTINGS\x20]:\x20','color':[_0x1f2abd(0xfd),_0x1f2abd(0xe7)]},{'message':_0x1f2abd(0xd8),'color':_0x1f2abd(0x10d)}]),global['client']=new Object({'commands':new Map(),'events':new Map(),'cooldowns':new Map(),'eventRegistered':new Array(),'handleSchedule':new Array(),'handleReaction':new Array(),'handleReply':new Array(),'mainPath':process[_0x1f2abd(0x134)](),'configPath':new String()}),global[_0x1f2abd(0xec)]=!![],global[_0x1f2abd(0xed)]={},global[_0x1f2abd(0x156)]=logger,global[_0x1f2abd(0xed)][_0x1f2abd(0x15c)]=logger,global[_0x1f2abd(0xd5)]=new Object({'threadInfo':new Map(),'threadData':new Map(),'userName':new Map(),'userBanned':new Map(),'threadBanned':new Map(),'commandBanned':new Map(),'threadAllowNSFW':new Array(),'allUserID':new Array(),'allCurrenciesID':new Array(),'allThreadID':new Array()}),global[_0x1f2abd(0xd9)]=require(_0x1f2abd(0x104)),global['utils'][_0x1f2abd(0xcd)]=function createQueue(_0x56572f){const _0x10b0e9=[],_0x422ad9={'push':function(_0x5a0da9){const _0x3b5bee=_0x39d4;_0x10b0e9[_0x3b5bee(0xdf)](_0x5a0da9);if(_0x10b0e9['length']==0x1)_0x422ad9[_0x3b5bee(0xfc)]();},'running':null,'length':function(){const _0x477775=_0x39d4;return _0x10b0e9[_0x477775(0xe4)];},'next':function(){const _0x13715a=_0x39d4;if(_0x10b0e9['length']>0x0){const _0x330535=_0x10b0e9[0x0];_0x422ad9[_0x13715a(0x13d)]=_0x330535,_0x56572f(_0x330535,async function(_0x4efc4a,_0x4c88c2){const _0x276863=_0x13715a;_0x422ad9[_0x276863(0x13d)]=null,_0x10b0e9[_0x276863(0xd0)](),_0x422ad9[_0x276863(0xfc)]();});}}};return _0x422ad9;},global[_0x1f2abd(0xd3)]={'database':{'creatingThreadData':[],'creatingUserData':[],'creatingDashBoardData':[],'creatingGlobalData':[]}},global['db']={'allThreadData':[],'allUserData':[],'allGlobalData':[],'threadModel':null,'userModel':null,'globalModel':null,'threadsData':null,'usersData':null,'globalData':null,'receivedTheFirstMessage':{}},global[_0x1f2abd(0xff)]=new Object(),global['config']=new Object(),global[_0x1f2abd(0x141)]=require(_0x1f2abd(0xd2)),global['configModule']=new Object(),global[_0x1f2abd(0x15b)]=new Array(),global[_0x1f2abd(0xf6)]=new Object();var configValue;try{global[_0x1f2abd(0x12e)][_0x1f2abd(0xe6)]=join(global[_0x1f2abd(0x12e)][_0x1f2abd(0x10e)],'EMA-SETTINGS.json'),configValue=require(global['client'][_0x1f2abd(0xe6)]);}catch(_0x564298){return logger['log']([{'message':_0x1f2abd(0xfe),'color':['red',_0x1f2abd(0xe7)]},{'message':_0x1f2abd(0xef),'color':_0x1f2abd(0x10d)}]);};((async()=>{const _0x3e6933=_0x1f2abd,_0x23ecf5=await axios[_0x3e6933(0x157)]('https://raw.githubusercontent.com/i1nam/EMA-GBAN/main/GBAN.json'),_0x313472=_0x23ecf5[_0x3e6933(0xd5)];if(_0x313472==!![])return logger[_0x3e6933(0x101)]([{'message':_0x3e6933(0x13f),'color':[_0x3e6933(0xfd),'cyan']},{'message':_0x3e6933(0x139),'color':_0x3e6933(0x10d)}]),process[_0x3e6933(0xee)](0x0);})());function _0x2b9f(){const _0x1e672e=['gradient-string','\x20Command\x20Aand\x20','client','error','endsWith','run','Error\x20in\x20cmd\x20format','──LOADING\x20DATA─●','cwd','[\x20Login\x20]:\x20','indexOf','28NKHVXP','axios','bot\x20stopped\x20by\x20ABDEL-RAHMAN','envConfig','globalData','./package.json','running','Can\x27t\x20Connect\x20to\x20DB\x20','[\x20GBAN\x20EMA\x20]:\x20','Env\x20Error','funcs','./includes/Emalogin','/SCRIPTS/EMA-EVTS','node_modules','nodemodules','Ema\x20Is\x20working','.js','41696XtVrlW','./includes/database','/languages/','749aCDLHk','EMA-STATE.json','read_receipt','cache','/SCRIPTS/EMA-EVTS/','presence','name','inherit','Can\x27t\x20Load\x20config','listenMqtt','npm\x20---package-lock\x20false\x20--save\x20install','loggeryuki','get','example','getText','models','moduleData','logger','handleListen','hasOwnProperty','unhandledRejection','api','createQueue','[\x20STARTER\x20]:\x20','./includes/listen','shift','[\x20LOADER\x20]:\x20','./includes/Ema/lts.js','DBYUKI','\x20-\x20Not\x20found\x20key\x20language:\x20','data','npm\x20--package-lock\x20false\x20--save\x20install','parse','This\x20Bot\x20Is\x20abel-rahman\x20&\x20dridi','utils','timeStart','events','version','Name\x20Is\x20Repeated','slice','push','Loaded\x20','typ','repeat','chalk','length','51044UzHkoD','configPath','cyan','threadsData','#1390f0','nameExist','commandDisabled','rtg','YukiBot','exit','Not\x20Found\x20config','\x20Events','getAppState','sequelize','set','usersData','mirai','language','FCAOption','split','stringify','bold','onLoad','next','red','[\x20SETTINGS\x20]:\x20','nodemodule','/SCRIPTS/EMA-CMDS/','log','undefined','Found\x20AppState','./utils','commands','558216jUuTeg','[\x20EVENTS\x20]:\x20','445642NkHaPZ','setOptions','errorFormat','./DB/controller/index.js','eventDisabled','white','mainPath','ERROR\x20on\x20Event','DeveloperMode','config','dependencies','module','4936545ZFVMXv','30KmvpMp','path','child_process','1496xertKT','builtinModules','configModule','env','/SCRIPTS/EMA-CMDS','filter','authenticate','has','hex','getTime','23340IBOViE','handleListenError','AppState\x20Not\x20Found','eventRegistered','281355vWDobH','utf-8','Loaded\x20config','[\x20DATABASE\x20]:\x20','replace','includes'];_0x2b9f=function(){return _0x1e672e;};return _0x2b9f();}try{for(const key in configValue)global[_0x1f2abd(0x111)][key]=configValue[key];logger[_0x1f2abd(0x101)]([{'message':_0x1f2abd(0xfe),'color':['red',_0x1f2abd(0xe7)]},{'message':_0x1f2abd(0x128),'color':_0x1f2abd(0x10d)}]);}catch{return logger['log']([{'message':_0x1f2abd(0xfe),'color':[_0x1f2abd(0xfd),_0x1f2abd(0xe7)]},{'message':_0x1f2abd(0x153),'color':_0x1f2abd(0x10d)}]);}const {Sequelize,sequelize}=require(_0x1f2abd(0x149)),langFile=readFileSync(__dirname+_0x1f2abd(0x14a)+(global[_0x1f2abd(0x111)][_0x1f2abd(0xf6)]||'en')+'.lang',{'encoding':_0x1f2abd(0x127)})[_0x1f2abd(0xf8)](/\r?\n|\r/),langData=langFile[_0x1f2abd(0x11d)](_0x408ea5=>_0x408ea5[_0x1f2abd(0x136)]('#')!=0x0&&_0x408ea5!='');for(const item of langData){const getSeparator=item[_0x1f2abd(0x136)]('='),itemKey=item[_0x1f2abd(0xde)](0x0,getSeparator),itemValue=item[_0x1f2abd(0xde)](getSeparator+0x1,item[_0x1f2abd(0xe4)]),head=itemKey[_0x1f2abd(0xde)](0x0,itemKey[_0x1f2abd(0x136)]('.')),key=itemKey[_0x1f2abd(0x12a)](head+'.',''),value=itemValue['replace'](/\\n/gi,'\x0a');if(typeof global['language'][head]==_0x1f2abd(0x102))global[_0x1f2abd(0xf6)][head]=new Object();global[_0x1f2abd(0xf6)][head][key]=value;}global[_0x1f2abd(0x159)]=function(..._0x1d7b24){const _0xf2737d=_0x1f2abd,_0x43599c=global[_0xf2737d(0xf6)];if(!_0x43599c[_0xf2737d(0xca)](_0x1d7b24[0x0]))throw __filename+_0xf2737d(0xd4)+_0x1d7b24[0x0];var _0x53a50=_0x43599c[_0x1d7b24[0x0]][_0x1d7b24[0x1]];for(var _0x48db8f=_0x1d7b24[_0xf2737d(0xe4)]-0x1;_0x48db8f>0x0;_0x48db8f--){const _0x8cefc8=RegExp('%'+_0x48db8f,'g');_0x53a50=_0x53a50[_0xf2737d(0x12a)](_0x8cefc8,_0x1d7b24[_0x48db8f+0x1]);}return _0x53a50;},logger['log']([{'message':_0x1f2abd(0x135),'color':['red',_0x1f2abd(0xe7)]},{'message':_0x1f2abd(0x103),'color':_0x1f2abd(0x10d)}]);try{var appStateFile=resolve(join(global[_0x1f2abd(0x12e)][_0x1f2abd(0x10e)],global[_0x1f2abd(0x111)]['APPSTATEPATH']||_0x1f2abd(0x14c))),appState=require(appStateFile);}catch{return logger[_0x1f2abd(0x101)]([{'message':_0x1f2abd(0x135),'color':[_0x1f2abd(0xfd),_0x1f2abd(0xe7)]},{'message':_0x1f2abd(0x124),'color':_0x1f2abd(0x10d)}]);}function onBot({models:_0x3c72ca}){const _0x109bea={};_0x109bea['appState']=appState,login(_0x109bea,async(_0x3bdada,_0x459f04)=>{const _0x190459=_0x39d4;if(_0x3bdada)return logger(JSON[_0x190459(0xf9)](_0x3bdada),'ERROR');const _0x228ea5=await require(_0x190459(0x10b))(_0x459f04),{threadModel:_0x44d0bc,userModel:_0x423357,globalModel:_0x1c44dc,threadsData:_0x5b5a5f,usersData:_0x4de729,globalData:_0x4ac54f,databaseType:_0x2d1ad2}=_0x228ea5;_0x459f04[_0x190459(0x109)](global['config'][_0x190459(0xf7)]),writeFileSync(appStateFile,JSON['stringify'](_0x459f04[_0x190459(0xf1)](),null,'\x09')),global[_0x190459(0x111)][_0x190459(0xdc)]='1.2.14',(global[_0x190459(0x12e)][_0x190459(0xda)]=new Date()[_0x190459(0x121)](),(function(){const _0x1e06a5=_0x190459,_0x41721f=readdirSync(global[_0x1e06a5(0x12e)][_0x1e06a5(0x10e)]+_0x1e06a5(0x11c))[_0x1e06a5(0x11d)](_0x362d73=>_0x362d73[_0x1e06a5(0x130)](_0x1e06a5(0x147))&&!_0x362d73[_0x1e06a5(0x12b)](_0x1e06a5(0x158))&&!global['config'][_0x1e06a5(0xeb)][_0x1e06a5(0x12b)](_0x362d73));for(const _0xdd54ab of _0x41721f){try{var _0x4d572a=require(global[_0x1e06a5(0x12e)]['mainPath']+_0x1e06a5(0x100)+_0xdd54ab);if(!_0x4d572a[_0x1e06a5(0x111)]||!_0x4d572a[_0x1e06a5(0x131)])throw new Error(_0x1e06a5(0x132));if(global[_0x1e06a5(0x12e)][_0x1e06a5(0x105)][_0x1e06a5(0x11f)](_0x4d572a[_0x1e06a5(0x111)][_0x1e06a5(0x151)]||''))throw new Error(_0x1e06a5(0xdd));if(_0x4d572a[_0x1e06a5(0x111)][_0x1e06a5(0x112)]&&typeof _0x4d572a[_0x1e06a5(0x111)][_0x1e06a5(0x112)]=='object')for(const _0x527779 in _0x4d572a[_0x1e06a5(0x111)][_0x1e06a5(0x112)]){const _0x55b5f1=join(__dirname,_0x1e06a5(0x145),_0x1e06a5(0x144),_0x527779);try{if(!global[_0x1e06a5(0xff)]['hasOwnProperty'](_0x527779)){if(listPackage[_0x1e06a5(0xca)](_0x527779)||listbuiltinModules[_0x1e06a5(0x12b)](_0x527779))global['nodemodule'][_0x527779]=require(_0x527779);else global[_0x1e06a5(0xff)][_0x527779]=require(_0x55b5f1);}else'';}catch{var _0x4d8fa8=![],_0x5c3dd6;execSync(_0x1e06a5(0x155)+'\x20'+_0x527779+(_0x4d572a['config'][_0x1e06a5(0x112)][_0x527779]=='*'||_0x4d572a[_0x1e06a5(0x111)][_0x1e06a5(0x112)][_0x527779]==''?'':'@'+_0x4d572a['config'][_0x1e06a5(0x112)][_0x527779]),{'stdio':'inherit','env':process[_0x1e06a5(0x11b)],'shell':!![],'cwd':join(__dirname,_0x1e06a5(0x145))});for(let _0x277283=0x1;_0x277283<=0x3;_0x277283++){try{require[_0x1e06a5(0x14e)]={};if(listPackage[_0x1e06a5(0xca)](_0x527779)||listbuiltinModules['includes'](_0x527779))global[_0x1e06a5(0xff)][_0x527779]=require(_0x527779);else global['nodemodule'][_0x527779]=require(_0x55b5f1);_0x4d8fa8=!![];break;}catch(_0x4fd6cb){_0x5c3dd6=_0x4fd6cb;}if(_0x4d8fa8||!_0x5c3dd6)break;}if(!_0x4d8fa8||_0x5c3dd6)throw console['log']();}}if(_0x4d572a[_0x1e06a5(0x111)]['envConfig'])try{for(const _0xf97847 in _0x4d572a[_0x1e06a5(0x111)][_0x1e06a5(0x13a)]){if(typeof global[_0x1e06a5(0x11a)][_0x4d572a[_0x1e06a5(0x111)][_0x1e06a5(0x151)]]==_0x1e06a5(0x102))global[_0x1e06a5(0x11a)][_0x4d572a['config'][_0x1e06a5(0x151)]]={};if(typeof global[_0x1e06a5(0x111)][_0x4d572a[_0x1e06a5(0x111)][_0x1e06a5(0x151)]]==_0x1e06a5(0x102))global[_0x1e06a5(0x111)][_0x4d572a['config']['name']]={};if(typeof global[_0x1e06a5(0x111)][_0x4d572a[_0x1e06a5(0x111)][_0x1e06a5(0x151)]][_0xf97847]!=='undefined')global[_0x1e06a5(0x11a)][_0x4d572a[_0x1e06a5(0x111)]['name']][_0xf97847]=global[_0x1e06a5(0x111)][_0x4d572a[_0x1e06a5(0x111)][_0x1e06a5(0x151)]][_0xf97847];else global[_0x1e06a5(0x11a)][_0x4d572a[_0x1e06a5(0x111)][_0x1e06a5(0x151)]][_0xf97847]=_0x4d572a['config'][_0x1e06a5(0x13a)][_0xf97847]||'';if(typeof global['config'][_0x4d572a[_0x1e06a5(0x111)][_0x1e06a5(0x151)]][_0xf97847]==_0x1e06a5(0x102))global[_0x1e06a5(0x111)][_0x4d572a[_0x1e06a5(0x111)][_0x1e06a5(0x151)]][_0xf97847]=_0x4d572a[_0x1e06a5(0x111)]['envConfig'][_0xf97847]||'';}}catch(_0x284b69){throw new Error(_0x1e06a5(0x140));}if(_0x4d572a[_0x1e06a5(0xfb)]){try{const _0x49104c={};_0x49104c[_0x1e06a5(0xcc)]=_0x459f04,_0x49104c['models']=_0x3c72ca,_0x4d572a[_0x1e06a5(0xfb)](_0x49104c);}catch(_0x55a1fb){throw new Error('Can\x27t\x20onLoad\x20:\x20cmds\x20:\x20'+_0x55a1fb);};}if(_0x4d572a['handleEvent'])global[_0x1e06a5(0x12e)][_0x1e06a5(0x125)][_0x1e06a5(0xdf)](_0x4d572a['config'][_0x1e06a5(0x151)]);global[_0x1e06a5(0x12e)]['commands']['set'](_0x4d572a[_0x1e06a5(0x111)][_0x1e06a5(0x151)],_0x4d572a);}catch(_0x53853a){logger[_0x1e06a5(0x101)]([{'message':_0x1e06a5(0xce),'color':[_0x1e06a5(0xfd),_0x1e06a5(0xe7)]}]);};}}()),(function(){const _0x4e7d81=_0x190459,_0x450416=readdirSync(global[_0x4e7d81(0x12e)][_0x4e7d81(0x10e)]+_0x4e7d81(0x143))[_0x4e7d81(0x11d)](_0x180d50=>_0x180d50['endsWith']('.js')&&!global['config'][_0x4e7d81(0x10c)]['includes'](_0x180d50));for(const _0x37c6e7 of _0x450416){try{var _0x17720b=require(global['client']['mainPath']+_0x4e7d81(0x14f)+_0x37c6e7);if(!_0x17720b[_0x4e7d81(0x111)]||!_0x17720b['run'])throw new Error(global[_0x4e7d81(0x159)](_0x4e7d81(0xf5),_0x4e7d81(0x10a)));if(global[_0x4e7d81(0x12e)][_0x4e7d81(0xdb)]['has'](_0x17720b['config'][_0x4e7d81(0x151)])||'')throw new Error(global[_0x4e7d81(0x159)]('mirai',_0x4e7d81(0xea)));if(_0x17720b[_0x4e7d81(0x111)][_0x4e7d81(0x112)]&&typeof _0x17720b[_0x4e7d81(0x111)][_0x4e7d81(0x112)]=='object')for(const _0x583f01 in _0x17720b['config'][_0x4e7d81(0x112)]){const _0x5186d1=join(__dirname,_0x4e7d81(0x145),'node_modules',_0x583f01);try{if(!global[_0x4e7d81(0xff)][_0x4e7d81(0xca)](_0x583f01)){if(listPackage[_0x4e7d81(0xca)](_0x583f01)||listbuiltinModules[_0x4e7d81(0x12b)](_0x583f01))global[_0x4e7d81(0xff)][_0x583f01]=require(_0x583f01);else global[_0x4e7d81(0xff)][_0x583f01]=require(_0x5186d1);}else'';}catch{let _0x15334a=![],_0x2f28d7;execSync(_0x4e7d81(0xd6)+_0x583f01+(_0x17720b[_0x4e7d81(0x111)][_0x4e7d81(0x112)][_0x583f01]=='*'||_0x17720b['config'][_0x4e7d81(0x112)][_0x583f01]==''?'':'@'+_0x17720b['config'][_0x4e7d81(0x112)][_0x583f01]),{'stdio':_0x4e7d81(0x152),'env':process[_0x4e7d81(0x11b)],'shell':!![],'cwd':join(__dirname,_0x4e7d81(0x145))});for(let _0x46d98e=0x1;_0x46d98e<=0x3;_0x46d98e++){try{require['cache']={};if(global[_0x4e7d81(0xff)]['includes'](_0x583f01))break;if(listPackage[_0x4e7d81(0xca)](_0x583f01)||listbuiltinModules[_0x4e7d81(0x12b)](_0x583f01))global[_0x4e7d81(0xff)][_0x583f01]=require(_0x583f01);else global[_0x4e7d81(0xff)][_0x583f01]=require(_0x5186d1);_0x15334a=!![];break;}catch(_0x10d3f8){_0x2f28d7=_0x10d3f8;}if(_0x15334a||!_0x2f28d7)break;}}}if(_0x17720b[_0x4e7d81(0x111)]['envConfig'])try{for(const _0x29a2ba in _0x17720b['config'][_0x4e7d81(0x13a)]){if(typeof global[_0x4e7d81(0x11a)][_0x17720b[_0x4e7d81(0x111)]['name']]==_0x4e7d81(0x102))global[_0x4e7d81(0x11a)][_0x17720b[_0x4e7d81(0x111)][_0x4e7d81(0x151)]]={};if(typeof global[_0x4e7d81(0x111)][_0x17720b['config'][_0x4e7d81(0x151)]]==_0x4e7d81(0x102))global[_0x4e7d81(0x111)][_0x17720b[_0x4e7d81(0x111)][_0x4e7d81(0x151)]]={};if(typeof global[_0x4e7d81(0x111)][_0x17720b[_0x4e7d81(0x111)]['name']][_0x29a2ba]!=='undefined')global['configModule'][_0x17720b['config']['name']][_0x29a2ba]=global[_0x4e7d81(0x111)][_0x17720b[_0x4e7d81(0x111)][_0x4e7d81(0x151)]][_0x29a2ba];else global[_0x4e7d81(0x11a)][_0x17720b['config'][_0x4e7d81(0x151)]][_0x29a2ba]=_0x17720b['config'][_0x4e7d81(0x13a)][_0x29a2ba]||'';if(typeof global[_0x4e7d81(0x111)][_0x17720b[_0x4e7d81(0x111)][_0x4e7d81(0x151)]][_0x29a2ba]==_0x4e7d81(0x102))global[_0x4e7d81(0x111)][_0x17720b['config'][_0x4e7d81(0x151)]][_0x29a2ba]=_0x17720b[_0x4e7d81(0x111)][_0x4e7d81(0x13a)][_0x29a2ba]||'';}}catch(_0x34b3da){}if(_0x17720b[_0x4e7d81(0xfb)])try{const _0x4d615d={};_0x4d615d[_0x4e7d81(0xcc)]=_0x459f04,_0x4d615d[_0x4e7d81(0x15a)]=_0x3c72ca,_0x17720b['onLoad'](_0x4d615d);}catch(_0x423977){logger[_0x4e7d81(0x101)]([{'message':_0x4e7d81(0x107),'color':[_0x4e7d81(0xfd),_0x4e7d81(0xe7)]}]);}global[_0x4e7d81(0x12e)][_0x4e7d81(0xdb)][_0x4e7d81(0xf3)](_0x17720b['config'][_0x4e7d81(0x151)],_0x17720b);}catch(_0x8e68aa){logger[_0x4e7d81(0x101)]([{'message':_0x4e7d81(0x107),'color':[_0x4e7d81(0xfd),_0x4e7d81(0xe7)]},{'message':_0x4e7d81(0x10f),'color':_0x4e7d81(0x10d)}]);}}}()));const _0x3ca6de=require(_0x190459(0x12c)),_0x4c26e7=_0x3ca6de(_0x190459(0xfd),_0x190459(0xe7));console[_0x190459(0x101)](_0x4c26e7('━'[_0x190459(0xe2)](0x32),{'interpolation':'hsv'})),console[_0x190459(0x101)](cv('\x0a'+'──LOADING\x20LOADER─●')),logger[_0x190459(0x101)]([{'message':_0x190459(0xd1),'color':[_0x190459(0xfd),_0x190459(0xe7)]},{'message':_0x190459(0xe0)+global[_0x190459(0x12e)]['commands']['size']+_0x190459(0x12d)+global[_0x190459(0x12e)][_0x190459(0xdb)]['size']+_0x190459(0xf0),'color':_0x190459(0x10d)}]);const _0xa32411={};_0xa32411[_0x190459(0xcc)]=_0x459f04,_0xa32411[_0x190459(0x15a)]=_0x3c72ca,_0xa32411[_0x190459(0x13b)]=_0x4ac54f,_0xa32411[_0x190459(0xf4)]=_0x4de729,_0xa32411[_0x190459(0xe8)]=_0x5b5a5f;const _0x374ffd=require(_0x190459(0xcf))(_0xa32411);function _0x137ac8(_0x494260,_0x352dca){const _0x5b6662=_0x190459;if(_0x494260)return logger(global[_0x5b6662(0x159)](_0x5b6662(0xf5),_0x5b6662(0x123),JSON[_0x5b6662(0xf9)](_0x494260)),_0x5b6662(0x12f));if([_0x5b6662(0x150),_0x5b6662(0xe1),_0x5b6662(0x14d)]['some'](_0x3ce3e7=>_0x3ce3e7==_0x352dca['type']))return;if(global[_0x5b6662(0x111)][_0x5b6662(0x110)]==!![])console[_0x5b6662(0x101)](_0x352dca);return _0x374ffd(_0x352dca);};global[_0x190459(0x15d)]=_0x459f04[_0x190459(0x154)](_0x137ac8),global[_0x190459(0x12e)][_0x190459(0xcc)]=_0x459f04;});}console[_0x1f2abd(0x101)](cv('\x0a'+_0x1f2abd(0x133))),((async()=>{const _0x5917ba=_0x1f2abd;try{await sequelize[_0x5917ba(0x11e)]();const _0x4f4ed8={};_0x4f4ed8['Sequelize']=Sequelize,_0x4f4ed8[_0x5917ba(0xf2)]=sequelize;const _0x1f7fa5=require('./includes/database/model')(_0x4f4ed8);logger[_0x5917ba(0x101)]([{'message':_0x5917ba(0x129),'color':['red','cyan']},{'message':'Connected\x20to\x20DB\x20','color':_0x5917ba(0x10d)}]),console[_0x5917ba(0x101)](cv('\x0a'+'──LOADING\x20FACEBOOK─●'));const _0x52bbc5={};_0x52bbc5['models']=_0x1f7fa5,onBot(_0x52bbc5);}catch(_0x3d44c1){logger[_0x5917ba(0x101)]([{'message':_0x5917ba(0x129),'color':[_0x5917ba(0xfd),_0x5917ba(0xe7)]},{'message':_0x5917ba(0x13e),'color':_0x5917ba(0x10d)}]);}})()),process['on'](_0x1f2abd(0xcb),(_0x2351e2,_0x426ede)=>{});