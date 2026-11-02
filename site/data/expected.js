// Most-expected exam questions per subject. Built from the end-of-chapter / Important Questions lists, assignments and
// test papers in the PDFs. ref = notes unit id (notes subjects). t = MCQ topic (opens the quiz filtered to that topic).
window.EXPECTED = {
  finance: [
    { h: 'Unit I · Introduction to Finance', ref: 'u1', q: [
      'Define finance function. Explain its decision areas (investment, financing, dividend, liquidity).',
      'Distinguish between profit maximisation and shareholders\' wealth maximisation.',
      'Distinguish between owners\' funds and borrowed funds.'] },
    { h: 'Unit II · Time Value of Money', ref: 'u2', q: [
      'Explain the time value of money and the reasons for it.',
      'Explain the relationship between present value and the discount rate with an example.',
      'Numericals: terminal value of a deposit (Rs 50,000 at 8% for 4 years); PV of Rs 50,000 receivable after 3 years at 10%.',
      'Future value / present value of an annuity; amortising a loan and preparing the schedule.'] },
    { h: 'Unit III · Valuation of Bonds & Stocks', ref: 'u3', q: [
      'Numerical: value of a bond (face 1,000, coupon 9%, 3 years, required return 10%).',
      'Numerical: Gordon growth model - share value and expected return (P = 80, D = 4, g = 6%).',
      'Explain the relationship between bond value, coupon rate and market yield.',
      'Numerical: rate of return from a stock (dividend + capital gain).'] },
    { h: 'Unit IV · Capital Budgeting', ref: 'u4', q: [
      'Define capital budgeting. Explain two reasons why it is important.',
      'Distinguish between the payback period method and the ARR method.',
      'Explain NPV and IRR with decision rules; state one advantage and one limitation of each.',
      'Numericals: payback period (equal and unequal inflows), ARR on average investment, NPV and profitability index, IRR by interpolation.',
      'Why is NPV preferred when NPV and IRR conflict?'] },
    { h: 'Unit V · Financing Decision & Leverage', ref: 'u5', q: [
      'Explain operating, financial and combined leverage with formulae.',
      'Numericals: DOL, DFL, DCL; EPS at different EBIT levels; indifference point between two financing plans.',
      'Explain EBIT-EPS analysis and the pecking order theory.',
      'Numerical: cost of equity by CAPM, after-tax cost of debt and WACC (Shree Ltd. type).',
      'Explain interest coverage ratio and DSCR.'] },
  ],
  marketing: [
    { h: 'Unit I · Introduction', ref: 'u1-intro', q: [
      'Define marketing. Explain its nature, scope and importance.',
      'Distinguish between marketing and selling.',
      'Explain the core concepts of marketing.'] },
    { h: 'Unit I · Orientations', ref: 'u1-orient', q: [
      'Explain the five orientations of marketers towards the marketplace (production, product, selling, marketing, societal).',
      'Explain the societal marketing concept with examples; merits and demerits.',
      'Compare the production, product and selling concepts.'] },
    { h: 'Unit I · Green & Digital marketing', ref: 'u1-green', q: [
      'What is green marketing? Explain its benefits, strategies and the risk of greenwashing.',
      'Explain digital marketing and its channels (SEO, PPC, email, social, affiliate).'] },
    { h: 'Unit II · Consumer behaviour', ref: 'u2-cb', q: [
      'Define consumer behaviour. Explain the factors influencing it.',
      'Explain the consumer buying decision process.',
      'Explain the four types of consumer buying behaviour with examples.'] },
    { h: 'Unit II · MIS & Marketing research', ref: 'u2-mis', q: [
      'What is a Marketing Information System? Explain its components, importance and process.',
      'Differentiate between marketing research and MIS.',
      'Define marketing research and explain its scope; explain the steps of the marketing research process.',
      'Explain exploratory, descriptive and causal research designs.',
      'Explain primary and secondary data; probability and non-probability sampling; levels of measurement.'] },
    { h: 'Unit III · STP & Value proposition', ref: 'u3-seg', q: [
      'Define market segmentation. Explain its bases and benefits.',
      'What is market targeting? Explain the four targeting strategies and the criteria for effective targeting.',
      'What is positioning? Explain its bases; explain repositioning with Indian examples (Cadbury, Titan, Lifebuoy).',
      'What is a value proposition? Explain its seven types and how to write one.',
      'Assignment questions: compare segmentation of two brands; analyse a company\'s targeting strategy; study a brand\'s positioning/repositioning.'] },
  ],
  hrm: [
    { h: 'Unit 1', t: 'Introduction to HRM', q: [
      'Define HRM; discuss its objectives and scope; trace its evolution.',
      'HRM is not merely an extension of Personnel Management but a paradigm shift - examine.',
      'Explain the managerial and operative functions of HRM.',
      'Discuss the role of the HR manager and how it is changing.',
      'HRM policies and principles contribute to effectiveness, continuity and stability - explain.',
      'Importance of HRM in the emerging scenario; essential skills of an HR manager.',
      'Changing role of HR in the era of globalisation and digital transformation.'] },
    { h: 'Unit 2', t: 'Human Resource Planning', q: [
      'Define HRP and explain its process; factors affecting HRP; barriers to HRP.',
      'Techniques of forecasting demand and methods of forecasting supply of human resources.',
      'Job analysis: process, methods (observation, interview, questionnaire, diary) and uses.',
      'Distinguish between job description and job specification.',
      'Recruitment: factors, internal vs external sources with merits and demerits.',
      'Selection process stage by stage; employment tests; interviewing techniques and errors.'] },
    { h: 'Unit 3', t: 'Performance Appraisal', q: [
      'Training and development: need and importance; identifying training needs (three levels of analysis).',
      'On-the-job vs off-the-job training; evaluation of training effectiveness.',
      'Define performance appraisal; concept, objectives and importance.',
      'Distinguish between traditional and modern methods of performance appraisal.',
      'Common biases in appraisal and how to minimise them.',
      'Career planning and development; succession planning (process, objectives, benefits).',
      'Individual vs organisational career management.'] },
    { h: 'Unit 4', t: 'Job Evaluation', q: [
      'Job evaluation: objectives, process, importance; methods with merits and demerits.',
      'Employee compensation: objectives and components (base pay, incentives, fringe benefits).',
      'Wage policy and wage determination; minimum, fair and living wage; role of Wage Boards.',
      'Factors influencing wage and salary administration.',
      'Industrial relations: concept, objectives and importance.',
      'Industrial disputes: causes, forms (strike, lockout, gherao...) and settlement machinery.',
      'Collective bargaining and its process.',
      'Employee grievances: causes and redressal (model grievance procedure).',
      'Role of government, trade unions and management in healthy industrial relations.'] },
  ],
  'office-mgmt': [
    { h: 'Unit 1 · Office & office management', t: 'Meaning of Office', q: [
      'Define office; explain its functions and importance.',
      'Explain office management as an art and a science.',
      'Traditional vs modern office; paperless office; virtual office.',
      'Front office vs back office.',
      'Types of office layout with merits and demerits.',
      'Filing: objectives, essentials of a good filing system, methods; centralised vs decentralised filing.',
      'Indexing: types of indexes; relationship between filing and indexing.',
      'Office etiquette (do\'s and don\'ts).'] },
    { h: 'Unit 2 · Office automation & secretarial practices', t: 'Secretary', q: [
      'Qualities and duties of a secretary.',
      'Draft a business letter, notice, agenda, memo and circular.',
      'Mail handling: inward and outward; reception of visitors; telephone etiquette.',
      'Assignment: smart-office plan using AI; AI tools used in modern offices; study of a leading company\'s office.'] },
    { h: 'Unit 3 · Office forms & record management', t: 'Office Forms', q: [
      'Meaning, importance, types and objectives of office forms.',
      'Principles of forms design; control of forms; preparation of common forms.',
      'Record management: need, methods, classification, preservation.',
      'Centralisation vs decentralisation of records; digital record systems.'] },
    { h: 'Unit 4 · Company office procedures & meetings', t: 'Company Secretary', q: [
      'Explain the qualifications and functions of a Company Secretary.',
      'Distinguish between a director, a chairman and an auditor.',
      'Duties of a secretary before, during and after a meeting.',
      'Draft a notice, agenda and minutes for a Board meeting.',
      'Short notes: quorum, proxy, poll, special resolution, minutes book, casting vote.'] },
  ],
  'physical-education': [
    { h: 'Unit I · Physical Education (meaning, aim, India)', t: 'Meaning & aim', q: [
      'Meaning, aim and objectives of PE; J.F. Williams definition; "man in motion".',
      'Misconceptions about PE (only for athletes / boys, only entertainment).',
      'Need, importance and scope of PE in modern society (sports, yoga, recreation).',
      'PE in India before and after independence; 1882 Commission, YMCA Madras 1920, LNIPE Gwalior, NIS Patiala, SAI.'] },
    { h: 'Unit II · Fitness, weight management, lifestyle', t: 'Components of fitness', q: [
      'Components of fitness: health-related (5) vs skill-related; define strength, endurance, flexibility, agility, speed, balance, body composition.',
      'Fitness vs wellness (WHO meaning).',
      'Obesity: meaning, causes, management, health problems; WHO BMI categories (30 and above = obese).',
      'Healthy lifestyle: balanced diet, exercise, rest; sedentary lifestyle; role of physical activity.',
      'Nutrition: balanced diet, vitamin D, iron, fibre, carbohydrate as main energy source.'] },
    { h: 'Unit III · Yoga and meditation', t: 'Yoga basics', q: [
      'Meaning and origin of yoga (yuj, India); Patanjali Yoga Sutra; eight limbs of Ashtanga yoga; yama and niyama.',
      'Asana names and meanings: Bhujanga, Nauka, Hala, Vajra, Padma, Tada, Dhanu, Makara, Shava; Surya Namaskar.',
      'Pranayama: puraka, kumbhaka, rechaka; Anulom-Vilom, Bhastrika, Kapalbhati, Ujjayi; pranayama vs deep breathing.',
      'Asana vs physical exercise; yoga and mental health, value education and sports.',
      'Shatkarma: Neti, Trataka, Dhauti, Nauli, Basti, Kapalbhati; International Day of Yoga (21 June).'] },
    { h: 'Unit IV · Traditional games and recreation', t: 'Traditional games', q: [
      'Gilli-Danda, Kanche (marbles), Stapu (hopscotch), Gatte - equipment, rules, benefits.',
      'Importance and benefits of traditional games; how to design one.',
      'Recreation: meaning, scope, general principles, types (indoor / outdoor), aerobics and Zumba.'] },
    { h: 'Sports GK (asked in the papers)', t: 'Olympics', q: [
      'Olympics: ancient (Zeus), first modern (Athens 1896), motto, interval; first Asian Games 1951.',
      'Team sizes, marathon distance, Arjuna Award, National Sports Day, LNIPE / NIS / SAI.',
      'Anatomy and health facts: muscles (3 types), heart rate 72, body temperature 37 C, CPR 10 seconds.'] },
  ],
  'business-env': [],
};
