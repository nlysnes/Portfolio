(()=>{
const L='assets/shitodo-logo-v2.png';
const ck=c=>`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"></path></svg>`;
const xx='<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9A968D" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>';
const fl=(s=14)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="#E8765A"><path d="M12 2c1 3.5 5 6 5 11a5 5 0 0 1-10 0c0-2.5 1.2-4 2.5-5.5.3 1.8 1.2 2.8 2.5 3C11 8 11.2 5 12 2z"></path></svg>`;
const cell=s=>`<div class="lp-c ${s}">${s==='dn'?ck('#fff'):s==='cv'?ck('#3FA588'):s==='m'?xx:''}</div>`;
const quote=(q,size=40,align='left')=>`<figure class="lp-q" style="text-align:${align}"><blockquote style="font-size:${size}px">«${q[0]}»</blockquote><figcaption>${q[1]}</figcaption></figure>`;
const phone=()=>{
 const it=[[1,'Wake up before 7','#D9525E',12],[1,'Morning ritual','#D9525E',8],[1,'Workout','#3FA588',0],[0,'Evening ritual','#D9525E',0,'21:00'],[0,'Reading','#8C6E10',0,'22:00'],[1,'Dishes','#6B8FB8',3],[0,'Wash socks','#6B8FB8',0,'Today']];
 return `<div class="lp-phone"><div class="lp-scr"><div class="lp-sb"><span>9:41</span><span class="lp-isl"></span><span>100%</span></div>
<div class="lp-nt"><img src="${L}" alt=""><div><div class="h"><b>Shitodo</b><span>now</span></div><p>Evening ritual is due in 15 min</p></div></div>
<div class="lp-ph-h"><div class="lp-eb">Today · Sat 26 Sep</div><div class="lp-big">4 of 7 done</div><div class="lp-bar"><i style="width:57%"></i></div></div>
${it.map(([d,n,c,s,t])=>`<div class="lp-li${d?' on':''}"><span class="lp-cb${d?' on':''}">${d?ck('#fff'):''}</span><span class="n">${n}</span>${s?`<span class="lp-str">${fl(12)}${s}</span>`:t?`<span class="lp-tm">${t}</span>`:''}</div>`).join('')}
</div></div>`};
const program=()=>{
 const d=[['Wake up before 7','#D9525E','dn dn m dn dn td fu'],['Morning ritual','#D9525E','dn dn dn dn m td fu'],['Workout','#3FA588','dn fu dn fu dn td fu'],['Reading','#8C6E10','m dn dn dn dn td fu'],['No unhealthy snacks','#3FA588','dn m dn dn dn td fu']];
 const r=[['Vacuum the apartment','Every 7 days','dn cv cv cv cv cv cv'],['Wash socks','Every 3 days','cv cv dn cv cv td fu']];
 return `<div class="lp-win"><div class="lp-wb"><i></i><i></i><i></i></div><div class="lp-wc"><div class="lp-eb">Program</div><div class="lp-wt">My first Shitodo program</div>
<div class="lp-days"><div></div><div class="lp-cells">${['MON','TUE','WED','THU','FRI','SAT','SUN'].map(x=>`<span${x==='SAT'?' style="color:#8C6E10"':''}>${x}</span>`).join('')}</div></div>
<div class="lp-sh">Daily routines</div>${d.map(([n,c,p])=>`<div class="lp-r"><div class="n"><i style="background:${c}"></i>${n}</div><div class="lp-cells">${p.split(' ').map(cell).join('')}</div></div>`).join('')}
<div class="lp-sh">Recurring routines</div>${r.map(([n,iv,p])=>`<div class="lp-r"><div class="n"><i style="background:#6B8FB8"></i><span>${n}<span class="iv">${iv}</span></span></div><div class="lp-cells">${p.split(' ').map(cell).join('')}</div></div>`).join('')}
</div></div>`};
const stats=()=>{
 const rg=[['This week',82,'#E8C547'],['This month',74,'#3FA588'],['All time',68,'#E8765A']];
 const ar=[['Discipline',72,'#E8765A'],['Health',64,'#3FA588'],['Home',81,'#6B8FB8'],['Spirituality',47,'#8C6E10'],['Work',58,'#6B6862']];
 return `<div class="lp-card"><div class="lp-stk"><div><div class="lp-eb">Momentum</div><div class="v">${fl(20)}6</div></div><div><div class="lp-eb">Longest</div><div class="v">21<small>days</small></div></div><div><div class="lp-eb">Total</div><div class="v" style="color:#B5482E">58</div></div></div>
<div class="lp-rings">${rg.map(([l,p,c])=>`<div><div class="lp-ring" style="background:conic-gradient(${c} ${p*3.6}deg,#E8E1D1 0)"><b>${p}%</b></div><div class="rl">${l}</div></div>`).join('')}</div>
<div class="lp-areas">${ar.map(([n,v,c])=>`<div class="lp-ar"><span>${n}</span><div class="lp-ab"><i style="width:${v}%;background:${c}"></i></div><span class="vv">${v}.0</span></div>`).join('')}</div></div>`};
const badges=()=>{
 const b=[['great_day','Great Day',12],['perfect_day','Perfect Day',4],['streak3','3 Streak',0],['great_week','Great Week',0],['perfect_week','Perfect Week',0]];
 return `<div class="lp-card"><div class="lp-bdg">${b.map(([i,n,c])=>`<div class="lp-b${c?'':' p'}"><div class="pic"><img src="assets/badges/${i}.png" alt="">${c?`<span class="ct">×${c}</span>`:''}<span class="tg">${c?'Achieved':'In progress'}</span></div><div class="nm">${n}</div></div>`).join('')}</div></div>`};
window.LP={L,quote,phone,program,stats,badges};
})();
