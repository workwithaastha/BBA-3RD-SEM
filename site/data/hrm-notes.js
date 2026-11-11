// Human Resource Management - unit-wise NOTES (Units I-IV). Used by the site (notes pages) and tools/make_hrm_unit_pdfs.py.
// Units III-IV follow the PDFs (Unit 3 Performance Appraisal slides, Notes of Unit - 4, Important Questions); Units I-II have no notes PDF,
// so they are written from standard HRM knowledge (marked [extra]).
(function () {
  const SUB = window.SUBJECTS && window.SUBJECTS.hrm;
  if (!SUB) return;
  const T = (head, rows) => '<table><tr>' + head.map((h) => '<th>' + h + '</th>').join('') + '</tr>' + rows.map((r) => '<tr>' + r.map((c) => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</table>';
  const UL = (...a) => '<ul>' + a.map((x) => '<li>' + x + '</li>').join('') + '</ul>';
  const OL = (...a) => '<ol>' + a.map((x) => '<li>' + x + '</li>').join('') + '</ol>';
  const KEY = (t, ...a) => '<div class="box"><b>' + t + '</b>' + UL(...a) + '</div>';
  const EX = (x) => '<div class="box"><b>Example:</b> ' + x + '</div>';

  const U1 = `
<h2>1. Meaning and definition of HRM</h2>
<p><b>Human Resource Management (HRM)</b> is the process of <b>acquiring, developing, motivating and maintaining</b> a workforce so that the organisation achieves its goals. It treats people as a valuable <b>resource</b>, not a cost.</p>
${KEY('Remember', 'Acquire → Develop → Motivate → Maintain', 'People are assets that can grow in value', 'HRM is a function of every manager, not only the HR department')}
<h2>2. Nature (features) of HRM</h2>
${UL('<b>People oriented</b> - deals with human beings, their needs and feelings.', '<b>Continuous</b> - goes on throughout the life of the organisation.', '<b>Pervasive</b> - all managers perform HR work.', '<b>Strategic</b> - linked to business objectives.', '<b>Action oriented</b> - solves problems through policies and practice.')}
<h2>3. Objectives of HRM</h2>
${T(['Objective', 'Meaning', 'Example'], [['Organisational', 'Contribute to organisational effectiveness; right people in the right place', 'Workforce planning'], ['Functional', 'Keep the HR department\'s contribution in proportion to the organisation\'s needs', 'Cost-effective HR services'], ['Societal', 'Be ethically and socially responsible; follow laws; reduce negative impact on society', 'Equal opportunity, no child labour'], ['Personal', 'Help employees achieve their personal goals and growth', 'Training, career paths']])}
<h2>4. Scope of HRM</h2>
${UL('<b>Procurement:</b> HR planning, job analysis, recruitment, selection, placement.', '<b>Development:</b> induction, training, career development, succession planning.', '<b>Compensation:</b> job evaluation, wages, incentives, benefits.', '<b>Integration:</b> bringing employee and organisational interests together; motivation, participation.', '<b>Maintenance:</b> health, safety, welfare, grievance handling.', '<b>Separation:</b> resignation, retirement, retrenchment.')}
<h2>5. Functions of HRM</h2>
${T(['Managerial functions', 'Operative functions'], [['Planning - HR plans and policies', 'Procurement - recruitment and selection'], ['Organising - structure, duties, authority', 'Development - training, career development'], ['Directing - motivation, leadership, communication', 'Compensation - pay, incentives, benefits'], ['Controlling - appraisal, audit, corrective action', 'Integration and maintenance - relations, welfare, safety']])}
<h2>6. Evolution of HRM</h2>
${T(['Stage', 'Approach'], [['Welfare work', 'Concern for workers\' conditions and welfare'], ['Personnel management', 'Administrative: hiring, payroll, records, discipline'], ['Human resource management', 'People seen as resources; planning, development, motivation linked to strategy'], ['Strategic HRM', 'HR aligned with business strategy, technology and globalisation']])}
<h2>7. HRM vs Personnel Management ("paradigm shift")</h2>
${T(['Basis', 'Personnel Management', 'HRM'], [['View of people', 'A cost to be controlled', 'A valuable asset to be developed'], ['Approach', 'Reactive, routine, clerical', 'Proactive and strategic'], ['Scope', 'Payroll, attendance, records', 'Planning, development, motivation, culture'], ['Link with strategy', 'Weak or none', 'Integrated with business strategy'], ['Role of manager', 'Staff specialist', 'Strategic partner; line managers share HR work'], ['Time horizon', 'Short term', 'Long term']])}
<p><b>Critical view:</b> basic activities (hiring, pay, discipline) are common to both; the real change is the strategic outlook - so HRM is a shift in thinking, not only in functions.</p>
<h2>8. Role of the HR manager</h2>
${T(['Traditional role', 'Changing (modern) role'], [['Record keeper and administrator', 'Strategic partner of top management'], ['Policy maker and enforcer', 'Change agent - leads technology and culture change'], ['Conciliator between management and employees', 'Employee champion - engagement and well-being'], ['Welfare officer', 'Data-driven decision maker (HR analytics)']])}
<h2>9. Skills of an HR manager</h2>
${UL('Communication and interpersonal skills', 'Leadership, negotiation and conflict handling', 'Analytical and decision-making skills', 'Technical / IT skills (HR software, analytics)', 'Ethics and integrity')}
<h2>10. HR policies and principles</h2>
<p>An HR policy is a guideline that tells managers how to handle people matters consistently. Good policies give <b>effectiveness</b> (clear decisions), <b>continuity</b> (same practice when managers change) and <b>stability</b> (equal and predictable treatment).</p>
<h2>11. Importance of HRM in the emerging scenario</h2>
${UL('Competition makes skilled, committed people the main advantage.', 'Technology change needs continuous training.', 'Higher productivity and lower turnover.', 'Legal and ethical compliance builds a good image.', 'Better industrial relations through fair policies.')}
<h2>12. Changing role of HR - globalisation and digital transformation</h2>
${T(['Force', 'Effect on HR'], [['Globalisation', 'Multicultural teams, global talent, international standards'], ['Digital technology', 'HRMS, e-recruitment, e-learning, biometric attendance, analytics'], ['Remote / hybrid work', 'Flexible policies, virtual team management'], ['New skills', 'Re-skilling for AI and new tools']])}
<div class="box"><b>Quick revision - Unit I</b>${UL('HRM = acquire, develop, motivate, maintain', '4 objectives: Organisational, Functional, Societal, Personal', '2 types of functions: Managerial (POD-C: plan, organise, direct, control) and Operative (procure, develop, compensate, integrate, maintain)', 'Evolution: welfare → personnel → HRM → strategic HRM', 'HRM = proactive + strategic; Personnel Mgmt = reactive + clerical', 'HR manager: administrator → strategic partner and change agent')}</div>`;

  const U2 = `
<h2>1. Human Resource Planning (HRP)</h2>
<p><b>HRP</b> is the process of <b>forecasting an organisation's future demand for and supply of employees</b> and planning to meet the gap, so that the right number and type of people are available at the right time.</p>
${OL('Analyse organisational objectives and plans (first step).', 'Forecast demand for human resources.', 'Forecast supply (internal and external).', 'Identify the gap - shortage or surplus.', 'Prepare and implement action plans.', 'Control and review.')}
<h3>Factors affecting HRP</h3>
${T(['Internal factors', 'External factors'], [['Organisational strategy and growth plans', 'Labour market and unemployment'], ['Organisational structure and job design', 'Economy and technology'], ['Employee turnover, skills inventory', 'Government laws, trade unions']])}
<h3>Techniques of forecasting demand</h3>
${T(['Technique', 'How it works'], [['Managerial judgement', 'Managers estimate needs'], ['Delphi technique', 'Experts give estimates anonymously in rounds until consensus'], ['Nominal group technique', 'Structured group discussion and ranking'], ['Work-study technique', 'Workload ÷ output per employee'], ['Ratio / trend analysis', 'Past ratios projected']])}
<p>For a <b>growing firm</b> Delphi / managerial judgement suits best, because the future differs from the past.</p>
<h3>Methods of forecasting supply</h3>
${UL('<b>Markov analysis</b> - probability of employees moving between jobs and leaving.', '<b>Skill inventory</b> - records of employees\' skills.', '<b>Replacement / succession charts</b> - who can replace whom.', '<b>External supply</b> - labour market, campuses.')}
<h3>Barriers to effective HRP</h3>
${T(['Barrier', 'Remedy'], [['Lack of top management support', 'Show benefits; involve top management'], ['Inaccurate data and forecasts', 'Improve the HR information system'], ['Resistance to planning', 'Communication and participation']])}
<h2>2. Job analysis</h2>
<p>Job analysis is the process of <b>collecting and analysing information about the tasks, duties, responsibilities and requirements of a job</b>. It is the <b>foundation (cornerstone) of all HR activities</b>.</p>
${T(['Method', 'How it works'], [['Observation', 'Analyst watches the job being done'], ['Interview', 'Job holders and supervisors are questioned'], ['Questionnaire', 'Written form filled by employees'], ['Diary method', 'Job holder records daily activities in a log']])}
${T(['Job description', 'Job specification'], [['Statement of tasks, duties and responsibilities - about the JOB', 'Statement of qualifications, skills and traits - about the PERSON'], ['Title, duties, reporting, conditions', 'Education, experience, skills, personality']])}
${EX('<b>Marketing Executive</b> - JD: promote products, meet customers, prepare sales reports, report to the Marketing Manager. JS: BBA/MBA, 1-2 years\' experience, communication skills, basic computer skills.')}
<h3>Uses of job analysis</h3>
${T(['HR activity', 'Use'], [['Planning', 'Defines jobs needed'], ['Recruitment and selection', 'Gives JD and JS'], ['Training', 'Shows skills required'], ['Appraisal', 'Sets performance standards'], ['Job evaluation and pay', 'Basis of the pay structure']])}
<h2>3. Recruitment</h2>
<p><b>Recruitment</b> is the process of <b>searching for and attracting potential candidates</b> to apply for jobs. It creates a pool of applicants.</p>
<h3>Factors affecting recruitment</h3>
${T(['Internal', 'External'], [['Recruitment policy, HR plan, size, cost, image of the firm', 'Labour market, unemployment, competitors, laws, economy']])}
<h3>Internal vs external sources</h3>
${T(['Basis', 'Internal', 'External'], [['Examples', 'Promotion, transfer, job posting, referrals', 'Campus, advertisements, employment exchange, agencies'], ['Merits', 'Cheap, fast, boosts morale, performance known', 'Fresh ideas and skills, wider choice'], ['Demerits', 'Limited choice, no new ideas, rivalry', 'Costly, slow, risk of a wrong fit']])}
<p>"Internal recruitment boosts morale, external brings innovation" - broadly true; the best firms use a mix.</p>
${T(['Recruitment', 'Selection'], [['Searching and attracting candidates', 'Choosing the best from the applicants'], ['Positive process', 'Negative process (rejects unsuitable persons)'], ['Comes first', 'Follows recruitment']])}
<h2>4. Selection</h2>
<p><b>Selection</b> is the process of <b>choosing the most suitable candidate</b> from the applicants.</p>
${OL('Application screening (first stage)', 'Employment tests', 'Interview', 'Reference and background check', 'Medical examination', 'Final selection and job offer', 'Placement and induction')}
<h3>Employment tests</h3>
${T(['Test', 'Measures'], [['Aptitude', 'Potential to learn / ability'], ['Personality', 'Traits and attitude'], ['Situational', 'Judgement in job-like situations']])}
<p><b>Reliability</b> = consistent results; <b>validity</b> = the test really predicts job performance.</p>
<h3>Interviews</h3>
${T(['Type', 'Meaning'], [['Structured', 'Fixed questions in the same order'], ['Unstructured', 'Free-flowing conversation'], ['Panel', 'A group of interviewers'], ['Behavioural', 'Questions on past behaviour'], ['Stress', 'Deliberate pressure to test composure'], ['Telephonic / video', 'Remote interview']])}
${T(['Interview error', 'Meaning', 'Remedy'], [['Halo effect', 'One good trait colours all', 'Rate each trait separately'], ['Horns effect', 'One bad trait colours all', 'Structured criteria'], ['Bias / stereotyping', 'Judging by gender, looks, background', 'Train interviewers, panel']])}
<div class="box"><b>Quick revision - Unit II</b>${UL('HRP: demand + supply → gap → action plan; Delphi = demand, Markov = supply', 'Job analysis → JD (job) + JS (person); methods: observation, interview, questionnaire, diary', 'Recruitment = attract (positive); Selection = choose (negative)', 'Selection stages: screening → tests → interview → checks → medical → offer', 'Interview errors: halo, horns, bias')}</div>`;

  const U3 = `
<h2>1. Training and development</h2>
${T(['Training', 'Development'], [['Improves skills for the PRESENT job', 'Prepares for FUTURE roles'], ['Short term, job-specific', 'Long term, career oriented'], ['Mostly workers', 'Mostly managers']])}
<h3>Need and importance</h3>
${T(['For employees', 'For the organisation'], [['Better skills and confidence', 'Higher productivity and quality'], ['Career growth', 'Lower turnover'], ['Job security', 'Competitive advantage']])}
<h3>Identifying training needs - three levels of analysis</h3>
${T(['Level', 'What is studied'], [['Organisational', 'Goals, resources and climate'], ['Task (job)', 'Knowledge and skills the job requires'], ['Person', 'Which employees need training and what type']])}
<h3>Training methods</h3>
${T(['On-the-job', 'Off-the-job'], [['Coaching, job rotation, apprenticeship, understudy', 'Lectures, case study, role play, simulation, vestibule training'], ['Merit: practical, low cost', 'Merit: controlled learning, no disturbance to production'], ['Demerit: poor trainer or disturbance to production may affect learning', 'Demerit: may be costly, lacks real conditions']])}
<h3>Training evaluation - Kirkpatrick's four levels</h3>
${OL('<b>Reaction</b> - trainee satisfaction', '<b>Learning</b> - knowledge and skills gained', '<b>Behaviour</b> - use of learning on the job', '<b>Results</b> - impact on organisational results')}
<h2>2. Performance appraisal</h2>
<p><b>Performance appraisal</b> is a process of evaluating an employee's performance of a job in terms of its requirements. <b>Beach:</b> systematic evaluation of the performance of an individual on the job and also his/her potential for development. It is systematic, objective, periodic and planned (never random).</p>
<p><b>Objectives:</b> compensation and promotion decisions, training needs, feedback and personal development.</p>
<h3>Process (steps)</h3>
${OL('Establish performance standards (first step)', 'Communicate the standards', 'Measure actual performance', 'Compare actual with standards', 'Discuss the results (feedback)', 'Decision making and corrective action (last step)')}
<h3>Traditional vs modern methods</h3>
${T(['Traditional', 'Modern'], [['Straight ranking, paired comparison, grading scale, forced distribution, checklist, essay, critical incidents, field review, confidential reports, performance tests, group appraisal', 'Assessment centre, MBO, 360-degree, human asset accounting, BARS']])}
${T(['Method', 'Key point'], [['Straight ranking', 'Employees ranked from best to worst'], ['Paired comparison', 'Each employee compared with every other, one trait at a time'], ['Forced distribution', 'Fit employees into set categories (outstanding ... poor)'], ['Critical incident', 'Dated records of good and bad incidents'], ['Field review', 'Trained HR person in the field supports line managers'], ['Group appraisal', 'A panel evaluates the employee'], ['Assessment centre', 'Simulated tasks rated by observers; German Army, 1930'], ['MBO', 'Appraisal by results; joint SMART goals (Drucker, McGregor)'], ['360-degree', 'Superiors, subordinates and peers rate'], ['BARS', 'Scale 5 Outstanding, 4 Very Good, 3 Satisfactory, 2 Needs improvement, 1 Poor, anchored to behaviours'], ['Human asset accounting', 'Values people as assets in money terms']])}
<p><b>SMART:</b> Specific, Measurable, Achievable, Result-oriented, Time-bound.</p>
<h3>Appraisal biases</h3>
${T(['Bias', 'Meaning'], [['Halo effect', 'One strong trait inflates all ratings'], ['Horns effect', 'One weak trait lowers all ratings'], ['Leniency', 'Rating higher than deserved'], ['Strictness', 'Rating lower than deserved'], ['Central tendency', 'Rating everyone average'], ['Recency', 'Judging only recent events']])}
<p><b>Overcoming challenges:</b> two-way dialogue and regular check-ins (not once-a-year feedback), train appraisers, clear KPIs, technology, 360-degree feedback.</p>
<h2>3. Career management</h2>
${UL('<b>Career management:</b> continuous process of preparing, implementing and monitoring career plans.', '<b>Career path:</b> series of positions through which one can be promoted, transferred and rotated (HR Executive → Sr Executive → HR Manager → HR Director).', '<b>Career development:</b> linking individual career needs with the organisation\'s workforce requirements.')}
${T(['Individual career management', 'Organisational career management'], [['Person\'s own goals; self-assessment', 'Organisation\'s workforce needs; planned moves']])}
${T(['Party', 'Responsibility'], [['Individual', 'Self-assessment, goals, skill development'], ['Manager', 'Feedback, coaching, support'], ['Organisation', 'Opportunities, training, career paths']])}
<h2>4. Succession planning</h2>
<p>Identifying, evaluating, developing and tracking <b>high-potential employees for future leadership roles</b>, so the company runs smoothly when key people leave.</p>
${OL('Identify the positions included', 'Identify the employees', 'Set standards', 'Assess potential', 'Review the process', 'Link with HR systems', 'Give feedback to employees', 'Measure effectiveness')}
${T(['Type', 'Meaning'], [['Strategic leadership development', 'Long-term preparation of leaders'], ['Departure-defined', 'Started only when a key employee leaves'], ['Emergency / interim', 'Short-term replacement in sudden situations']])}
<p><b>Challenges:</b> resistance to change, limited resources, inadequate planning, lack of buy-in, incomplete information.</p>
<div class="box"><b>Quick revision - Unit III</b>${UL('Training = present job; development = future', 'TNA levels: organisational, task, person', 'Kirkpatrick: reaction, learning, behaviour, results', 'PA steps: standards → communicate → measure → compare → discuss → decide', 'Modern methods: assessment centre, MBO, 360, HR accounting, BARS', 'Biases: halo, horns, leniency, strictness, central tendency', 'Succession planning: 8 steps, 3 types')}</div>`;

  const U4 = `
<h2>1. Job evaluation</h2>
<p><b>Job evaluation</b> is a systematic way of determining the <b>value or worth of a job in relation to other jobs</b>. It begins with job analysis and aims at a rational pay structure.</p>
<p><b>Objectives:</b> equitable wage differentials; remove inequities and discrimination (age, gender, caste); consistent wage policy; basis for incentives and negotiation; control payroll cost.</p>
${OL('Gain acceptance', 'Form the job evaluation committee (experienced employees, union representatives, HR experts)', 'Identify jobs', 'Analyse and prepare job descriptions', 'Select the method', 'Classify jobs', 'Convert ratings to pay')}
${T(['Method', 'How it works', 'Merit', 'Demerit'], [['Ranking', 'Jobs ranked as whole, highest to lowest', 'Simplest', 'Subjective; small firms only'], ['Classification', 'Jobs put in predetermined grades', 'Simple', 'Grades hard to define'], ['Factor comparison', 'Factor by factor against 15-20 key jobs; money to each factor', 'Consistent', 'Most complex'], ['Point method', 'Points for skill, responsibility, effort; converted to money', 'Widely used; systematic', 'Time consuming']])}
<h2>2. Compensation</h2>
<p><b>Compensation</b> is the total reward received by an employee in exchange for services (direct pay + indirect benefits). <b>Aims:</b> attract and retain good people, ensure adequate role behaviour, motivate extra-role behaviour.</p>
${T(['Component', 'Examples'], [['Base (guaranteed) pay', 'Salary, wages'], ['Variable pay / incentives', 'Bonus, sales incentive, piece rate, profit sharing, gainsharing'], ['Equity-based pay', 'Stock options'], ['Benefits', 'Paid time off, medical insurance, company car']])}
${T(['Term', 'Meaning'], [['Pay level', 'Pay of a job compared with the job market'], ['Pay structure', 'Pay differences among jobs inside the firm'], ['Pay form', 'Mix of guaranteed and at-risk pay']])}
${T(['Plan', 'Meaning'], [['Piece rate', 'Pay per unit produced (individual incentive)'], ['Standard hour plan', 'Hourly rate × standard time, whatever the actual time'], ['Profit sharing', 'Annual bonus from a profit pool'], ['Gainsharing', 'Bonus from productivity - lower labour cost shared with employees']])}
<p>A <b>bonus</b> is a lump sum that does not join base pay; merit pay does. <b>Defined contribution plans:</b> fixed contributions into a separate fund. <b>Termination benefits:</b> early termination / voluntary retirement. <b>Vested benefits:</b> already earned.</p>
<h2>3. Wage and salary administration</h2>
<p><b>Wage policy:</b> principles guiding pay (equity, adequacy, incentive, ability to pay; equal pay for equal work). <b>Wage determination:</b> fixing wage rates using job evaluation, wage surveys and ability to pay.</p>
${T(['Internal factors', 'External factors'], [['Ability to pay, strategy, job evaluation, performance, seniority, potential', 'Laws, economy, inflation, labour market, technology, unions']])}
<p>In a depressed economy labour supply rises so wages fall. Unions prefer <b>seniority</b> as the objective criterion for pay rises.</p>
${T(['Wage', 'Meaning'], [['Minimum wage', 'Basic needs of worker and family at the lowest acceptable level; legal floor (Minimum Wages Act, 1948)'], ['Fair wage', 'Between minimum and living wage; productivity and capacity to pay'], ['Living wage', 'Decent standard of living incl. education, health, some savings']])}
<p><b>Order:</b> minimum &lt; fair &lt; living (Committee on Fair Wages, 1948). A <b>Wage Board</b> is a tripartite body (employer, employee, independent members) that recommends wage structure and benefits for an industry.</p>
<h2>4. Industrial relations (IR)</h2>
<p>IR = relationship between <b>management and employees and their organisations</b> (Dale Yoder). <b>Dunlop:</b> complex of interrelations among managers, workers and agencies of government.</p>
${UL('<b>Parties:</b> employees, employers, trade unions, employers\' associations, government, courts and tribunals.', '<b>Scope:</b> collective bargaining, workers\' participation, disputes and machinery, grievance and discipline, labour legislation.', '<b>Importance:</b> avoid disputes, harmony, higher productivity, industrial democracy.')}
<h2>5. Industrial disputes</h2>
<p><b>Causes:</b> wages and allowances, bonus, working conditions, retrenchment, lay-off, victimisation, indiscipline. <b>Disputes of interest</b> = new claims; <b>disputes of right</b> = interpretation of an existing agreement.</p>
${T(['Form', 'Meaning'], [['Strike', 'Workers quit work to press demands - economic, sympathetic, sit-down, slow-down, hunger'], ['Lockout', 'Employer closes the workplace'], ['Gherao', 'Management confined by human barricade'], ['Picketing', 'People at the gate dissuade workers from entering'], ['Retrenchment', 'Permanent discharge of surplus staff'], ['Lay-off', 'Temporary setting aside of workmen']])}
${T(['Machinery', 'Nature'], [['Conciliation', 'Third party persuades; cannot impose'], ['Arbitration', 'Neutral arbitrator; binding award (voluntary)'], ['Adjudication', 'Labour courts and tribunals; compulsory, binding']])}
<p>Trade unions are registered under the <b>Trade Unions Act, 1926</b>.</p>
<h2>6. Collective bargaining</h2>
<p>Management and employee representatives meet and <b>negotiate terms and conditions of employment</b>. It is <b>bipartite, voluntary, flexible, dynamic and continuous</b>.</p>
${UL('<b>Preparation</b> before negotiation decides about 83% of the outcome.', 'Issues: wage-related (DA, wage revision), supplementary benefits (pension, gratuity, health insurance), administrative (seniority, grievance).', '<b>Ratification</b> is needed because negotiators may not have final authority.', 'After signing, the HR manager <b>administers and implements</b> the agreement.')}
<h2>7. Grievance handling</h2>
<p>A <b>grievance</b> is any dissatisfaction or feeling of injustice about one's employment brought to the notice of management. <b>Causes:</b> management policy (wages, leave, overtime, seniority, transfer), working conditions, personal reasons.</p>
<p>Deal with a grievance first at the <b>lowest level</b>. The <b>Code of Discipline (Indian Labour Conference, 1957)</b> advised a mutually agreed grievance procedure.</p>
${T(['Step (Model Grievance Procedure)', 'Time'], [['Officer designated by management replies', '48 hours'], ['Head of department', '3 days'], ['Grievance committee recommends', '7 days'], ['Manager\'s decision', '3 days'], ['Revision petition', '7 days'], ['Still unsatisfied', 'Voluntary arbitration']])}
<p><b>Essentials of a good procedure:</b> legal sanctity, acceptability, simplicity and promptness.</p>
<h2>8. Role of government, unions and management</h2>
${T(['Party', 'Role'], [['Government', 'Labour laws, conciliation, adjudication, wage boards'], ['Trade unions', 'Represent workers, bargain collectively, maintain discipline'], ['Management', 'Fair pay and conditions, grievance procedure, communication, participation']])}
<div class="box"><b>Quick revision - Unit IV</b>${UL('Job evaluation methods: ranking, classification, factor comparison, point', 'Compensation = base + variable + benefits (+ equity)', 'Wages: minimum &lt; fair &lt; living; wage board = tripartite', 'IR parties: employees, employers, unions, government', 'Dispute forms: strike, lockout, gherao, picketing, lay-off, retrenchment; machinery: conciliation, arbitration, adjudication', 'Model grievance procedure: 48 h, 3 d, 7 d, 3 d, 7 d, then arbitration')}</div>`;

  const notes = [
    { id: 'u1', title: 'Unit I - Introduction to HRM (notes)', html: U1 },
    { id: 'u2', title: 'Unit II - HR Planning, Job Analysis, Recruitment & Selection (notes)', html: U2 },
    { id: 'u3', title: 'Unit III - Training, Appraisal, Career & Succession (notes)', html: U3 },
    { id: 'u4', title: 'Unit IV - Job Evaluation, Compensation, IR & Grievances (notes)', html: U4 },
  ];
  const ql = (n) => `<div class="box"><b>Next:</b> <a href="#/hrm/qa">✍️ Detailed written answers</a> · <a href="#/hrm/quiz">▶ MCQs (choose Unit ${n})</a> · <a href="#/expected/hrm">🎯 Important questions</a></div>`;
  notes.forEach((u, i) => { u.html += ql(i + 1); });
  SUB.notes = notes;
  SUB.units.push(...notes);
})();
