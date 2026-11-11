// HRM written Q&A - part 5: extra detailed answers for Units I-III built from Syllabus/HRM_Four_Units_Comprehensive_Notes.pdf
// (syllabus + unit decks + earlier test). Priority-A topics are marked p:3.
(function () {
  const { L, O, E, T } = window.ExamQA;
  const SY = 'Syllabus PDF - HRM_Four_Units_Comprehensive_Notes';
  const P = (s) => `<p>${s}</p>`;
  const H = (s) => `<h4>${s}</h4>`;
  const FL = (...a) => `<p><b>Flow:</b> ${a.join(' → ')}</p>`;

  window.ExamQA.add('hrm', [
    // ================= UNIT I =================
    { m: 6, u: 'Unit I', t: 'Introduction to HRM', p: 3, q: `Define HRM and explain its evolution.`,
      a: H(`Introduction`) + P(`<b>Gary Dessler:</b> "HRM is the process of acquiring, training, appraising and compensating employees, and of attending to their labour relations, health, safety and fairness concerns." In simple words, HRM means managing people through the whole <b>employee lifecycle</b> so that they contribute to organisational objectives.`) +
        L(`Treats people as <b>assets</b>, not merely a cost.`, `Aligns individual goals with organisational objectives.`, `Combines human judgement with policies, systems and HR data.`) +
        H(`Evolution of HRM (W-P-H-D)`) +
        T(['Stage', 'Period', 'Main focus'], [['Welfare stage', 'Pre-1920s', 'Employee well-being, safety and basic amenities in factories'], ['Personnel management', '1920s-1980s', 'Administrative work: hiring, payroll, discipline, record keeping'], ['HRM', '1980s-2000s', 'Employees seen as valuable resources; development and motivation'], ['Strategic and digital HR', '2000s-present', 'HR as strategic partner; analytics, AI and automation support decisions']]) +
        H(`Conclusion`) + P(`The direction of change is from worker welfare to strategic value creation: thus HRM has grown from a clerical activity into a strategic, technology-enabled partner of management.`),
      ms: `Definition (Dessler) 1.5 · explanation 1 · evolution table 2.5 · conclusion 1`, src: SY + ' (Priority A - asked in the earlier test)' },
    { m: 6, u: 'Unit I', t: 'Objectives of HRM', p: 3, q: `Explain the objectives and the functions of HRM and show how the functions help to achieve the objectives.`,
      a: H(`Introduction`) + P(`HRM objectives state <i>what</i> HR must achieve; HRM functions are the <i>activities</i> through which it achieves them.`) +
        H(`Objectives (OFSP)`) + T(['Objective', 'Meaning'], [['Organisational', 'Support organisational effectiveness through workforce planning and productivity'], ['Functional', 'Maintain HR\'s contribution at a level appropriate to the organisation\'s needs'], ['Social', 'Respond ethically and legally to societal needs; minimise negative impact'], ['Personal', 'Help employees achieve individual career and personal goals']]) +
        H(`Functions`) + L(`<b>Managerial (PODC):</b> planning, organising, directing, controlling.`, `<b>Operative:</b> staffing (procurement), training and development, compensation and rewards, motivation and integration, maintenance and welfare, emerging HR issues.`) +
        H(`How functions achieve objectives`) + T(['Objective', 'Functions that achieve it'], [['Productivity', 'HR planning, staffing and training'], ['Employee career growth', 'Training, performance management, career development'], ['Legal / social responsibility', 'Compliance, welfare, fair employment practices'], ['Cost control', 'Planning of manpower, compensation administration']]) +
        P(`<b>Conclusion:</b> objectives give direction and functions give action; together they make HRM effective.`),
      ms: `Introduction 0.5 · objectives 1.5 · functions 1.5 · relationship table 2 · conclusion 0.5`, src: SY + ' (Priority A - asked in the earlier test)' },
    { m: 5, u: 'Unit I', t: 'Importance of HRM', p: 3, q: `Explain the importance of HRM in modern organisations.`,
      a: H(`Introduction`) + P(`In a competitive, technology-driven economy the people of an organisation decide its success; HRM manages this most valuable resource.`) +
        T(['Importance', 'How HR contributes'], [['Drives productivity', 'Better engagement and output'], ['Fosters innovation', 'Skilled and motivated employees contribute ideas and solve problems'], ['Ensures compliance', 'Handles legal, ethical and regulatory workforce obligations'], ['Builds competitive advantage', 'People are difficult for competitors to copy'], ['Strengthens culture', 'Shapes values, communication and employee relations'], ['Enables change management', 'Supports growth, restructuring and disruption']]) +
        P(`<b>Mnemonic:</b> P-I-C-A-C-C. <b>Conclusion:</b> effective HRM aligns employee capability with organisational requirements and leads to long-term effectiveness.`),
      ms: `Introduction 0.5 · six points with explanation 4 · conclusion 0.5`, src: SY },
    { m: 6, u: 'Unit I', t: 'Role of HR Manager', p: 3, q: `Discuss the roles and responsibilities of HR managers and the competencies required.`,
      a: H(`Introduction`) + P(`The HR manager plans and carries out all people-related activities of the organisation. The modern HR manager performs six roles.`) +
        T(['Role', 'Core responsibility'], [['Strategic partner', 'Align HR strategy with business goals'], ['Administrative expert', 'Ensure efficient HR processes and legal compliance'], ['Employee champion', 'Advocate employee needs, morale and well-being'], ['Change agent', 'Drive organisational change and transformation'], ['Talent manager', 'Oversee recruitment, retention and succession'], ['Learning facilitator', 'Build capability through training and development']]) +
        H(`Competencies required (C-E-L-D-P-C-D-N)`) +
        L(`Communication and interpersonal skills; ethical judgement and confidentiality.`, `Knowledge of labour laws and compliance; data and HR analytics proficiency.`, `Problem-solving and decision-making; change management and adaptability.`, `Digital and HR technology (HRIS) skills; negotiation and conflict resolution.`),
      ms: `Introduction 0.5 · six roles 3 · competencies 2.5`, src: SY },
    { m: 3, u: 'Unit I', t: 'Role of HR Manager', p: 2, q: `Name any six competencies required of an HR manager.`,
      a: O(`<b>Communication and interpersonal skills</b> - to talk with all levels of employees.`, `<b>Ethical judgement and confidentiality</b> - to handle sensitive information.`, `<b>Knowledge of labour laws</b> - to ensure compliance.`, `<b>Data and HR analytics</b> - to take evidence-based decisions.`, `<b>Change management</b> - to guide the organisation through change.`, `<b>Digital / HRIS skills</b> and <b>negotiation</b> - to use technology and settle conflicts.`),
      ms: `Six competencies 0.5 each`, src: SY },
    { m: 5, u: 'Unit I', t: 'HRM vs Personnel Management', p: 3, q: `Differentiate between Personnel Management and HRM (any five bases).`,
      a: T(['Dimension', 'Personnel Management', 'HRM'], [['Employment contract', 'Careful delineation of written contracts', 'Aims to go beyond the contract'], ['Rules', 'Emphasis on clear rules', 'More value / mission orientation'], ['Managerial task', 'Monitoring', 'Nurturing'], ['Management role', 'Transactional', 'Transformational leadership'], ['Communication', 'Indirect', 'Direct'], ['Conflict handling', 'Reach a temporary truce', 'Manage climate and culture'], ['Training and development', 'Controlled access to courses', 'Learning organisation'], ['Shared interests', 'Organisational interests uppermost', 'Mutuality of interests']]) +
        P(`<b>Fast recall:</b> personnel management administers people; HRM develops and aligns them.`),
      ms: `Five bases, 1 each`, src: SY },

    // ================= UNIT II =================
    { m: 5, u: 'Unit II', t: 'Human Resource Planning', p: 3, q: `Explain the objectives, nature and importance of Human Resource Planning.`,
      a: H(`Meaning`) + P(`HRP is the process of anticipating and making provision for the movement of people into, within and out of an organisation - ensuring the right number and kind of people at the right place and time.`) +
        H(`Objectives`) + L(`Cope with change in technology, markets and products.`, `Develop employees by providing a base for training and growth.`, `Plan recruitment and redundancy levels in advance.`, `Control HR cost within the budget; match staffing with organisational goals.`) +
        H(`Nature`) + L(`Continuous, futuristic, sub-system of organisational planning, quantitative and qualitative.`) +
        H(`Importance`) + L(`Right people at the right time; supports growth and diversification; prepares people for future needs; avoids over- or under-staffing; base for recruitment, promotion and succession.`),
      ms: `Meaning 1 · objectives 1.5 · nature 1 · importance 1.5`, src: SY },
    { m: 6, u: 'Unit II', t: 'Human Resource Planning', p: 3, q: `Define HRP and explain its process in detail with a flowchart.`,
      a: H(`Introduction`) + P(`HRP links people strategy with business strategy. Without it, organisations face shortages that restrict growth or surpluses that increase cost.`) +
        FL(`Analyse objectives`, `Demand forecast`, `Supply forecast`, `Identify gaps`, `Action plan`, `Monitor and control`) +
        T(['Step', 'Explanation'], [['1. Analyse objectives', 'Study organisational goals, strategy and future direction'], ['2. Demand forecasting', 'Estimate the future number and type of people required (managerial judgement, ratio-trend, work-study, Delphi, regression)'], ['3. Supply forecasting', 'Assess manpower available internally (skills inventory, replacement charts, succession) and externally (labour market, campuses, job portals)'], ['4. Identify gaps', 'Compare demand and supply to find shortage or surplus'], ['5. Action plan', 'Recruit, train, transfer, promote, redeploy or reduce as needed'], ['6. Monitor and control', 'Check the results and update the plan continuously']]) +
        P(`<b>Conclusion:</b> a systematic HR plan ensures the right people are available at the right time and place.`),
      ms: `Definition 1 · flowchart 1 · six steps 3 · conclusion 1`, src: SY + ' (Priority A - asked in the earlier test)' },
    { m: 3, u: 'Unit II', t: 'Human Resource Planning', p: 3, q: `Explain the methods of forecasting demand for human resources (M-R-W-D-R).`,
      a: T(['Method', 'Meaning'], [['Managerial judgement', 'Experienced managers estimate future requirements'], ['Ratio-trend analysis', 'Past staffing ratios are projected forward'], ['Work-study technique', 'Work is broken into tasks and standard time and staff need are calculated'], ['Delphi technique', 'Anonymous expert opinions are collected over several rounds'], ['Regression analysis', 'Statistical relationship between business variables and staffing']]) + P(`Delphi / managerial judgement suit a growing firm.`),
      ms: `Five methods, 0.6 each`, src: SY },
    { m: 3, u: 'Unit II', t: 'Job Analysis', p: 2, q: `Explain the process and uses of job analysis.`,
      a: P(`Job analysis is the systematic process of collecting and studying information about a job's content, context and requirements.`) + FL(`Purpose and use`, `Background information`, `Select jobs`, `Collect data`, `Review`, `Prepare JD + JS`) +
        L(`<b>Methods:</b> observation, interviews, questionnaires, diaries / logs (also critical incidents).`, `<b>Uses:</b> recruitment and selection, performance management, training, compensation, career development.`),
      ms: `Definition 0.5 · flow 1 · uses 1.5`, src: SY },
    { m: 5, u: 'Unit II', t: 'Recruitment', p: 3, q: `Define recruitment and explain the recruitment process, the factors affecting it and the sources of recruitment.`,
      a: H(`Definition`) + P(`<b>Edwin B. Flippo:</b> recruitment is the process of searching for prospective employees and stimulating and encouraging them to apply for jobs. It is a <b>positive</b> process because it widens the applicant pool.`) +
        H(`Process`) + FL(`HR planning`, `Job analysis`, `Recruitment planning`, `Identify sources`, `Contact sources`, `Attract candidates`, `Build application pool`) +
        H(`Factors affecting recruitment`) + T(['Internal', 'External'], [['Recruitment policy, organisation size / manpower plan, cost of hiring, growth, HR planning decisions', 'Labour market conditions, legal / political factors, organisational image, unemployment rate, competitors\' practices']]) +
        H(`Sources`) + T(['Internal (P-T-J-E-R)', 'External (C-A-E-W)'], [['Promotions, transfers, job posting, employee referrals, re-employment', 'Campus recruitment, advertisements / job portals / social media, employment agencies, walk-ins']]),
      ms: `Definition 1 · process 1 · factors 1.5 · sources 1.5`, src: SY + ' (Priority A - asked in the earlier test)' },
    { m: 6, u: 'Unit II', t: 'Recruitment', p: 3, q: `Differentiate between recruitment and selection. State two internal and two external sources of recruitment.`,
      a: T(['Basis', 'Recruitment', 'Selection'], [['Meaning', 'Searches for and attracts candidates', 'Chooses suitable candidate(s) from the pool'], ['Candidate pool', 'Widens the pool', 'Reduces the pool'], ['Sequence', 'Comes first', 'Follows recruitment'], ['Nature', 'Positive process', 'Negative process'], ['Main techniques', 'Advertising, campus drives, referrals, agencies', 'Tests, interviews, reference and medical checks'], ['Outcome', 'Applications / candidate pool', 'Offer / appointment']]) +
        L(`<b>Internal sources:</b> promotions and transfers (also job posting, employee referrals).`, `<b>External sources:</b> campus recruitment and advertisements / job portals (also agencies, walk-ins).`) +
        P(`<b>Golden line:</b> recruitment attracts; selection chooses. Recruitment is positive; selection is negative.`),
      ms: `Definitions 1 · six bases 3 · sources 2`, src: SY + ' (Priority A - asked in the earlier test)' },
    { m: 5, u: 'Unit II', t: 'Selection', p: 3, q: `Explain the selection process with the types of tests and interviewing techniques.`,
      a: H(`Selection`) + P(`<b>Flippo:</b> selection is the process of choosing individuals who have the requisite qualifications and competence to fill jobs - a <b>negative</b> process as unsuitable candidates are eliminated.`) +
        FL(`Preliminary screening`, `Application review`, `Selection tests`, `Interview`, `Reference / background check`, `Medical examination`, `Final offer`) +
        H(`Tests`) + L(`Aptitude (numerical, verbal, reasoning, mechanical), personality, situational, achievement / trade and interest tests.`, `A good test is objective, valid, reliable and standardised.`) +
        H(`Interviewing techniques`) + L(`Structured, unstructured, behavioural, panel, stress, group discussion, situational, technical (and telephonic / video).`),
      ms: `Definition 1 · flow 1.5 · tests 1.5 · interviews 1`, src: SY },

    // ================= UNIT III =================
    { m: 3, u: 'Unit III', t: 'Training & Development', p: 3, q: `Define training and distinguish training from development.`,
      a: P(`<b>Training</b> is a short-term, systematic process of imparting specific knowledge and skills required for a present job (Flippo: increasing an employee's knowledge and skill for doing a particular job). <b>Development</b> is a long-term, education-oriented process aimed at overall growth and future roles.`) +
        T(['Basis', 'Training', 'Development'], [['Focus', 'Present job', 'Future role'], ['Term', 'Short term', 'Long term'], ['Orientation', 'Job / technical', 'Career / conceptual'], ['Initiated by', 'Mainly organisation', 'Individual and organisation'], ['Nature', 'Specific and narrow', 'Broad and general']]) + P(`<b>Training = Today; Development = Tomorrow.</b>`),
      ms: `Definitions 1 · three differences 2`, src: SY },
    { m: 5, u: 'Unit III', t: 'Training & Development', p: 3, q: `Explain the need and importance of training and the six steps of the training process.`,
      a: H(`Need and importance`) + L(`<b>For the organisation:</b> bridges skill gaps, improves quality and productivity, reduces wastage, errors and accidents, reduces supervision, prepares employees for higher responsibility and strengthens competitiveness and succession planning.`, `<b>For the employee:</b> adapts to technology and changing jobs; increases confidence, morale and job satisfaction.`) +
        H(`Training process`) + FL(`Assess organisational objectives and strategy`, `Training needs analysis`, `Set training goals`, `Design the programme`, `Execute`, `Evaluate results`) + P(`<b>A-T-G-D-E-E.</b>`),
      ms: `Need 2 · process 3`, src: SY },
    { m: 6, u: 'Unit III', t: 'Training Needs Analysis', p: 3, q: `Explain the process of Training Needs Analysis (TNA). Discuss the three levels of analysis and the methods of TNA.`,
      a: H(`Definition`) + P(`TNA is the systematic identification of the <b>gap between the knowledge, skills and performance required</b> for a job and those actually available.`) +
        H(`Three levels (O-T-I)`) + T(['Level', 'Question', 'What is examined'], [['Organisational analysis', 'WHERE?', 'Goals, resources, efficiency indicators and climate - where training can help'], ['Task / operational analysis', 'WHAT?', 'Job duties, standards and skills - what should be taught'], ['Individual / person analysis', 'WHO?', 'Individual performance - who needs training and in what area']]) +
        H(`Methods of TNA`) + L(`Observation, interviews, surveys, performance appraisals, job analysis and focus groups.`) +
        H(`Place in the training cycle`) + FL(`Objectives`, `TNA`, `Goals`, `Design`, `Execute`, `Evaluate`),
      ms: `Definition 1 · levels 3 · methods 1 · cycle 1`, src: SY + ' (Priority A - asked in the earlier test)' },
    { m: 6, u: 'Unit III', t: 'Training & Development', p: 3, q: `List and explain the methods of on-the-job and off-the-job training.`,
      a: H(`On-the-job training (given at the workplace while doing real work)`) +
        L(`<b>Job rotation</b> - moving across jobs or departments.`, `<b>Coaching</b> - one-to-one guidance by an experienced person.`, `<b>Job Instruction Training</b> - prepare, present, try-out, follow-up.`, `<b>Committee assignments</b> - solve real problems in a team.`, `<b>Understudy / apprenticeship</b> - work under a senior.`, `<b>Internship</b> and <b>mentoring</b>.`) +
        H(`Off-the-job training (away from the work spot)`) +
        L(`<b>Lecture / classroom</b> - theory.`, `<b>Case study</b> - analyse real or simulated problems.`, `<b>Role playing</b> - act out situations.`, `<b>Business games / simulation</b>.`, `<b>Sensitivity (T-group) training</b>.`, `<b>Vestibule training</b> - replica equipment away from production.`),
      ms: `On-the-job 3 · off-the-job 3`, src: SY + ' (Priority A - asked in the earlier test)' },
    { m: 6, u: 'Unit III', t: 'Training & Development', p: 3, q: `Distinguish between on-the-job training and off-the-job training.`,
      a: T(['Basis', 'On-the-job training', 'Off-the-job training'], [['Place', 'Actual workplace', 'Away from the workplace'], ['Cost', 'Usually cheaper', 'Usually costlier'], ['Approach', 'Practical', 'More theoretical / conceptual'], ['Best fit', 'Production / job-specific work', 'Managerial and non-production learning'], ['Trainer', 'Often an experienced employee', 'Experts / trainers'], ['Core principle', 'Learning by performing', 'Learning by acquiring knowledge']]) + P(`<b>One-line recall:</b> OJT = learn by doing at work; off-the-job = learn away from the job.`),
      ms: `Six bases, 1 each`, src: SY },
    { m: 3, u: 'Unit III', t: 'Management Development', p: 2, q: `What is management development? State its objectives and methods.`,
      a: P(`Management development is a <b>planned, continuous process of improving the conceptual, human and decision-making abilities</b> of present and future managers. It is future oriented and helps to prepare successors.`) +
        L(`<b>Objectives:</b> improve managerial performance, prevent skill obsolescence, identify future leaders.`, `<b>On-the-job:</b> job rotation, coaching, understudy. <b>Off-the-job:</b> case study, in-basket, sensitivity training.`),
      ms: `Meaning 1 · objectives 1 · methods 1`, src: SY },
    { m: 6, u: 'Unit III', t: 'Training Evaluation', p: 3, q: `Explain the Kirkpatrick and CIPP models of training evaluation and the methods of evaluating training effectiveness.`,
      a: H(`Introduction`) + P(`Training evaluation checks whether the programme met its objectives, improved learning and behaviour, improved organisational performance and generated value.`) +
        H(`Kirkpatrick's four-level model (R-L-B-R)`) + T(['Level', 'Question'], [['1. Reaction', 'How did they feel?'], ['2. Learning', 'What did they learn?'], ['3. Behaviour', 'Did work change?'], ['4. Results', 'What was the business impact?']]) +
        H(`CIPP model - Daniel Stufflebeam`) + T(['Component', 'Meaning'], [['Context', 'Need / problem - why?'], ['Input', 'Resources and plan - with what?'], ['Process', 'Implementation - how executed?'], ['Product', 'Outcomes - what came out?']]) +
        H(`Tools of evaluation`) + L(`Questionnaires and feedback forms; written tests; performance observation and checklists; interviews and focus groups; performance metrics and business data.`),
      ms: `Introduction 0.5 · Kirkpatrick 2 · CIPP 2 · tools 1.5`, src: SY + ' (Priority A - asked in the earlier test)' },
    { m: 3, u: 'Unit III', t: 'Performance Appraisal', p: 3, q: `Explain the objectives of performance appraisal (F-P-T-S-C-C).`,
      a: O(`<b>Feedback</b> - identify strengths and weaknesses.`, `<b>Personnel decisions</b> - promotion, transfer and other decisions.`, `<b>Training</b> - identify training and development needs.`, `<b>Standards</b> - set performance standards and improve future performance.`, `<b>Compensation</b> - reward decisions where appropriate.`, `<b>Career</b> - basis for career development and succession planning.`),
      ms: `Six objectives, 0.5 each`, src: SY },
    { m: 5, u: 'Unit III', t: 'Performance Appraisal', p: 3, q: `Explain the common biases in performance evaluation (H-H-R-L-S-C-S-C).`,
      a: T(['Bias', 'Meaning'], [['Halo effect', 'One strong quality influences the whole rating'], ['Horns effect', 'One negative quality lowers the whole rating'], ['Recency effect', 'Recent performance dominates judgement'], ['Leniency', 'Rater gives unusually high scores'], ['Strictness', 'Rater gives unusually low scores'], ['Central tendency', 'Rater avoids extremes and scores most people near the middle'], ['Similarity bias', 'Rater favours people who resemble the rater'], ['Contrast effect', 'Rating influenced by comparison with another employee rather than the standard']]) +
        P(`<b>Remedies:</b> train appraisers, set clear KPIs, give regular two-way feedback, use 360-degree feedback.`),
      ms: `Eight biases 0.5 each · remedies 1`, src: SY },
    { m: 3, u: 'Unit III', t: 'Career Management', p: 3, q: `Explain the stages of a career.`,
      a: T(['Stage', 'Meaning'], [['Exploration', 'Interests and options are identified'], ['Establishment', 'Entry and early growth'], ['Mid-career', 'Consolidation, advancement or change'], ['Late career', 'Mentoring, senior responsibility and preparation for retirement'], ['Decline / retirement', 'Reduced work role and transition']]) + P(`Career planning helps an individual choose the path through these stages.`),
      ms: `Five stages with meaning`, src: SY },
    { m: 5, u: 'Unit III', t: 'Career Management', p: 3, q: `Explain career stages, succession planning and individual vs organisational career management.`,
      a: H(`Career stages`) + L(`Exploration → establishment → mid-career → late career → decline / retirement.`) +
        H(`Succession planning`) + P(`The systematic identification and development of employees who can take over key positions when vacancies arise; it reduces disruption, preserves organisational knowledge and supports leadership continuity.`) +
        H(`Individual vs organisational career management`) + T(['Perspective', 'Main focus'], [['Individual', 'Self-assessment, career goals, skill development, job choices and career decisions'], ['Organisation', 'Career paths, development programmes, internal mobility, succession planning, opportunities']]) +
        P(`<b>Best result:</b> employee aspirations should connect with organisational opportunities. The individual chooses the direction; the organisation creates the opportunities.`),
      ms: `Stages 1 · succession 2 · individual vs organisation 2`, src: SY },
  ]);
})();
