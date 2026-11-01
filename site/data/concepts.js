// Concept cards for Marketing, HRM, Office Management and Business Environment.
// Same card layout as the Finance formula explorer: key idea, key points, example, when / where to use, common mistake.
// Content comes from the PDFs; anything beyond them is marked [extra].
(function () {
  const SUBS = window.SUBJECTS;
  if (!SUBS) return;
  const ICON = { Marketing: '📣', HRM: '👥', Office: '🗂️', 'Business Environment': '🌍' };

  // card fields: g group · n name · key (the core idea, shown in the big box) · pts (key points chips)
  // what · ex [steps] · when [..] · where [..] · mistake · ref (notes unit id) · topic (MCQ topic to practise)
  const DECKS = {
    marketing: [
      { g: 'Basics', n: 'Marketing vs Selling', key: 'Marketing = customer needs first · Selling = push what is already made', pts: ['Marketing begins BEFORE production', 'Selling begins AFTER production', 'Profit via satisfaction vs via sales volume'],
        what: 'Selling is only one part of marketing. Marketing studies needs, designs the offer, prices, promotes and distributes it, then builds relationships.', ex: ['A skincare start-up surveys customers every month and redesigns the product from feedback', '→ this is <b>marketing</b>', 'A door-to-door salesperson uses pressure to close each visit → this is <b>selling</b>'],
        when: ['"Distinguish between marketing and selling" questions', 'Judging which concept a firm follows'], where: ['Exam theory answers (8-point table)', 'Real brands: Amazon (marketing) vs insurance push-sales (selling)'], mistake: 'Writing that marketing and selling are the same. Selling is a part of marketing.', ref: 'u1-intro', topic: 'Marketing vs Selling' },
      { g: 'Basics', n: 'Core concepts & the 4Ps', key: 'Needs & wants → Product → Value → Exchange → Relationships → Marketing mix (4Ps)', pts: ['Product', 'Price', 'Promotion', 'Place'],
        what: 'Six core concepts explain how marketing works. The marketing mix is the set of tools (4Ps) a firm controls.', ex: ['Nike: range of shoes and apparel (product) · competitive price · advertising and sponsorships (promotion) · stores and website (place)'],
        when: ['Explaining marketing in any exam answer', 'Planning an offer'], where: ['Case questions on Nike, Apple, Amazon, Starbucks'], mistake: 'Listing 7Ps for this unit - the notes use 4Ps (7Ps appear only in the AI assignment).', ref: 'u1-core', topic: 'Core Concepts' },
      { g: 'Basics', n: 'The five orientations', key: 'Production → Product → Selling → Marketing → Societal', pts: ['Production: volume & low cost', 'Product: quality & innovation', 'Selling: push & promotion', 'Marketing: customer needs', 'Societal: people, planet, profit'],
        what: 'Philosophies that guide how an organisation thinks about the market. Most modern firms blend the marketing concept with societal responsibility.', ex: ['Henry Ford\'s Model T (production) · Apple (product) · Insurance selling (selling) · Amazon (marketing) · Patagonia (societal)'],
        when: ['Naming the orientation behind a scenario', 'Comparing philosophies'], where: ['"Name that orientation" class activity, MCQs'], mistake: 'Confusing the product concept (quality-focused) with the marketing concept (customer-focused).', ref: 'u1-orient', topic: 'Orientations' },
      { g: 'Basics', n: 'Green marketing & greenwashing', key: 'Promote real sustainability - back every claim with proof', pts: ['Eco / environmental marketing', 'Part of ESG', '8 strategies', 'Greenwashing = false claims'],
        what: 'Green marketing works only when the green is real. Exaggerated claims are punished by fines and lost trust.', ex: ['Patagonia: "Don\'t Buy This Jacket", repair programme, 1% for the Planet', 'Kohl\'s & Walmart: US$5.5M FTC penalty for falsely labelling rayon as eco-friendly bamboo'],
        when: ['Sustainability-themed questions'], where: ['Tata Nexon EV, SBI paperless banking, Godrej "Good and Green"'], mistake: 'Treating any environmental claim as green marketing; unproven claims are greenwashing.', ref: 'u1-green', topic: 'Green Marketing' },
      { g: 'Basics', n: 'Digital marketing channels', key: 'Website · PPC · Content · Email · Social · Affiliate · Video · SMS', pts: ['SEO: local, technical, on-page, off-page', 'PPC: pay only per click', 'KPIs: CTR, conversion rate'],
        what: 'Digital marketing uses digital media to reach and measure audiences. Online marketing is one type of digital marketing.', ex: ['Nike bids on Google Ads for "running shoes near me" → <b>PPC</b>', 'Amazon sends "recommended for you" mails → <b>email marketing</b>'],
        when: ['Choosing channels', 'Explaining measurement'], where: ['Case examples: Duolingo (social), Red Bull (content), Domino\'s (SMS)'], mistake: 'Saying digital and online marketing are identical.', ref: 'u1-digital', topic: 'Digital Marketing' },
      { g: 'Consumer behaviour', n: 'Four types of buying behaviour', key: 'Complex · Dissonance-reducing · Habitual · Variety-seeking', pts: ['High involvement + big brand differences = complex', 'High involvement + few differences = dissonance-reducing', 'Low involvement + few differences = habitual', 'Low involvement + big differences = variety-seeking'],
        what: 'Type depends on how involved the buyer is and how different the brands are.', ex: ['Researching a laptop for weeks → complex', 'Second-guessing an expensive mattress → dissonance-reducing', 'Same toothpaste every time → habitual', 'Trying a new soft drink for fun → variety-seeking'],
        when: ['Matching a scenario to a type'], where: ['Marketers design different strategies for each type'], mistake: 'Mixing up dissonance-reducing and complex (both high involvement).', ref: 'u2-cb', topic: 'Consumer Behaviour' },
      { g: 'Consumer behaviour', n: 'Buying decision process', key: 'Problem recognition → Information search → Evaluation → Purchase decision → Purchase → Post-purchase', pts: ['Evoked set after search', 'Cognitive dissonance after buying'],
        what: 'Six stages for complex decisions; simpler purchases skip some stages.', ex: ['Phone screen cracks (problem) → ask friends, search online → compare brands & prices → choose → buy → feels happy or regrets (post-purchase)'],
        when: ['Sequence questions'], where: ['Designing marketing for each stage (ads at recognition, warranty at post-purchase)'], mistake: 'Putting purchase before purchase decision.', ref: 'u2-cb', topic: 'Consumer Behaviour' },
      { g: 'Consumer behaviour', n: 'Factors influencing buying', key: 'Social · Cultural · Economic · Personal · Psychological', pts: ['Social: reference group, family, role', 'Cultural: culture, sub-culture, class', 'Economic: income, savings, credit', 'Personal: age, occupation, lifestyle', 'Psychological: motivation, perception, learning, attitude'],
        what: 'Five groups of forces shape what and how people buy.', ex: ['A student buys earphones only if reviews show 4+ stars → social (reviews) + psychological (trust)'],
        when: ['Classifying a factor'], where: ['Market research design'], mistake: 'Calling income a personal factor when it is listed under economic.', ref: 'u2-cb', topic: 'Consumer Behaviour' },
      { g: 'Research', n: 'MIS components & process', key: 'Internal records · Intelligence · Research · Data warehousing · Information output', pts: ['Process: collect → process → store → retrieve → disseminate', 'Kotler: internal accounting, market intelligence, marketing research, management science'],
        what: 'An MIS collects, organises and uses marketing information so managers can decide.', ex: ['Coffee chain: loyalty app (internal records) · rival launches (intelligence) · flavour survey (research) · cloud sales data (warehouse) · manager dashboard (output)'],
        when: ['Explaining MIS', 'Differentiating from marketing research'], where: ['Google Analytics, CRM tools'], mistake: 'Treating marketing research as the whole MIS - it is one source.', ref: 'u2-mis', topic: 'MIS' },
      { g: 'Research', n: 'Marketing research process (8 steps)', key: 'Define problem → Design → Data sources → Collection forms → Sampling → Collect → Analyse → Report', pts: ['Decision problem vs research problem', 'Edit → code → tabulate'],
        what: 'A systematic, objective process that reduces uncertainty in decisions.', ex: ['Decision: "Launch a foldable phone?" → Research problem: "Will target buyers accept it at our price?" → survey 1,200 owners by stratified sampling → cross-tabulate → report'],
        when: ['Any research-process question'], where: ['Product launch decisions'], mistake: 'Skipping the problem definition; the whole study depends on it.', ref: 'u2-mr1', topic: 'Marketing Research' },
      { g: 'Research', n: 'Exploratory vs Descriptive vs Causal', key: 'Explore (why/what) → Describe (who/what/when) → Prove cause and effect', pts: ['Exploratory: flexible, secondary data, focus groups', 'Descriptive: surveys, observation (cross-sectional / longitudinal)', 'Causal: experiments'],
        what: 'Research design is the blueprint; choose by objective.', ex: ['Talk to tech reviewers about durability → exploratory', 'Survey 1,000 owners → descriptive', 'A/B test two prices → causal'],
        when: ['Choosing a research design'], where: ['Market research projects'], mistake: 'Using descriptive research to claim cause and effect.', ref: 'u2-mr1', topic: 'Marketing Research' },
      { g: 'Research', n: 'Sampling methods', key: 'Probability (SRS, systematic, stratified, cluster) vs Non-probability (convenience, judgment, quota, snowball)', pts: ['Probability: known chance, measurable error', 'Non-probability: cheap, quick, biased'],
        what: 'Sampling selects a few respondents to represent the whole population.', ex: ['Skip interval = list size ÷ sample size (list 1,000, sample 100 → every 10th)', 'Referral from one respondent to others → snowball'],
        when: ['Choosing a sampling plan'], where: ['Surveys, pilot studies'], mistake: 'Calling quota sampling random - it is non-probability.', ref: 'u2-mr2', topic: 'Sampling' },
      { g: 'Research', n: 'Levels of measurement (NOIR)', key: 'Nominal < Ordinal < Interval < Ratio', pts: ['Nominal: labels', 'Ordinal: rank', 'Interval: equal gaps, no true zero', 'Ratio: true zero'],
        what: 'Each level allows more statistics than the one below.', ex: ['Gender → nominal · brand ranking → ordinal · temperature in °C → interval · sales / income → ratio'],
        when: ['Choosing statistics', 'MCQ on scales'], where: ['Questionnaire design'], mistake: 'Calling a rank scale interval.', ref: 'u2-mr2', topic: 'Measurement' },
      { g: 'STP', n: 'Segmentation bases', key: 'Geographic (Where?) · Demographic (What?) · Psychographic (Who?) · Behavioural (How?)', pts: ['Demographic: age, gender, income', 'Psychographic: lifestyle, personality', 'Behavioural: benefits sought, usage, loyalty'],
        what: 'Divide a heterogeneous market into homogeneous groups reached with a distinct marketing mix.', ex: ['HCL offered a Rs 12,990 PC for the below-Rs 10,000 income group → demographic (income) → 14.5% market share'],
        when: ['Naming the base used by a brand'], where: ['Titan, Cafe Coffee Day (lifestyle), Hero Pleasure (gender)'], mistake: 'Mixing psychographic with behavioural segmentation.', ref: 'u3-seg', topic: 'Segmentation' },
      { g: 'STP', n: 'Targeting strategies', key: 'Undifferentiated · Differentiated · Concentrated (niche) · Micromarketing', pts: ['Criteria: Measurable, Accessible, Substantial, Differentiable, Actionable'],
        what: 'Choose which segments to serve and how many offers to make.', ex: ['Salt = undifferentiated · Titan/Fastrack/Sonata = differentiated · Rolls-Royce = niche · Netflix recommendations = micromarketing'],
        when: ['Matching a company to a strategy'], where: ['Amul (differentiated), Netflix (micro)'], mistake: 'Calling any multi-product firm differentiated; it needs separate offers per segment.', ref: 'u3-target', topic: 'Targeting' },
      { g: 'STP', n: 'Positioning and repositioning', key: 'Own one idea in the customer\'s mind · Repositioning changes that place', pts: ['7 bases: attribute, benefit, use, user, competitor, category, quality/price', 'Repositioning: image, product, intangible, tangible'],
        what: 'Positioning is about perception relative to competitors, not the physical product.', ex: ['Volvo owns "safety" (attribute) · Avis "We try harder" (competitor) · Cadbury Dairy Milk moved from kids\' treat to all ages (intangible repositioning)'],
        when: ['Brand case questions'], where: ['Fevicol, Amul, Titan, Lifebuoy, Surf Excel'], mistake: 'Thinking repositioning always needs a new product.', ref: 'u3-pos', topic: 'Positioning' },
      { g: 'STP', n: 'Value proposition types', key: 'Low pricing · Quality · Customisation · Convenience · Uniqueness · Innovation · Customer results', pts: ['Formula: For [customer] who [problem], our [product] gives [benefit], unlike [others]'],
        what: 'A short promise of why customers should choose you.', ex: ['Jio = low pricing · Nike By You = customisation · Swiggy = convenience · Apple "Think Different" = uniqueness · Uber = customer results'],
        when: ['Naming the type'], where: ['Assignment Q4'], mistake: 'Writing a slogan instead of a benefit-and-problem statement.', ref: 'u3-vp', topic: 'Value Proposition' },
    ],

    hrm: [
      { g: 'Basics', n: 'Managerial vs operative functions', key: 'Managerial: plan · organise · direct · control | Operative: procure · develop · compensate · integrate · maintain', pts: ['Procurement = recruitment & selection', 'Development = training & careers'],
        what: 'HRM applies management functions to the specific HR activities.', ex: ['Preparing a manpower plan → managerial (planning)', 'Running a campus drive → operative (procurement)'], when: ['Classifying an activity'], where: ['Unit 1 question 3'], mistake: 'Putting training under procurement.', topic: 'Functions of HRM' },
      { g: 'Basics', n: 'HRM vs Personnel Management', key: 'HRM = strategic, proactive, people as assets | PM = clerical, reactive, people as cost', pts: ['Paradigm shift, not just a new name'],
        what: 'HRM links people policies to business strategy.', ex: ['Planning leadership pipeline for 5 years → HRM thinking', 'Maintaining attendance registers → personnel management'], when: ['"Paradigm shift" question'], where: ['Unit 1 question 2'], mistake: 'Writing that they are identical.', topic: 'Introduction to HRM' },
      { g: 'Staffing', n: 'HR planning and forecasting', key: 'Demand forecast vs Supply forecast = manpower gap', pts: ['Demand: Delphi, trend, ratio, work-study', 'Supply: Markov analysis, skill inventory, replacement charts'],
        what: 'HRP matches the number and type of employees with organisational needs.', ex: ['Need 120 sales staff, have 100 after expected exits of 10 → gap of 30 to recruit'], when: ['Planning hiring'], where: ['Growing firms'], mistake: 'Treating Delphi as a supply technique.', topic: 'Human Resource Planning' },
      { g: 'Staffing', n: 'Job description vs job specification', key: 'JD = what the JOB involves | JS = what the PERSON needs', pts: ['Job analysis comes first', 'Methods: observation, interview, questionnaire, diary'],
        what: 'Job analysis produces both documents; they guide recruitment and appraisal.', ex: ['Marketing Executive: JD → prepares campaigns, tracks leads | JS → MBA marketing, communication skills'], when: ['Advertising a vacancy'], where: ['Unit 2 Q6'], mistake: 'Swapping the two definitions.', topic: 'Job Analysis' },
      { g: 'Staffing', n: 'Internal vs external recruitment', key: 'Internal: morale, low cost | External: fresh ideas, wider pool', pts: ['Internal: promotion, transfer, referral', 'External: campus, agencies, advertisements'],
        what: 'Firms mix both to balance motivation and innovation.', ex: ['Promoting a senior executive → internal · hiring from IIM campus → external'], when: ['Choosing a source'], where: ['Unit 2 Q8 and Q15'], mistake: 'Saying external recruitment is always better.', topic: 'Recruitment' },
      { g: 'Staffing', n: 'Selection process', key: 'Screening → Tests → Interview → Checks → Medical → Offer', pts: ['Tests: aptitude, personality, situational', 'Interviews: structured, stress, panel, behavioural'],
        what: 'Selection chooses the best candidate from the pool recruitment created.', ex: ['Application screening → aptitude test → panel interview → reference check → offer'], when: ['Stage-order questions'], where: ['Unit 2 Q9-11'], mistake: 'Confusing recruitment (attracting) with selection (choosing).', topic: 'Selection' },
      { g: 'Development', n: 'On-the-job vs off-the-job training', key: 'On-the-job: learn while working | Off-the-job: learn away from work', pts: ['On: coaching, job rotation, apprenticeship', 'Off: lectures, case study, role play, vestibule'],
        what: 'Training improves present skills; development prepares for future roles.', ex: ['Trainee mechanic works with a mentor → on-the-job', 'Case-study workshop in a hall → off-the-job'], when: ['Choosing a method by cost and learning need'], where: ['Unit 3 Q3'], mistake: 'Calling vestibule training on-the-job.', topic: 'Training & Development' },
      { g: 'Development', n: 'Performance appraisal process', key: 'Standards → Communicate → Measure → Compare → Discuss → Decide', pts: ['Features: systematic, objective, periodic'],
        what: 'Appraisal evaluates performance on the job and potential for development.', ex: ['Set target of 50 calls a day → tell the employee → record 42 → compare → feedback → training decision'], when: ['Order-of-steps questions'], where: ['Pay, promotion, training decisions'], mistake: 'Confusing appraisal with job evaluation.', topic: 'Performance Appraisal' },
      { g: 'Development', n: 'Traditional vs modern appraisal methods', key: 'Traditional (11): ranking, paired comparison … | Modern (5): assessment centre, MBO, 360°, HR accounting, BARS', pts: ['MBO uses SMART goals', 'BARS = rating scale + critical incidents'],
        what: 'Modern methods are results-oriented and multi-rater.', ex: ['Rated by boss, peers and subordinates → 360-degree', 'Dated positive/negative records → critical incident'], when: ['Classifying a method'], where: ['Unit 3 Q6'], mistake: 'Listing 360° appraisal as traditional.', topic: 'Performance Appraisal' },
      { g: 'Development', n: 'Appraisal biases', key: 'Halo · Horns · Leniency · Strictness · Central tendency', pts: ['Halo: one strength lifts all ratings', 'Horns: one weakness lowers all'],
        what: 'Rater errors that make appraisal unfair.', ex: ['Manager rates a punctual employee high on every trait → halo'], when: ['Identifying a bias'], where: ['Unit 3 Q7'], mistake: 'Mixing halo and horns.', topic: 'Performance Appraisal' },
      { g: 'Development', n: 'Career planning and succession', key: 'Plan (employee) · Path (positions) · Develop (fit with org) · Succession (future leaders)', pts: ['Career path: HR Executive → Sr. Executive → Manager → Director', 'Succession types: strategic, departure-defined, emergency'],
        what: 'Aligns people\'s aspirations with the organisation\'s leadership needs.', ex: ['Identify high-potential managers 3 years before the CEO retires → succession planning'], when: ['Leadership continuity'], where: ['Unit 3 Q8-10'], mistake: 'Treating succession planning as only emergency replacement.', topic: 'Succession Planning' },
      { g: 'Pay', n: 'Job evaluation methods', key: 'Ranking · Classification · Factor comparison · Point method', pts: ['Ranking: simplest', 'Point: most widely used'],
        what: 'Determines the relative worth of jobs to build a fair pay structure.', ex: ['Bank officer 540 points vs manager 650 points → manager priced higher'], when: ['Designing pay grades'], where: ['Unit 4 Q1-2'], mistake: 'Confusing job analysis (information) with job evaluation (worth).', topic: 'Job Evaluation' },
      { g: 'Pay', n: 'Compensation components', key: 'Guaranteed · Variable · Benefits · Equity-based', pts: ['Incentives: piece rate, standard hour, bonus, profit sharing, gainsharing'],
        what: 'Total reward = direct pay + indirect benefits.', ex: ['Basic salary = guaranteed · sales bonus = variable · medical insurance = benefit · stock options = equity'], when: ['Classifying a pay item'], where: ['Unit 4 Q3'], mistake: 'Treating bonus as part of base pay.', topic: 'Compensation' },
      { g: 'Pay', n: 'Minimum, fair and living wage', key: 'Minimum < Fair < Living', pts: ['Wage Boards: tripartite'], what: 'Three levels of wage adequacy. [extra: not in your PDFs]', ex: ['Minimum covers bare needs; fair adds productivity and capacity to pay; living gives a decent life with education and savings'], when: ['Wage-policy questions'], where: ['Unit 4 Q5'], mistake: 'Putting fair wage above living wage.', topic: 'Wage Concepts' },
      { g: 'Industrial relations', n: 'Forms of industrial disputes', key: 'Strike · Lockout · Gherao · Picketing · Boycott · Layoff · Retrenchment', pts: ['Strike types: economic, sympathetic, sit-down, slow-down, hunger'],
        what: 'Workers\' and employers\' pressure tactics.', ex: ['Employer shuts the gate until workers accept terms → lockout', 'Management not allowed to leave premises → gherao'], when: ['Identify the form'], where: ['Unit 4 Q8'], mistake: 'Confusing layoff (temporary) with retrenchment (permanent).', topic: 'Industrial Disputes' },
      { g: 'Industrial relations', n: 'Collective bargaining', key: 'Prepare → Identify issues → Negotiate → Agreement → Ratify → Implement', pts: ['Bipartite, voluntary, continuous', 'Issues: wages, benefits, administrative'],
        what: 'Management and union representatives negotiate employment terms as groups.', ex: ['Union demands DA and gratuity; management counters; agreement is ratified and then implemented by HR'], when: ['Settling disputes peacefully'], where: ['Unit 4 Q9'], mistake: 'Adding a third party; bargaining is bipartite.', topic: 'Collective Bargaining' },
      { g: 'Industrial relations', n: 'Model grievance procedure', key: '48 hours → 3 days → 7 days → 3 days → 7 days → voluntary arbitration', pts: ['Code of Discipline 1957', 'Lowest level first'],
        what: 'Five time-bound steps before arbitration.', ex: ['Worker complains verbally; officer replies in 48 hours; then head of department (3 days); Grievance Committee (7 days); manager (3 days); revision (7 days)'], when: ['Time-limit questions'], where: ['Unit 4 Q10'], mistake: 'Mixing the day limits.', topic: 'Grievance' },
    ],

    'office-mgmt': [
      { g: 'Basics', n: 'Functions of an office', key: 'Receive → Record → Process → Store → Retrieve → Communicate', pts: ['Basic functions vs administrative functions'], what: 'The office is the information and coordination centre.', ex: ['100 complaints (raw) → classified into delivery 40, product 30 … (information)'], when: ['Listing functions'], where: ['University admission office'], mistake: 'Listing only clerical tasks.', ref: 'u1', topic: 'Functions of Office' },
      { g: 'Basics', n: 'Art or science?', key: 'Art = skills & leadership | Science = principles & measurable results', pts: ['Handling an angry employee = art', 'Preparing payroll in software = science'], what: 'Office management is both.', ex: ['Motivating staff → art · KPI tracking → science'], when: ['Justify both'], where: ['Exam question'], mistake: 'Choosing only one.', topic: 'Office Management' },
      { g: 'Space', n: 'Office layouts', key: 'Open · Closed (private) · Cubicle · Modular · Hybrid', pts: ['Open: collaboration, noise', 'Closed: privacy, cost', 'Cubicle: balance'], what: 'Layout affects workflow, privacy and cost.', ex: ['Start-up creative team → open · law firm → closed · IT firm → hybrid'], when: ['Choosing a layout'], where: ['Office planning'], mistake: 'Calling cubicles open layout.', topic: 'Office Layout' },
      { g: 'Space', n: 'Front, middle, back, virtual office', key: 'Front = customers · Back = internal support · Virtual = remote', pts: ['Middle: risk, compliance'], what: 'Different parts and forms of modern offices.', ex: ['Hotel receptionist → front office · accounts → back office · GitLab → all-remote'], when: ['Classify'], where: ['Modern organisations'], mistake: 'Putting reception in back office.', topic: 'Front & Back Office' },
      { g: 'Records', n: 'Filing methods', key: 'Alphabetical · Numerical · Geographical · Subject · Chronological · Alphanumeric', pts: ['Centralised vs decentralised'], what: 'Different ways to arrange files for quick retrieval.', ex: ['Sales files by state → geographical · meeting minutes by date → chronological'], when: ['Pick the method'], where: ['Banks, sales teams'], mistake: 'Confusing numerical with chronological.', topic: 'Filing' },
      { g: 'Records', n: 'Types of indexing', key: 'Page · Card · Visible · Strip · Wheel · Computerised', pts: ['Filing stores; indexing locates'], what: 'An index is a guide to where a file is.', ex: ['Telephone directory strips → strip index · hotel desk cards → visible index'], when: ['Match example to type'], where: ['Reception, libraries'], mistake: 'Treating filing and indexing as the same.', topic: 'Indexing' },
      { g: 'Secretarial', n: 'Letter, notice, memo, circular, agenda', key: 'Letter = external · Memo = internal short · Circular = many · Notice = announcement · Agenda = meeting list', pts: ['Letter parts: letterhead, ref/date, address, subject, salutation, body, close, signature'], what: 'Each document has its own purpose and format.', ex: ['Revised office timings to all branches → circular', 'Monthly attendance report request to department heads → memo'], when: ['Choose the document'], where: ['Secretarial practice'], mistake: 'Using "Yours faithfully" on a notice.', topic: 'Memo' },
      { g: 'Secretarial', n: 'Mail handling', key: 'Inward: receive → sort → open & stamp → record → distribute | Outward: draft → approve → record → envelope → dispatch', pts: ['Confidential mail is not opened by the clerk'], what: 'Registers keep a trace of every dak.', ex: ['Inward register: S.No., date, from, subject, marked to'], when: ['Order-of-steps'], where: ['Mail room'], mistake: 'Recording before opening inward mail.', topic: 'Mail Handling' },
      { g: 'Secretarial', n: 'Reception and telephone etiquette', key: 'Greet → verify purpose → register & pass → inform officer → manage waiting → escort', pts: ['Answer in 2-3 rings and identify yourself'], what: 'First impression of the organisation.', ex: ['"Good afternoon, Sunrise Textiles, Anita speaking. How may I help you?"'], when: ['Etiquette questions'], where: ['Front desk'], mistake: 'Giving confidential information over the phone.', topic: 'Reception' },
      { g: 'Forms & records', n: 'Forms design and control', key: 'Design: simple · logical · clear · space · identification | Control: number · approve · review · version', pts: ['Types: internal/external, operating/record/report, single/manifold'], what: 'Good forms save time and ensure accuracy.', ex: ['Leave form: employee details, leave details, authorisation fields; code HR-01'], when: ['Designing a form'], where: ['HR, purchase, accounts'], mistake: 'Asking unrelated information on a form.', topic: 'Forms Design' },
      { g: 'Forms & records', n: 'Record classification and life cycle', key: 'Vital · Important · Useful · Non-essential | Creation → Active use → Storage → Retention → Disposal', pts: ['Active vs inactive records'], what: 'Importance decides how a record is preserved.', ex: ['Title deed → vital · routine letter → useful'], when: ['Classify a record'], where: ['Record rooms'], mistake: 'Treating inactive records as useless.', topic: 'Record Keeping' },
      { g: 'Forms & records', n: 'Centralised vs decentralised records', key: 'Central: uniform, less duplication | Decentral: quick local access', pts: ['Digital systems: DMS, cloud, ERP, OCR'], what: 'Choose by size and structure.', ex: ['Small organisation → centralised · large multi-branch → decentralised'], when: ['Comparison questions'], where: ['Record management'], mistake: 'Saying decentralised is always cheaper.', topic: 'Centralisation' },
      { g: 'Company office', n: 'Company Secretary', key: 'KMP · ICSI member · Statutory · Administrative · Advisory · Meeting duties', pts: ['Link between Board, shareholders, authorities'], what: 'Ensures compliance and conducts meetings.', ex: ['Drafts the AGM notice 21 clear days before the meeting'], when: ['Functions and qualifications'], where: ['Unit 4'], mistake: 'Treating the secretary as the auditor.', topic: 'Company Secretary' },
      { g: 'Company office', n: 'Director vs Chairman vs Auditor', key: 'Director manages · Chairman presides · Auditor checks accounts', pts: ['Directors: 3 public, 2 private, 1 OPC, max 15', 'Auditor appointed at the AGM, normally 5 years'], what: 'Three distinct roles.', ex: ['Tie in votes → Chairman\'s casting vote'], when: ['Distinguish'], where: ['Unit 4 review question'], mistake: 'Making the auditor a director.', topic: 'Directors' },
      { g: 'Company office', n: 'Meetings: notice, quorum, resolutions, minutes', key: 'Notice → Agenda → Quorum → Voting → Resolution → Minutes', pts: ['Board notice 7 days; general meeting 21 clear days', 'Special resolution: 75%'], what: 'A valid meeting needs proper notice, agenda and quorum.', ex: ['Board of 9 directors → quorum = 1/3 = 3', 'Minutes entered within 30 days and signed by the Chairman'], when: ['Meeting procedure'], where: ['Company secretarial work'], mistake: 'Mixing board and general meeting notice periods.', topic: 'Quorum' },
    ],

    'business-env': [
      { g: 'Environment', n: 'Micro vs macro, internal vs external', key: 'Internal (controllable) · External = Micro (task) + Macro (general)', pts: ['Micro: customers, suppliers, competitors', 'Macro: economy, politics, technology, society'], what: 'Business environment is the sum of all forces that affect a firm.', ex: ['Skilled workforce → internal · rival\'s price cut → micro · weaker rupee → macro'], when: ['Classify a factor'], where: ['SWOT and scanning'], mistake: 'Calling competitors macro.', topic: 'External Factors' },
      { g: 'Environment', n: 'Features and SWOT', key: 'Dynamic · Complex · Relative · Uncertain · Totality', pts: ['SWOT: internal S/W, external O/T'], what: 'Environmental scanning gives early warning of threats and opportunities.', ex: ['Outdated machinery = weakness · new export incentive = opportunity'], when: ['Strategy and MCQs'], where: ['Case-based questions'], mistake: 'Placing a government rule under strengths.', topic: 'Concept of Business Environment' },
      { g: 'Environment', n: 'PESTLE analysis', key: 'Political · Economic · Social · Technological · Legal · Environmental', pts: ['External macro forces'], what: 'A checklist to scan the macro environment.', ex: ['Inflation → economic · AI automation → technological · new emission rule → environmental/legal'], when: ['Classify a factor'], where: ['Business planning'], mistake: 'Treating legal as political.', topic: 'PESTLE Analysis' },
      { g: 'Environment', n: 'Role of government in business', key: 'Regulator · Promoter · Entrepreneur · Planner', pts: ['Subsidy, tax holiday = promoter'], what: 'Government shapes the playing field.', ex: ['Industrial park with subsidised land → promoter'], when: ['Identify the role'], where: ['Policy questions'], mistake: 'Calling a tax holiday regulation.', topic: 'Role of Government in Business' },
      { g: 'Economy', n: 'LPG reforms (1991)', key: 'Liberalisation · Privatisation · Globalisation', pts: ['Disinvestment = sale of government shareholding'], what: 'Reforms that opened the Indian economy.', ex: ['Removing licence requirements → liberalisation · selling PSU stake → disinvestment'], when: ['Define each term'], where: ['Economic policy'], mistake: 'Treating privatisation and disinvestment as identical.', topic: 'LPG Reforms' },
      { g: 'Economy', n: 'Economic systems', key: 'Capitalist · Socialist · Mixed', pts: ['India = mixed economy'], what: 'Who owns resources and decides production.', ex: ['Public sector and private sector coexist in India'], when: ['System identification'], where: ['Economic policy'], mistake: 'Calling India fully socialist.', topic: 'Economic Systems' },
      { g: 'Law', n: 'Environmental laws and agreements', key: 'ISO 14001 · Ecomark · Kyoto Protocol · Paris Agreement (2015) · Carbon credit', pts: ['Paris: well below 2°C'], what: 'Frameworks that regulate pollution and emissions.', ex: ['A tradable certificate for one tonne of CO₂ → carbon credit'], when: ['Match law to subject'], where: ['Environmental regulation'], mistake: 'Linking Kyoto to trade tariffs.', topic: 'Regulations for Environmental Protection' },
      { g: 'Law', n: 'Consumerism and consumer rights', key: 'Safety · Information · Choice · Be heard · Redressal · Education', pts: ['Consumer Protection Act'], what: 'Rights that protect buyers from unfair practices.', ex: ['Receiving accurate quantity and price details → right to information'], when: ['Identify the right'], where: ['Consumer forums'], mistake: 'Confusing redressal with information.', topic: 'Consumerism and Consumer Rights' },
      { g: 'Ethics', n: 'Business ethics and CSR', key: 'Ethics: "Is it right?" | Law: "Is it legal?" | CSR: giving back', pts: ['Triple bottom line: People, Planet, Profit', 'Schedule VII lists CSR activities', 'Social audit'], what: 'Ethics goes beyond legal compliance.', ex: ['Tata Steel built Jamshedpur long before CSR was mandatory'], when: ['Ethical dilemmas, CSR cases'], where: ['Corporate governance'], mistake: 'Treating CSR as only donations.', topic: 'Corporate Social Responsibility' },
      { g: 'Ethics', n: 'Six pillars of ethical codes', key: 'Honesty · Integrity · Fairness · Environmental sustainability · Community engagement · Rights & transparency', pts: ['Types of codes: conduct, ethics, compliance, professional'], what: 'The pillars of Unit 3: ethics goes beyond the law.', ex: ['Volkswagen "Dieselgate" (dishonesty) · Patagonia (honesty) · Enron (transparency failure)'], when: ['Match case to pillar'], where: ['Ethical codes unit'], mistake: 'Linking Enron to environmental sustainability.', topic: 'Ethical Codes and Their Relevance in Business' },
    ],
  };

  const GICON = {};
  const card = (c, i, sid) => `
    <article class="fcard" data-g="${c.g}" data-s="${(c.n + ' ' + c.g + ' ' + c.key).toLowerCase().replace(/<[^>]+>/g, ' ')}">
      <header><span class="fno">${i + 1}</span><div><h3>${c.n}</h3><span class="fgrp">${c.g}</span></div>
        ${c.ref ? `<a class="fread" href="#/${sid}/${c.ref}">📖 Read notes</a>` : ''}</header>
      <div class="fformula kidea">${c.key}</div>
      ${c.pts && c.pts.length ? `<ul class="fsym">${c.pts.map((s) => `<li>${s}</li>`).join('')}</ul>` : ''}
      <p class="fwhat">${c.what}</p>
      <div class="fex"><b>🧩 Example</b>${c.ex.map((l, k) => `<div class="step"><i>${k + 1}</i><span>${l}</span></div>`).join('')}</div>
      <div class="fcols">
        <div class="fwhen"><b>⏰ When to use</b><ul>${c.when.map((x) => `<li>${x}</li>`).join('')}</ul></div>
        <div class="fwhere"><b>📍 Where it appears</b><ul>${c.where.map((x) => `<li>${x}</li>`).join('')}</ul></div>
      </div>
      <div class="fwarn"><b>⚠️ Common mistake</b> ${c.mistake}</div>
      ${c.topic ? `<a class="btn fprac" href="#/${sid}/quiz/${encodeURIComponent(c.topic)}">▶ Practise MCQs on this</a>` : ''}
    </article>`;

  Object.entries(DECKS).forEach(([sid, cards]) => {
    const sub = SUBS[sid];
    if (!sub) return;
    const groups = [...new Set(cards.map((c) => c.g))];
    const html = `
      <div class="box"><b>Concept cards:</b> the key ideas of ${sub.title} in one place - the core idea, key points, a worked example, when it is used, where it appears and the most common mistake. Filter by topic or search.</div>
      <div class="ftools">
        <input id="fsearch" type="search" placeholder="Search a concept…" aria-label="Search concepts">
        <div class="fchips" id="fchips"><button class="on" data-g="">All (${cards.length})</button>${groups.map((g) => `<button data-g="${g}">${g} (${cards.filter((c) => c.g === g).length})</button>`).join('')}</div>
      </div>
      <div class="fgrid" id="fgrid">${cards.map((c, i) => card(c, i, sid)).join('')}</div>
      <p class="expl" id="fnone" hidden>No concept matches your search.</p>`;
    const unit = {
      id: 'concepts', title: '🃏 Concept cards (' + cards.length + ')', html,
      after() {
        const grid = document.getElementById('fgrid');
        if (!grid) return;
        let g = '', q = '';
        const apply = () => {
          let n = 0;
          grid.querySelectorAll('.fcard').forEach((el) => {
            const show = (!g || el.dataset.g === g) && (!q || el.dataset.s.includes(q));
            el.hidden = !show;
            if (show) n++;
          });
          document.getElementById('fnone').hidden = n > 0;
        };
        document.getElementById('fchips').onclick = (e) => {
          const b = e.target.closest('button');
          if (!b) return;
          g = b.dataset.g;
          document.querySelectorAll('#fchips button').forEach((x) => x.classList.toggle('on', x === b));
          apply();
        };
        document.getElementById('fsearch').oninput = (e) => { q = e.target.value.trim().toLowerCase(); apply(); };
      },
    };
    sub.units.unshift(unit);
  });
})();
