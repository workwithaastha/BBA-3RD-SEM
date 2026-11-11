// Human Resource Management - written Q&A bank, DETAILED model answers. Part 1: Unit I.
// Questions follow the "Important Questions" PDF. Unit I-II have no notes PDF: answers are written from standard HRM knowledge.
// Answer depth: 2 marks = definition + 2 explained points + example · 3 marks = intro + 3 explained points + example ·
// 5-6 marks = intro + headed explained points + table/example + conclusion · 10 marks = intro, full headings, table, example, conclusion.
(function () {
  const { L, O, E, T } = window.ExamQA;
  const IQ = (u, n) => `Important Questions - Unit ${u}, Q${n}`;
  const X = ' [answer from standard HRM knowledge - no notes PDF for this unit]';
  const P = (s) => `<p>${s}</p>`;
  const H = (s) => `<h4>${s}</h4>`;

  window.ExamQA.add('hrm', [
    // ---------- Introduction to HRM ----------
    { m: 2, u: 'Unit I', t: 'Introduction to HRM', p: 3, q: `Define Human Resource Management.`,
      a: P(`<b>Human Resource Management (HRM)</b> is the process of <b>acquiring, developing, motivating and maintaining</b> a competent workforce so that the organisation can achieve its goals efficiently.`) +
        L(`<b>Acquiring</b> - planning, recruiting and selecting the right people.`, `<b>Developing and motivating</b> - training, rewarding and guiding them to perform better.`, `<b>Maintaining</b> - looking after their health, safety, welfare and relations with the management.`) +
        E(`A retail chain that plans its staff needs, hires and trains store employees, pays incentives and handles their complaints is practising HRM.`),
      ms: `Definition 1 · two explained points 0.5 each · example 0.5`, src: IQ(1, 1) + X },
    { m: 2, u: 'Unit I', t: 'Introduction to HRM', p: 2, q: `State the nature (features) of HRM.`,
      a: P(`HRM is concerned with managing the people of an organisation in a planned way.`) +
        L(`<b>People oriented</b> - it deals with human beings, not machines or money.`, `<b>Continuous process</b> - it is not a one-time activity; it goes on as long as the organisation exists.`, `<b>Pervasive</b> - every manager, not only the HR department, performs HR work.`, `<b>Strategic</b> - it is linked with business objectives.`),
      ms: `Any four features, 0.5 each`, src: `Core syllabus (Unit I)` + X },
    { m: 3, u: 'Unit I', t: 'Introduction to HRM', p: 2, q: `Explain the features of HRM with examples.`,
      a: P(`HRM treats employees as a valuable resource and manages them in a systematic and continuous way. Its main features are:`) +
        O(`<b>People-oriented:</b> HRM deals with human beings whose feelings and motivation affect performance. <i>Example:</i> a manager who recognises good work boosts morale.`, `<b>Continuous process:</b> hiring, training, appraisal and welfare go on throughout the life of the firm, not only at hiring time.`, `<b>Pervasive function:</b> every department manager supervises, appraises and motivates his own team, so HRM is everyone's job.`, `<b>Strategic and integrated:</b> HR plans are made to support the business strategy, e.g. hiring digital skills when the firm moves online.`),
      ms: `Introduction 0.5 · three features with explanation 2 · example 0.5`, src: `Core syllabus (Unit I)` + X },
    { m: 5, u: 'Unit I', t: 'Introduction to HRM', p: 3, q: `Discuss the scope of HRM.`,
      a: H(`Introduction`) + P(`The scope of HRM covers all activities connected with an employee from the time of entering the organisation until leaving it. It is the <b>employee life cycle</b>.`) +
        H(`Scope of HRM`) +
        O(`<b>Procurement (acquisition):</b> HR planning, job analysis, recruitment and selection - getting the right people in the right number.`, `<b>Development:</b> induction, training, career development and succession planning - improving knowledge, skills and attitudes.`, `<b>Compensation:</b> job evaluation, wages, incentives and fringe benefits - fair reward for work.`, `<b>Integration and maintenance:</b> motivation, health and safety, welfare, grievance handling and industrial relations - keeping employees satisfied and committed.`, `<b>Separation:</b> resignation, retirement, retrenchment and exit interviews.`) +
        H(`Conclusion`) + P(`Thus HRM extends from planning the workforce to managing exit, covering every people-related activity.`),
      ms: `Introduction 1 · five areas of scope 3 · conclusion 1`, src: `Core syllabus (Unit I)` + X },
    { m: 10, u: 'Unit I', t: 'Introduction to HRM', p: 3, q: `Define HRM and discuss its objectives and scope. Trace the evolution of Human Resource Management.`,
      a: H(`1. Introduction`) + P(`People are the most important resource of an organisation. <b>Human Resource Management</b> is the process of <b>acquiring, developing, motivating and maintaining</b> a workforce so that the organisation achieves its goals. It is both a function of management and a philosophy that sees employees as valuable assets rather than as a cost.`) +
        H(`2. Objectives of HRM`) +
        T(['Objective', 'Meaning', 'Illustration'], [['Organisational', 'Contribute to the effectiveness of the organisation; right people at the right place', 'Workforce planning for a new plant'], ['Functional', 'Keep the HR department\'s service in proportion to the organisation\'s needs', 'Cost-effective recruitment and payroll'], ['Societal', 'Behave ethically and responsibly towards society; follow laws', 'Equal opportunity, no child labour'], ['Personal', 'Help employees achieve their own goals, growth and satisfaction', 'Training, promotion paths']]) +
        H(`3. Scope of HRM`) +
        L(`<b>Procurement:</b> HR planning, job analysis, recruitment, selection, placement.`, `<b>Development:</b> training, career development, succession planning.`, `<b>Compensation:</b> job evaluation, wage and salary administration, incentives, benefits.`, `<b>Integration and maintenance:</b> motivation, welfare, health and safety, grievance and industrial relations.`, `<b>Separation:</b> retirement, resignation, retrenchment.`) +
        H(`4. Evolution of HRM`) +
        T(['Stage', 'Approach'], [['Welfare work', 'Employers looked after workers\' working conditions and welfare'], ['Personnel management', 'Clerical and administrative: hiring, payroll, records, discipline'], ['Human resource management', 'People seen as resources; planning, development and motivation linked to strategy'], ['Strategic HRM', 'HR fully aligned with business strategy, technology and globalisation']]) +
        E(`A factory that earlier only kept attendance registers now runs HR analytics, training programmes and career paths for its staff.`) +
        H(`5. Conclusion`) + P(`HRM has grown from simple welfare and record keeping into a strategic partner of top management, because the quality of people decides the success of every organisation.`),
      ms: `Introduction 1 · objectives 2.5 · scope 2.5 · evolution 3 · conclusion 1`, src: IQ(1, 1) + X },
    { m: 6, u: 'Unit I', t: 'Objectives of HRM', p: 3, q: `Explain the objectives of HRM under the headings of organisational, functional, societal and personal objectives.`,
      a: H(`Introduction`) + P(`HRM objectives are the goals that the HR function sets to serve the organisation, its employees and society. They are classified into four groups.`) +
        H(`1. Organisational objectives`) + P(`HRM exists to help the organisation become effective. It does not exist for itself. It ensures the <b>right people are in the right place</b> and supports the achievement of organisational goals.`) +
        H(`2. Functional objectives`) + P(`These keep the contribution of the HR department at a level suitable to the organisation's needs. Resources should be used well: an HR department that is too costly or too weak for the firm's size defeats its purpose.`) +
        H(`3. Societal objectives`) + P(`The organisation must be ethically and socially responsible. This includes obeying laws, giving fair employment and reducing the negative impact of its business on society. Failure can lead to restrictions or loss of reputation.`) +
        H(`4. Personal objectives`) + P(`HRM helps employees achieve their personal goals so long as these also support the organisation. Training, career growth, fair pay and recognition increase motivation, satisfaction and retention.`) +
        E(`A company that plans its workforce (organisational), keeps HR cost reasonable (functional), follows labour laws (societal) and offers training and promotion (personal).`),
      ms: `Introduction 1 · four objectives 1 each · example 1`, src: IQ(1, 1) + X },
    { m: 3, u: 'Unit I', t: 'Objectives of HRM', p: 2, q: `What are the societal objectives of HRM?`,
      a: P(`Societal objectives mean that the HR department must be <b>ethically and socially responsible</b> to the society in which the firm operates.`) +
        L(`<b>Compliance with laws:</b> labour laws, minimum wages, safety and non-discrimination rules.`, `<b>Fair employment:</b> equal opportunity for all groups without bias of gender, caste or religion.`, `<b>Reducing negative impact:</b> avoiding practices that harm society, such as child labour or exploitation.`) +
        E(`A firm that hires persons with disabilities and follows the minimum wage law meets its societal objectives.`),
      ms: `Meaning 1 · three points 1.5 · example 0.5`, src: IQ(1, 1) + X },

    // ---------- HRM vs Personnel Management ----------
    { m: 2, u: 'Unit I', t: 'HRM vs Personnel Management', p: 3, q: `What is Personnel Management?`,
      a: P(`<b>Personnel Management</b> is the older, administrative approach to handling employees. It is concerned with routine activities such as <b>recruitment, payroll, attendance, discipline and record keeping</b>.`) +
        L(`It treats employees as a <b>cost</b> to be controlled.`, `It is <b>reactive</b>: it acts only when a problem arises, and it has little link with business strategy.`) + E(`A personnel department that only maintains attendance registers and processes salaries.`),
      ms: `Definition 1 · two points 0.5 each · example 0.5`, src: IQ(1, 2) + X },
    { m: 3, u: 'Unit I', t: 'HRM vs Personnel Management', p: 3, q: `State any three differences between HRM and Personnel Management.`,
      a: T(['Basis', 'Personnel Management', 'HRM'], [['View of employees', 'A cost to be minimised', 'A valuable resource / asset to be developed'], ['Approach', 'Reactive and routine', 'Proactive and strategic'], ['Scope', 'Hiring, payroll, records', 'Planning, development, motivation, culture']]) +
        P(`<b>Explanation:</b> personnel management is limited to administering employees, while HRM aims at developing people and linking them to business strategy for long-term growth.`),
      ms: `Three differences 1 each`, src: IQ(1, 2) + X },
    { m: 6, u: 'Unit I', t: 'HRM vs Personnel Management', p: 3, q: `"HRM is not merely an extension of Personnel Management but a paradigm shift." Critically examine this statement by distinguishing between HRM and Personnel Management.`,
      a: H(`Introduction`) + P(`A <b>paradigm shift</b> is a fundamental change in the way of thinking. The statement says that HRM is not just old personnel management with a new name; it changes how the organisation looks at its people.`) +
        H(`Distinction`) +
        T(['Basis', 'Personnel Management', 'HRM'], [['View of people', 'A cost to be controlled', 'A valuable resource that can be developed'], ['Approach', 'Reactive, routine, clerical', 'Proactive and strategic'], ['Scope', 'Payroll, attendance, records, discipline', 'Planning, development, motivation, culture'], ['Link with strategy', 'None or weak', 'Fully integrated with business strategy'], ['Role of the manager', 'Staff specialist working alone', 'Strategic partner; line managers share HR work'], ['Time horizon', 'Short term', 'Long term']]) +
        H(`Critical examination`) +
        L(`<b>In favour:</b> HRM brings a new philosophy - people as assets, commitment instead of compliance, and strategic planning.`, `<b>Against:</b> basic activities such as hiring, pay and discipline are the same in both; in many firms HRM is only a change of name.`) +
        H(`Conclusion`) + P(`The statement is largely true where HRM is truly strategic; it is a shift in outlook, not merely in functions.`),
      ms: `Introduction 1 · table (any 4 rows) 3 · critical view 1 · conclusion 1`, src: IQ(1, 2) + X },

    // ---------- Functions of HRM ----------
    { m: 2, u: 'Unit I', t: 'Functions of HRM', p: 3, q: `Name the managerial and operative functions of HRM.`,
      a: L(`<b>Managerial functions:</b> planning, organising, directing and controlling HR activities.`, `<b>Operative functions:</b> procurement, development, compensation, integration and maintenance of employees.`) +
        P(`Managerial functions apply the management process to HR; operative functions are the specific HR activities performed.`),
      ms: `Managerial 1 · operative 1`, src: IQ(1, 3) + X },
    { m: 3, u: 'Unit I', t: 'Functions of HRM', p: 3, q: `Explain the managerial functions of HRM.`,
      a: P(`The managerial functions apply the four functions of management to the human resource area.`) +
        O(`<b>Planning:</b> forecasting HR needs and framing policies, programmes and procedures. <i>E.g.</i> a manpower plan.`, `<b>Organising:</b> grouping activities, defining duties and authority, and creating relationships among employees.`, `<b>Directing:</b> guiding, motivating, communicating with and leading employees so that they work willingly.`, `<b>Controlling:</b> comparing actual performance with standards and correcting deviations through appraisal and audit.`),
      ms: `Introduction 0.5 · four functions 2 · example 0.5`, src: IQ(1, 3) + X },
    { m: 5, u: 'Unit I', t: 'Functions of HRM', p: 3, q: `Explain the managerial and operative functions of HRM.`,
      a: H(`Introduction`) + P(`The functions of HRM are broadly divided into managerial and operative functions. Managerial functions apply management principles to HR; operative functions are the specific tasks of managing people.`) +
        H(`A. Managerial functions`) +
        L(`<b>Planning</b> - setting HR objectives, forecasting the workforce and framing HR policies.`, `<b>Organising</b> - creating the HR structure, assigning duties and delegating authority.`, `<b>Directing</b> - motivation, leadership and communication.`, `<b>Controlling</b> - appraisal, audit and corrective action.`) +
        H(`B. Operative functions`) +
        T(['Function', 'Activities'], [['Procurement', 'HR planning, recruitment, selection, placement'], ['Development', 'Training, career development, succession planning'], ['Compensation', 'Job evaluation, wages, incentives, benefits'], ['Integration', 'Uniting employee and organisational interests, motivation, participation'], ['Maintenance', 'Health, safety, welfare, grievance handling']]) +
        H(`Conclusion`) + P(`Managerial functions guide the process while operative functions carry out the HR work; together they make HRM effective.`),
      ms: `Introduction 0.5 · managerial 2 · operative 2 · conclusion 0.5`, src: IQ(1, 3) + X },

    // ---------- Role of HR Manager ----------
    { m: 3, u: 'Unit I', t: 'Role of HR Manager', p: 3, q: `Explain any three roles of the HR manager.`,
      a: O(`<b>Policy maker / adviser:</b> advises top management on HR policies such as hiring, pay and discipline and helps frame them.`, `<b>Conciliator (mediator):</b> acts as a link between management and employees; handles grievances and settles disputes.`, `<b>Strategic partner and change agent:</b> helps plan the business, introduces new technology and manages organisational change.`) +
        E(`When two employees quarrel, the HR manager hears both and settles the matter fairly (conciliator).`),
      ms: `Three roles with explanation 2.5 · example 0.5`, src: IQ(1, 4) + X },
    { m: 6, u: 'Unit I', t: 'Role of HR Manager', p: 3, q: `Discuss the role of the HR manager and how it is changing.`,
      a: H(`Introduction`) + P(`The HR manager is the person responsible for planning and carrying out all people-related activities of the organisation. The role has changed from administrator to strategic partner.`) +
        H(`Traditional roles`) +
        L(`<b>Administrator and record keeper</b> - maintaining files, payroll and attendance.`, `<b>Policy maker</b> - framing HR rules and procedures.`, `<b>Conciliator / mediator</b> - link between employees and management; handles grievances.`, `<b>Welfare officer</b> - looks after health, safety and facilities.`) +
        H(`Changing role`) +
        T(['Old role', 'New role'], [['Record keeper', 'Strategic partner of top management'], ['Controls and enforces rules', 'Change agent who leads culture and technology change'], ['Looks after the department', 'Employee champion - engagement, well-being, development'], ['Works from files', 'Uses HR data and analytics for decisions']]) +
        H(`Conclusion`) + P(`The HR manager has moved from paperwork to partnership: from managing people to developing a competitive workforce.`),
      ms: `Introduction 1 · traditional roles 2 · changing role 2 · conclusion 1`, src: IQ(1, 4) + X },
    { m: 5, u: 'Unit I', t: 'Importance of HRM', p: 3, q: `What are the essential skills required for an HR manager?`,
      a: P(`The HR manager deals with people at all levels, so both people skills and business skills are needed.`) +
        O(`<b>Communication and interpersonal skills</b> - to listen, explain, counsel and persuade employees and management.`, `<b>Leadership and negotiation skills</b> - to motivate teams and settle conflicts and bargaining.`, `<b>Analytical and decision-making skills</b> - to study HR data, forecast manpower needs and solve problems.`, `<b>Technical / IT skills</b> - to use HR software, online recruitment and HR analytics.`, `<b>Ethics and integrity</b> - to keep confidences and treat everyone fairly.`) +
        P(`<b>Conclusion:</b> a successful HR manager combines human understanding with business and technical competence.`),
      ms: `Introduction 0.5 · five skills with explanation 4 · conclusion 0.5`, src: IQ(1, 6) + X },
    { m: 6, u: 'Unit I', t: 'Importance of HRM', p: 3, q: `Explain the importance of HRM in the emerging scenario. What are the essential skills for an HR manager?`,
      a: H(`Introduction`) + P(`Competition, new technology and globalisation have made skilled and committed people the main source of competitive advantage. This has increased the importance of HRM.`) +
        H(`Importance of HRM`) +
        L(`<b>Competitive advantage:</b> machines and money can be copied, but skilled, motivated people cannot.`, `<b>Coping with technology change:</b> continuous training keeps employees up to date.`, `<b>Higher productivity and lower turnover:</b> motivated employees perform better and stay longer.`, `<b>Legal and ethical compliance:</b> HRM keeps the firm within labour laws and builds a good image.`, `<b>Better industrial relations:</b> fair policies reduce disputes.`) +
        H(`Essential skills of an HR manager`) +
        L(`Communication and interpersonal skills.`, `Leadership, negotiation and conflict handling.`, `Analytical and IT skills (HR analytics).`, `Ethics and integrity.`),
      ms: `Introduction 1 · importance 3 · skills 2`, src: IQ(1, 6) + X },

    // ---------- HR Policies ----------
    { m: 2, u: 'Unit I', t: 'HR Policies', p: 2, q: `What is an HR policy?`,
      a: P(`An <b>HR policy</b> is a general guideline or standing plan that tells managers how to deal with people matters consistently, so that similar cases are treated alike.`) +
        L(`It guides decisions on matters like recruitment, promotion, leave, pay and discipline.`, `It is written, communicated and applied equally throughout the organisation.`) + E(`A leave policy that gives every employee the same number of casual leaves.`),
      ms: `Definition 1 · two points 0.5 each · example 0.5`, src: IQ(1, 5) + X },
    { m: 3, u: 'Unit I', t: 'HR Policies', p: 3, q: `"HRM policies and principles contribute to the effectiveness, continuity and stability of the organisation." Explain.`,
      a: P(`HR policies and principles are the framework within which all HR decisions are made. They help the organisation in three ways:`) +
        O(`<b>Effectiveness:</b> clear policies guide managers, save time in decision making and keep decisions in line with organisational goals.`, `<b>Continuity:</b> policies remain the same even when managers change, so work and practices continue smoothly.`, `<b>Stability:</b> equal and predictable treatment of employees reduces conflicts, builds trust and keeps morale and attrition steady.`) +
        E(`A written promotion policy applies the same rules to every employee irrespective of who the manager is.`),
      ms: `Introduction 0.5 · three points 2 · example 0.5`, src: IQ(1, 5) + X },
    { m: 5, u: 'Unit I', t: 'HR Policies', p: 2, q: `Explain the importance and principles of a good HR policy.`,
      a: H(`Importance`) + L(`Ensures uniform and fair treatment of employees.`, `Speeds up decisions because the rules are already known.`, `Helps in control, because actual practice can be compared with policy.`, `Builds employee confidence and a good organisational image.`) +
        H(`Principles of a good policy`) + L(`Clear, written and easily understood.`, `Consistent with the law and organisational objectives.`, `Reasonable, flexible and capable of review.`, `Communicated to all employees and applied equally.`),
      ms: `Importance 2.5 · principles 2.5`, src: IQ(1, 5) + X },

    // ---------- Changing role (globalisation / digital) ----------
    { m: 5, u: 'Unit I', t: 'Role of HR Manager', p: 3, q: `Examine the changing role of HR in the era of globalisation and digital transformation.`,
      a: H(`Introduction`) + P(`Globalisation has created multinational and multicultural workplaces, and digital technology has changed how work is done. HR must change from an administrative department to a strategic one.`) +
        H(`Effect of globalisation`) + L(`Managing diverse, multicultural teams and global talent.`, `Common standards of HR practice across countries with respect for local laws and culture.`) +
        H(`Effect of digital transformation`) +
        L(`<b>HR technology:</b> HRMS software, online recruitment, e-learning, biometric attendance.`, `<b>Remote and hybrid work:</b> flexible policies and virtual team management.`, `<b>HR analytics:</b> data-based decisions on hiring, attrition and performance.`, `<b>Re-skilling:</b> training employees for new technologies such as AI.`) +
        H(`Conclusion`) + P(`HR is now a strategic partner and change agent that builds skills, culture and flexibility to compete globally.`),
      ms: `Introduction 1 · globalisation 1.5 · digital 2 · conclusion 0.5`, src: IQ(1, 7) + X },
    { m: 10, u: 'Unit I', t: 'Role of HR Manager', p: 2, q: `"The role of the HR manager has changed from administrator to strategic partner." Discuss, with reference to globalisation and digital transformation.`,
      a: H(`1. Introduction`) + P(`The HR manager is the person responsible for acquiring, developing and maintaining the human resources of the organisation. Until some decades ago the role was mostly administrative: maintaining records, running payroll and enforcing rules. Competition, globalisation and digital technology have changed this role.`) +
        H(`2. Traditional role`) + L(`Record keeping, payroll and attendance.`, `Policy enforcement and discipline.`, `Welfare and conciliation between management and workers.`) +
        H(`3. Factors that changed the role`) + T(['Force', 'Effect on HR'], [['Globalisation', 'Multicultural workforce, global hiring, international standards'], ['Technology and digital change', 'HRMS, e-recruitment, e-learning, analytics, remote work'], ['Competition', 'Need for skilled and innovative talent'], ['Changing workforce', 'Younger employees expect flexibility, growth and purpose']]) +
        H(`4. The new roles`) + O(`<b>Strategic partner</b> - participates in business planning.`, `<b>Change agent</b> - leads organisational and technological change.`, `<b>Employee champion</b> - engagement, well-being and career growth.`, `<b>Talent and data manager</b> - HR analytics and skills planning.`, `<b>Culture builder</b> - ethics, diversity and values.`) +
        E(`Instead of filling attendance registers, the HR head of an IT firm studies attrition data, plans reskilling in AI and designs hybrid-work policy.`) +
        H(`5. Conclusion`) + P(`The HR manager has become a partner who influences business strategy. Success needs business knowledge, technology skill and human understanding.`),
      ms: `Introduction 1 · traditional role 1.5 · factors 2 · new roles 3 · example 1 · conclusion 1.5`, src: IQ(1, 7) + X },
  ]);
})();
