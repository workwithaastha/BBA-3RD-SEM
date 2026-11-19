// HRM written Q&A - part 9: 5-6 mark answers made at least twice as long (Units III-IV). Each entry ADDS further points, a table or example and an exam tip to the existing answer (question starts with `k`, same marks).
(function () {
  const { L, O, E, T, F } = window.ExamQA;
  const P = (s) => `<p>${s}</p>`;
  const H = (s) => `<h4>${s}</h4>`;
  const more = (m, k, a) => {
    const q = (window.ExamQA.data.hrm || []).find((x) => x.m === m && x.q.startsWith(k));
    if (q) q.a += a; else console.warn('hrm9: no match', k);
  };

  // ---------------------------------------------------------------- UNIT III
  more(6, 'Define training and development. Explain their need', H('Further points: training versus development and benefits') + T(['Basis', 'Training', 'Development'], [['Focus', 'Present job', 'Future roles'], ['Scope', 'Narrow - specific skills', 'Broad - overall growth'], ['Time', 'Short term', 'Long term'], ['Target', 'Mostly non-managers', 'Mostly managers'], ['Initiative', 'By the organisation', 'Mostly by the individual']]) +
    L('<b>Benefits to the organisation:</b> higher productivity and quality, less wastage and supervision, fewer accidents, lower attrition, better image and readiness for change.', '<b>Benefits to employees:</b> new skills, confidence, job security, promotion chances and higher pay.', '<b>In a competitive environment</b> skills become outdated quickly - continuous learning is the only way to keep an edge.') +
    E('A bank trains its staff in digital banking; transactions are handled faster, errors fall and customers stay.') +
    P('<b>Exam tip:</b> define both terms, show the difference, then separate the benefits into organisation and employee.'));

  more(6, 'Explain the process of identifying training needs', H('Further points: methods and an example of the three analyses') + T(['Level', 'Question asked', 'Methods'], [['Organisational', 'Where is training needed, and is the organisation ready?', 'Goals, HR plan, efficiency indices, climate surveys'], ['Task / job', 'What must be taught for the job?', 'Job description, job specification, work samples'], ['Person', 'Who needs training and in what?', 'Appraisal, tests, interviews, observation, supervisor reports']]) +
    L('<b>Other methods:</b> questionnaires, customer complaints, quality records, absenteeism and accident data, focus groups.', '<b>Trigger signs:</b> falling quality, complaints, new technology or process, new recruits, promotions.') +
    E('A firm installs new accounting software. Organisational analysis shows a need; task analysis lists the software functions; person analysis shows which accountants lack the skill.') +
    P('<b>Exam tip:</b> the gap formula - required performance minus actual performance = training need - should be written in the answer.'));

  more(5, 'How is the effectiveness of training evaluated', H('Further points: Kirkpatrick, CIPP and ROI') + T(['Level', 'Question', 'Example method'], [['1 Reaction', 'Did they like it?', 'Feedback form at end'], ['2 Learning', 'Did they learn?', 'Pre-test and post-test'], ['3 Behaviour', 'Do they use it on the job?', 'Supervisor observation after 2-3 months'], ['4 Results', 'Did the business improve?', 'Sales, quality, cost, errors']]) +
    L('<b>CIPP model:</b> Context (needs and goals), Input (plans and resources), Process (how it is delivered), Product (outcomes).', '<b>Return on investment (ROI):</b> (Benefits - cost of training) ÷ Cost x 100 - a fifth level added by Phillips.', '<b>Good practice:</b> plan the evaluation before the programme, use control groups where possible, and follow up after some months.') +
    P('<b>Exam tip:</b> name and explain the four levels and mention one more model (CIPP).'));

  more(5, 'Explain the process of performance appraisal', H('Further points: steps in detail and feedback') + O('<b>Set standards</b> - clear, measurable, agreed with the employee.', '<b>Communicate expectations.</b>', '<b>Measure performance</b> through observation, reports, records and ratings.', '<b>Compare</b> actual performance with standards.', '<b>Discuss results</b> in a feedback interview - strengths, weaknesses, improvement plan.', '<b>Take action</b> - training, reward, promotion, transfer or corrective steps.') +
    L('<b>Good feedback</b> is timely, specific, balanced, two-way and aimed at improvement, not blame.', '<b>Who appraises:</b> supervisor, peers, subordinates, self, customers or 360-degree feedback.', '<b>Methods:</b> rating scales, ranking, MBO, critical incident, 360-degree.') +
    P('<b>Exam tip:</b> the process is a loop - after action, new standards are set for the next period.'));

  more(6, 'Define performance appraisal and explain its concept and objectives', H('Further points: more objectives and uses') + L('<b>Administrative uses:</b> promotion, transfer, pay increase, demotion, retention or termination decisions.', '<b>Developmental uses:</b> identify training needs, give feedback, plan careers and succession.', '<b>Motivational uses:</b> recognition and reward improve morale.', '<b>Validation:</b> checks the effectiveness of selection and training programmes.') +
    T(['Appraisal is', 'Appraisal is not'], [['Systematic, periodic, fair and based on job standards', 'A casual opinion or a way to punish'], ['A two-way communication', 'A one-time annual ritual'], ['About performance and potential', 'About personality only']]) +
    P('<b>Why important:</b> it links individual work to organisational goals, supports fair pay and promotion, creates a performance culture, and reduces disputes by giving an objective basis for decisions.') +
    P('<b>Exam tip:</b> quote one definition (e.g. Beach) and group the objectives under administrative and developmental.'));

  more(6, 'Discuss the common biases in performance appraisal', H('Further points: more biases and remedies') + T(['Bias', 'Remedy'], [['Halo / horns effect', 'Rate each trait separately; use multiple raters'], ['Leniency / strictness', 'Train raters; use forced distribution carefully'], ['Central tendency', 'Force a spread or use behaviour-based scales'], ['Recency effect', 'Keep a diary of performance through the year'], ['Similarity / personal bias', 'Use objective criteria and several appraisers'], ['Spillover effect', 'Appraise only the current period'], ['Stereotyping / contrast effect', 'Compare each employee with the standard, not with others']]) +
    L('<b>Overall remedies:</b> clear criteria, rater training, 360-degree feedback, regular check-ins instead of one annual review, appeal system, and appraisal by more than one person.', 'The memory aid for the eight biases is <b>H-H-R-L-S-C-S-C</b> (halo, horns, recency, leniency, strictness, central tendency, similar-to-me, contrast).') +
    E('A manager rates a punctual employee "excellent" on creativity as well, though no evidence exists - a halo error.') +
    P('<b>Exam tip:</b> a table with bias / meaning / remedy answers both parts of the question.'));

  more(5, 'What are the challenges of performance appraisal', H('Further points: more challenges and solutions') + T(['Challenge', 'Solution'], [['Subjectivity and rater errors', 'Objective criteria, rater training'], ['Fear and resistance by employees', 'Involve employees, transparent process'], ['Link with pay creates pressure', 'Separate developmental and reward reviews'], ['Lack of time and paperwork overload', 'Simple forms, HR software'], ['Appraisal seen as a ritual', 'Top management support, follow-up action'], ['Changing goals in fast-moving jobs', 'Quarterly goal reviews, continuous feedback']]) +
    L('<b>Modern answer:</b> replace once-a-year appraisal with continuous feedback, coaching, 360-degree reviews and goal-setting (OKR / MBO).') +
    P('<b>Exam tip:</b> three challenges with three matching remedies gives a complete 5-mark answer.'));

  more(5, 'Define career planning and career development', H('Further points: planning vs development and importance') + T(['Basis', 'Career planning', 'Career development'], [['Done by', 'Individual', 'Organisation with the individual'], ['Focus', 'Personal goals and path', 'Opportunities and support'], ['Activities', 'Self-assessment, goal setting', 'Training, job rotation, mentoring, promotion paths']]) +
    L('<b>Importance for employees:</b> clear direction, motivation, skill growth, job satisfaction, work-life balance.', '<b>Importance for the organisation:</b> skilled and loyal workforce, lower attrition, readiness for future vacancies, better succession.') +
    E('A trainee executive who sees a path to team leader, manager and head within five years is more likely to stay and perform.') +
    P('<b>Exam tip:</b> define both, give objectives and importance for two parties (employee and organisation).'));

  more(6, 'Distinguish between individual career management', H('Further points: responsibilities in a table') + T(['Party', 'Responsibilities'], [['Individual', 'Self-assessment of skills and interests; set goals; keep learning; seek feedback; build networks'], ['Manager', 'Give honest feedback; coach and mentor; assign stretch tasks; support training; recommend for promotion'], ['Organisation', 'Provide career paths, job postings, training, counselling, fair promotion policy, succession plans']]) +
    L('<b>Career stages</b> (exploration, establishment, mid-career, late career, decline) call for different support at each stage.', '<b>Best results</b> occur when the three work together: the individual owns the plan, the manager coaches, and the organisation supplies the opportunities.') +
    P('<b>Exam tip:</b> distinguish with a table, then give the three responsibilities as above.'));

  more(5, 'Explain the benefits and challenges of succession planning', H('Further points: process and examples') + O('Identify key positions.', 'Define the competencies required.', 'Identify and assess potential successors.', 'Develop them through training, rotation, mentoring.', 'Review and update regularly.') +
    L('<b>Types of succession:</b> replacement planning (naming the next person) and talent pool approach (a pipeline of candidates).', '<b>More benefits:</b> protects the firm against sudden loss of a leader, preserves institutional knowledge, and improves investor confidence.', '<b>More challenges:</b> favouritism, secrecy, the "heir" becoming complacent, other employees feeling left out, and changing business needs.') +
    E('A family business groups its senior managers into three ready-now and ready-in-two-years successors for the CEO post and trains them in finance and operations.') +
    P('<b>Exam tip:</b> give three benefits, three challenges and one example.'));

  // ---------------------------------------------------------------- UNIT IV
  more(5, 'Explain the objectives of job evaluation', H('Further points: methods and importance') + T(['Method', 'Type', 'How it works'], [['Ranking', 'Non-analytical', 'Jobs are ranked from highest to lowest'], ['Job classification (grading)', 'Non-analytical', 'Jobs are placed in predefined grades'], ['Point method', 'Analytical', 'Jobs are scored on factors like skill, effort, responsibility, conditions'], ['Factor comparison', 'Analytical', 'Jobs are compared factor by factor against key jobs']]) +
    L('<b>Job evaluation rates the job, not the person</b>; appraisal rates the person.', '<b>More objectives:</b> settle wage disputes, assist in fixing the grade for a new job, support collective bargaining, and help in manpower planning.') +
    P('<b>Exam tip:</b> the objectives plus a one-line mention of the four methods fills 5 marks.'));

  more(6, 'Define employee compensation and explain its objectives', H('Further points: forms of compensation and examples') + T(['Type', 'Examples'], [['Base pay', 'Salary, wages, dearness allowance'], ['Variable pay / incentives', 'Bonus, commission, profit share, productivity incentive'], ['Fringe benefits', 'Provident fund, gratuity, medical insurance, paid leave, housing, transport'], ['Non-financial rewards', 'Recognition, training, flexible hours, career growth']]) +
    L('<b>Direct compensation</b> is money paid for work; <b>indirect compensation</b> is benefits and services.', '<b>Equity in pay:</b> internal equity (jobs compared inside) and external equity (compared with the market).', '<b>Legal framework:</b> Minimum Wages Act, Payment of Wages Act, Bonus Act, Gratuity Act and the Employees\' Provident Fund Act.') +
    P('<b>Exam tip:</b> define, list objectives, and give the three components with an example each.'));

  more(5, 'Explain the various incentive plans', H('Further points: merits, limits and examples') + T(['Plan', 'Merit', 'Limit', 'Example'], [['Piece rate', 'Direct link between output and pay', 'Quality may suffer; stress', 'Rs 5 per unit stitched'], ['Standard hour plan', 'Rewards finishing faster than standard', 'Needs accurate time standards', 'Task set at 4 hours, done in 3 - paid for 4'], ['Profit sharing', 'Builds a sense of ownership', 'Depends on profit, not on individual effort', 'Year-end share of profits for all staff'], ['Gainsharing', 'Rewards cost savings and productivity gains of the group', 'Complex to design', 'Team shares savings from waste reduction']]) +
    L('<b>Conditions for a good plan:</b> simple, fair, attainable, measurable, linked to performance, and paid quickly.', '<b>Individual plans</b> (piece rate, standard hour) suit separable tasks; <b>group plans</b> (profit sharing, gainsharing) suit teamwork.') +
    P('<b>Exam tip:</b> explain each plan in one line and give an example.'));

  more(6, 'Explain the concept of wage policy and wage determination', H('Further points: wage determination, legal factors and process') + O('Job analysis and job evaluation.', 'Wage survey of the market.', 'Wage structure design - grades and ranges.', 'Fixing of wage rates, allowances and incentives.', 'Review and revision.') +
    T(['Internal factors', 'External factors'], [['Ability to pay, wage policy, job value, performance, union strength', 'Labour market, cost of living, laws (Minimum Wages Act), government wage board, competitors\' pay, union bargaining']]) +
    L('<b>Wage vs salary:</b> wage - hourly or daily pay, usually for manual workers; salary - monthly pay for managerial and clerical staff.', '<b>Pay differentials</b> reflect differences in skill, responsibility and effort.') +
    P('<b>Exam tip:</b> link job evaluation, wage survey and wage structure in the process.'));

  more(6, 'Discuss the concept of minimum wage, fair wage and living wage', H('Further points: table of the three wages and wage boards') + T(['Wage', 'Includes', 'Basis', 'Legal status'], [['Minimum wage', 'Food, clothing, shelter, fuel', 'Needs of worker and family (Fifteenth ILC norms)', 'Statutory (Minimum Wages Act, 1948)'], ['Fair wage', 'Minimum wage plus some comfort', 'Productivity, prevailing rates, capacity of industry', 'Not fixed by law; set by wage boards and awards'], ['Living wage', 'Fair wage plus education, health, insurance, recreation', 'A decent standard of living', 'Ideal - not yet legally binding']]) +
    L('<b>Wage Boards:</b> tripartite bodies (government, employers, employees) that recommend wage rates and service conditions for an industry. They fill the gap between minimum and living wage.', '<b>Importance:</b> reduce industrial disputes and set industry-wide standards.', '<b>Limits:</b> recommendations are not always binding and implementation can be slow.') +
    P('<b>Exam tip:</b> minimum &lt; fair &lt; living - write this order and the Act for minimum wage.'));

  more(6, 'Discuss the role of the government, trade unions and management', H('Further points: detailed roles and a case') + T(['Party', 'Specific roles'], [['Government', 'Labour laws; conciliation officers; labour courts and tribunals; wage boards; social security; tripartite forums'], ['Trade unions', 'Voice of workers; collective bargaining; welfare; worker education; cooperation in raising productivity; discipline of members'], ['Management', 'Fair wages, safe conditions, communication, grievance system, participative management, recognition of unions']]) +
    L('<b>Healthy IR means:</b> mutual trust, respect for each other\'s rights, quick settlement of complaints, and shared gains from productivity.', '<b>Tools:</b> works committee, joint management councils, workers\' participation in management, bipartite and tripartite talks.') +
    E('A factory sets up a works committee with equal numbers of management and worker representatives that meets monthly - small complaints are settled before they become disputes.') +
    P('<b>Exam tip:</b> structure by party and add one example of cooperation.'));

  more(6, 'Explain collective bargaining and discuss its process', H('Further points: features, importance and outcome') + L('<b>Features:</b> collective (group) process; voluntary; continuous; flexible; two-sided; deals with terms and conditions of employment.', '<b>Importance:</b> improves wages and conditions; gives workers a strong voice; provides a peaceful way to settle disputes; creates stable relations and a rule of law at the workplace.') +
    O('<b>Preparation</b> - collect data on wages, cost of living, profits.', '<b>Identify the issues</b> and fix the strategy.', '<b>Negotiation</b> - exchange of demands and counter-proposals.', '<b>Agreement</b> - a written settlement.', '<b>Ratification and implementation.</b>', '<b>Review and renewal.</b>') +
    T(['Result of bargaining', 'Meaning'], [['Agreement', 'Both sides accept - binding for a period'], ['Deadlock', 'No agreement - conciliation, arbitration or adjudication follows'], ['Strike / lockout', 'Pressure tactics when talks fail']]) +
    P('<b>Exam tip:</b> definition, features, step-wise process and a line on how it settles conflict.'));

  more(6, 'Explain the causes of employee grievances', H('Further points: causes in groups and a redressal flow') + T(['Group', 'Causes'], [['Economic', 'Low pay, delay in increments, bonus disputes'], ['Work environment', 'Poor safety, long hours, faulty tools'], ['Supervision', 'Unfair treatment, favouritism, harsh behaviour'], ['Organisational change', 'Transfers, new technology, reorganisation'], ['Personal', 'Over-ambition, health or family stress']]) +
    O('Employee approaches immediate supervisor.', 'Next-level manager or HR if unsolved.', 'Grievance committee.', 'Top management.', 'Voluntary arbitration or statutory authority.') +
    L('<b>Redress principles:</b> prompt action, fairness, confidentiality, record keeping, and feedback to the employee.', '<b>Prevention:</b> open communication, fair policies, exit interviews, attitude surveys, suggestion boxes.') +
    P('<b>Exam tip:</b> causes by group, then a step-by-step redressal procedure.'));

  more(5, 'Explain the factors considered in assessing job value', H('Further points: four main factor groups and challenges') + T(['Factor group', 'Examples'], [['Skill', 'Education, experience, training, mental ability'], ['Effort', 'Physical and mental strain'], ['Responsibility', 'For money, materials, safety of others, supervision'], ['Working conditions', 'Hazards, noise, heat, shift work']]) +
    L('<b>Challenges:</b> subjective weights, resistance from employees and unions, changing jobs making ratings outdated, cost and time, and the risk of bias, e.g. against traditional women\'s work.') +
    P('<b>Exam tip:</b> link factors to the point method - each factor receives points.'));

  more(6, 'Explain direct and indirect compensation', H('Further points: more detail and importance') + T(['Direct compensation', 'Indirect compensation'], [['Basic pay, dearness allowance, house rent allowance, overtime, bonus, commission, incentives', 'Provident fund, gratuity, pension, medical insurance, paid leave, canteen, transport, education assistance, recreation']]) +
    L('<b>Importance to employees:</b> livelihood, status, security, motivation.', '<b>Importance to the organisation:</b> attracts and retains talent, motivates performance, controls labour cost, builds a good image, and meets legal obligations.', '<b>Importance to society:</b> purchasing power and a better standard of living.') +
    P('<b>Exam tip:</b> make a two-column table for direct and indirect and write importance in three levels.'));

  more(5, 'Explain wage policy: its objectives and components', H('Further points: example and methods of wage determination') + L('<b>Methods:</b> job evaluation, wage surveys, collective bargaining, statutory fixation, wage boards and ability to pay.', '<b>Components of a wage policy:</b> wage level, wage structure, incentive plans, fringe benefits, review and revision.') +
    E('A firm fixes a wage grade for a clerk after job evaluation, compares it with local pay for similar jobs (wage survey), and adds a performance incentive.') +
    P('<b>Exam tip:</b> objectives (fairness, motivation, cost control) + components + the process of determination.'));

  more(5, 'What is a wage board', H('Further points: composition and examples') + L('<b>Composition:</b> equal members from employers and employees, plus independent members and a chairperson - hence tripartite.', '<b>Examples:</b> wage boards for the cotton textile, sugar, jute, cement and newspaper industries.') +
    T(['Advantages', 'Challenges'], [['Industry-wide uniformity, tripartite agreement, expert study, avoids disputes', 'Delay, recommendations are not legally binding, disputes over implementation, ignores regional differences']]) +
    P('<b>Exam tip:</b> definition, functions, composition, advantages and challenges - one line each.'));

  more(5, 'Explain the types, scope and importance of industrial relations', H('Further points: approaches and example') + T(['Type of IR', 'Meaning'], [['Employer-employee', 'Individual relations at the workplace'], ['Management-union', 'Collective relations'], ['Labour-state', 'Role of government in the relationship']]) +
    L('<b>Approaches:</b> unitary (common interests), pluralist (several interest groups), Marxist (class conflict), Gandhian (trusteeship and non-violence).', '<b>Objectives:</b> industrial peace, higher productivity, worker welfare and protection of rights.') +
    P('<b>Exam tip:</b> types, scope, importance and the approaches in a short table.'));

  more(5, 'Define an industrial dispute under the Industrial Disputes Act, 1947', H('Further points: forms, machinery and example') + T(['Form of dispute', 'Meaning'], [['Strike', 'Workers collectively stop work'], ['Lockout', 'Employer closes the workplace'], ['Gherao', 'Workers surround management and do not let it leave'], ['Layoff / retrenchment', 'Employer\'s inability or decision to reduce workers']]) +
    L('<b>Machinery under the Act:</b> works committee, conciliation officer, board of conciliation, court of inquiry, labour court, industrial tribunal, national tribunal.', '<b>Causes:</b> wages and bonus, working conditions, retrenchment, discipline, union rivalry, and management practices.') +
    P('<b>Exam tip:</b> the definition (a dispute between employers and workmen about employment terms) plus causes and types.'));

  more(6, 'Explain the principles of collective bargaining', H('Further points: types, levels and example') + T(['Type', 'Meaning'], [['Distributive', 'Win-lose - one side\'s gain is the other\'s loss (wages)'], ['Integrative', 'Win-win - problem solving for mutual gain'], ['Productivity bargaining', 'Higher pay in exchange for higher productivity'], ['Concessional', 'Union gives up some benefits to protect jobs']]) +
    T(['Level', 'Meaning'], [['Plant level', 'Single factory and its union'], ['Industry level', 'Association of employers with a federation of unions'], ['National level', 'Government, employer and worker confederations']]) +
    L('<b>Principles:</b> good faith, willingness to compromise, mutual respect, fact-based talks, transparency, legal compliance and timely implementation.') +
    P('<b>Exam tip:</b> describe each principle in a line, then give two tables for types and levels.'));

  more(6, 'Explain the eight-step grievance handling procedure', H('Further points: five principles in action') + T(['Principle', 'In practice'], [['Promptness', 'Respond within a set time'], ['Fairness and justice', 'Hear both sides; use facts'], ['Confidentiality', 'Do not discuss the case outside'], ['Documentation', 'Record each step'], ['Follow-up', 'Check the employee\'s satisfaction after the decision']]) +
    L('<b>Why it matters:</b> an ignored grievance turns into absenteeism, poor quality, conflict or a dispute.', '<b>Signs of a grievance:</b> sudden fall in output, indiscipline, absenteeism, complaints to colleagues.') +
    P('<b>Exam tip:</b> the eight steps as a numbered list plus the five principles.'));

  more(5, 'Explain the in-house and statutory machinery for grievance redressal', H('Further points: in-house vs statutory') + T(['In-house machinery', 'Statutory machinery'], [['Open-door policy, grievance committee, ombudsman, step-ladder procedure, suggestion box, counselling', 'Grievance Redressal Committee under the Industrial Disputes Act (for 20 or more workmen), conciliation officer, labour court, tribunal']]) +
    L('<b>Voluntary arbitration</b> is a middle path between in-house and statutory.', '<b>Advantages of in-house machinery:</b> speed, low cost and confidentiality.') +
    P('<b>Exam tip:</b> a two-column table is the cleanest answer.'));

  more(5, 'An employee says a promotion was unfair', H('Further points: communication and prevention') + O('Listen without interruption and record the complaint.', 'Review the promotion policy and the criteria.', 'Check records - appraisals, seniority, vacancy notice.', 'Hear the manager and the selection committee.', 'Decide - explain the facts to the employee.', 'Correct the process if error is found.', 'Follow up with the employee.') +
    L('<b>Prevention:</b> published promotion criteria, transparent appraisal, panel decisions, and feedback to those not promoted.') +
    P('<b>Exam tip:</b> show steps in order, with fairness and confidentiality as the guiding principles.'));

  more(5, 'A strike begins over bonus payment', H('Further points: preventive and settlement machinery') + T(['Stage', 'Machinery'], [['Preventive', 'Works committee, joint management council, bipartite negotiation, grievance procedure, standing orders, code of discipline'], ['Settlement', 'Conciliation officer → board of conciliation → court of inquiry → voluntary arbitration → labour court / tribunal adjudication']]) +
    L('<b>Bonus</b> is governed by the Payment of Bonus Act, 1965.', 'A <b>timely meeting</b> in the works committee could have clarified the bonus calculation before a strike.') +
    P('<b>Exam tip:</b> separate preventive and settlement machinery clearly.'));

  more(6, 'Trace the evolution of HRM through its six stages', H('Further points: stage-wise table') + T(['Stage', 'Period / event', 'Shift'], [['1 Craft guilds', 'Before the industrial revolution', 'Skill passed through apprenticeship'], ['2 Industrial revolution', '18th-19th century', 'Factory system, long hours, low pay, need for labour laws'], ['3 Scientific management', 'Early 20th century (Taylor)', 'Efficiency, standard methods'], ['4 Human relations', '1920s-50s (Mayo)', 'Social needs and motivation'], ['5 Personnel management', 'Mid-20th century', 'Welfare, administration and laws'], ['6 HRM / strategic HRM', 'From 1980s', 'People as a strategic resource']]) +
    P('<b>Exam tip:</b> a one-line justification for each shift as the question demands.'));

  more(6, 'Explain the five roles of an HR manager', H('Further points: example per role') + T(['Role', 'Example'], [['Advisor', 'Counsels managers on handling poor performers'], ['Policy maker', 'Drafts a leave and attendance policy'], ['Welfare officer', 'Organises health camps'], ['Change agent', 'Leads digital transformation of HR'], ['Strategic partner', 'Plans manpower for expansion']]) +
    P('<b>Exam tip:</b> give each role with two responsibilities and one example.'));

  more(6, 'Explain the techniques of forecasting the demand for human resources.', H('Further points: summary table') + T(['Technique', 'Quick description'], [['Managerial judgement', 'Estimates by managers'], ['Delphi', 'Expert opinion in rounds'], ['Ratio-trend', 'Past ratios projected'], ['Regression', 'Staff needs related to business variables'], ['Work-study', 'Work divided by standard output']]) +
    P('<b>Exam tip:</b> classify as judgemental and statistical and give one example of each.'));

  more(6, 'Explain the types of interviews used in selection', H('Further points: choosing the type') + L('Use <b>structured</b> interviews for large-scale hiring, <b>panel</b> for senior posts, <b>stress</b> for pressure jobs and <b>behavioural</b> for predicting conduct.') +
    P('<b>Exam tip:</b> describe each type in one line.'));

  more(5, 'Explain the six-step training process', H('Further points: example of the six steps') + E('A company introducing a new CRM: (1) needs analysis - sales staff lack CRM skills; (2) set objectives - 90% staff use CRM; (3) design content; (4) choose methods - workshops and e-learning; (5) deliver; (6) evaluate with tests and usage data.') +
    P('<b>Exam tip:</b> number the steps and give one line each.'));

  more(6, 'Explain the five stages of a career', H('Further points: the focus in each stage') + T(['Stage', 'Age (approx.)', 'Focus'], [['Exploration', 'Up to about 25', 'Choose a career, education, first job'], ['Establishment', 'About 25-35', 'Learn the job, prove oneself, advance'], ['Mid-career', 'About 35-50', 'Peak performance, mentoring, possible plateau'], ['Late career', 'About 50-60', 'Pass on knowledge, prepare for retirement'], ['Decline / retirement', '60+', 'Wind down, new roles, planning retirement']]) +
    P('<b>Exam tip:</b> a five-row table covers the answer; add HR support for each stage.'));

  more(6, 'Explain the theories of wage determination', H('Further points: more theories') + T(['Theory', 'Idea', 'Limit'], [['Subsistence', 'Wages equal minimum needed to live (Ricardo)', 'Ignores productivity'], ['Wage fund', 'Wages depend on fixed capital for paying labour (Mill)', 'Ignores growth of funds'], ['Bargaining', 'Wages depend on relative power of workers and employers', 'Power imbalance'], ['Marginal productivity', 'Wage equals the value added by the last worker', 'Hard to measure'], ['Residual claimant', 'Labour gets what is left after other factors', 'Rent and profit not fixed']]) +
    P('<b>Exam tip:</b> three theories with a limitation for each is a full 6-mark answer.'));

  more(6, 'Explain the grievance handling machinery', H('Further points: open door and step ladder in detail') + T(['', 'Open door policy', 'Step-ladder procedure'], [['Idea', 'Employee can approach any level of management directly', 'Employee moves step by step up the hierarchy'], ['Advantages', 'Quick, informal, builds trust', 'Clear, formal, records kept'], ['Limits', 'May bypass supervisors; depends on management attitude', 'Slow; may discourage complaints'], ['Best for', 'Small firms, personal matters', 'Large firms, formal complaints']]) +
    L('<b>Steps in a typical ladder:</b> supervisor → department head → HR manager → grievance committee → top management → arbitration.') +
    P('<b>Exam tip:</b> contrast the two systems in a table.'));
})();
