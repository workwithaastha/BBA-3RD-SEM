// Human Resource Management - written Q&A bank, DETAILED model answers. Part 2: Unit II (HRP, job analysis, recruitment, selection).
// No notes PDF for this unit: answers are written from standard HRM knowledge. Questions follow the Important Questions PDF.
(function () {
  const { L, O, E, T } = window.ExamQA;
  const IQ = (n) => `Important Questions - Unit 2, Q${n}`;
  const X = ' [answer from standard HRM knowledge - no notes PDF for this unit]';
  const P = (s) => `<p>${s}</p>`;
  const H = (s) => `<h4>${s}</h4>`;

  window.ExamQA.add('hrm', [
    // ---------- Human Resource Planning ----------
    { m: 2, u: 'Unit II', t: 'Human Resource Planning', p: 3, q: `Define Human Resource Planning.`,
      a: P(`<b>Human Resource Planning (HRP)</b> is the process of <b>forecasting an organisation's future demand for and supply of employees</b> and planning to meet the gap, so that the right number and type of people are available at the right time.`) +
        L(`It matches the <b>number and quality</b> of employees with organisational needs.`, `It avoids both shortage (lost work) and surplus (idle cost).`) + E(`A firm planning to open five new branches estimates the staff needed and starts hiring in advance.`),
      ms: `Definition 1 · two points 0.5 each · example 0.5`, src: IQ(1) + X },
    { m: 3, u: 'Unit II', t: 'Human Resource Planning', p: 3, q: `Explain the objectives and importance of Human Resource Planning.`,
      a: P(`HRP ensures that the organisation always has the right people to carry out its plans.`) +
        O(`<b>Right man at the right time:</b> prevents shortage or surplus of employees.`, `<b>Control of labour cost:</b> hiring only as many people as needed saves salary cost.`, `<b>Basis for other HR activities:</b> recruitment, training and succession planning all follow the HR plan.`) + E(`An IT firm plans to recruit 200 trainees before a large project begins.`),
      ms: `Introduction 0.5 · three points 2 · example 0.5`, src: IQ(1) + X },
    { m: 5, u: 'Unit II', t: 'Human Resource Planning', p: 3, q: `Define Human Resource Planning and explain its process.`,
      a: H(`Introduction`) + P(`Human Resource Planning is the process of forecasting the future demand for and supply of employees and planning to fill the gap, so that the right people are available at the right time.`) +
        H(`Process of HRP`) +
        O(`<b>Analysing organisational objectives and plans</b> - HR plans flow from business plans (expansion, new products).`, `<b>Forecasting demand</b> - estimating the number and skills of employees required.`, `<b>Forecasting supply</b> - assessing internal availability (existing staff, promotions, turnover) and the external labour market.`, `<b>Identifying the gap</b> - comparing demand and supply to find shortage or surplus.`, `<b>Preparing action plans</b> - recruitment, training, redeployment or retrenchment.`, `<b>Implementation, control and review</b> - monitoring results and revising the plan.`) +
        P(`<b>Conclusion:</b> a systematic HR plan makes the workforce ready for the organisation's growth.`),
      ms: `Definition 1 · six steps 3.5 · conclusion 0.5`, src: IQ(1) + X },
    { m: 5, u: 'Unit II', t: 'Human Resource Planning', p: 3, q: `Discuss the factors affecting HRP (internal and external). How can an organisation respond to each?`,
      a: H(`Introduction`) + P(`HRP does not work in isolation; it is influenced by factors inside and outside the organisation.`) +
        T(['Type', 'Factor', 'Effect', 'How to respond'], [['Internal', 'Organisational strategy and growth plans', 'Decide number and kind of employees', 'Align the HR plan with the business plan'], ['Internal', 'Organisational structure and job design', 'Change in the number of jobs', 'Review structure regularly'], ['Internal', 'Employee turnover, skills inventory', 'Shortage of skills', 'Retention plans, training'], ['External', 'Labour market and unemployment', 'Availability of talent', 'Use campus hiring, flexible contracts'], ['External', 'Economy and technology', 'Demand for skills changes', 'Re-skill employees, plan flexibly'], ['External', 'Government laws and unions', 'Limits on hiring and firing', 'Follow laws, build good union relations']]) +
        P(`<b>Conclusion:</b> the HR plan should be reviewed regularly because these factors keep changing.`),
      ms: `Introduction 0.5 · internal factors 2 · external factors 2 · responses 0.5`, src: IQ(2) + X },
    { m: 6, u: 'Unit II', t: 'Human Resource Planning', p: 3, q: `Explain the techniques of forecasting demand for human resources. Which technique is most suitable for a growing firm?`,
      a: H(`Introduction`) + P(`Demand forecasting estimates the number and type of employees needed in the future. Both quantitative and judgemental techniques are used.`) +
        H(`Techniques`) +
        T(['Technique', 'How it works', 'Suitability'], [['Managerial judgement', 'Managers estimate needs of their departments', 'Quick; good for small firms'], ['Delphi technique', 'Experts give estimates anonymously in rounds until a consensus emerges', 'Good where history cannot predict the future'], ['Nominal group technique', 'Structured group discussion and ranking of ideas', 'Good for new situations'], ['Work-study technique', 'Workload divided by output per employee', 'Where work can be measured'], ['Ratio / trend analysis', 'Past ratios (sales per employee) are projected', 'Stable conditions']]) +
        H(`Most suitable for a growing firm`) + P(`<b>Delphi technique</b> (with managerial judgement) is most suitable because a growing firm's future differs from its past, so trend analysis cannot predict its needs; expert opinion can.`),
      ms: `Introduction 1 · techniques 3 · suitable technique with reason 2`, src: IQ(3) + X },
    { m: 3, u: 'Unit II', t: 'Human Resource Planning', p: 3, q: `Explain the methods of forecasting supply of human resources.`,
      a: P(`Supply forecasting estimates how many employees will be available - inside and outside the firm.`) +
        O(`<b>Markov analysis:</b> shows the probability of employees moving between jobs, being promoted or leaving; it predicts internal supply.`, `<b>Skill inventory and replacement charts:</b> records of employees' skills and charts showing who can replace whom.`, `<b>External supply study:</b> labour market, campuses, competitors and migration give the outside supply.`) + E(`If 10% of staff leave every year, the supply next year is 90% of present staff plus promotions.`),
      ms: `Introduction 0.5 · three methods 2 · example 0.5`, src: IQ(4) + X },
    { m: 3, u: 'Unit II', t: 'Human Resource Planning', p: 3, q: `What are the barriers to effective HRP, and how can they be overcome?`,
      a: T(['Barrier', 'Why it is a problem', 'Remedy'], [['Lack of top management support', 'No resources or priority is given to planning', 'Show the benefits and involve top management'], ['Inaccurate data and forecasts', 'Wrong plans are made', 'Improve the HR information system'], ['Resistance from managers and employees', 'Plans are not implemented', 'Communication and participation']]) +
        P(`Other barriers are uncertainty of the environment and the cost and time of planning.`),
      ms: `Three barriers with remedies 1 each`, src: IQ(12) + X },

    // ---------- Job Analysis ----------
    { m: 2, u: 'Unit II', t: 'Job Analysis', p: 3, q: `What is Job Analysis?`,
      a: P(`<b>Job analysis</b> is the process of <b>collecting and analysing information about the tasks, duties, responsibilities and requirements of a job</b>.`) +
        L(`Its results are written as a <b>job description</b> (about the job) and a <b>job specification</b> (about the person).`, `It is the foundation of recruitment, training, appraisal and pay.`) + E(`Studying what a bank cashier does each day and the skills needed.`),
      ms: `Definition 1 · two points 0.5 each · example 0.5`, src: IQ(5) + X },
    { m: 3, u: 'Unit II', t: 'Job Analysis', p: 3, q: `Describe the methods of collecting job analysis data.`,
      a: T(['Method', 'How it works', 'Advantage', 'Limitation'], [['Observation', 'Analyst watches the job being done', 'First-hand facts', 'Time consuming'], ['Interview', 'Job holders and supervisors are questioned', 'Detailed information', 'May be biased'], ['Questionnaire', 'Written form filled by employees', 'Covers many employees', 'Poor response'], ['Diary method', 'Job holder records daily activities in a log', 'Accurate records of what is done', 'Employees may exaggerate']]),
      ms: `Four methods with explanation, 0.75 each`, src: IQ(13) + X },
    { m: 5, u: 'Unit II', t: 'Job Analysis', p: 3, q: `Distinguish between Job Description and Job Specification. Prepare a sample JD and JS for the position of Marketing Executive.`,
      a: H(`Difference`) + T(['Basis', 'Job description', 'Job specification'], [['Meaning', 'A statement of tasks, duties and responsibilities of the job', 'A statement of qualifications, skills and traits required from the job holder'], ['Concerned with', 'The job', 'The person'], ['Contents', 'Title, duties, reporting, working conditions', 'Education, experience, skills, personality'], ['Use', 'Tells what the job is', 'Helps in selecting the right person']]) +
        H(`Sample - Marketing Executive`) +
        L(`<b>Job description:</b> title - Marketing Executive; reports to Marketing Manager; duties - promote products, meet customers, conduct market surveys and prepare sales reports; working hours and location.`, `<b>Job specification:</b> BBA/MBA in marketing; 1-2 years' experience; good communication and persuasion skills; basic computer skills; ability to work under targets.`),
      ms: `Difference 3 · sample JD 1 · sample JS 1`, src: IQ(6) + X },
    { m: 6, u: 'Unit II', t: 'Job Analysis', p: 2, q: `"Job analysis is the cornerstone of all HR activities." Do you agree? Justify your answer.`,
      a: H(`Introduction`) + P(`Job analysis collects information about each job - its duties, responsibilities and requirements. Almost every HR decision is based on this information.`) +
        H(`I agree - justification`) +
        T(['HR activity', 'How job analysis is used'], [['HR planning', 'Shows what jobs and how many people are needed'], ['Recruitment and selection', 'Job description and specification define who is wanted'], ['Training', 'Shows skills required and gaps'], ['Performance appraisal', 'Sets the standards of performance'], ['Job evaluation and pay', 'The worth of a job is decided on its duties'], ['Safety and health', 'Identifies hazards of the job']]) +
        P(`<b>Conclusion:</b> without accurate job analysis the HR activities would be based on guesswork; hence it is the foundation of HRM.`),
      ms: `Introduction 1 · agree with 4 uses 4 · conclusion 1`, src: IQ(14) + X },
    { m: 10, u: 'Unit II', t: 'Job Analysis', p: 3, q: `What is Job Analysis? Discuss its process, methods and uses. How does it serve as the foundation for other HR functions?`,
      a: H(`1. Introduction`) + P(`A job is a group of tasks and duties. <b>Job analysis</b> is the process of collecting and analysing information about the tasks, duties, responsibilities and requirements of a job. It answers: what is done, why, how, where and by whom.`) +
        H(`2. Process of job analysis`) + O(`Decide the purpose and the jobs to be analysed.`, `Collect background information (organisation chart, existing job records).`, `Collect job data using suitable methods.`, `Verify the data with job holders and supervisors.`, `Prepare the job description and job specification.`, `Review and update regularly.`) +
        H(`3. Methods of collecting data`) + T(['Method', 'Meaning'], [['Observation', 'Watching employees at work'], ['Interview', 'Questioning job holders and supervisors'], ['Questionnaire', 'Written forms filled in by employees'], ['Diary method', 'Employees record their daily activities']]) +
        H(`4. Uses and foundation of other HR functions`) +
        T(['Function', 'Role of job analysis'], [['Planning', 'Defines jobs needed'], ['Recruitment and selection', 'Gives job description and specification'], ['Training and development', 'Shows skills required'], ['Appraisal', 'Provides performance standards'], ['Job evaluation and compensation', 'Basis of the pay structure'], ['Safety', 'Finds risks of jobs']]) +
        E(`A bank analyses the job of a loan officer; the resulting JD and JS are used to recruit, train, appraise and pay the officer.`) +
        H(`5. Conclusion`) + P(`Job analysis supplies the facts on which nearly every HR activity rests; hence it is the cornerstone of HRM.`),
      ms: `Introduction 1 · process 2 · methods 2 · uses 3 · example 1 · conclusion 1`, src: IQ(5) + X },

    // ---------- Recruitment ----------
    { m: 2, u: 'Unit II', t: 'Recruitment', p: 3, q: `Define recruitment.`,
      a: P(`<b>Recruitment</b> is the process of <b>searching for and attracting potential candidates</b> and encouraging them to apply for jobs in the organisation.`) +
        L(`It creates a <b>pool of applicants</b> from which the best can be selected.`, `It is a positive process, whereas selection is negative (rejecting unsuitable candidates).`) + E(`Advertising a vacancy in a newspaper and on a job portal.`),
      ms: `Definition 1 · two points 0.5 each · example 0.5`, src: IQ(7) + X },
    { m: 3, u: 'Unit II', t: 'Recruitment', p: 3, q: `Distinguish between recruitment and selection.`,
      a: T(['Basis', 'Recruitment', 'Selection'], [['Meaning', 'Searching and attracting candidates', 'Choosing the best from the applicants'], ['Nature', 'Positive - encourages applications', 'Negative - rejects unsuitable persons'], ['Sequence', 'Comes first', 'Follows recruitment'], ['Aim', 'To create a pool of applicants', 'To select the most suitable candidate']]) +
        P(`Recruitment generates the pool; selection chooses from it.`),
      ms: `Any three differences 1 each`, src: IQ(9) + X },
    { m: 5, u: 'Unit II', t: 'Recruitment', p: 3, q: `Define recruitment and discuss the factors affecting it. Explain how internal and external factors shape an organisation's recruitment strategy.`,
      a: H(`Introduction`) + P(`Recruitment is the process of searching for and attracting potential candidates to apply for jobs. How a firm recruits depends on several factors.`) +
        T(['Type', 'Factors', 'Effect on recruitment strategy'], [['Internal', 'Recruitment policy (promote from within or not), HR plan, size of the firm, cost, reputation of the firm', 'Decide the sources and the method of recruiting'], ['External', 'Labour market and unemployment, competitors\' pay, economy, labour laws, unions', 'Decide how much effort and pay is needed to attract people']]) +
        E(`If unemployment is high, applicants are plentiful and the firm can recruit cheaply; if skills are scarce, it must offer higher pay and use campus drives.`),
      ms: `Definition 1 · internal factors 2 · external factors 2`, src: IQ(7) + X },
    { m: 6, u: 'Unit II', t: 'Recruitment', p: 3, q: `Compare internal and external sources of recruitment. Discuss the merits and demerits of each with examples.`,
      a: H(`Introduction`) + P(`Sources of recruitment are the places from which candidates are found. They are internal (within the firm) and external (outside the firm).`) +
        T(['Basis', 'Internal sources', 'External sources'], [['Examples', 'Promotion, transfer, job posting, employee referrals', 'Campus placement, advertisements, employment exchanges, agencies, walk-ins'], ['Merits', 'Cheap and fast; boosts morale and loyalty; employee is already known', 'Fresh ideas and skills; wide choice; no internal rivalry'], ['Demerits', 'Limited choice; no new ideas; may cause jealousy', 'Costly and time-consuming; risk of wrong selection; may demotivate existing staff']]) +
        E(`Promoting a senior clerk to supervisor (internal); hiring a fresh MBA from a campus (external).`) +
        P(`<b>Conclusion:</b> most firms use both: internal for continuity and external for fresh talent.`),
      ms: `Introduction 1 · comparison table 3 · examples 1 · conclusion 1`, src: IQ(8) + X },
    { m: 6, u: 'Unit II', t: 'Recruitment', p: 2, q: `"Internal recruitment boosts morale, but external recruitment brings innovation." Critically evaluate this statement.`,
      a: H(`Introduction`) + P(`The statement compares the main strength of each source.`) +
        H(`Internal recruitment`) + L(`<b>Boosts morale:</b> employees see a promotion path and feel valued.`, `<b>Cheap and quick;</b> the candidate's performance is already known.`, `<b>Weakness:</b> limited choice, no new ideas, possible rivalry.`) +
        H(`External recruitment`) + L(`<b>Brings innovation:</b> new people bring new skills, experience and viewpoints.`, `<b>Weakness:</b> costly, slow, risk of a poor fit and possible demotivation of insiders.`) +
        H(`Evaluation`) + P(`The statement is broadly true, but not always: an insider may also innovate, and an outsider may lower morale. The best method depends on the post - promote for continuity, hire outside for fresh skills.`),
      ms: `Introduction 1 · internal 1.5 · external 1.5 · evaluation 2`, src: IQ(15) + X },

    // ---------- Selection ----------
    { m: 2, u: 'Unit II', t: 'Selection', p: 3, q: `What is selection?`,
      a: P(`<b>Selection</b> is the process of <b>choosing the most suitable candidate</b> from the pool of applicants created by recruitment, through tests, interviews and checks.`) +
        L(`It rejects unsuitable applicants, so it is a <b>negative</b> process.`, `It aims to match the candidate with the job requirements.`) + E(`Out of 500 applicants, 5 are finally appointed after tests and interviews.`),
      ms: `Definition 1 · two points 0.5 each · example 0.5`, src: IQ(9) + X },
    { m: 10, u: 'Unit II', t: 'Selection', p: 3, q: `Explain the selection process in detail. Describe each stage, from application screening to the final job offer.`,
      a: H(`1. Introduction`) + P(`Selection is the process of choosing the most suitable candidate from the applicants. It consists of a series of steps, each of which removes unsuitable candidates, so that cost is spent only on promising ones.`) +
        H(`2. Stages of the selection process`) +
        O(`<b>Application screening:</b> applications are checked against the job specification; those not meeting minimum qualifications are rejected.`, `<b>Employment tests:</b> aptitude, personality and situational tests measure ability, traits and judgement.`, `<b>Interview:</b> face-to-face discussion to judge communication, attitude and suitability.`, `<b>Reference and background check:</b> past employers and referees confirm the candidate's record.`, `<b>Medical examination:</b> checks physical fitness for the job.`, `<b>Final selection and job offer:</b> the best candidate is chosen and given an offer letter stating post, pay and terms.`, `<b>Placement and induction:</b> the person joins and is oriented to the organisation.`) +
        H(`3. Flow`) + T(['Stage', 'Purpose', 'Candidates remaining'], [['Screening', 'Remove unqualified', 'Many'], ['Tests', 'Measure ability', 'Fewer'], ['Interview', 'Judge suitability', 'Few'], ['Checks and medical', 'Verify', 'Very few'], ['Offer', 'Final choice', 'One or more']]) +
        E(`A bank receives 2,000 applications for 20 posts: screening leaves 500, the written test 100, the interview 30 and the final offer goes to 20.`) +
        H(`4. Conclusion`) + P(`A careful multi-stage process gives the organisation the right person, reduces turnover and saves training cost.`),
      ms: `Introduction 1 · six stages 5 · flow/table 1.5 · example 1 · conclusion 1.5`, src: IQ(9) + X },
    { m: 6, u: 'Unit II', t: 'Selection', p: 3, q: `Discuss the types of employment tests (aptitude, personality, situational). How do they improve the reliability and validity of selection decisions?`,
      a: H(`Introduction`) + P(`Employment tests are standard tools used to measure a candidate's ability and suitability for the job.`) +
        T(['Test', 'What it measures', 'Example'], [['Aptitude test', 'Potential to learn and ability (numerical, verbal, mechanical)', 'Numerical reasoning test for a bank clerk'], ['Personality test', 'Traits, attitude and temperament', 'Questionnaire on teamwork and stress handling'], ['Situational test', 'Judgement in realistic work situations', 'Handling an angry customer role play']]) +
        H(`Reliability and validity`) +
        L(`<b>Reliability</b> means consistency: the same candidate gets similar scores when tested again.`, `<b>Validity</b> means the test really predicts job performance.`, `Standard tests remove personal bias and let candidates be compared fairly, so decisions become more reliable and valid.`),
      ms: `Introduction 1 · three tests 3 · reliability and validity 2`, src: IQ(10) + X },
    { m: 6, u: 'Unit II', t: 'Selection', p: 3, q: `Explain the various interviewing techniques. What are the common errors in interviewing and how can they be avoided?`,
      a: H(`Introduction`) + P(`An interview is a formal conversation to judge a candidate's suitability. Different techniques are used for different needs.`) +
        T(['Technique', 'Meaning'], [['Structured', 'Fixed questions asked in the same order to all candidates'], ['Unstructured', 'Free-flowing conversation with no set questions'], ['Panel', 'A group of interviewers questions one candidate'], ['Behavioural', 'Questions about past behaviour in real situations'], ['Stress', 'Deliberate pressure to test composure'], ['Telephonic / video', 'Interview conducted remotely']]) +
        H(`Common errors and remedies`) +
        T(['Error', 'Meaning', 'Remedy'], [['Halo effect', 'One good trait influences the whole rating', 'Rate each trait separately'], ['Horns effect', 'One bad trait lowers the whole rating', 'Use structured criteria'], ['Bias and stereotyping', 'Judging by gender, looks or background', 'Train interviewers; panel interviews'], ['Poor listening / first impression', 'Decision made early', 'Standard questions; evaluate after the interview']]),
      ms: `Introduction 0.5 · techniques 3 · errors and remedies 2.5`, src: IQ(11) + X },
    { m: 3, u: 'Unit II', t: 'Selection', p: 3, q: `What are the limitations of interviews as a selection tool? How can they be reduced?`,
      a: P(`The interview is the most widely used tool but it has weaknesses.`) +
        O(`<b>Subjective judgement:</b> the interviewer's likes and dislikes affect the result.`, `<b>Errors like halo effect, bias and first-impression error</b> reduce fairness.`, `<b>Inconsistency:</b> different candidates get different questions.`) +
        P(`<b>Remedies:</b> structured questions, trained interviewers, panel interviews and scoring sheets.`),
      ms: `Limitations 2 · remedies 1`, src: IQ(11) + X },
  ]);
})();
