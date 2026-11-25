// Easy Hinglish explanations (Roman script) of the Marketing concepts - hand written. Used by js/hinglish.js (button on answers + Easy page + voice).
// c(unit, title, match, matlab, points, example, exam, trick). `match` is tested against the question + topic; list specific concepts before general ones.
(function () {
  const list = [];
  const c = (unit, title, match, matlab, points, example, exam, trick) => list.push({ unit, title, match, matlab, points, example, exam, trick });

  // ------------------------------------------------------------ Unit I
  c('Unit I', 'Marketing vs Selling', /marketing and (selling|sales)|selling and marketing|marketing vs\.? selling|difference between marketing|before production/i,
    'Selling matlab jo maal ban chuka hai usse kisi tarah bech do. Marketing matlab pehle pata karo customer ko chahiye kya, phir wahi banao.',
    ['Selling ka focus product aur sales volume par hota hai; marketing ka focus customer ki zarurat aur satisfaction par.', 'Selling production ke baad shuru hota hai; marketing production se pehle shuru hoke sale ke baad bhi chalti hai.', 'Selling short term sochta hai; marketing long term relationship banati hai.', 'Selling, marketing ka sirf ek chhota hissa hai.'],
    'Dukandaar bola "ye purana stock aaj hi nikalna hai, discount do" - ye selling. Dukandaar ne pehle poocha "aapko kaisi mithai pasand hai" aur sugar free banayi - ye marketing.',
    'Seller needs vs buyer needs, customer satisfaction, volume vs value, Theodore Levitt', 'Selling = "jo hai, becho". Marketing = "jo chahiye, banao".');
  c('Unit I', 'Societal Marketing Concept', /societal/i,
    'Company paisa bhi kamaye, customer ko khush bhi rakhe, aur society ka bhala bhi kare - teeno saath.',
    ['3 cheezein balance karni hain: Profit, Customer satisfaction, Social welfare.', 'Short term maza aur long term nuksaan wale product se bachna (junk food, plastic).', 'Isse trust aur brand image banti hai.', 'Jhootha dava kiya to usko greenwashing kehte hain.'],
    'Soft drink company sugar kam kare aur bottle recycle kare, phir bhi profit kamaye.',
    'People, Planet, Profit; long-run welfare; corporate social responsibility', 'Yaad rakho 3 P: People, Planet, Profit.');
  c('Unit I', 'Marketing Orientations (5 concepts)', /orientation|production concept|product concept|selling concept|(?<!core )marketing concept|philosoph/i,
    'Ye 5 soch hain ki company market ko kis nazar se dekhti hai.',
    ['Production concept: "sasta aur har jagah milna chahiye" - zyada banao.', 'Product concept: "best quality banao, customer khud aayega". Risk: marketing myopia.', 'Selling concept: "dhakka do, tabhi bikega" - zyada advertising aur discount.', 'Marketing concept: "customer ki zarurat samjho aur poori karo".', 'Societal concept: customer ke saath society ka bhi bhala.'],
    'Ford ki sasti ek jaisi car = production. Insurance agent ka baar baar phone = selling. Amazon ka customer feedback par kaam = marketing.',
    'Production, Product, Selling, Marketing, Societal - isi order mein likho', 'Trick: "PPSMS" - Paise Pehle Socho, Market Samjho.');
  c('Unit I', 'Green Marketing', /green marketing|greenwash/i,
    'Aise product aur kaam ko promote karna jo environment ko kam nuksaan karein.',
    ['Eco friendly product aur packaging.', 'Kam waste, recycling, energy bachana.', 'Honest claim - proof ke saath.', 'Greenwashing = sirf dikhava ki hum "eco friendly" hain jabki asli mein nahi.'],
    'Refill pack, kapde ka bag, electric scooter ka promotion.',
    'Sustainability, eco-label, 3R (reduce, reuse, recycle), greenwashing', 'Green = sach mein saaf. Greenwash = sirf rang lagaya.');
  c('Unit I', 'Digital Marketing', /digital|online marketing|social media/i,
    'Internet aur mobile ke through marketing karna.',
    ['Channels: website, SEO, pay-per-click ads, social media, email/WhatsApp, content aur influencer.', 'Fayda: sahi logon tak pahunch, kam kharcha, turant result dikhta hai.', 'Measure: traffic, click-through rate, conversion rate, cost per acquisition, return on ad spend.', 'Nuksaan: bahut competition, privacy ka issue.'],
    'Kapdon ki dukaan Instagram reel daale aur dekhe kitne logon ne click karke order kiya.',
    'SEO, PPC, CTR, conversion rate, ROI', 'Digital ki khaasiyat: har rupaye ka hisaab milta hai.');
  c('Unit I', 'Core Concepts: Need, Want, Demand, Value', /core (marketing )?concept|needs?,? wants?|need and want|customer value/i,
    'Marketing ki ABCD: need se shuru, relationship par khatam.',
    ['Need = basic zarurat (bhook).', 'Want = zarurat ko poora karne ki pasand (pizza).', 'Demand = want jiske liye paisa aur iccha dono hain.', 'Value = jo fayda mila minus jo kharcha hua. Satisfaction = ummeed ke muqable kaisa laga.', 'Exchange = paise ke badle product; phir relationship.'],
    'Pyaas need hai, cold coffee want hai, jeb mein 100 rupaye hain to demand ban gayi.',
    'Needs, wants, demands, product, value, satisfaction, exchange, market', 'Chain yaad rakho: Need, Want, Demand, Product, Value, Exchange.');
  c('Unit I', 'Functions of Marketing', /functions of marketing|marketing functions|standardisation/i,
    'Product ko banane wale se khareedne wale tak pahunchane ke saare kaam.',
    ['Research aur product planning.', 'Buying aur assembling.', 'Standardisation, grading, packaging, branding.', 'Pricing aur promotion, selling.', 'Transport, storage (warehousing), financing, risk bearing.'],
    'Aam ka vyapari: research karta hai, A-B grade banata hai, pack karta hai, cold storage mein rakhta hai, truck se bhejta hai.',
    '3 group: exchange functions, physical supply functions, facilitating functions', 'Group mein likhoge to answer saaf dikhega.');
  c('Unit I', 'Marketing: Meaning, Nature, Scope, Importance', /define marketing(?! mix| research| information)|definitions? of marketing|role of marketing|meaning of marketing(?! research)|nature of marketing|scope of marketing|importance of marketing(?! research| information)|marketing management/i,
    'Marketing matlab customer ki zarurat samajh kar, usko value dekar, profit kamana.',
    ['Nature: customer focused, continuous process, art bhi science bhi, har organisation mein.', 'Scope: goods, services, ideas, persons, places, events.', 'Importance: company ko sales aur brand; customer ko choice aur quality; society ko rozgaar.', 'Kotler: needs satisfy karne ke liye value create aur exchange karne ka process.'],
    'Kerala tourism bhi marketing hai - yahan "place" becha ja raha hai.',
    'Kotler definition, utilities (form, place, time, possession)', 'Definition + 4 nature + 4 scope + 3 importance = poore marks.');

  // ------------------------------------------------------------ Unit II
  c('Unit II', 'Types of Buying Behaviour and Buying Roles', /types? of (consumer )?buying behavio|buying behavio.*type|complex buying|buying role|initiator|dissonance/i,
    'Log har cheez ek jaise nahi khareedte. Kitna sochna padta hai, usse type banta hai.',
    ['Complex: mehenga aur brands alag - car, laptop.', 'Dissonance reducing: mehenga par brands ek jaise - tiles, mattress; baad mein doubt.', 'Habitual: sasta aur aadat se - namak.', 'Variety seeking: sasta par naya try karna - chips.', 'Roles: Initiator, Influencer, Decider, Buyer, User.'],
    'Ghar ki car: bachche ne idea diya (initiator), chacha ne salah di (influencer), papa ne final kiya (decider) aur paise diye (buyer), poora ghar chalata hai (user).',
    'Involvement level, brand differences, post-purchase dissonance', 'Roles ke liye: I-I-D-B-U.');
  c('Unit II', 'Consumer Buying Decision Process', /buying (decision )?process|decision process|stages.*buying/i,
    'Khareedne se pehle aur baad dimaag jo steps leta hai.',
    ['1. Need recognition - zarurat mehsoos hui.', '2. Information search - dosto se poocha, video dekhe.', '3. Evaluation - compare kiya.', '4. Purchase decision - khareed liya.', '5. Post purchase - khush to tareef, nahi to complaint.'],
    'Phone hang hua, YouTube review dekhe, teen phone compare kiye, EMI par liya, camera achha nikla to dost ko bhi bataya.',
    'Cognitive dissonance, evoked set', 'Yaad: Zarurat, Khoj, Tulna, Khareed, Baad ka feel.');
  c('Unit II', 'Factors Affecting Consumer Behaviour', /factors?.*(consumer|buying)|consumer behavio/i,
    'Consumer behaviour matlab log kya, kyun, kab aur kaise khareedte hain.',
    ['Cultural: culture, sub culture, social class.', 'Social: family, dost, status.', 'Personal: age, job, income, lifestyle.', 'Psychological: motivation, perception, learning, attitude.', 'Economic: price, credit, kamai.'],
    'Diwali par mithai (cultural), dost ke kehne par phone (social), student ka sasta laptop (personal), safety ke liye helmet (psychological).',
    'Cultural, social, personal, psychological factors with one example each', 'Trick: "CSPP" - Culture, Society, Person, Psychology.');
  c('Unit II', 'Marketing Information System (MIS)', /\bmis\b|information system/i,
    'Company ka dimaag: information lagataar jama karna, samajhna aur manager tak pahunchana.',
    ['Internal records: sales, stock, billing.', 'Marketing intelligence: bahar ki khabar - competitor ka price.', 'Marketing research: kisi ek problem ki study.', 'Decision support system: model aur tools jisse faisla ho.', 'MIS chalta rehta hai; research zarurat par hoti hai.'],
    'Supermarket ka dashboard bataye ki shaam ki sale gir rahi hai.',
    'Kotler: people, equipment and procedures; 4 components', 'Components: "IIRD" - Internal, Intelligence, Research, Decision support.');
  c('Unit II', 'Research Design: Exploratory, Descriptive, Causal', /research design|exploratory|descriptive|causal/i,
    'Research design matlab research karne ka naksha.',
    ['Exploratory: problem samajhne ke liye - focus group, baatcheet.', 'Descriptive: kaun, kya, kab, kitna - survey.', 'Causal: cause aur effect - experiment.', 'Aam order: pehle exploratory, phir descriptive, phir causal.'],
    'Pehle poocho sale kyun giri, phir 200 logon ka survey, phir ek shop mein offer lagakar check karo.',
    'Purpose, method, data, example - table banao', 'Samjho, Naapo, Saabit karo.');
  c('Unit II', 'Primary vs Secondary Data and Questionnaire', /primary|secondary|data collection|sources of data|questionnaire|observation/i,
    'Primary data khud pehli baar jama karte ho; secondary data pehle se kisi ne jama kiya hota hai.',
    ['Primary: survey, interview, observation, experiment - mehenga par exact.', 'Secondary: census, company records, internet, journals - sasta par purana ho sakta hai.', 'Questionnaire: simple bhasha, ek sawal mein ek baat, leading question nahi, pehle pilot test.', 'Data ko edit, code, tabulate karke analyse karte hain.'],
    'Shahar mein kitne ghar hain - census (secondary). Naya juice kaisa laga - taste test (primary).',
    'Merits and demerits, pilot testing', 'Khud laaye = primary. Udhaar liya = secondary.');
  c('Unit II', 'Sampling Methods', /sampling|sample/i,
    'Sabse poochna mushkil hai, isliye thode logon ko chunte hain - wahi sample.',
    ['Probability: sabko chance - simple random, systematic, stratified, cluster.', 'Non probability: apni marzi - convenience, judgement, quota, snowball.', 'Stratified: pehle group banao, har group se lo.', 'Cluster: area ke jhund chuno.'],
    'Chawal pakke ya nahi, do daane check karte ho - wahi sampling.',
    'Sampling error, representative sample', 'Random = barabar chance. Convenience = jo saamne mila.');
  c('Unit II', 'Levels of Measurement', /measurement|nominal|ordinal|interval|ratio scale/i,
    'Data ko naapne ke 4 level.',
    ['Nominal: sirf naam ya label - brand A, B.', 'Ordinal: rank - 1st, 2nd, 3rd.', 'Interval: barabar gap, asli zero nahi - temperature, 1 se 5 rating.', 'Ratio: asli zero - income, weight.'],
    'Race: jersey number nominal, position ordinal, time ratio.',
    'Statistics allowed at each level', 'NOIR yaad rakho.');
  c('Unit II', 'Data Analysis and Hypothesis Testing', /data analysis|hypothes|tabulation|pareto|univariate|editing and coding/i,
    'Jama kiye data ko saaf karke matlab nikalna.',
    ['Editing: galti hatao. Coding: jawab ko number do. Tabulation: table banao.', 'Univariate: ek variable. Bivariate: do. Multivariate: teen ya zyada.', 'Hypothesis: ek andaza; H0 "koi farak nahi", H1 "farak hai".', 'Pareto: 20 percent customer se 80 percent sale.'],
    'Daava: customer average 500 kharch karta hai - sample se check karo sahi hai ya nahi.',
    'Z test, t test, chi-square, Type I and Type II error', 'Saaf karo, number do, table banao, test karo.');
  c('Unit II', 'Marketing Research and its Process', /marketing research|research process/i,
    'Kisi marketing problem ka jawab dhoondhne ke liye systematic jaanch.',
    ['1. Problem define karo (sabse zaruri).', '2. Research design.', '3. Data source aur form.', '4. Sample chuno.', '5. Data jama karo.', '6. Analyse karo.', '7. Report aur suggestion.'],
    'Coffee shop ki dopahar ki sale giri: survey kiya, pata chala menu mein snacks nahi - add kar diye.',
    'Systematic and objective; 7 steps as a flow', 'Problem sahi pakdi to aadha kaam ho gaya.');

  // ------------------------------------------------------------ Unit III
  c('Unit III', 'STP: Segmentation, Targeting, Positioning', /\bstp\b/i,
    'Market ko baanto, apna group chuno, aur unke dimaag mein apni jagah banao.',
    ['S: market ko milte julte logon ke group mein baantna.', 'T: jis group ko serve karna hai usko chunna.', 'P: us group ke mann mein alag pehchaan banana.', 'Uske baad 4P banate hain.'],
    'Titan: alag groups dekhe, youth ke liye Fastrack, shaadi ke liye Tanishq.',
    'Segmentation → Targeting → Positioning flow', 'Baanto, Chuno, Chhaa jao.');
  c('Unit III', 'Market Targeting Strategies', /target/i,
    'Kaunse customer group ke peeche jaana hai, ye tay karna.',
    ['Undifferentiated: sabke liye ek hi offer - namak.', 'Differentiated: alag group ke liye alag offer - Titan.', 'Concentrated (niche): ek chhota group - sugar free sweets.', 'Micro: har insaan ke liye alag - custom gift.', 'Achha target: measurable, accessible, substantial, differentiable, actionable.'],
    'Shoe brand athletes, office wale aur school bachchon ke alag shoes banaye = differentiated.',
    '4 strategies + 5 criteria', 'Sabko, kai ko, ek ko, har ek ko.');
  c('Unit III', 'Positioning and Repositioning', /\b(re)?position/i,
    'Positioning matlab customer ke dimaag mein brand ki ek khaas jagah. Repositioning matlab wo pehchaan badalna.',
    ['Basis: feature, benefit, use, user, competitor, category, price quality.', 'Positioning statement: kiske liye, kya zarurat, kaunsa brand, kya fayda.', 'Reposition kab: sale gire, brand purana lage, naya competitor.', 'Perceptual map se khaali jagah dikhti hai.'],
    'Fevicol = mazboot jod. Cadbury ne bachchon ki chocolate se sabke celebration ki mithai banayi.',
    'Perceptual map, positioning statement, repositioning cases', 'Dimaag mein ek hi shabd pakdo.');
  c('Unit III', 'Value Proposition', /value proposition/i,
    'Ek line jo bataye customer aapse hi kyun khareede.',
    ['Kaun customer, kya dikkat, aapka solution, kya alag hai.', 'Types: low price, quality, customisation, convenience, uniqueness, innovation.', 'Saaf, chhoti aur sachchi honi chahiye.'],
    '"Hostel students ke liye 30 minute mein sasta khana."',
    'Target, pain point, benefit, differentiator', '"Mujhe hi kyun chuno?" ka jawab.');
  c('Unit III', 'Market Segmentation', /segment/i,
    'Bade market ko chhote, ek jaise logon ke group mein baantna.',
    ['Geographic: kahan rehte hain.', 'Demographic: umar, gender, income.', 'Psychographic: lifestyle, personality.', 'Behavioural: kab aur kitna use, loyalty.', 'Fayda: sahi product, kam paisa barbaad, kam competition.'],
    'Bank: student account, salary account, senior citizen account.',
    '4 bases with variables and Indian example', 'Kahan, Kaun, Kaisa mann, Kaisa bartaav.');

  // ------------------------------------------------------------ Unit IV
  c('Unit IV', 'Pricing Numericals: Cost-plus and Break-even', /break.?even|mark.?up|margin on|marked price|cost of a product|cost-plus price/i,
    'Numerical mein pehle formula likho, phir value rakho, phir answer Rs ke saath.',
    ['Cost plus price = cost + cost ka markup percent.', 'Margin on selling price: price = cost divided by (1 minus margin).', 'Contribution = selling price minus variable cost.', 'Break even units = fixed cost divided by contribution.', 'Do discount lage to ek ke baad doosra lagao, jodo mat.'],
    'Cost 120, 25 percent markup = 150. Fixed 3 lakh, contribution 100 = 3000 units.',
    'Formula, substitution, final answer', 'Break even = na fayda na nuksaan.');
  c('Unit IV', 'Skimming, Penetration and Price Discrimination', /skimm|penetration|discriminat|price adaptation|adapting price/i,
    'Naye product ka price kaise rakhein, aur alag logon se alag price kab.',
    ['Skimming: shuru mein mehenga, baad mein sasta - naya iPhone type.', 'Penetration: shuru mein sasta taaki market pakdo - Jio.', 'Discrimination: same cheez alag price - student discount, peak time.', 'Psychological price: 999.'],
    'Movie ticket: weekend mehenga, weekday sasta.',
    'Conditions for each strategy', 'Skim = upar ki malai pehle. Penetration = andar ghuso.');
  c('Unit IV', 'Pricing: Factors and Methods', /pric/i,
    'Price woh rakam hai jo customer deta hai; yahi ek P hai jo paisa laata hai.',
    ['Andar ke factor: cost, objective, product life stage.', 'Bahar ke factor: demand, competitor, government, economy.', 'Methods: cost based, demand (value) based, competition based, break even.', 'Cost price ki neeche ki seema; customer ki value upar ki seema.'],
    'Biscuit cost 20; health wale 30 dene ko tayyar; competitor 28 - to 28 rakho.',
    'Factors + 3 methods + example', 'Floor = cost, Ceiling = value.');
  c('Unit IV', 'New Product Development (NPD)', /new product|\bnpd\b/i,
    'Idea se market tak naya product laane ke steps.',
    ['1. Idea generation.', '2. Screening.', '3. Concept testing.', '4. Business analysis.', '5. Product development.', '6. Test marketing.', '7. Commercialisation (launch).', 'Fail kyun: research kam, price galat, timing kharab.'],
    'Nayi flavour ki chai: pehle idea, chhota test ek shahar mein, phir poore desh mein.',
    '7 stages as a flow', 'Idea, Chhaanti, Test, Hisaab, Banao, Aazmao, Launch.');
  c('Unit IV', 'Product Life Cycle (PLC)', /life cycle|\bplc\b|maturity stage/i,
    'Product ki zindagi: paida hota hai, badhta hai, jawaan hota hai, phir girta hai.',
    ['Introduction: sale kam, kharcha zyada - awareness banao.', 'Growth: sale tez, competitor aate hain - expand karo.', 'Maturity: sale peak par, competition sabse zyada - alag dikho, offers.', 'Decline: sale girti hai - sudhaaro, kharcha kam karo ya band karo.', 'Curve zarur banao.'],
    'Smart glasses introduction, electric vehicle growth, smartphone maturity, DVD decline.',
    'Diagram, features and strategy of each stage', 'Bachpan, Jawani se pehle, Jawani, Budhapa.');
  c('Unit IV', 'Branding', /brand (name|mark|equity)|branding|what is a brand|trademark/i,
    'Brand wo naam aur pehchaan hai jo aapke product ko doosron se alag karta hai.',
    ['Brand name: bola jaa sake. Brand mark: nishaan. Trademark: kanooni suraksha.', 'Brand equity: naam ki wajah se jo extra value.', 'Strategies: individual (Dove, Lux), family (Amul), corporate (Tata), co-branding, private label.'],
    'Sirf "Tata" naam dekhkar bharosa - yahi equity.',
    'Four terms + two strategies', 'Naam bikta hai, to equity hai.');
  c('Unit IV', 'Packaging and Labelling', /packag|label/i,
    'Packaging product ka kapda hai; label uska parichay patra.',
    ['Levels: primary (tube), secondary (dabba), tertiary (bada carton).', 'Kaam: protection, convenience, promotion, information.', 'Label: naam, MRP, expiry, ingredients.', 'Packaging ko silent salesman kehte hain.'],
    'Toothpaste tube, uska box, aur truck wala carton.',
    'Functions and levels', 'Bachao, Batao, Bikwao.');
  c('Unit IV', 'Product, Product Levels and Product Mix', /product (mix|line|level)|levels of (a )?product|what is a product|classification of product/i,
    'Product matlab jo bhi customer ki zarurat poori kare - cheez, service ya idea.',
    ['Levels: core benefit, generic, expected, augmented, potential.', 'Product mix: company ke saare products.', 'Width: kitni lines. Length: total items. Depth: ek line mein variants. Consistency: aapas mein rishta.', 'Consumer goods: convenience, shopping, speciality, unsought.'],
    'Amul: milk, butter, cheese, ice cream = width; ice cream ke flavours = depth.',
    '5 levels, 4 dimensions', 'Chaudai = lines, Gehrai = variants.');
  c('Unit IV', 'Distribution Channels and Intensity', /(?<!digital )channel(?!s of digital)|distribution|intensive|selective|exclusive|intermediar/i,
    'Company se customer tak maal pahunchne ka raasta.',
    ['Zero level: seedha company se. One level: retailer. Two level: wholesaler aur retailer. Three level: agent bhi.', 'Intensive: har dukaan (biscuit). Selective: chuni dukaanein (TV). Exclusive: ek showroom (luxury car).', 'Channel chunne ke factor: product, market, company, middlemen.', 'Conflict: aapas ka jhagda - clear area aur margin se suljhao.'],
    'Parle-G har gali mein = intensive. Rolex ek-do store = exclusive.',
    'Levels diagram, functions of intermediaries', 'Har jagah, kuch jagah, ek jagah.');
  c('Unit IV', 'Logistics (Physical Distribution)', /logistic|warehous|inventory|transport/i,
    'Sahi maal, sahi jagah, sahi time, sahi halat mein, kam kharche par.',
    ['Order processing, warehousing, inventory, transportation, packaging.', 'Transport: road, rail, air, water, pipeline.', 'Zyada stock = paisa phasa; kam stock = sale gayi.'],
    'Blinkit ka 10 minute delivery - paas mein chhota godown.',
    'Elements and importance', '5 sahi yaad rakho.');
  c('Unit IV', 'AIDA and Personal Selling', /aida|personal selling/i,
    'AIDA customer ko dekhne se khareedne tak le jaata hai; personal selling aamne saamne bechna hai.',
    ['AIDA: Attention, Interest, Desire, Action.', 'Selling steps: prospecting, pre approach, approach, presentation, objection handling, closing, follow up.', 'Personal selling mein turant jawab milta hai par kharcha zyada.'],
    'Car showroom wala: swagat, test drive, price ka doubt door, booking, baad mein phone.',
    'AIDA table + 7 steps', 'A-I-D-A: Dekha, Pasand aaya, Chahiye, Le liya.');
  c('Unit IV', 'Push and Pull Strategy', /push|pull/i,
    'Push: maal ko dukaandaar ke through aage dhakelo. Pull: customer khud maange.',
    ['Push: dealer margin, scheme, salesman.', 'Pull: TV ad, consumer offer.', 'Aksar dono saath chalte hain.'],
    'Customer bole "Surf Excel hi do" = pull. Dukaandaar scheme ke chakkar mein naya brand suggest kare = push.',
    'Direction, tools, example', 'Push = company dhakka de. Pull = customer kheenche.');
  c('Unit IV', 'Promotion Mix: Advertising, Sales Promotion, PR', /promotion|advertis|public relation/i,
    'Customer ko batane, manane aur yaad dilane ke saare tareeke.',
    ['Advertising: paid, mass reach.', 'Sales promotion: discount, coupon, free sample - turant sale.', 'Personal selling: aamne saamne.', 'Public relations: achhi image, news, events.', 'Direct / digital: SMS, email, social media.', 'IMC: sab tools se ek hi message.'],
    'Diwali: TV ad, 20 percent off, salesman demo, charity event.',
    'Tools with merits and limits; IMC', 'Batao, Manao, Yaad dilao.');
  c('Unit IV', 'Marketing Mix (4Ps and 7Ps)', /marketing mix|4 ?ps|seven ps|7 ?ps/i,
    'Wo cheezein jo company control karti hai taaki customer khareede.',
    ['Product: kya bechna hai.', 'Price: kitne mein.', 'Place: kahan milega.', 'Promotion: batayenge kaise.', 'Service mein 3 aur: People, Process, Physical evidence.', 'Chaaron aapas mein mel khaane chahiye.'],
    'Maggi: noodles (product), sasta (price), har dukaan (place), TV ad (promotion).',
    '4Ps table with decisions and example; 7Ps for services', 'Kya, Kitne ka, Kahan, Kaise bataye.');

  window.HINGLISH = window.HINGLISH || {};
  window.HINGLISH.marketing = list;
})();
