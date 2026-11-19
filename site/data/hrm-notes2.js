// HRM - "Complete notes" pages (one per unit), built from the new files added on 19 Nov 2026:
// HRM/HRM_Complete_Notes-DEQ_s-FM.pdf (main source, exam-oriented) + the unit slide decks (Introduction_to_HRM_Unit1, unit_2_hrm_final, HRM_Unit3_..., UNIT_4_updated).
// Pages are inserted after the existing unit notes: u1-new, u2-new, u3-new, u4-new. Syllabus: Core Course II, F010302TN, 4 credits, 25 + 75 marks.
(function () {
  const SUB = window.SUBJECTS && window.SUBJECTS.hrm;
  if (!SUB) return;
  const T = (head, rows) => '<table><tr>' + head.map((h) => '<th>' + h + '</th>').join('') + '</tr>' + rows.map((r) => '<tr>' + r.map((c) => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</table>';
  const UL = (...a) => '<ul>' + a.map((x) => '<li>' + x + '</li>').join('') + '</ul>';
  const TIP = (x) => '<div class="box"><b>🎯 Exam tip:</b> ' + x + '</div>';
  const FLOW = (...a) => '<div class="box"><b>Flow:</b> ' + a.join(' &rarr; ') + '</div>';
  const QR = (rows) => '<h2>Quick revision</h2>' + T(['Topic', 'One-line takeaway'], rows);
  const SRC = (x) => '<p class="expl">Source: ' + x + '</p>';

  // ------------------------------------------------------------------ UNIT I
  const U1 = `
<div class="box"><b>Unit I - Introduction to HRM (10 lectures).</b> A clean, exam-oriented version of the whole unit from your new "HRM Complete Notes (BBA Sem 3)" file, with extra points from the Unit 1 slides.</div>
${SRC('HRM_Complete_Notes-DEQ_s-FM.pdf (Unit I) and Introduction_to_HRM_Unit1 slides.')}
<h2>1. Evolution of HRM - six stages</h2>
${T(['Stage', 'Period', 'Idea', 'What changed'], [
    ['1. Commodity concept', 'Pre-industrial - early 1900s', 'Labour is bought and sold like a raw material', 'Workers had no rights or security; pay at bare subsistence level'],
    ['2. Welfare concept', 'Early 1900s - 1920s', 'Basic care for workers', 'Canteens, rest rooms, safety; <b>Welfare Officers</b> first appear'],
    ['3. Bureaucratic concept', '1920s - 1930s', 'Formal rules and hierarchy (Max Weber)', 'Standard procedures for hiring and treating employees'],
    ['4. Human relations concept', '1930s - 1950s', 'Employees have social and emotional needs', 'Triggered by the <b>Hawthorne Studies</b> (Elton Mayo, Western Electric)'],
    ['5. Behavioural science concept', '1950s - 1970s', 'Motivation and leadership theories', 'Maslow, Herzberg, McGregor Theory X / Y shape job and policy design'],
    ['6. Strategic HRM concept', '1980s - present', 'People are a source of competitive advantage', 'HR becomes a strategic partner; workforce planning linked to business strategy']])}
${FLOW('Commodity', 'Welfare', 'Bureaucratic', 'Human relations', 'Behavioural science', 'Strategic HRM')}
<p>Slide summary (alternative 4-phase view): <b>Welfare (pre-1920s)</b> → <b>Personnel Management (1920s-1980s)</b> → <b>HRM (1980s-2000s)</b> → <b>Strategic and digital HR (2000s-present)</b>.</p>
${TIP('For "Trace the evolution of HRM" write the six stages in order with one line on why each shift happened.')}
<h2>2. Definition, objectives and scope</h2>
<p><b>Definition:</b> HRM is the process of <b>acquiring, developing, motivating and retaining</b> human resources to achieve individual, organisational and societal objectives effectively and efficiently. (Dessler: acquiring, training, appraising and compensating employees, and attending to their labour relations, health, safety and fairness.)</p>
${T(['Objective', 'Meaning', 'Example'], [
    ['Societal', 'Act ethically and responsibly towards society', 'Obey labour laws, avoid discrimination, fair wages'],
    ['Organisational', 'Help the organisation reach its goals', 'Productivity, efficiency, profitability through people'],
    ['Functional', 'Keep the HR department\'s contribution right-sized', 'Do not over-invest in elaborate HR systems in a small firm'],
    ['Personal', 'Help employees reach their own goals', 'Career growth, skills, job satisfaction - otherwise performance and retention suffer']])}
${TIP('Always structure "objectives of HRM" as these four heads - examiners look for the framework.')}
<h3>Scope</h3>
${FLOW('HR planning', 'Job analysis', 'Recruitment and selection', 'Training and development', 'Performance appraisal', 'Compensation', 'Welfare', 'Industrial relations')}
<p>Procurement → development → compensation → maintenance → integration. The slides also add HR records / HRIS and career planning and succession management.</p>
<h3>Functions (slides)</h3>
${T(['Managerial', 'Operative'], [['Planning, organising, directing, controlling', 'Staffing (procurement), training and development, compensation and rewards, motivation and integration, maintenance and welfare, emerging issues']])}
<h2>3. Importance of HRM</h2>
${UL('<b>Achieves organisational goals</b> - people carry out every activity.', '<b>Productivity and quality</b> - trained, motivated staff produce more and better.', '<b>Change and adaptability</b> - training and change management prepare staff.', '<b>Competitive advantage</b> - skilled people are hard for rivals to copy.', '<b>Industrial peace</b> - fewer strikes, disputes and turnover.', '<b>Employee well-being</b> - fair treatment, safety, grievance redressal.', 'Slides add: drives innovation, ensures compliance, strengthens culture.')}
<h2>4. HRM vs Personnel Management (high-probability question)</h2>
${T(['Basis', 'Personnel Management', 'Human Resource Management'], [
    ['Approach', 'Traditional, rule-based, administrative', 'Strategic, integrated with business goals'],
    ['Nature', 'Reactive - responds to problems', 'Proactive - anticipates and plans'],
    ['Focus', 'Employee administration and satisfaction', 'Development and organisational performance together'],
    ['Perspective', 'Micro, short-term', 'Macro, long-term'],
    ['Job design', 'Division of labour (individual tasks)', 'Teamwork and group-based work'],
    ['Decision-making', 'Slow, fixed procedures', 'Fast, flexible, situation-based'],
    ['Management role', 'Personnel specialists handle employee issues', 'Line managers and HR jointly manage people as strategic assets'],
    ['View of employees', 'Cost to be controlled', 'Asset / investment to be developed'],
    ['Communication', 'Indirect, through policy and procedure', 'Direct, open, two-way']])}
<h3>Extra dimensions from the slides (Storey's 10 points)</h3>
${T(['Dimension', 'Personnel Management', 'HRM'], [
    ['Employment contract', 'Careful delineation of written contracts', 'Aim to go beyond contract'],
    ['Rules', 'Importance of clear guiding rules', '"Can do" outlook, impatience with rules'],
    ['Behaviour referent', 'Norms, customs and practices', 'Values and mission'],
    ['Managerial task', 'Monitoring', 'Nurturing'],
    ['Management role', 'Transactional', 'Transformational leadership'],
    ['Conflict handling', 'Reach temporary truce', 'Manage climate and culture'],
    ['Training and development', 'Controlled access to courses', 'Learning organisation'],
    ['Shared interests', 'Interests of the organisation are uppermost', 'Mutuality of interests']])}
${TIP('2 marks: pick the 2-3 strongest contrasts (nature, focus, perspective). 6 marks: the full table with one line under each point.')}
<h2>5. Role and responsibilities of HR managers</h2>
${T(['Role', 'Meaning'], [
    ['Advisory', 'Consultant to top management and managers on people matters (recruitment strategy, discipline, policy)'],
    ['Policy-making', 'Frames HR policies - leave, code of conduct, promotion criteria - for consistent decisions'],
    ['Welfare', 'Looks after health, safety and amenities (links to the welfare-concept origins)'],
    ['Mediator', 'Bridge between management and employees; settles conflicts early'],
    ['Strategic partner', 'Takes part in top-level planning; aligns workforce with long-term business direction']])}
<p><b>Slide view of the roles:</b> strategic partner · administrative expert · employee champion · change agent · talent manager · learning facilitator.</p>
${UL('<b>Key duties:</b> manpower planning; recruitment and selection; training and development; wage and salary structures; grievances and discipline; legal compliance (labour laws, safety); employee records and HRIS.')}
<h2>6. Competencies required for HR managers</h2>
${T(['Competency', 'Why it matters'], [
    ['Business acumen', 'Know the industry, finances and strategy so HR decisions fit the business'],
    ['Communication skills', 'Constant dealings with employees, management and outsiders'],
    ['Ethical practice', 'Confidentiality, fairness and integrity in grievances, terminations, pay'],
    ['HR technology proficiency', 'HRIS, applicant tracking systems, HR analytics'],
    ['Critical evaluation', 'Use metrics (attrition rate, cost-per-hire) for evidence-based decisions'],
    ['Leadership and navigation', 'Lead HR initiatives and manage organisational politics to bring change']])}
<p>Slides add: knowledge of labour laws, problem-solving, change management and adaptability, negotiation and conflict resolution.</p>
<h2>7. Changing role of HR - globalisation and digital transformation</h2>
${T(['Impact of globalisation', 'Impact of digital transformation'], [[
    UL('<b>Cross-cultural management</b> of diverse workforces', '<b>Global talent mobility</b>, expatriate assignments, transfers', '<b>Global compensation and compliance</b> - different laws, taxes, pay norms', 'Inclusive, culturally sensitive policies'),
    UL('<b>HR analytics</b> - predict attrition, measure engagement', '<b>AI in recruitment</b> - ATS and resume screening (also raises algorithmic-fairness concerns)', '<b>Remote and hybrid</b> workforce management', '<b>HRIS / e-HR</b> - payroll, leave, performance, self-service portals', '<b>Digital onboarding</b> - e-learning, virtual orientation, digital documents')]])}
<div class="box"><b>Case study (slides): Google People Operations.</b> Replaced traditional HR with a data-driven, employee-centric approach: <b>Project Oxygen</b> used people analytics to find what the best managers do; every HR decision (hiring, promotion, retention) is backed by data; flexible work and strong benefits; constant experiments such as "20% time".</div>
${TIP('For a 6-mark answer use two sub-heads - Impact of Globalisation and Impact of Digital Transformation - with 3 points each.')}
${QR([['Evolution', 'Commodity → Welfare → Bureaucratic → Human relations → Behavioural science → Strategic HRM'], ['Definition', 'Acquiring, developing, motivating, retaining people for organisational goals'], ['Objectives', 'Societal, Organisational, Functional, Personal'], ['Scope', 'Planning → Job analysis → Recruitment/Selection → T&amp;D → Appraisal → Compensation → Welfare → IR'], ['HRM vs PM', 'PM administrative / reactive; HRM strategic / proactive'], ['HR manager roles', 'Advisor, Policy-maker, Welfare officer, Mediator, Strategic partner'], ['Competencies', 'Business acumen, communication, ethics, technology, analytics, leadership'], ['Changing role', 'Globalisation (cross-cultural, mobility) + Digital (analytics, AI, HRIS, hybrid work)']])}`;

  // ------------------------------------------------------------------ UNIT II
  const U2 = `
<div class="box"><b>Unit II - Talent Acquisition (Procurement) (12 lectures).</b> HR planning, job analysis, recruitment and selection - the complete pipeline.</div>
${SRC('HRM_Complete_Notes-DEQ_s-FM.pdf (Unit II) and unit_2_hrm_final slides.')}
<h2>1. Human Resource Planning (HRP)</h2>
<p>HRP ensures the organisation has the <b>right number and right kind of people, at the right time and place</b>, able to complete the tasks that achieve its objectives. It is the bridge between business strategy and people strategy. It answers three questions: <b>how many</b> people, <b>what skills</b>, and <b>when and where</b>.</p>
<h3>Objectives, nature and importance (slides)</h3>
${T(['Objectives', 'Nature', 'Importance'], [[
    UL('Cope with change (technology, markets, products)', 'Develop employees - base for training and growth', 'Plan recruitment / redundancy levels in advance', 'Control HR cost', 'Match staffing to goals'),
    UL('Continuous process', 'Sub-system of organisational planning', 'Quantitative and qualitative', 'Futuristic', 'Matches supply and demand'),
    UL('Right people at the right time', 'Supports growth and diversification', 'Prepares for the future', 'Reduces labour cost (no over / under-staffing)', 'Base for recruitment, promotion, succession')]])}
<h3>The HRP process</h3>
${FLOW('1 Environmental scanning', '2 Forecast demand', '3 Forecast supply', '4 Gap analysis', '5 Action planning', '6 Monitoring, control and feedback')}
${T(['Step', 'What happens'], [
    ['Environmental scanning', 'Study external factors - economy, labour market, technology, government policy, competition'],
    ['Forecast demand', 'Estimate how many people and what skills will be needed (business plans, expansion, downsizing)'],
    ['Forecast supply', 'Estimate availability inside (skills inventory, promotions) and outside (labour market)'],
    ['Gap analysis', '<b>Surplus</b> → redeploy, lay off, freeze hiring; <b>Deficit</b> → recruit, train, outsource'],
    ['Action planning', 'Recruitment, training, redeployment and retirement programmes to close the gap'],
    ['Monitoring and control', 'Track the plan and adjust to business changes']])}
${TIP('For a 6-mark "HRP process" answer write all six steps as a numbered list with one line each.')}
<h3>Factors affecting HRP</h3>
${UL('Organisational growth plans (expansion up, downsizing down)', 'Technology changes (automation reduces some skills, raises demand for digital skills)', 'Labour market conditions (availability of skilled labour)', 'Government policies and labour laws (hiring, retrenchment, reservation, minimum wage)', 'Attrition rate (high turnover means continuous replacement hiring)', 'Nature of job / industry (seasonal vs continuous process)')}
<h2>2. Forecasting demand and supply</h2>
${T(['Demand forecasting technique', 'How it works'], [
    ['Managerial judgment', 'Experienced managers estimate needs from workload and plans - simple but subjective'],
    ['Work-study technique', 'Time and motion analysis gives the workers needed for a given output (manufacturing)'],
    ['Delphi technique', 'Experts give anonymous forecasts over several rounds until consensus - useful when there is no historical data'],
    ['Ratio-trend analysis', 'Projects past ratios (workers to sales volume, supervisors to workers) forward'],
    ['Regression analysis (slides)', 'Uses statistical relationships between business variables and staffing']])}
${T(['Supply forecasting', 'Tools'], [
    ['Internal supply', 'Skills inventory (database of employee skills and experience); replacement charts; succession planning; promotion and transfer'],
    ['External supply', 'Labour market trends, employment exchanges and job portals, campus recruitment, availability of skilled graduates, competitor hiring, unemployment rate']])}
<h2>3. Job analysis</h2>
<p><b>Job analysis</b> is the systematic process of collecting, analysing and documenting information about a job - duties, responsibilities, working conditions and required skills. It is the foundation of recruitment, selection, training, appraisal and compensation. <b>Outputs:</b> job description and job specification.</p>
${T(['Method', 'How', 'Good for / limitation'], [
    ['Observation', 'Analyst watches the employee at work and records tasks, tools, time', 'Manual and repetitive jobs; poor for mental work'],
    ['Interview', 'Talk to the job holder and supervisor', 'Allows clarification; time-consuming, biased'],
    ['Questionnaire', 'Structured form given to job holders', 'Many employees quickly'],
    ['Diary / log', 'Employees record daily tasks and time', 'Detailed first-hand account over a period']])}
<p><b>Process (slides):</b> determine purpose and use → collect background information → select jobs to analyse → collect job-analysis data → review with participants → develop JD and JS. <b>Uses:</b> recruitment, selection, training, appraisal, job evaluation, compensation.</p>
<h2>4. Job description (JD) vs job specification (JS)</h2>
${T(['Basis', 'Job description', 'Job specification'], [
    ['Focus', 'The job itself', 'The person needed for the job'],
    ['Orientation', 'Job-oriented', 'Person-oriented'],
    ['Content', 'Title, department and reporting, duties, working conditions, tools', 'Education, experience, skills, physical and mental attributes'],
    ['Purpose', 'Understand what the job requires', 'Identify who fits the job']])}
<div class="box"><b>Sample (slides) - HR Executive.</b> <b>JD:</b> reports to HR Manager, head office; sourcing, screening and scheduling interviews; laptop, ATS software, telephone; office-based 9 AM - 6 PM. <b>JS:</b> MBA / PGDM in HR; 1-3 years in recruitment or HR operations; communication, MS Office, ATS tools; team player, detail-oriented, patient.</div>
${TIP('JD vs JS is a very frequent 2-mark question - learn the table exactly.')}
<h2>5. Recruitment</h2>
<p>Recruitment is searching for and attracting candidates in sufficient <b>numbers and quality</b> so that the best can be selected. It is a <b>positive</b> process - it builds the pool; the final hiring decision belongs to selection.</p>
${T(['Internal factors', 'External factors'], [[UL('HR policy (promote from within vs hire outside)', 'Size of the organisation', 'Image in the job market', 'Cost of recruitment', 'Growth and expansion plans'), UL('Labour market conditions', 'Legal and political considerations (labour laws, reservation)', 'Competitors\' practices', 'Unemployment rate', 'Demographic factors')]])}
${T(['Sources', 'Examples', 'Advantages', 'Disadvantages'], [
    ['Internal', 'Promotions, transfers, employee referrals', 'Boosts morale, saves cost, familiar with culture', 'Limits new ideas, internal politics'],
    ['External', 'Campus recruitment, employment exchanges, advertisements, agencies, online portals (Naukri, LinkedIn, Indeed)', 'Fresh talent and ideas, wider pool', 'Higher cost, longer settling-in, may demotivate insiders']])}
${TIP('For "Discuss the sources of recruitment" use Internal vs External with 2-3 examples and one merit and one demerit for each.')}
<h2>6. Selection</h2>
<p>Selection chooses the most suitable candidates from the recruited pool. It is a <b>negative / filtering</b> process - unsuitable candidates are rejected at each stage.</p>
${FLOW('1 Application screening', '2 Preliminary interview', '3 Employment tests', '4 Employment interview', '5 Reference and background check', '6 Medical examination', '7 Final selection decision', '8 Job offer')}
${TIP('The 8-step selection funnel is the single most testable list in this unit.')}
${T(['Selection tests', 'What they measure'], [['Aptitude', 'Potential to learn or perform a type of job (numerical, verbal, mechanical)'], ['Personality', 'Traits such as emotional stability, extroversion, interpersonal style'], ['Situational judgment', 'Responses to hypothetical work scenarios - practical decision-making'], ['Intelligence', 'General mental ability and reasoning']])}
${T(['Interview type', 'Meaning'], [['Structured', 'Fixed, pre-decided questions asked of all - easy to compare'], ['Unstructured', 'Open conversation - flexible but hard to compare'], ['Panel', 'Several interviewers at once - varied views'], ['Stress', 'Deliberate pressure to see how the candidate copes - for high-pressure roles'], ['Behavioural', 'Past behaviour predicts future - "tell me about a time you resolved a conflict"']])}
<h3>Recruitment vs selection</h3>
${T(['Basis', 'Recruitment', 'Selection'], [['Nature', 'Positive (inviting)', 'Negative (rejecting unsuitable)'], ['Objective', 'Create a large pool', 'Choose the best-fit candidate'], ['Sequence', 'Comes first', 'Comes after recruitment'], ['Outcome', 'Applications', 'Job offer']])}
${QR([['HRP', 'Right people, right number, right time - demand-supply gap analysis'], ['HRP process', 'Scan → demand → supply → gap → action plan → monitor'], ['Demand forecasting', 'Managerial judgment, work-study, Delphi, ratio-trend (and regression)'], ['Job analysis', 'Observation, interview, questionnaire, diary'], ['JD vs JS', 'JD = about the job; JS = about the person'], ['Recruitment sources', 'Internal (promotion, transfer, referral) vs External (campus, exchanges, ads, agencies, portals)'], ['Selection steps', 'Screening → prelim interview → tests → interview → reference → medical → decision → offer'], ['Tests / interviews', 'Aptitude, personality, situational, intelligence / structured, unstructured, panel, stress, behavioural']])}`;

  // ------------------------------------------------------------------ UNIT III
  const U3 = `
<div class="box"><b>Unit III - Development and Performance Management (12 lectures).</b> Training and development, evaluating training, performance appraisal and common biases.</div>
${SRC('HRM_Complete_Notes-DEQ_s-FM.pdf (Unit III) and HRM_Unit3_Employee_Development_Performance_Management slides.')}
<h2>1. Training and development (T&amp;D)</h2>
<p><b>Training</b> is a planned effort to give employees the knowledge, skills and abilities for their <b>current job</b> (Flippo: increasing an employee's knowledge and skill for doing a particular job). <b>Development</b> is broader - it prepares people for <b>future roles</b> and long-term growth.</p>
${T(['Basis', 'Training', 'Development'], [['Focus', 'Present job', 'Future role'], ['Term', 'Short-term', 'Long-term'], ['Orientation', 'Job / technical', 'Career / conceptual'], ['Initiated by', 'Organisation', 'Individual and organisation'], ['Nature', 'Specific and narrow', 'Broad and general']])}
<h3>Need and importance</h3>
${T(['For the organisation', 'For the employee'], [[UL('Bridges the gap between required and actual skills', 'Improves quality and productivity; cuts wastage, errors, accidents', 'Reduces supervision cost', 'Prepares staff for change and higher responsibility', 'Strengthens competitiveness; supports succession planning', 'Lowers turnover'), UL('Adapts to new technology and processes', 'Boosts morale, confidence and job satisfaction', 'Supports career growth and promotion')]])}
<h3>The training process (slides: six-step cycle)</h3>
${FLOW('1 Assess organisational objectives and strategies', '2 Training needs assessment', '3 Set training goals', '4 Design the programme', '5 Execute (implement)', '6 Evaluate results')}
<h3>Identifying training needs - three-level TNA</h3>
${T(['Level', 'Question asked'], [['Organisational analysis', 'Are business goals being met? Where are the overall gaps (strategy, structure, climate)?'], ['Task analysis', 'What knowledge, skills and standards does the job need? (defines training content)'], ['Person analysis', 'Who needs training and what gap exists between current and required performance? (appraisals, supervisor feedback, self-assessment)']])}
${TIP('"Explain the process of identifying training needs" - structure it as Organisation → Task → Person.')}
<h2>2. Methods of training</h2>
${T(['On-the-job (at the workplace)', 'Off-the-job (away from the workplace)'], [[UL('<b>Job rotation</b> - move across jobs / departments', '<b>Coaching</b> - supervisor guides and gives regular feedback', '<b>Mentoring</b> - experienced mentor gives long-term career guidance', '<b>Apprenticeship</b> - long structured programme of work plus instruction, leads to a qualification'), UL('<b>Lectures</b> - instructor-led classroom sessions', '<b>Case studies</b> - analyse business situations', '<b>Role play</b> - act out work scenarios', '<b>Simulation</b> - replicated equipment or situation (flight simulator)', '<b>Vestibule training</b> - training area near the workplace with the same machines')]])}
${T(['Basis', 'On-the-job', 'Off-the-job'], [['Location', 'Actual workplace', 'Away from the workplace'], ['Cost', 'Generally lower', 'Generally higher'], ['Disruption to work', 'Higher', 'Lower'], ['Advantage', 'Practical, no separate facility', 'Focused learning, good for theory'], ['Disadvantage', 'Quality depends on the trainer', 'Skills may not transfer fully']])}
<h2>3. Evaluating training effectiveness</h2>
<h3>Kirkpatrick's four-level model</h3>
${T(['Level', 'Measures', 'How'], [['1 Reaction', 'How participants felt - engaging, relevant, useful?', 'Feedback forms right after training'], ['2 Learning', 'Increase in knowledge or skill', 'Pre-test and post-test'], ['3 Behaviour', 'Is the learning applied on the job?', 'Observation after weeks or months'], ['4 Results', 'Business impact - productivity, errors, sales, quality', 'Organisational metrics']])}
<p>Other approaches: <b>ROI of training</b> (monetary benefit vs cost) and <b>pre-test / post-test comparison</b>.</p>
<h2>4. Performance appraisal (PA)</h2>
<p>PA is the systematic evaluation of an employee's job performance against pre-set standards, done periodically (annually or half-yearly).</p>
${UL('<b>Objectives:</b> basis for promotion, increment and reward; identify training needs; give structured feedback; <b>validate selection</b> (are the people hired performing?); improve manager-employee communication; support succession planning and career development.')}
${T(['Traditional methods', 'Modern methods'], [[UL('<b>Ranking</b> - best to worst; does not show by how much', '<b>Graphic rating scale</b> - rate traits on 1-5', '<b>Checklist</b> - yes / no or descriptive statements', '<b>Confidential reports</b> - supervisor\'s private assessment, common in government / PSUs'), UL('<b>MBO</b> - manager and employee set measurable objectives together; judged against them', '<b>360-degree</b> - feedback from supervisors, peers, subordinates, self, sometimes customers', '<b>BARS</b> - rating scale anchored with descriptions of behaviour at each rating point')]])}
${T(['Basis', 'Traditional', 'Modern'], [['Approach', 'Trait-based, subjective', 'Goal / behaviour-based, more objective'], ['Employee involvement', 'Minimal', 'High (MBO, 360-degree)'], ['Feedback sources', 'Usually the supervisor', 'Multiple sources'], ['Examples', 'Ranking, graphic scale, checklist, confidential reports', 'MBO, 360-degree, BARS']])}
${TIP('MBO, 360-degree and BARS are each separate 2-mark "explain the concept" questions - be able to define each in 2-3 lines.')}
<h2>5. Common biases in performance evaluation</h2>
${T(['Bias', 'Meaning'], [
    ['Halo effect', 'One strong positive impression (e.g. punctuality) lifts ratings in unrelated areas'],
    ['Horn effect', 'The opposite - one negative trait or incident drags down the overall rating'],
    ['Central tendency', 'Rating almost everyone "average" to avoid extremes and conflict'],
    ['Leniency / strictness', 'Consistently rating higher (leniency) or lower (strictness) than deserved'],
    ['Recency effect', 'Giving too much weight to the most recent performance'],
    ['Stereotyping', 'Judging by assumptions about a group (gender, age, department)']])}
<p><b>How to reduce them:</b> clear standards, rater training, multiple raters (360-degree), documenting performance through the year, and review of ratings.</p>
${TIP('For a 6-mark answer list all six biases with a one-line definition each.')}
${QR([['T&amp;D need', 'Bridges skill gaps, boosts productivity, prepares for change and career growth'], ['TNA levels', 'Organisation → Task → Person'], ['OJT methods', 'Job rotation, coaching, mentoring, apprenticeship'], ['Off-the-job', 'Lectures, case study, role play, simulation, vestibule'], ['Kirkpatrick', 'Reaction → Learning → Behaviour → Results'], ['PA objectives', 'Promotion, training needs, feedback, validating selection'], ['Traditional PA', 'Ranking, graphic scale, checklist, confidential reports'], ['Modern PA', 'MBO, 360-degree, BARS'], ['Biases', 'Halo, horn, central tendency, leniency / strictness, recency, stereotyping']])}`;

  // ------------------------------------------------------------------ UNIT IV
  const U4 = `
<div class="box"><b>Unit IV - Compensation, Employee Welfare and Industrial Relations (11 lectures).</b> Career planning, job evaluation, compensation, wage policy and theories, industrial relations, disputes, collective bargaining and grievances.</div>
${SRC('HRM_Complete_Notes-DEQ_s-FM.pdf (Unit IV) and UNIT_4_updated slides.')}
<h2>1. Career planning and development</h2>
<p><b>Career planning</b> is becoming aware of one's skills, interests and values and setting goals for a chosen career; <b>career development</b> is the organisation's ongoing activity (training, mentoring, job rotation) to enhance careers. Benefits: retention, motivation, a talent pipeline, strategic alignment.</p>
${T(['Career stage', 'Roughly', 'Focus'], [
    ['1 Exploration', 'Early 20s', 'Discovering interests, abilities, values; trying roles'],
    ['2 Establishment', 'Mid-20s to mid-30s', 'Choose a path, build competence, gain credibility'],
    ['3 Mid-career', 'Mid-30s to 50s', 'Peak productivity and responsibility; may grow or plateau; mid-career crisis'],
    ['4 Late career', '50s onward', 'Mentor and sharer of expertise; prepare for exit'],
    ['5 Decline / disengagement', 'Final stage', 'Reduced involvement, retirement preparation, knowledge transfer']])}
<p><b>Succession planning</b> - identifying and developing internal talent (stretch assignments, mentoring, training) for key future positions so there is no leadership vacuum.</p>
${T(['Basis', 'Individual career management', 'Organisational career management'], [['Who drives it', 'The employee', 'The organisation (HR)'], ['Focus', 'Personal goals, self-assessment, skills', 'Future talent and leadership needs'], ['Tools', 'Self-assessment, networking, upskilling', 'Succession planning, training, mentoring, career ladders'], ['Outcome', 'Personal career satisfaction', 'Steady pipeline of capable talent']])}
<h2>2. Job evaluation</h2>
<p>The systematic process of determining the <b>relative worth of jobs</b> to build a fair pay structure. It evaluates the <b>job, not the person</b> holding it. <b>Objectives:</b> fair and equitable wage structure, fewer wage disputes through transparent criteria, rational basis for pay differentials.</p>
${T(['Method', 'How it works', 'Note'], [
    ['Ranking', 'Whole jobs ranked highest to lowest', 'Simplest; impractical with many jobs; does not show the gap'],
    ['Job classification (grading)', 'Jobs slotted into predefined grades (Grade I, II, III)', 'Common in government and large organisations'],
    ['Point method', 'Break jobs into compensable factors (skill, effort, responsibility, conditions); assign points; total gives worth', 'Most objective and widely used'],
    ['Factor comparison', 'Compare jobs with benchmark "key jobs" factor by factor', 'More complex'],
    ['Hay Guide Chart-Profile (slides)', 'Rates know-how, problem-solving, accountability', 'Used by consultants'],
    ['Market pricing (slides)', 'Worth set by what the market pays', 'External benchmark']])}
${TIP('Ranking and point method are the most tested definitions; a 6-mark question may ask for any four methods.')}
<h2>3. Employee compensation</h2>
${T(['Objectives', 'Meaning'], [['Internal equity', 'Employees feel fairly paid relative to others in comparable work'], ['External equity', 'Pay is competitive with other firms in the market'], ['Attract and retain talent', 'Good pay structure draws and keeps capable people'], ['Motivate performance', 'Incentives align effort with goals'], ['Legal compliance', 'Follow statutes such as the Minimum Wages Act']])}
${T(['Component', 'Meaning', 'Examples'], [['Base pay (basic salary)', 'Fixed, guaranteed; basis for allowances and PF', 'Monthly basic by role and grade'], ['Incentives', 'Variable, performance-linked pay', 'Sales commission, productivity bonus, profit-sharing'], ['Fringe benefits', 'Non-cash / indirect benefits', 'Health insurance, Provident Fund, paid leave, company vehicle, subsidised meals, housing allowance']])}
${TIP('"Components of compensation": always mention base pay, incentives and fringe benefits with one example each.')}
<h2>4. Wage policy, wage theories and wage board</h2>
<p><b>Wage policy</b> - the guiding principles and framework for fixing, revising and administering wages: fair, motivating, competitive, legal and affordable.</p>
${T(['Theory', 'Proponent', 'Core idea'], [
    ['Subsistence (Iron Law of Wages)', 'David Ricardo', 'Wages settle at the minimum needed to survive; higher wages increase labour supply and push wages back down'],
    ['Wage Fund', 'Adam Smith / J. S. Mill', 'A fixed fund of capital is set aside for wages; average wage = fund ÷ number of workers'],
    ['Bargaining theory of wages', 'John Davidson', 'Wages result from the relative bargaining power of employers and employees (unions), ability to pay and labour supply']])}
<p><b>Wage Board</b> - a <b>tripartite</b> body of government, employer and employee (trade union) representatives that studies and recommends the wage structure for a specific industry (e.g. textile, press / journalism).</p>
${T(['Factors influencing wage and salary administration', 'Explanation'], [['Demand and supply of labour', 'Scarce skills command higher wages'], ['Cost of living', 'Periodic revision, e.g. dearness allowance'], ['Ability to pay', 'Strong firms can pay more'], ['Prevailing industry rates', 'Benchmark against competitors'], ['Government legislation', 'Minimum Wages Act sets a floor'], ['Productivity', 'Higher productivity supports higher wages']])}
${TIP('Three wage theories = name + proponent + one line of logic: a strong 6-mark question.')}
<h2>5. Industrial relations (IR)</h2>
<p>IR is the relationship between <b>employers, employees and the government</b> covering negotiations, agreements, disputes and the work environment. <b>Importance:</b> industrial peace (fewer strikes and lockouts), higher productivity, structured conflict resolution, economic and social stability.</p>
<h3>Industrial disputes</h3>
<p>A conflict between employers and employees (or their representatives) about terms of employment, conditions of work or rights and obligations. <b>Strike</b> - collective refusal to work by employees; <b>lockout</b> - employer temporarily closes the workplace or refuses work.</p>
<h3>Collective bargaining</h3>
<p>Negotiation between the employer (or association) and employees (usually through a union) to decide wages, hours and working conditions <b>by mutual agreement</b>. Features: a negotiation, not a one-sided decision; ends in a <b>collective agreement</b> binding for an agreed period; balances efficiency and cost control with fair treatment.</p>
<h3>Grievance handling machinery</h3>
<p>A <b>grievance</b> is any discontent, expressed or not, arising from the job that the employee thinks unfair. The machinery is the formal system to raise, escalate and resolve grievances in time.</p>
${T(['Approach', 'Meaning'], [['Open door policy', 'Employees approach senior management directly; works in small organisations, impractical at scale'], ['Step-ladder procedure', 'Grievance climbs levels if unresolved: 1 immediate supervisor → 2 department head → 3 HR / grievance committee → 4 top management or arbitration (in unionised firms)']])}
${TIP('"Explain the grievance handling procedure" is a common 6-mark question - describe the step-ladder with all levels numbered.')}
${QR([['Career stages', 'Exploration → Establishment → Mid-career → Late career → Decline'], ['Succession planning', 'Identify and develop internal talent for key future roles'], ['Job evaluation', 'Relative worth of jobs, not of job-holders'], ['Methods', 'Ranking, classification, point method, factor comparison'], ['Compensation components', 'Base pay, incentives, fringe benefits'], ['Wage theories', 'Subsistence (Ricardo), Wage fund (Smith / Mill), Bargaining (Davidson)'], ['Wage board', 'Tripartite body recommending industry wage structures'], ['Industrial relations', 'Employer - employee - government relationship'], ['Disputes', 'Strike (employees) and lockout (employer)'], ['Grievance handling', 'Open door or step-ladder procedure']])}`;

  const link = (n) => `<div class="nextsteps"><span>Next steps - Unit ${n}</span><a class="nbtn" href="#/hrm/qa">✍️ Detailed written answers</a><a class="nbtn" href="#/hrm/quiz">▶ Practise MCQs</a><a class="nbtn" href="#/expected/hrm">🎯 Important questions</a></div>`;
  const pages = [
    { id: 'u1-new', after: 'u1', title: 'Unit I-B · Complete notes - evolution, objectives, HRM vs PM, roles, digital HR', html: U1 + link('I') },
    { id: 'u2-new', after: 'u2', title: 'Unit II-B · Complete notes - HRP, job analysis, recruitment, selection', html: U2 + link('II') },
    { id: 'u3-new', after: 'u3', title: 'Unit III-B · Complete notes - training, appraisal, biases', html: U3 + link('III') },
    { id: 'u4-new', after: 'u4', title: 'Unit IV-B · Complete notes - career, job evaluation, compensation, IR', html: U4 + link('IV') },
  ];
  pages.forEach((pg) => {
    const at = SUB.units.findIndex((u) => u.id === pg.after);
    const unit = { id: pg.id, title: pg.title, html: pg.html };
    if (at >= 0) SUB.units.splice(at + 1, 0, unit); else SUB.units.push(unit);
  });
  SUB.notes2 = pages;
})();
