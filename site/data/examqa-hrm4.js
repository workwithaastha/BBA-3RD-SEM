// Human Resource Management - written Q&A bank, DETAILED model answers. Part 4: Unit IV
// (job evaluation, compensation, wage administration, industrial relations, disputes, collective bargaining, grievances).
// Source: "Notes of Unit - 4" PDF + Important Questions; a few general points are standard HRM knowledge.
(function () {
  const { L, O, E, T } = window.ExamQA;
  const IQ = (n) => `Important Questions - Unit 4, Q${n}`;
  const N4 = ' · Notes of Unit - 4';
  const P = (s) => `<p>${s}</p>`;
  const H = (s) => `<h4>${s}</h4>`;

  window.ExamQA.add('hrm', [
    // ---------- Job Evaluation ----------
    { m: 2, u: 'Unit IV', t: 'Job Evaluation', p: 3, q: `What is job evaluation?`,
      a: P(`<b>Job evaluation</b> is a systematic way of determining the <b>value or worth of a job in relation to other jobs</b> in the organisation.`) +
        L(`It starts from job analysis (job descriptions).`, `Its aim is a rational and fair pay structure.`) + E(`Rating the jobs of clerk, accountant and manager to decide their relative pay.`),
      ms: `Definition 1 · two points 0.5 each · example 0.5`, src: IQ(1) + N4 },
    { m: 3, u: 'Unit IV', t: 'Job Evaluation', p: 3, q: `Distinguish between job analysis and job evaluation.`,
      a: T(['Basis', 'Job analysis', 'Job evaluation'], [['Meaning', 'Gathers information about a job', 'Determines the worth of a job'], ['Output', 'Job description and specification', 'Grading / pay rate of the job'], ['Sequence', 'Comes first', 'Follows job analysis']]) + P(`Job analysis collects facts; job evaluation uses them to value the job.`),
      ms: `Three differences 1 each`, src: IQ(1) + N4 },
    { m: 5, u: 'Unit IV', t: 'Job Evaluation', p: 3, q: `Explain the objectives of job evaluation.`,
      a: H(`Introduction`) + P(`Job evaluation rates jobs so that employees receive fair pay according to the importance of their jobs.`) +
        O(`<b>Fair wage differentials</b> between jobs.`, `<b>Eliminate inequities</b> in pay and reduce discrimination on the basis of age, gender and caste.`, `<b>Consistent wage policy</b> throughout the organisation.`, `<b>Basis for incentives</b> and wage negotiation with unions.`, `<b>Control payroll cost</b> by paying jobs only what they are worth.`),
      ms: `Introduction 0.5 · five objectives 4 · explanation 0.5`, src: IQ(1) + N4 },
    { m: 10, u: 'Unit IV', t: 'Job Evaluation', p: 3, q: `What is job evaluation? Explain its objectives, process and importance. How does it help in designing a fair pay structure?`,
      a: H(`1. Introduction`) + P(`<b>Job evaluation</b> is a systematic way of determining the value or worth of a job in relation to other jobs. Every method needs at least some basic job analysis. It aims at a rational pay structure.`) +
        H(`2. Objectives`) + L(`Determine equitable wage differentials between jobs.`, `Eliminate inequities and reduce discrimination.`, `Consistent wage policy, basis for incentives and support in negotiations.`, `Control payroll cost.`) +
        H(`3. Process`) + O(`Gain acceptance of the programme from employees and unions.`, `Form a job evaluation committee of experienced employees, union representatives and HR experts (one person cannot evaluate all key jobs).`, `Identify the jobs to be evaluated.`, `Analyse jobs and prepare job descriptions.`, `Select the method of evaluation.`, `Classify the jobs.`, `Convert the ratings into pay rates.`) +
        H(`4. Importance`) + L(`Gives employees confidence that pay is fair.`, `Reduces disputes and wage complaints.`, `Helps hiring at the right pay.`) +
        H(`5. Fair pay structure`) + P(`Jobs of equal worth get equal pay and jobs of higher worth get higher pay. Thus the pay structure is based on the demands of the job and not on personal likes.`) +
        E(`If a supervisor's job scores 300 points and a clerk's 150, the supervisor's grade carries a higher pay band.`) + H(`6. Conclusion`) + P(`Job evaluation links pay to job worth and provides a fair, defensible base for compensation.`),
      ms: `Introduction 1 · objectives 2 · process 3 · importance 1 · pay structure 2 · conclusion 1`, src: IQ(1) + N4 },
    { m: 10, u: 'Unit IV', t: 'Job Evaluation', p: 3, q: `Explain the methods of job evaluation. Discuss the merits and demerits of each.`,
      a: H(`1. Introduction`) + P(`Job evaluation methods are of two types: non-analytical (the job is considered as a whole - ranking and classification) and analytical (the job is broken into factors - point and factor comparison).`) +
        H(`2. Ranking method`) + P(`Jobs are arranged from the highest to the lowest in value as a whole. <b>Merits:</b> simplest and quickest. <b>Demerits:</b> subjective and difficult in large organisations; suited only to small firms.`) +
        H(`3. Classification method`) + P(`Jobs are assigned to predetermined job classes or grades (e.g. executives, skilled, semi-skilled, unskilled). <b>Merits:</b> simple; suits many jobs. <b>Demerits:</b> grade definitions are difficult and jobs may be forced into a wrong grade.`) +
        H(`4. Factor comparison method`) + P(`Jobs are ranked factor by factor (mental effort, physical effort, skill, responsibility) against 15-20 key jobs that represent wage levels, and money is assigned to each factor. <b>Merits:</b> consistent. <b>Demerits:</b> the most complex method.`) +
        H(`5. Point method`) + P(`Jobs are expressed in terms of key factors (skill, responsibility, effort) with sub-factors and points; the points are added and later converted to money. <b>Merits:</b> widely used, systematic, less subjective. <b>Demerits:</b> time consuming and costly to design.`) +
        H(`6. Summary`) + T(['Method', 'Basis', 'Best for'], [['Ranking', 'Job as whole', 'Small firms'], ['Classification', 'Grades', 'Large groups of similar jobs'], ['Factor comparison', 'Factors with money', 'Where consistency is needed'], ['Point', 'Factors with points', 'Most organisations']]) +
        H(`7. Conclusion`) + P(`The choice depends on the size and complexity of the organisation; the point method is the most widely used today.`),
      ms: `Introduction 1 · four methods with merit/demerit 6 · summary 2 · conclusion 1`, src: IQ(2) + N4 },

    // ---------- Compensation ----------
    { m: 2, u: 'Unit IV', t: 'Compensation', p: 3, q: `Define employee compensation.`,
      a: P(`<b>Compensation</b> is the <b>total reward received by an employee in exchange for the services performed</b> for the organisation.`) +
        L(`<b>Direct compensation:</b> salary, wages, bonus and incentives.`, `<b>Indirect compensation:</b> benefits such as insurance, paid leave and pension.`) + E(`A salary of Rs 30,000 plus medical insurance and annual bonus.`),
      ms: `Definition 1 · two points 0.5 each · example 0.5`, src: IQ(3) + N4 },
    { m: 3, u: 'Unit IV', t: 'Compensation', p: 3, q: `Explain the objectives of a compensation system.`,
      a: O(`<b>Attract and retain</b> high-quality employees by offering competitive pay.`, `<b>Ensure adequate role behaviour:</b> pay should make employees perform their assigned duties.`, `<b>Motivate extra-role behaviour:</b> incentives encourage employees to do more than required.`) + P(`A good system is fair, legal and affordable.`),
      ms: `Three objectives 1 each`, src: IQ(3) + N4 },
    { m: 3, u: 'Unit IV', t: 'Compensation', p: 3, q: `Explain pay level, pay structure and pay form.`,
      a: T(['Term', 'Meaning'], [['Pay level', 'The relative amount of pay assigned to each job compared with the job market'], ['Pay structure', 'The relative pay differential among various jobs within the organisation'], ['Pay form', 'The makeup of pay - guaranteed versus at-risk (variable) pay']]) + E(`Offering a clerk Rs 20,000 where the market rate is Rs 22,000 shows a lower pay level.`),
      ms: `Three terms 1 each`, src: N4 },
    { m: 6, u: 'Unit IV', t: 'Compensation', p: 3, q: `Define employee compensation and explain its objectives. Discuss the components: base pay, incentives and fringe benefits.`,
      a: H(`Introduction`) + P(`Compensation is the total reward received by an employee in exchange for services. It includes direct pay (salary and wages) and indirect pay (benefits).`) +
        H(`Objectives`) + L(`Attract and retain good employees.`, `Ensure adequate role behaviour.`, `Motivate extra-role behaviour.`) +
        H(`Components`) +
        T(['Component', 'Meaning', 'Examples'], [['Base (guaranteed) pay', 'Fixed monetary reward based on the employer-employee relationship', 'Basic salary, wages'], ['Incentives (variable pay)', 'Pay linked to performance, results or discretion', 'Bonus, sales incentive, piece rate, profit sharing, gainsharing'], ['Fringe benefits', 'Non-cash benefits that supplement pay', 'Medical insurance, paid time off, company car'], ['Equity-based pay', 'Rewards through the employer\'s shares', 'Stock options']]),
      ms: `Definition 1 · objectives 1.5 · components 3.5`, src: IQ(3) + N4 },
    { m: 5, u: 'Unit IV', t: 'Compensation', p: 3, q: `Explain the various incentive plans: piece rate, standard hour plan, profit sharing and gainsharing.`,
      a: H(`Introduction`) + P(`Incentive plans link a part of pay with performance to motivate employees.`) +
        T(['Plan', 'Meaning', 'Example'], [['Piece rate', 'An individual incentive plan under which pay depends on the number of units produced', 'Rs 5 for each unit stitched'], ['Standard hour plan', 'Employee is paid the hourly rate for the standard time of a task, regardless of the actual time taken', 'Standard 1.5 h at Rs 40/h = Rs 60 whether it takes 1 or 3 hours'], ['Profit sharing', 'An annual bonus from a pool based on the overall profitability of the company', 'Year-end profit bonus'], ['Gainsharing', 'Bonus based on productivity, comparing labour cost with the value of output; savings are split between employees and the company', 'Bonus for lower labour cost per unit']]) +
        P(`<b>Note:</b> a bonus is a lump sum for a specific objective and does not become part of the base pay, whereas merit pay does.`),
      ms: `Introduction 0.5 · four plans 4 · note 0.5`, src: N4 },
    { m: 3, u: 'Unit IV', t: 'Compensation', p: 2, q: `Distinguish between defined contribution plans and termination benefits.`,
      a: T(['Basis', 'Defined contribution plan', 'Termination benefits'], [['Meaning', 'A post-employment plan where the enterprise pays fixed contributions into a separate fund', 'Benefits payable on early termination or voluntary retirement'], ['Obligation', 'No further obligation if the fund is insufficient', 'Arises due to the decision to terminate'], ['Example', 'Provident fund contribution', 'Voluntary retirement compensation']]) + P(`Vested employee benefits are benefits already earned that do not depend on future employment.`),
      ms: `Three differences 1 each`, src: N4 },

    // ---------- Wage & salary administration ----------
    { m: 2, u: 'Unit IV', t: 'Wage & Salary Administration', p: 3, q: `What is wage policy?`,
      a: P(`<b>Wage policy</b> is the set of principles and guidelines that an organisation or the government follows in fixing and administering wages and salaries.`) +
        L(`It should be fair to both employers and employees and consistent with law.`, `Principles include equity, adequacy, incentive and ability to pay; "equal pay for equal work" is a key principle.`),
      ms: `Definition 1 · two points 0.5 each`, src: IQ(4) + N4 },
    { m: 3, u: 'Unit IV', t: 'Wage & Salary Administration', p: 3, q: `Distinguish between wages and salary.`,
      a: T(['Basis', 'Wages', 'Salary'], [['Paid to', 'Workers (manual, unskilled)', 'Clerical, managerial and professional staff'], ['Period', 'Daily or weekly', 'Monthly'], ['Basis', 'Often hours or output', 'Fixed monthly amount']]) + P(`Wage determination is the process of fixing the wage rates for different jobs using job evaluation, market surveys and the organisation's ability to pay.`),
      ms: `Three differences 1 each`, src: IQ(4) },
    { m: 6, u: 'Unit IV', t: 'Wage & Salary Administration', p: 3, q: `Explain the concept of wage policy and wage determination. Discuss the principles and the factors that influence wage and salary administration.`,
      a: H(`Introduction`) + P(`<b>Wage policy</b> is the guiding framework for fixing pay; <b>wage determination</b> is the process of fixing the wage rates for different jobs.`) +
        H(`Principles`) + L(`Fairness to employers and employees; compliance with law.`, `Equal pay for equal work.`, `Adequacy, incentive and ability to pay.`) +
        H(`Factors influencing wages`) +
        T(['Internal factors', 'External factors'], [['Ability to pay', 'Laws such as the Minimum Wages Act and bonus rules'], ['Organisation\'s strategy', 'State of the economy; a depressed economy lowers wages'], ['Job evaluation', 'Inflation and cost of living'], ['Employee performance, experience and seniority', 'Labour market and competitors\' pay'], ['Employee potential', 'Trade unions; technology']]) +
        P(`Trade unions generally prefer <b>seniority</b> as an objective criterion for pay rises; management prefers performance.`),
      ms: `Concepts 1.5 · principles 1.5 · factors 3`, src: IQ(4) + ' · ' + IQ(6) + N4 },
    { m: 3, u: 'Unit IV', t: 'Wage Concepts', p: 3, q: `Distinguish between minimum wage, fair wage and living wage.`,
      a: T(['Wage', 'Meaning'], [['Minimum wage', 'The lowest wage that meets the basic needs of a worker and his family; the legal floor under the Minimum Wages Act, 1948'], ['Fair wage', 'Lies between the minimum wage and the living wage; depends on productivity, prevailing rates and the employer\'s capacity to pay'], ['Living wage', 'A wage giving a decent standard of living including education, health and some savings']]) + P(`<b>Order (lowest to highest):</b> minimum wage, fair wage, living wage (Committee on Fair Wages, 1948).`),
      ms: `Three wages 2.5 · order 0.5`, src: IQ(5) + N4 },
    { m: 6, u: 'Unit IV', t: 'Wage Concepts', p: 3, q: `Discuss the concept of minimum wage, fair wage and living wage. What is the role of Wage Boards in wage determination in India?`,
      a: H(`Introduction`) + P(`Wages are classified into three levels according to what they provide to the worker.`) +
        T(['Wage', 'Meaning', 'Factors'], [['Minimum wage', 'Basic needs of worker and family at the lowest acceptable level', 'Fixed by law (Minimum Wages Act, 1948)'], ['Fair wage', 'Between minimum and living wage', 'Productivity of labour and capacity of the industry to pay'], ['Living wage', 'Decent standard of living, education, health and some savings', 'Cost of living']]) +
        H(`Wage Boards`) + L(`A Wage Board is a <b>tripartite body</b> of employer, employee and independent members.`, `It <b>recommends wage structure and related benefits</b> for an industry.`, `Its recommendations guide wage determination in that industry and help in settling disputes.`),
      ms: `Introduction 0.5 · three wages 3 · wage boards 2.5`, src: IQ(5) + N4 },

    // ---------- Industrial Relations ----------
    { m: 2, u: 'Unit IV', t: 'Industrial Relations', p: 3, q: `Define Industrial Relations.`,
      a: P(`<b>Industrial relations</b> describe the relationship between <b>management and employees and their organisations</b> (Dale Yoder). According to Dunlop, industrial relations are the complex of interrelations among managers, workers and agencies of government.`) +
        L(`The parties are employees, employers, trade unions, employers' associations, government, courts and tribunals.`),
      ms: `Definition 1 · parties 1`, src: IQ(7) + N4 },
    { m: 3, u: 'Unit IV', t: 'Industrial Relations', p: 3, q: `Explain the scope of industrial relations.`,
      a: O(`<b>Collective bargaining</b> and <b>workers' participation in management</b>.`, `<b>Industrial disputes</b>, their prevention and the machinery for settlement.`, `<b>Grievance handling and discipline</b>, and <b>labour legislation</b>.`) + P(`Parties to IR include employees, employers, trade unions, employers' associations, government, courts and tribunals.`),
      ms: `Three points 1 each`, src: IQ(7) + N4 },
    { m: 10, u: 'Unit IV', t: 'Industrial Relations', p: 3, q: `Define Industrial Relations. Discuss its concept, objectives and importance for industrial peace and productivity.`,
      a: H(`1. Introduction`) + P(`Industrial relations (IR) describe the relationship between management and employees and their organisations. Dunlop defines them as the complex of interrelations among managers, workers and agencies of government.`) +
        H(`2. Concept`) + L(`IR arises because industrial societies need managers, workers and governments to deal with one another.`, `It covers both individual and collective relations in industry.`) +
        H(`3. Parties`) + L(`Employees and trade unions, employers and employers' associations, government, courts and tribunals.`) +
        H(`4. Scope`) + L(`Collective bargaining, workers' participation, disputes and their machinery, grievances and discipline, labour legislation.`) +
        H(`5. Objectives`) + L(`Maintain harmonious relations between management and workers.`, `Prevent and settle industrial disputes.`, `Protect the interests of both sides and promote industrial democracy.`) +
        H(`6. Importance for industrial peace and productivity`) + T(['Importance', 'Explanation'], [['Industrial peace', 'Fewer strikes, lockouts and gheraos'], ['Higher productivity', 'Cooperative workers produce more'], ['Protection of interests', 'Fair deal for management and labour'], ['Industrial democracy', 'Workers\' voice in decisions']]) + H(`7. Conclusion`) + P(`Good industrial relations are the base of industrial peace and growth.`),
      ms: `Introduction 1 · concept and parties 2 · scope 1.5 · objectives 1.5 · importance 3 · conclusion 1`, src: IQ(7) + N4 },
    { m: 6, u: 'Unit IV', t: 'Industrial Relations', p: 3, q: `Discuss the role of the government, trade unions and management in maintaining healthy industrial relations.`,
      a: H(`Introduction`) + P(`Healthy industrial relations need the cooperation of the government, trade unions and management.`) +
        T(['Party', 'Role'], [['Government', 'Makes labour laws (Trade Unions Act, 1926; Industrial Disputes Act; Minimum Wages Act, 1948), provides conciliation, arbitration and adjudication, appoints wage boards'], ['Trade unions', 'Represent workers, bargain collectively, protect workers\' rights and maintain discipline among members'], ['Management', 'Fair pay and conditions, a grievance procedure, communication and workers\' participation']]) +
        P(`<b>Conclusion:</b> when all three play their roles responsibly, disputes are reduced and productivity improves.`),
      ms: `Introduction 0.5 · three roles 4.5 · conclusion 1`, src: IQ(11) + N4 },

    // ---------- Industrial Disputes ----------
    { m: 2, u: 'Unit IV', t: 'Industrial Disputes', p: 3, q: `What is an industrial dispute? Name its causes.`,
      a: P(`An <b>industrial dispute</b> is a conflict or difference between management and workers (or among workers) over employment terms, wages or conditions.`) +
        L(`<b>Causes:</b> wages and allowances, bonus, working conditions.`, `Retrenchment, lay-off, victimisation and indiscipline.`),
      ms: `Definition 1 · causes 1`, src: IQ(8) + N4 },
    { m: 3, u: 'Unit IV', t: 'Industrial Disputes', p: 3, q: `Distinguish between strike and lockout.`,
      a: T(['Basis', 'Strike', 'Lockout'], [['Meaning', 'Quitting of work by a group of workers to press demands', 'Employer closes the place of work to pressure workers'], ['By whom', 'Workers', 'Employer'], ['Types', 'Economic, sympathetic, sit-down, slow-down, hunger', 'Total or partial closure']]) + P(`In a sit-down strike workers stay at the workplace but do not work.`),
      ms: `Three differences 1 each`, src: N4 },
    { m: 3, u: 'Unit IV', t: 'Industrial Disputes', p: 3, q: `Explain gherao, picketing, lay-off and retrenchment.`,
      a: T(['Term', 'Meaning'], [['Gherao', 'Preventing members of management from leaving the premises by blocking exits with human barricades'], ['Picketing', 'Stationing persons at the factory gate to dissuade workers from reporting for work'], ['Lay-off', 'Temporarily setting aside workmen for a period no longer than the emergency'], ['Retrenchment', 'Permanent discharge of surplus labour by the employer for any reason']]),
      ms: `Four terms, 0.75 each`, src: N4 },
    { m: 10, u: 'Unit IV', t: 'Industrial Disputes', p: 3, q: `What are industrial disputes? Explain their causes, forms and the machinery for settlement.`,
      a: H(`1. Introduction`) + P(`An <b>industrial dispute</b> is a conflict between management and workers over terms and conditions of employment. Disputes of <b>interest</b> concern new claims and demands; disputes of <b>right</b> concern the application or interpretation of an existing agreement.`) +
        H(`2. Causes`) + T(['Type', 'Causes'], [['Economic', 'Wages and allowances, bonus, working conditions'], ['Managerial', 'Retrenchment, lay-off, victimisation, indiscipline'], ['Other', 'Recognition of unions, interpretation of agreements']]) +
        H(`3. Forms of industrial action`) + T(['Form', 'Meaning'], [['Strike', 'Workers quit work to press demands - economic, sympathetic, sit-down, slow-down, hunger'], ['Lockout', 'Employer closes the workplace'], ['Gherao', 'Management confined by a human barricade'], ['Picketing', 'People stationed at the gate to stop workers entering'], ['Retrenchment', 'Permanent discharge of surplus staff'], ['Lay-off', 'Temporary setting aside of workmen']]) +
        H(`4. Machinery for settlement`) + T(['Method', 'Nature'], [['Conciliation', 'A third party helps both sides reach settlement but cannot impose a decision'], ['Arbitration', 'A neutral arbitrator gives a binding award (voluntary, by mutual consent)'], ['Adjudication', 'Labour courts and industrial tribunals decide; compulsory and binding']]) +
        E(`If workers and management disagree on bonus, a conciliation officer first tries to settle; failing which the matter may go to a tribunal.`) + H(`5. Conclusion`) + P(`Prevention through good communication, grievance procedure and collective bargaining is better than settlement of disputes.`),
      ms: `Introduction 1 · causes 2 · forms 3 · machinery 2.5 · example 0.5 · conclusion 1`, src: IQ(8) + N4 },

    // ---------- Collective bargaining ----------
    { m: 2, u: 'Unit IV', t: 'Collective Bargaining', p: 3, q: `Define collective bargaining.`,
      a: P(`<b>Collective bargaining</b> is a process in which <b>management and employee representatives meet and negotiate</b> the terms and conditions of employment.`) +
        L(`It is a group action: both sides act as a group, not as individuals.`, `It is voluntary and bipartite (only the two parties take part).`),
      ms: `Definition 1 · two points 0.5 each`, src: IQ(9) + N4 },
    { m: 3, u: 'Unit IV', t: 'Collective Bargaining', p: 3, q: `State the characteristics of collective bargaining.`,
      a: O(`<b>Collective and bipartite:</b> only management and workers' representatives participate, without third-party intervention.`, `<b>Flexible, dynamic and continuous:</b> it is not a rigid one-time event; terms keep being renegotiated.`, `<b>Two-way and voluntary:</b> both sides give and take, and it ensures industrial democracy.`),
      ms: `Three characteristics 1 each`, src: IQ(9) + N4 },
    { m: 6, u: 'Unit IV', t: 'Collective Bargaining', p: 3, q: `Explain collective bargaining and discuss its process. How does it help in resolving conflicts between management and workers?`,
      a: H(`Introduction`) + P(`Collective bargaining is a process in which management and employee representatives negotiate the terms and conditions of employment. It is voluntary, bipartite, flexible and continuous.`) +
        H(`Process`) +
        O(`<b>Pre-negotiation preparation</b> - collecting data and fixing demands; the notes say that about 83% of the bargaining outcome is influenced by this stage.`, `<b>Negotiation</b> - on wages, supplementary benefits (pension, gratuity, health insurance) and administrative issues (seniority, grievance).`, `<b>Agreement</b> - the terms are written down.`, `<b>Ratification</b> - approval by members, because the negotiators may not have the ultimate authority to decide.`, `<b>Administration</b> - the HR manager runs the agreement day to day; signing is the beginning of implementation, not the end.`) +
        H(`How it helps`) + P(`It settles issues peacefully across the table, builds mutual understanding, prevents strikes and lockouts, and ensures industrial democracy.`),
      ms: `Introduction 1 · process 3.5 · how it helps 1.5`, src: IQ(9) + N4 },

    // ---------- Grievance ----------
    { m: 2, u: 'Unit IV', t: 'Grievance', p: 3, q: `What is a grievance?`,
      a: P(`A <b>grievance</b> is <b>any dissatisfaction or feeling of injustice in connection with one's employment</b> that is brought to the attention of management.`) +
        L(`It may be valid or not, expressed or not.`, `The National Commission on Labour said complaints on wage payment, overtime, leave, transfer, promotion, seniority, work assignment and discharge constitute grievances.`),
      ms: `Definition 1 · two points 0.5 each`, src: IQ(10) + N4 },
    { m: 3, u: 'Unit IV', t: 'Grievance', p: 3, q: `Explain the causes of employee grievances.`,
      a: T(['Cause', 'Examples'], [['Management policy', 'Wage payment, leave, overtime, seniority, transfer, disciplinary action'], ['Working conditions', 'Improper matching of worker with the job, poor environment'], ['Personal reasons', 'Over-ambition, excessive self-esteem (the employee\'s attitude)']]),
      ms: `Three causes 1 each`, src: IQ(10) + N4 },
    { m: 6, u: 'Unit IV', t: 'Grievance', p: 3, q: `Explain the causes of employee grievances and how they can be redressed.`,
      a: H(`Introduction`) + P(`A grievance is any dissatisfaction or feeling of injustice about one's employment that is brought to the notice of management.`) +
        H(`Causes`) + L(`<b>Management policy</b> - wages, leave, overtime, seniority, transfer.`, `<b>Working conditions</b> - improper matching of worker with the job.`, `<b>Personal reasons</b> - over-ambition and excessive self-esteem.`) +
        H(`Redressal - Model Grievance Procedure`) +
        T(['Step', 'Time limit'], [['Officer designated by management gives his reply', '48 hours'], ['Head of the department', '3 days'], ['Grievance committee recommendation', '7 days'], ['Manager\'s decision', '3 days'], ['Revision petition', '7 days'], ['If still unsatisfied', 'Voluntary arbitration (final step)']]) +
        P(`A grievance should first be dealt with at the lowest level, by the immediate superior, so that it is settled on the spot. The Code of Discipline adopted by the Indian Labour Conference in 1957 advised a mutually agreed grievance procedure.`),
      ms: `Introduction 0.5 · causes 1.5 · procedure 3 · note 1`, src: IQ(10) + N4 },
    { m: 3, u: 'Unit IV', t: 'Grievance', p: 2, q: `What are the essentials of an effective grievance procedure?`,
      a: O(`<b>Legal sanctity:</b> the procedure must conform to the law.`, `<b>Acceptability and simplicity:</b> it must be accepted by all and be simple to use.`, `<b>Promptness:</b> grievances must be settled quickly, within fixed time limits, with a right to appeal.`),
      ms: `Three essentials 1 each`, src: N4 },
  ]);
})();
