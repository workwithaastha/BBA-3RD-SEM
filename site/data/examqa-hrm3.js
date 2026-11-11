// Human Resource Management - written Q&A bank, DETAILED model answers. Part 3: Unit III
// (training & development, performance appraisal, career management, succession planning).
// Source: Unit 3 Performance Appraisal slides (PDF) + Important Questions; training/career parts add standard HRM points where the PDFs are silent.
(function () {
  const { L, O, E, T } = window.ExamQA;
  const IQ = (n) => `Important Questions - Unit 3, Q${n}`;
  const SL = ' · Unit 3 Performance Appraisal slides';
  const P = (s) => `<p>${s}</p>`;
  const H = (s) => `<h4>${s}</h4>`;

  window.ExamQA.add('hrm', [
    // ---------- Training & Development ----------
    { m: 2, u: 'Unit III', t: 'Training & Development', p: 3, q: `Define training and development.`,
      a: P(`<b>Training</b> is a planned effort to improve an employee's knowledge, skills and attitude for the <b>present job</b>. <b>Development</b> is the long-term growth of employees to prepare them for <b>future roles and responsibilities</b>.`) +
        L(`Training is short term and job-specific; development is long term and career oriented.`, `Both raise performance and prepare employees for change.`) + E(`Teaching a cashier to use new billing software (training); preparing a manager for the director's post (development).`),
      ms: `Both definitions 1.5 · example 0.5`, src: IQ(1) },
    { m: 3, u: 'Unit III', t: 'Training & Development', p: 3, q: `Distinguish between training and development.`,
      a: T(['Basis', 'Training', 'Development'], [['Meaning', 'Improving skills for the present job', 'Growth for future positions'], ['Time period', 'Short term', 'Long term'], ['Focus', 'Job-specific skills', 'Overall growth and career'], ['Who', 'Mostly workers and operatives', 'Mostly managers']]) + P(`Training improves present performance; development prepares for future roles.`),
      ms: `Three differences 1 each`, src: IQ(1) },
    { m: 6, u: 'Unit III', t: 'Training & Development', p: 3, q: `Define training and development. Explain their need and importance for employees and organisations in a competitive environment.`,
      a: H(`Introduction`) + P(`In a competitive environment skilled and adaptable employees decide success. <b>Training</b> improves skills for the present job (short term); <b>development</b> prepares people for future roles (long term).`) +
        H(`Need`) + L(`Rapid change in technology and job requirements.`, `Gap between required and actual performance.`, `New employees need induction and skills.`) +
        H(`Importance`) + T(['For employees', 'For the organisation'], [['Better skills and confidence', 'Higher productivity and quality'], ['Career growth and promotion', 'Lower turnover and absenteeism'], ['Job security and satisfaction', 'Competitive advantage and flexibility'], ['Fewer mistakes and accidents', 'Better customer service']]),
      ms: `Definitions 2 · need 1.5 · importance 2.5`, src: IQ(1) },
    { m: 6, u: 'Unit III', t: 'Training & Development', p: 3, q: `Explain the process of identifying training needs. Discuss the three levels of analysis with suitable examples.`,
      a: H(`Introduction`) + P(`A <b>training need</b> is the gap between the required and the actual performance. Needs are identified through analysis at three levels.`) +
        T(['Level', 'What is studied', 'Example'], [['Organisational analysis', 'Organisation\'s goals, resources and climate - where is training needed?', 'The firm adopts a new software, so staff need training'], ['Task (job) analysis', 'Knowledge and skills required to perform the job', 'A cashier needs billing-system skills'], ['Person analysis', 'Which employees need training and what type, based on appraisal results', 'An executive with low sales scores needs selling skills']]) +
        H(`Process`) + O(`Study the organisation's goals and plans.`, `Analyse the job and the skills required.`, `Assess employees' performance gaps.`, `Prepare the training plan.`),
      ms: `Introduction 1 · three levels with examples 4 · process 1`, src: IQ(2) },
    { m: 10, u: 'Unit III', t: 'Training & Development', p: 3, q: `Discuss the various on-the-job and off-the-job training techniques. Compare them and discuss their merits and demerits.`,
      a: H(`1. Introduction`) + P(`Training methods are broadly classified into <b>on-the-job</b> (given at the workplace while working) and <b>off-the-job</b> (given away from the actual work).`) +
        H(`2. On-the-job methods`) + L(`<b>Coaching:</b> learning from a supervisor or mentor at the workplace.`, `<b>Job rotation:</b> moving the employee through different jobs to widen skills.`, `<b>Apprenticeship:</b> learning a skill under an experienced person for a long period.`, `<b>Understudy:</b> training a person to take over the superior's job.`) +
        H(`3. Off-the-job methods`) + L(`<b>Lectures:</b> classroom or seminar teaching.`, `<b>Case study:</b> discussion of real business situations.`, `<b>Role playing:</b> acting out situations.`, `<b>Simulation / vestibule training:</b> a replica of the workplace away from production lets trainees practise without disturbing production.`) +
        H(`4. Comparison`) + T(['Basis', 'On-the-job', 'Off-the-job'], [['Place', 'At the workplace', 'Away from work'], ['Merits', 'Practical and low cost; learning by doing', 'Controlled learning; no disturbance to production; theory and concepts'], ['Demerits', 'A poor trainer or disturbance to production may affect learning', 'May be costly and lacks real work conditions'], ['Suitable for', 'Practical skills', 'Conceptual and technical knowledge']]) +
        E(`A bank trains a new clerk by job rotation (on the job) and sends the officer to a classroom case-study workshop (off the job).`) +
        H(`5. Conclusion`) + P(`A combination of both methods gives the best results because it joins practice with theory.`),
      ms: `Introduction 1 · on-the-job 2 · off-the-job 2 · comparison 3 · example 1 · conclusion 1`, src: IQ(3) },
    { m: 5, u: 'Unit III', t: 'Training Evaluation', p: 3, q: `How is the effectiveness of training evaluated? Explain various training evaluation models.`,
      a: H(`Introduction`) + P(`Training evaluation measures <b>whether training achieved its objectives</b> and whether the cost was worth it. The best-known model is <b>Kirkpatrick's four-level model</b>.`) +
        T(['Level', 'Measures', 'Method'], [['1. Reaction', 'Trainees\' satisfaction with the programme', 'Feedback forms'], ['2. Learning', 'Knowledge and skills gained', 'Tests before and after'], ['3. Behaviour', 'Whether trainees use the learning on the job', 'Supervisor observation'], ['4. Results', 'Impact on organisational results (productivity, quality, cost)', 'Performance data']]) +
        P(`<b>Conclusion:</b> evaluation at all four levels shows if training is useful and where to improve it.`),
      ms: `Introduction 1 · four levels 3.5 · conclusion 0.5`, src: IQ(4) },

    // ---------- Performance Appraisal ----------
    { m: 2, u: 'Unit III', t: 'Performance Appraisal', p: 3, q: `Define performance appraisal.`,
      a: P(`<b>Performance appraisal</b> is a process of <b>evaluating an employee's performance of a job in terms of its requirements</b>. According to Beach, it is the systematic evaluation of the performance of an individual on the job and also his or her <b>potential for development</b>.`) +
        L(`It is systematic, objective, periodic and planned.`, `Its results are used for pay, promotion and training decisions.`) + E(`A yearly review of a salesperson's targets and achievements.`),
      ms: `Definition 1 · two points 0.5 each · example 0.5`, src: IQ(5) + SL },
    { m: 3, u: 'Unit III', t: 'Performance Appraisal', p: 3, q: `Explain the objectives of performance appraisal.`,
      a: P(`Performance appraisal serves several purposes for both employees and the organisation.`) +
        O(`<b>Compensation and promotion decisions:</b> pay rises, bonus and promotions are based on performance.`, `<b>Training and development:</b> weak areas show who needs training.`, `<b>Feedback and personal development:</b> employees learn how they are doing and how to improve.`) + P(`It also helps in placement, motivation and manpower planning.`),
      ms: `Three objectives with explanation 2.5 · other points 0.5`, src: IQ(5) + SL },
    { m: 5, u: 'Unit III', t: 'Performance Appraisal', p: 3, q: `Explain the process of performance appraisal.`,
      a: H(`Introduction`) + P(`Performance appraisal is carried out in a series of steps.`) +
        O(`<b>Establishing performance standards</b> - the first step: what is expected from each job.`, `<b>Communicating standards</b> and expectations to the employees.`, `<b>Measuring actual performance</b> - by observation, reports and records.`, `<b>Comparing actual performance with standards.</b>`, `<b>Discussing the results</b> with the employee - giving feedback.`, `<b>Decision making and corrective action</b> - the last step: pay rise, promotion, training or other action.`) +
        P(`<b>Conclusion:</b> measuring comes before comparing, and decisions follow the discussion.`),
      ms: `Introduction 0.5 · six steps 4 · conclusion 0.5`, src: SL },
    { m: 6, u: 'Unit III', t: 'Performance Appraisal', p: 3, q: `Define performance appraisal and explain its concept and objectives. Why is it an important tool of HRM?`,
      a: H(`Introduction`) + P(`<b>Performance appraisal</b> is a process of evaluating an employee's performance of a job in terms of its requirements. Beach: the systematic evaluation of the performance of an individual on the job and also his or her potential for development.`) +
        H(`Concept`) + L(`Systematic and planned - not casual opinion.`, `Objective - based on set standards.`, `Periodic - done at regular intervals.`, `It judges both present performance and future potential.`) +
        H(`Objectives`) + L(`Compensation and promotion decisions.`, `Training needs.`, `Feedback and personal development.`) +
        H(`Importance`) + P(`It links employee efforts to organisational goals, motivates people through feedback and gives facts for most HR decisions - pay, promotion, transfer, training and career planning.`),
      ms: `Definition 1.5 · concept 1.5 · objectives 1.5 · importance 1.5`, src: IQ(5) + SL },
    { m: 10, u: 'Unit III', t: 'Performance Appraisal', p: 3, q: `Distinguish between traditional and modern methods of performance appraisal.`,
      a: H(`1. Introduction`) + P(`Methods of appraisal are classified as traditional (older, trait-based, supervisor judgement) and modern (results- and development-oriented, with wider participation).`) +
        H(`2. Traditional methods`) +
        T(['Method', 'Meaning'], [['Straight ranking', 'Employees are ranked from best to worst'], ['Paired comparison', 'Each employee is compared with every other, one trait at a time'], ['Forced distribution', 'Employees are fitted into set categories such as outstanding, above average, average, below average, poor'], ['Critical incident', 'Dated records of specific positive and negative incidents'], ['Field review', 'A trained HR person in the field supports line managers in rating'], ['Group appraisal', 'A panel evaluates the employee'], ['Others', 'Grading scale, checklist, essay, confidential reports, performance tests']]) +
        H(`3. Modern methods`) +
        T(['Method', 'Meaning'], [['Assessment centre', 'Participants perform tasks in simulated environments and assessors rate them; first used in the German Army in 1930'], ['MBO (appraisal by results)', 'Employee and manager set SMART goals jointly (Drucker, McGregor); performance is judged against them'], ['360-degree appraisal', 'Superiors, subordinates and peers rate the employee'], ['BARS', 'Behaviourally Anchored Rating Scale: numerical scale (5 Outstanding to 1 Poor) anchored to behaviour examples'], ['Human asset accounting', 'Values people as assets in money terms']]) +
        H(`4. Distinction`) +
        T(['Basis', 'Traditional', 'Modern'], [['Focus', 'Personal traits and past performance', 'Results, behaviour and development'], ['Rater', 'Usually the supervisor', 'Several raters'], ['Objectivity', 'More subjective', 'More objective'], ['Cost', 'Low', 'Higher']]) +
        H(`5. Conclusion`) + P(`Traditional methods are simple but subjective; modern methods are more objective and development-oriented but costlier. A mix suits most organisations.`),
      ms: `Introduction 1 · traditional 2.5 · modern 2.5 · distinction 3 · conclusion 1`, src: IQ(6) + SL },
    { m: 3, u: 'Unit III', t: 'Performance Appraisal', p: 3, q: `Write short notes on: (a) BARS (b) MBO (c) 360-degree appraisal.`,
      a: O(`<b>BARS (Behaviourally Anchored Rating Scale):</b> combines a rating scale with the critical incident idea. Each point on the numerical scale (5 Outstanding, 4 Very Good, 3 Satisfactory, 2 Needs Improvement, 1 Poor) is described by an example of behaviour.`, `<b>MBO (Management by Objectives):</b> also called appraisal by results. Employee and manager jointly set specific goals (SMART - Specific, Measurable, Achievable, Result-oriented, Time-bound) and performance is measured against them. It grew from the work of Drucker and McGregor.`, `<b>360-degree appraisal:</b> the employee is rated by superiors, subordinates and peers (and sometimes customers); multiple raters improve accuracy.`),
      ms: `1 mark for each note`, src: SL },
    { m: 6, u: 'Unit III', t: 'Performance Appraisal', p: 3, q: `Discuss the common biases in performance appraisal. How can an organisation minimise them?`,
      a: H(`Introduction`) + P(`Appraisal is done by people, so judgement errors (biases) may enter and make the result unfair.`) +
        T(['Bias', 'Meaning', 'Example'], [['Halo effect', 'One strong trait inflates the ratings on all traits', 'A punctual employee is rated high on everything'], ['Horns effect', 'One weak trait lowers all ratings', 'One mistake colours the whole rating'], ['Leniency bias', 'Rating higher than deserved', 'Giving all employees high scores'], ['Strictness bias', 'Rating lower than deserved', 'Giving low scores to avoid raises'], ['Central tendency', 'Rating everyone around the average to avoid hard talks', 'All employees rated 3'], ['Recency effect', 'Judging only on recent events', 'Last month\'s performance only']]) +
        H(`How to minimise`) + L(`Train the appraisers.`, `Set clear, objective criteria and KPIs.`, `Give regular feedback and promote two-way dialogue, not once-a-year reviews.`, `Use technology and 360-degree feedback.`),
      ms: `Introduction 0.5 · biases 3 · remedies 2.5`, src: IQ(7) + SL },
    { m: 5, u: 'Unit III', t: 'Performance Appraisal', p: 2, q: `What are the challenges of performance appraisal and how can they be overcome?`,
      a: H(`Challenges`) + L(`<b>Biases of raters</b> such as halo, horns, leniency and central tendency.`, `<b>Infrequent feedback:</b> in annual reviews employees come to know about problems only when it is too late for correction.`, `<b>Unclear criteria</b> and lack of acceptance by employees.`) +
        H(`Ways to overcome`) + L(`Promote <b>two-way dialogue and regular check-ins</b> instead of one annual review.`, `Train appraisers.`, `Set clear KPIs and share the criteria.`, `Use technology and 360-degree feedback.`),
      ms: `Challenges 2.5 · remedies 2.5`, src: SL },

    // ---------- Career management ----------
    { m: 2, u: 'Unit III', t: 'Career Management', p: 3, q: `What is career management? Define career path.`,
      a: P(`<b>Career management</b> is the <b>continuous process of preparing, implementing and monitoring career plans</b>. It can be done by the employee alone or together with the organisation.`) +
        P(`A <b>career path</b> is the series of positions through which an individual can be promoted, transferred or rotated.`) + E(`HR Executive → Senior HR Executive → HR Manager → HR Director.`),
      ms: `Career management 1 · career path 0.5 · example 0.5`, src: IQ(8) },
    { m: 5, u: 'Unit III', t: 'Career Management', p: 3, q: `Define career planning and career development. Explain their objectives and importance for employees and organisations.`,
      a: H(`Introduction`) + P(`<b>Career planning</b> is the process by which an individual identifies his career goals and the path to reach them. <b>Career development</b> is the process of systematically linking an individual's career needs with the organisation's workforce requirements.`) +
        H(`Objectives`) + L(`Match individual aspirations with organisational opportunities.`, `Retain and develop talented people.`, `Prepare employees for future roles.`) +
        H(`Importance`) + T(['For employees', 'For the organisation'], [['Clear goals and direction', 'A skilled and committed workforce'], ['Growth, promotion and satisfaction', 'Lower turnover'], ['Better use of strengths', 'A supply of future leaders']]),
      ms: `Definitions 1.5 · objectives 1.5 · importance 2`, src: IQ(8) },
    { m: 6, u: 'Unit III', t: 'Career Management', p: 3, q: `Distinguish between individual career management and organisational career management. Discuss the responsibilities of the individual, the manager and the organisation.`,
      a: H(`Difference`) + T(['Basis', 'Individual career management', 'Organisational career management'], [['Focus', 'The person\'s own goals and needs', 'The organisation\'s workforce needs'], ['Done by', 'The employee through self-assessment and planning', 'The organisation through planned career moves and programmes'], ['Aim', 'Personal growth and satisfaction', 'A supply of skilled people for the firm']]) +
        H(`Responsibilities`) + T(['Party', 'Responsibility'], [['Individual', 'Self-assessment of aspirations and needs, setting goals, developing skills'], ['Manager', 'Feedback, coaching, discussing career plans, supporting development'], ['Organisation', 'Providing opportunities, training, career paths and information']]),
      ms: `Difference 3 · responsibilities 3`, src: IQ(10) },

    // ---------- Succession Planning ----------
    { m: 2, u: 'Unit III', t: 'Succession Planning', p: 3, q: `What is succession planning?`,
      a: P(`<b>Succession planning</b> is the process of <b>identifying, evaluating, developing and tracking high-potential employees</b> for future leadership roles.`) +
        L(`It prepares replacements in advance so that the business runs smoothly when key people leave.`, `It is part of strategic HR planning.`) + E(`A company grooms a general manager to become the next director.`),
      ms: `Definition 1 · two points 0.5 each · example 0.5`, src: IQ(9) },
    { m: 3, u: 'Unit III', t: 'Succession Planning', p: 3, q: `Explain the types of succession planning.`,
      a: O(`<b>Strategic leadership development:</b> a long-term plan that prepares future leaders over several years.`, `<b>Departure-defined succession planning:</b> started only when a key employee leaves or is about to leave.`, `<b>Emergency / interim succession planning:</b> a short-term arrangement that temporarily assigns a replacement when a key person is suddenly unavailable, so that important responsibilities continue.`),
      ms: `Three types 1 each`, src: IQ(9) },
    { m: 5, u: 'Unit III', t: 'Succession Planning', p: 3, q: `Explain the benefits and challenges of succession planning.`,
      a: H(`Benefits`) + L(`<b>Leadership continuity</b> when key managers retire or resign.`, `<b>Retention and motivation</b> - employees see growth opportunities.`, `<b>Smooth running</b> of the business and reduced disruption.`, `<b>Reduced cost and time</b> of finding a replacement in an emergency.`) +
        H(`Challenges`) + L(`Resistance to change and lack of employee buy-in.`, `Limited resources.`, `Inadequate planning and incomplete information.`),
      ms: `Benefits 3 · challenges 2`, src: IQ(9) },
    { m: 10, u: 'Unit III', t: 'Succession Planning', p: 3, q: `What is succession planning? Explain its process, objectives and benefits. How does it ensure leadership continuity in an organisation?`,
      a: H(`1. Introduction`) + P(`<b>Succession planning</b> is the process of identifying, evaluating, developing and tracking high-potential employees for future leadership roles. It helps a company to run smoothly when key people leave.`) +
        H(`2. Process (steps)`) + O(`Identify which <b>positions</b> are included in the plan.`, `Identify the <b>employees</b> who can fill them.`, `Set <b>standards</b> (competencies) for the positions.`, `Assess the <b>potential</b> of employees.`, `<b>Review</b> the process.`, `Link the plan with <b>HR systems</b> (training, appraisal, pay).`, `Give <b>feedback</b> to employees.`, `<b>Measure the effectiveness</b> of the plan.`) +
        H(`3. Objectives`) + L(`Ensure leadership continuity.`, `Build a pool of ready talent.`, `Retain and motivate high performers.`) +
        H(`4. Types`) + L(`Strategic leadership development, departure-defined and emergency / interim succession planning.`) +
        H(`5. Benefits and challenges`) + T(['Benefits', 'Challenges'], [['Continuity of leadership', 'Lack of employee buy-in'], ['Lower hiring cost and risk', 'Limited resources'], ['Higher morale and retention', 'Inadequate planning and incomplete information']]) +
        E(`A bank identifies 10 branch managers as future regional heads, trains them and rotates them so that any can take charge when the regional head retires.`) +
        H(`6. Conclusion`) + P(`Succession planning keeps a pipeline of ready leaders, ensuring that the organisation is never left without leadership.`),
      ms: `Introduction 1 · process 3 · objectives 1 · types and benefits 2 · example 1 · conclusion 1 · challenges 1`, src: IQ(9) },
  ]);
})();
