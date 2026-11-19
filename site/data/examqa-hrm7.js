// HRM written Q&A - part 7: detailed answers built from the new files of 19 Nov 2026 (HRM_Complete_Notes-DEQ_s-FM.pdf + unit slides).
// New framings: six-stage evolution, strategic role of HRM, HR manager roles, demand forecasting, interview types, training process, career stages, wage theories, grievance procedure, horn effect.
(function () {
  const { L, O, E, T, D, F } = window.ExamQA;
  const SY = 'New HRM notes (HRM_Complete_Notes-DEQ_s-FM.pdf and unit slides)';
  const P = (s) => `<p>${s}</p>`;
  const H = (s) => `<h4>${s}</h4>`;
  const FL = (...a) => `<p><b>Flow:</b> ${a.join(' → ')}</p>`;

  window.ExamQA.add('hrm', [
    { m: 6, u: 'Unit I', t: 'Evolution of HRM', p: 3, q: `Trace the evolution of HRM through its six stages, giving one line to justify each shift.`,
      a: FL('Commodity', 'Welfare', 'Bureaucratic', 'Human relations', 'Behavioural science', 'Strategic HRM') +
        T(['Stage', 'Period', 'Idea', 'Why the shift happened'], [
          ['Commodity', 'Pre-industrial - early 1900s', 'Labour is bought and sold like a raw material', 'Starting point - workers had no rights or security'],
          ['Welfare', 'Early 1900s - 1920s', 'Basic care for workers', 'Factory unrest; reformers and employers gave canteens, rest rooms, safety; Welfare Officers appeared'],
          ['Bureaucratic', '1920s - 1930s', 'Formal rules and hierarchy (Max Weber)', 'Larger organisations needed order and consistency'],
          ['Human relations', '1930s - 1950s', 'Social and emotional needs matter', 'Hawthorne Studies (Elton Mayo) showed attention and group belonging raise output'],
          ['Behavioural science', '1950s - 1970s', 'Motivation and leadership', 'Maslow, Herzberg, McGregor shaped jobs and policies'],
          ['Strategic HRM', '1980s - present', 'People as competitive advantage', 'HR joined top-level decisions; workforce planning linked to strategy']]) +
        P(`<b>Conclusion:</b> HRM moved from a cost-control view to a strategic partnership with the business.`),
      ms: `Six stages in order 4 · justification of shifts 2`, src: SY },
    { m: 10, u: 'Unit I', t: 'Strategic role of HRM', p: 3, q: `Discuss the strategic role of HRM in achieving organizational goals.`,
      a: H(`1. Introduction`) + P(`<b>Strategic HRM</b> links people management to the business strategy: HR is a <b>strategic partner</b>, not only an administrative department. Workforce planning, hiring, development and rewards are all designed to help the organisation reach its goals and to give it a lasting competitive advantage.`) +
        H(`2. How HRM contributes`) + T(['Area', 'Strategic contribution'], [
          ['Planning', 'HR planning matches the number and skills of people with future business plans'],
          ['Talent acquisition', 'Right people at the right time through planned recruitment and selection'],
          ['Development', 'Training and succession planning build capability for future roles'],
          ['Performance', 'Appraisal systems (MBO, 360-degree) align individual goals with organisational goals'],
          ['Rewards', 'Pay and incentives motivate behaviour that supports strategy'],
          ['Culture and change', 'HR shapes values and guides restructuring, mergers and technology change'],
          ['Analytics', 'HR data predicts attrition and engagement for evidence-based decisions']]) +
        H(`3. Why people are a competitive advantage`) + L(`Capital and technology can be copied; a skilled, motivated and well-managed workforce is hard to replicate.`, `Employees drive productivity, quality, innovation and customer service.`) +
        E(`Google's People Operations uses data (Project Oxygen) to decide hiring, promotion and retention - HR is a driver of business results.`) +
        H(`4. Conclusion`) + P(`HR creates value when its plans are tied to business strategy; the strategic role turns people from a cost into the most important asset.`),
      ms: `Introduction 2 · contributions table 4 · competitive advantage 2 · example 1 · conclusion 1`, src: SY },
    { m: 6, u: 'Unit I', t: 'Roles of HR Managers', p: 3, q: `Explain the five roles of an HR manager with examples of the key responsibilities.`,
      a: T(['Role', 'Meaning', 'Example'], [
          ['Advisory', 'Consultant to top management and line managers on people matters', 'Advising on a disciplinary case or hiring plan'],
          ['Policy-making', 'Frames HR policies for consistent decisions', 'Leave policy, code of conduct, promotion criteria'],
          ['Welfare', 'Looks after employee health, safety and amenities', 'Canteen, safety measures, medical facilities'],
          ['Mediator', 'Bridge between management and employees; settles conflict early', 'Resolving a dispute between a manager and a team'],
          ['Strategic partner', 'Takes part in top-level planning; aligns workforce with strategy', 'Workforce plan for a new plant']]) +
        H(`Key responsibilities`) + L(`Manpower planning; recruitment and selection; training and development.`, `Wage and salary structures; grievances and discipline.`, `Legal compliance (labour laws, safety) and employee records / HRIS.`) +
        P(`The slides describe the same work as strategic partner, administrative expert, employee champion, change agent, talent manager and learning facilitator.`),
      ms: `Five roles 3.5 · responsibilities 2 · note 0.5`, src: SY },
    { m: 6, u: 'Unit II', t: 'Forecasting', p: 3, q: `Explain the techniques of forecasting the demand for human resources.`,
      a: P(`<b>Demand forecasting</b> estimates how many employees, and with what skills, the organisation will need in the future.`) +
        T(['Technique', 'How it works', 'Remark'], [
          ['Managerial judgment', 'Experienced managers estimate staffing from workload and business plans', 'Simple but subjective'],
          ['Work-study technique', 'Time and motion study gives the workers needed for an output level', 'Common in manufacturing'],
          ['Delphi technique', 'Experts give anonymous forecasts over several rounds until consensus', 'Useful when past data is missing'],
          ['Ratio-trend analysis', 'Projects past ratios (workers to sales, supervisors to workers) forward', 'Assumes the ratio will hold'],
          ['Regression analysis', 'Uses statistical links between business variables and staffing', 'Needs good data']]) +
        P(`<b>Which is best?</b> A growing firm with past data can use ratio-trend and regression; a new venture without data can use Delphi.`),
      ms: `Meaning 1 · five techniques 4 · note 1`, src: SY },
    { m: 6, u: 'Unit II', t: 'Selection', p: 3, q: `Explain the types of interviews used in selection.`,
      a: T(['Type', 'Meaning', 'Best used for'], [
          ['Structured', 'Fixed, pre-decided questions asked of every candidate', 'Fair comparison across candidates'],
          ['Unstructured', 'Open, conversational interview without a fixed format', 'Exploring personality; hard to compare'],
          ['Panel', 'Several interviewers question the candidate together', 'Varied viewpoints, reduces one-person bias'],
          ['Stress', 'Deliberate pressure through rapid or challenging questions', 'High-pressure jobs'],
          ['Behavioural', 'Candidate describes how past situations were handled', 'Predicting future behaviour ("tell me about a time you resolved a conflict")']]) +
        P(`Common interviewing errors - halo effect, first impression, stereotyping - can be reduced by training interviewers and using structured questions.`),
      ms: `Five types 4 · note 2`, src: SY },
    { m: 5, u: 'Unit III', t: 'Training', p: 2, q: `Explain the six-step training process.`,
      a: FL('Organisational objectives', 'Needs assessment', 'Training goals', 'Design', 'Execution', 'Evaluation') +
        T(['Step', 'What happens'], [
          ['1 Assess objectives and strategy', 'Anchor training to the business, quality wanted and direction'],
          ['2 Training needs assessment', 'Diagnose gaps at organisation, task and person level'],
          ['3 Establish training goals', 'Set clear, measurable goals'],
          ['4 Design the programme', 'Choose content, methods, trainers, schedule'],
          ['5 Execute the programme', 'Deliver the training as planned'],
          ['6 Evaluate results', 'Measure with Kirkpatrick levels or ROI and feed back']]),
      ms: `Six steps with one line each`, src: SY },
    { m: 3, u: 'Unit III', t: 'Performance Appraisal', p: 2, q: `What is the horn effect? How does it differ from the halo effect?`,
      a: P(`The <b>horn effect</b> is an appraisal bias in which <b>one negative trait or incident unfairly drags down</b> the rater's view of the employee's overall performance. The <b>halo effect</b> is the opposite: one strong positive impression lifts ratings in unrelated areas.`) +
        T(['Basis', 'Halo effect', 'Horn effect'], [['Direction', 'Inflates the rating', 'Deflates the rating'], ['Cause', 'One good trait (e.g. punctuality)', 'One bad trait or incident'], ['Remedy', 'Rater training, multiple raters, documented evidence', 'Same']]),
      ms: `Horn effect 1.5 · difference 1.5`, src: SY },
    { m: 6, u: 'Unit III', t: 'Career Planning', p: 3, q: `Explain the five stages of a career with the main focus of each.`,
      a: T(['Stage', 'Roughly', 'Focus'], [
          ['Exploration', 'Early 20s', 'Discovering interests, abilities and values; trying roles'],
          ['Establishment', 'Mid-20s to mid-30s', 'Choose a path, build competence and credibility'],
          ['Mid-career', 'Mid-30s to 50s', 'Peak productivity and responsibility; may grow or plateau; mid-career crisis'],
          ['Late career', '50s onward', 'Mentoring and sharing expertise; prepare for exit'],
          ['Decline / disengagement', 'Final stage', 'Reduced involvement, retirement preparation, knowledge transfer']]) +
        P(`HR links these stages with <b>succession planning</b> - developing internal talent for key future roles.`),
      ms: `Five stages 5 · link 1`, src: SY },
    { m: 6, u: 'Unit IV', t: 'Wage Policy', p: 3, q: `Explain the theories of wage determination - subsistence, wage fund and bargaining.`,
      a: T(['Theory', 'Proponent', 'Core idea'], [
          ['Subsistence (Iron Law of Wages)', 'David Ricardo', 'Wages settle at the minimum needed to survive; if wages rise, the labour supply rises and pushes wages back down'],
          ['Wage Fund', 'Adam Smith / J. S. Mill', 'A fixed fund of capital is set aside for wages; average wage = fund ÷ number of workers, so wages rise only if the fund grows or workers fall'],
          ['Bargaining theory', 'John Davidson', 'Wages come from the relative bargaining power of employers and employees (unions), ability to pay and labour supply']]) +
        P(`<b>Comment:</b> modern wage fixing combines the market, bargaining and law (Minimum Wages Act, wage boards).`),
      ms: `Three theories 2 marks each`, src: SY },
    { m: 6, u: 'Unit IV', t: 'Grievance Handling', p: 3, q: `Explain the grievance handling machinery - the open door policy and the step-ladder procedure.`,
      a: P(`A <b>grievance</b> is any discontent, expressed or not, arising from the job that the employee thinks unfair. The <b>machinery</b> is the formal system to raise, escalate and settle grievances in time.`) +
        T(['Approach', 'Meaning', 'Merit / limit'], [['Open door policy', 'Employees approach senior management directly', 'Quick, builds trust; impractical in large firms'], ['Step-ladder procedure', 'Grievance moves up the hierarchy if unresolved', 'Orderly and recorded; slower']]) +
        FL('Immediate supervisor', 'Department head', 'HR / grievance committee', 'Top management or arbitration') +
        P(`A good system settles complaints before they grow into industrial disputes.`),
      ms: `Meaning 1 · open door 1.5 · step-ladder 3 · note 0.5`, src: SY },
    { m: 2, u: 'Unit I', t: 'Changing Role of HR', p: 2, q: `What is digital onboarding?`,
      a: P(`<b>Digital onboarding</b> means introducing new employees to the organisation remotely - through e-learning modules, virtual orientation and digital documentation - instead of paper forms and in-person sessions.`),
      ms: `Definition 2`, src: SY },
  ]);
})();
