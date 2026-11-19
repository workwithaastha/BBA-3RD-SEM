# HRM study notes - extra detailed topics added so that every important question of the bank is covered in the notes.
# Importing this module extends UNIT1..UNIT4 in place (inserts topics after the section whose number is given).
from hrm_study_content1 import EG, FL, KEY, OL, P, T, UL, UNIT1, UNIT2
from hrm_study_content2 import UNIT3, UNIT4


def add_after(unit, num, heading, body):
    topics = unit[3]
    at = next(i for i, (h, _) in enumerate(topics) if h.startswith(num + " "))
    topics.insert(at + 1, (heading, body))


def append_to(unit, num, extra):
    topics = unit[3]
    at = next(i for i, (h, _) in enumerate(topics) if h.startswith(num + " "))
    h, b = topics[at]
    topics[at] = (h, b + extra)


# ---------------------------------------------------------------- UNIT I
add_after(UNIT1, "1.6", "1.6A Policies and principles of HRM",
          P("An <b>HR policy</b> is a standing statement of how the organisation will deal with people matters; <b>principles</b> are the basic beliefs that guide those policies. Together they contribute to the <b>effectiveness, continuity and stability</b> of the organisation.")
          + "<h4>Features of good HR policies</h4>"
          + UL("<b>Clear and written</b> so that everyone understands them.", "<b>Consistent</b> with business objectives and with each other.", "<b>Fair and flexible</b> - uniform treatment, yet open to revision.", "<b>Legal</b> - in line with labour laws.", "<b>Communicated</b> to all employees.")
          + "<h4>Examples of HR policies</h4>"
          + UL("Recruitment and selection policy (internal vs external hiring).", "Compensation and benefits policy.", "Promotion and transfer policy.", "Training and development policy.", "Leave, discipline and grievance policy; code of conduct.")
          + "<h4>Principles of HRM</h4>"
          + UL("People are the most important asset and are to be developed.", "Right person for the right job (right man, right place, right time).", "Equal opportunity and fair treatment.", "Mutual trust, participation and open communication.", "Balance between organisational and individual goals.")
          + "<h4>How policies help</h4>"
          + T(["Contribution", "Explanation"], [["Effectiveness", "Decisions are quick and consistent; managers know the rules"], ["Continuity", "Practices continue even when managers change"], ["Stability", "Employees feel secure because treatment is predictable and fair"]]))
add_after(UNIT1, "1.9", "1.9A Challenges faced by HRM today",
          UL("<b>Changing workforce</b> - diversity of age, gender, culture; multi-generation teams.", "<b>Technology change</b> - automation and AI need re-skilling and change management.", "<b>Attracting and retaining talent</b> - high attrition and competition for skilled people.", "<b>Globalisation</b> - cross-border compliance, expatriates, cultural differences.", "<b>Work-life balance and well-being</b> - stress, hybrid and remote work.", "<b>Cost pressure</b> - controlling labour cost while keeping quality.", "<b>Legal and ethical compliance</b> - labour laws, data privacy, harassment prevention.", "<b>Employee engagement and productivity</b> - motivating a dispersed workforce.")
          + P("<b>Response:</b> strong HR analytics, continuous learning, flexible work policies, fair pay and a positive culture."))
append_to(UNIT1, "1.10", "<h4>Strategic role of HRM in achieving organisational goals</h4>"
          + P("<b>Strategic HRM</b> links people management to business strategy; HR becomes a <b>strategic partner</b>, not only an administrative department.")
          + T(["Area", "Strategic contribution"], [["Planning", "HR planning matches the number and skills of people with business plans"], ["Talent acquisition", "Right people at the right time"], ["Development", "Training and succession planning build future capability"], ["Performance", "Appraisal (MBO, 360-degree) aligns individual goals with organisational goals"], ["Rewards", "Pay and incentives motivate behaviour that supports strategy"], ["Culture and change", "HR shapes values and guides restructuring and technology change"], ["Analytics", "HR data predicts attrition and engagement"]])
          + P("People are hard for competitors to copy, so a skilled and committed workforce is a source of sustainable competitive advantage."))

# ---------------------------------------------------------------- UNIT II
append_to(UNIT2, "2.4", P("<b>Why job analysis is the cornerstone of HR activities:</b> every HR function depends on knowing what a job involves.")
          + T(["HR activity", "How job analysis helps"], [["Planning", "Shows the jobs and skills needed in future"], ["Recruitment and selection", "Gives job description and specification to search and choose candidates"], ["Training", "Shows skill gaps and training content"], ["Appraisal", "Provides performance standards"], ["Job evaluation and pay", "Shows relative worth of jobs"], ["Safety and design", "Identifies hazards and improves job design"]]))
append_to(UNIT2, "2.5", EG("<b>Marketing Executive.</b> JD: reports to the Marketing Manager; plans and runs promotion campaigns, handles dealer and customer enquiries, collects market data, prepares monthly sales and campaign reports; uses CRM software, laptop, mobile; field and office work. JS: BBA / MBA (Marketing); 1-2 years' experience in sales or marketing; communication, negotiation, digital marketing and MS Office skills; energetic, persuasive, target-oriented and willing to travel."))
append_to(UNIT2, "2.6", "<h4>Internal and external recruitment - critical view</h4>"
          + P("Internal recruitment boosts morale and loyalty and saves cost, but may limit fresh ideas and cause rivalry; external recruitment brings innovation and new skills, but costs more and may upset insiders. Most firms use <b>both</b>: internal sources for continuity and middle posts, external sources for new skills and entry-level jobs.")
          + T(["Source", "Merits", "Demerits"], [["Internal", "Morale and loyalty, low cost, quick, candidate already known, motivates others", "Limited choice, no new ideas, internal politics, 'inbreeding'"], ["External", "Fresh talent and ideas, wider choice, brings new skills, no internal rivalry", "Costly and slow, risk of wrong choice, longer induction, demotivates insiders"]]))

# ---------------------------------------------------------------- UNIT III
append_to(UNIT3, "3.3", "<h4>Merits and demerits of the common techniques</h4>"
          + T(["Technique", "Merits", "Demerits"], [["Job rotation", "Broad skills, reduces boredom", "Disrupts routine, shallow expertise"], ["Coaching / mentoring", "Personal guidance, low cost", "Depends on the quality of the coach or mentor"], ["Apprenticeship", "Deep skill, earn while learning", "Long and slow"], ["Lecture", "Many trainees at once, low cost", "One-way, little practice"], ["Case study", "Builds analysis and decision skills", "Cases may not match reality"], ["Role play", "Safe practice of people skills", "Artificial, depends on participants"], ["Simulation / vestibule", "Risk-free practice on real equipment", "Costly set-up"]]))
add_after(UNIT3, "3.6", "3.6A Challenges of performance appraisal and how to overcome them",
          T(["Challenge", "How to overcome it"], [["Rater bias (halo, horn, leniency, central tendency, recency)", "Train raters; use multiple raters (360-degree); keep records through the year"], ["Unclear or unfair standards", "Set clear, measurable, agreed goals (MBO)"], ["Fear and resistance of employees", "Involve employees; focus on development, not punishment"], ["Poor feedback", "Hold regular, specific, two-way feedback sessions"], ["Subjectivity of trait-based scales", "Use behaviour-based tools such as BARS"], ["Time consumed and paperwork", "Use HR software and simple formats"], ["Rating not linked to rewards or training", "Connect results to promotion, pay and training plans"]])
          + P("An appraisal system works when it is <b>fair, transparent, regular and linked to development</b>."))

# ---------------------------------------------------------------- UNIT IV
append_to(UNIT4, "4.1", "<h4>Job analysis and job evaluation compared</h4>"
          + T(["Basis", "Job analysis", "Job evaluation"], [["Meaning", "Collects facts about duties, responsibilities and requirements of a job", "Decides the relative worth of jobs"], ["Output", "Job description and job specification", "Job grades / pay structure"], ["Sequence", "Done first", "Done after job analysis; uses its output"], ["Purpose", "Recruitment, training, appraisal and many others", "Fair wage structure"]])
          + "<h4>Factors considered in assessing job value</h4>"
          + UL("<b>Skill</b> - education, experience, know-how.", "<b>Effort</b> - mental and physical.", "<b>Responsibility</b> - for people, money, equipment, decisions.", "<b>Working conditions</b> - hazards, discomfort, environment.", "Also market value, strategic importance and scarcity of the skill.")
          + "<h4>Merits and demerits of the methods</h4>"
          + T(["Method", "Merits", "Demerits"], [["Ranking", "Simple, quick, cheap", "Subjective; no measure of difference; unsuitable for many jobs"], ["Classification", "Easy to explain; suits large organisations", "Grade descriptions are hard to write; rigid"], ["Point method", "Systematic, objective, widely accepted", "Costly and time-consuming to design"], ["Factor comparison", "Scientific; money values for factors", "Complex; key jobs may become outdated"]]))
append_to(UNIT4, "4.2", "<h4>Pay level, pay structure and pay form</h4>"
          + T(["Term", "Meaning"], [["Pay level", "How the organisation's average pay compares with the market (lead, match or lag)"], ["Pay structure", "The relative pay of different jobs inside the organisation (grades, scales, differentials)"], ["Pay form", "How pay is delivered: base pay, incentives, benefits, cash or non-cash"]])
          + "<h4>Incentive plans</h4>"
          + T(["Plan", "How it works"], [["Piece rate", "Pay for each unit produced; more output, more pay (differential piece rates may be used)"], ["Standard hour plan", "A standard time is fixed for a job; the worker is paid for that time even if the job is finished sooner, so saved time becomes extra earnings"], ["Profit sharing", "A share of company profit is distributed to employees"], ["Gainsharing", "Employees share the gains from improved productivity, cost savings or quality (Scanlon, Rucker, Improshare plans)"], ["Bonus and commission", "Lump-sum reward for results; commission for sales"]])
          + "<h4>Retirement and termination benefits</h4>"
          + T(["Basis", "Defined contribution plan", "Termination benefits"], [["Meaning", "Retirement plan in which employer and employee contribute fixed amounts; final benefit depends on the fund's investment returns (e.g. EPF, NPS)", "Payments given when employment ends - gratuity, severance, notice pay, voluntary retirement compensation"], ["When paid", "At retirement or on leaving", "At termination, retrenchment or retirement"], ["Risk", "Borne by the employee", "Fixed by law or contract"]])
          + P("In a <b>defined benefit plan</b> the employer promises a fixed pension, so the investment risk is the employer's."))
append_to(UNIT4, "4.3", "<h4>Minimum wage, fair wage and living wage</h4>"
          + T(["Concept", "Meaning"], [["Minimum wage", "Lowest wage fixed by law that meets basic needs (food, clothing, shelter) and keeps the worker's efficiency (Minimum Wages Act, 1948)"], ["Fair wage", "Wage between the minimum wage and the living wage; depends on productivity, the prevailing rate and the employer's capacity to pay"], ["Living wage", "Wage that gives a decent standard of living - education, health, recreation and insurance - as well as basic needs"]])
          + FL("Minimum wage", "Fair wage", "Living wage")
          + "<h4>Ten factors influencing wages and salaries</h4>"
          + OL("Demand and supply of labour", "Cost of living", "Ability to pay", "Prevailing wage rates (comparability)", "Government legislation", "Productivity", "Bargaining power of unions", "Job requirements (skill, effort, responsibility)", "Company policy and pay philosophy", "Cost of replacement, economic conditions and inflation")
          + "<h4>Wage board - functions, advantages and challenges</h4>"
          + T(["Functions", "Advantages", "Challenges"], [[UL("Study the industry's wage position", "Recommend minimum and fair wages", "Fix wage structure, dearness allowance and bonus", "Suggest improvements in productivity"), UL("Balanced tripartite representation", "Industry-wide uniform wages", "Reduces disputes and strikes"), UL("Recommendations are not always binding", "Slow, may become outdated", "Difficult to suit every unit's capacity", "Employer-union disagreement")]]))
append_to(UNIT4, "4.5", "<h4>Types and scope of industrial relations</h4>"
          + T(["Type", "Meaning"], [["Employer-employee relations", "Day-to-day dealing between management and individual workers"], ["Labour (union-management) relations", "Dealings between employers and trade unions - bargaining, agreements"], ["Group relations", "Relations among employee groups and unions"], ["Community / public relations", "Relations of the organisation with the community and government"]])
          + "<h4>Scope</h4>"
          + UL("Labour relations - collective bargaining and union management.", "Employer-employee relations - discipline, grievances.", "Settlement of disputes - conciliation, arbitration, adjudication.", "Labour laws and their compliance.", "Workers' participation in management, welfare and working conditions."))
append_to(UNIT4, "4.6", "<h4>Lay-off, retrenchment, closure, gherao and picketing</h4>"
          + T(["Term", "Meaning"], [["Lay-off", "Temporary failure or refusal of the employer to give work to a worker on the muster roll because of shortage of coal, power or raw material, machinery breakdown or similar reasons; the worker may get lay-off compensation"], ["Retrenchment", "Permanent termination of a worker's service by the employer for any reason other than punishment; compensation and notice are payable"], ["Closure", "Permanent shutting of a place of employment"], ["Gherao", "Workers physically surround the manager or officer and prevent leaving until demands are met (illegal in many courts' view)"], ["Picketing", "Workers stand at the gate to persuade others not to enter or work - lawful if peaceful"], ["Go-slow / sit-down strike", "Deliberately working slowly / staying at the workplace without working"]]))
append_to(UNIT4, "4.7", "<h4>Eight-step procedure of collective bargaining</h4>"
          + OL("<b>Identify the problem</b> and the need to bargain.", "<b>Preparation</b> - collect data on wages, cost of living, productivity, comparable settlements.", "<b>Select the bargaining team</b> and fix authority.", "<b>Set objectives</b> - ideal, realistic and minimum acceptable terms.", "<b>Negotiate</b> - exchange of proposals and counter-proposals.", "<b>Reach agreement</b> - draft the terms.", "<b>Ratification and signing</b> by the union members and management.", "<b>Implementation and review</b> - administer and monitor the agreement.")
          + "<h4>Types of bargaining</h4>"
          + T(["Type", "Meaning"], [["Distributive", "Fixed pie - one side's gain is the other's loss (wages)"], ["Integrative", "Win-win problem solving"], ["Attitudinal structuring", "Building trust and good relations"], ["Intra-organisational", "Agreeing within each side before negotiating"]])
          + T(["Advantages", "Disadvantages"], [[UL("Industrial peace and fewer strikes", "Workers' voice and participation", "Stable terms for a fixed period", "Flexible, mutually accepted solutions"), UL("Can be slow and costly", "Weak unions or unequal power may give unfair results", "Rigid agreements may not suit changing conditions", "Failure may lead to strikes or lockouts")]]))
append_to(UNIT4, "4.8", "<h4>Essentials of an effective grievance procedure</h4>"
          + UL("<b>Simple and clear</b> steps known to every employee.", "<b>Prompt</b> time limits at every level.", "<b>Fair, impartial and confidential</b> hearing; no victimisation.", "<b>Written records</b> of every grievance and decision.", "<b>Right of appeal</b> to a higher level.", "<b>Follow-up</b> to see that the decision is carried out.", "Supported by <b>trained supervisors</b> and top management commitment.")
          + "<h4>In-house and statutory machinery</h4>"
          + T(["Machinery", "Details"], [["In-house", "Open door policy, step-ladder procedure, grievance committee, ombudsman, suggestion box"], ["Statutory", "Grievance Redressal Committee in industrial establishments with 20 or more workers (Industrial Disputes Act); Works Committee in establishments with 100 or more workmen; Conciliation Officer, Labour Court and Tribunal for unresolved disputes"]])
          + "<h4>Case: an employee says a promotion was unfair - how should HR handle it?</h4>"
          + OL("<b>Listen</b> to the employee and record the complaint in writing.", "<b>Acknowledge</b> it promptly and explain the procedure and time limits.", "<b>Collect facts</b> - promotion policy, criteria, appraisal records, the selection panel's notes.", "<b>Examine</b> whether the policy was applied fairly and without bias.", "<b>Discuss</b> with the supervisor and the employee separately, then jointly if needed.", "<b>Decide</b> - correct the decision if wrong, or explain the reasons and give development feedback if right.", "<b>Communicate</b> the decision in writing and allow appeal.", "<b>Follow up</b> and improve the promotion policy to prevent repeats."))


# ---------------------------------------------------------------- second round of additions (remaining bank topics)
append_to(UNIT2, "2.2", "<h4>Barriers to HRP and how to overcome them</h4>"
          + T(["Barrier", "How to overcome it"], [["Uncertainty about the future (market, technology, policy)", "Plan in scenarios; review and update plans often"], ["Lack of reliable HR data and records", "Build an HRIS and skills inventory"], ["Resistance from managers who see HRP as paperwork", "Involve line managers; show benefits"], ["Over-reliance on numbers, ignoring skills", "Plan both quantity and quality"], ["Conflict between short-term needs and long-term plans", "Link HRP with business planning and budgets"]]))
append_to(UNIT2, "2.7", "<h4>Reliability and validity of tests</h4>"
          + T(["Term", "Meaning"], [["Reliability", "A test gives consistent results when repeated"], ["Validity", "A test really measures what it claims to and predicts job performance"]])
          + P("Aptitude, personality and situational tests improve selection because they are <b>standardised, objective and job-related</b>; tests that are not reliable and valid mislead the decision. Use tests together with interviews, never alone.")
          + "<h4>Limitations of interviews and how to reduce them</h4>"
          + T(["Limitation", "Remedy"], [["Subjective judgment and bias (halo, first impression, stereotyping)", "Use structured questions and a rating sheet"], ["Interviewer's lack of skill", "Train interviewers"], ["Candidates may rehearse answers", "Use behavioural and situational questions"], ["Inconsistency between interviewers", "Use a panel and common criteria"], ["Time-consuming and costly", "Use screening tests and a preliminary interview first"]]))
append_to(UNIT3, "3.4", "<h4>CIPP model of evaluation</h4>"
          + P("The <b>CIPP model</b> (Stufflebeam) evaluates a programme in four stages: <b>Context</b> (what needs exist and what are the goals?), <b>Input</b> (are the plans, resources and methods suitable?), <b>Process</b> (is the programme being carried out as planned?) and <b>Product</b> (what results were achieved?).")
          + T(["Basis", "Kirkpatrick model", "CIPP model"], [["Stages", "Reaction, learning, behaviour, results", "Context, input, process, product"], ["Focus", "Outcomes of training for participants and the business", "The whole programme from need to result"], ["Use", "Measuring effectiveness after training", "Improving and planning the programme"]]))
append_to(UNIT3, "3.8", "<h4>Process, objectives and benefits of succession planning</h4>"
          + FL("Identify key positions", "Define the competencies needed", "Identify high-potential employees", "Assess and develop them (training, mentoring, stretch jobs)", "Review and update the plan")
          + T(["Objectives", "Benefits"], [[UL("Ensure leadership continuity", "Prepare internal talent for key posts", "Reduce risk when leaders leave"), UL("No leadership vacuum; smooth transition", "Motivates and retains talent", "Saves recruitment cost and time", "Preserves organisational culture")]])
          + "<h4>Types of succession planning</h4>"
          + T(["Type", "Meaning"], [["Replacement planning", "Naming a backup for each key position"], ["Talent pool / pipeline", "Developing a group of high-potential employees for many roles"], ["Accelerated development", "Fast-track programmes for future leaders"], ["Emergency succession", "Interim plan if a leader leaves suddenly"]])
          + "<h4>Responsibilities in career management</h4>"
          + T(["Party", "Responsibility"], [["Individual", "Self-assessment, setting goals, building skills, using opportunities"], ["Manager", "Honest feedback, coaching, supporting development and mobility"], ["Organisation", "Career paths, training, information on vacancies, succession and mentoring programmes"]]))
append_to(UNIT4, "4.1", "<h4>Process and importance of job evaluation</h4>"
          + FL("Job analysis (JD and JS)", "Choose the method and factors", "Form the job evaluation committee", "Evaluate jobs", "Group jobs into grades", "Link grades to pay structure", "Review and update")
          + UL("<b>Importance:</b> fair and logical pay; fewer wage disputes; helps in hiring and promotion; supports pay surveys and equal pay for equal work; helps in designing the pay structure."))
append_to(UNIT4, "4.2", "<h4>Direct and indirect compensation</h4>"
          + T(["Basis", "Direct compensation", "Indirect compensation"], [["Meaning", "Cash pay received in return for work", "Non-cash benefits and services"], ["Examples", "Basic pay, dearness allowance, incentives, bonus, commission", "Health insurance, PF, gratuity, paid leave, housing, canteen, transport"], ["Effect", "Immediate and visible", "Long-term security and satisfaction"]])
          + P("<b>Why compensation matters:</b> it attracts and retains talent, motivates performance, builds fairness, controls labour cost and meets legal requirements."))
append_to(UNIT4, "4.5", "<h4>Role of government, trade unions and management in healthy industrial relations</h4>"
          + T(["Party", "Role"], [["Government", "Makes fair labour laws, provides conciliation and adjudication machinery, promotes minimum wages, social security and tripartite bodies"], ["Trade unions", "Represent workers, bargain collectively, protect rights, cooperate for productivity and avoid unlawful strikes"], ["Management", "Recognise unions, treat workers fairly, pay fair wages, communicate openly, redress grievances and follow labour laws"]])
          + P("Healthy IR needs <b>mutual trust, participation, discipline and respect for agreements</b> on both sides."))
append_to(UNIT4, "4.8", "<h4>Causes of employee grievances</h4>"
          + T(["Group", "Examples"], [["Economic", "Wage disparities, delay in bonus or increment, unfair deductions"], ["Work environment", "Poor safety, long hours, faulty equipment, bad facilities"], ["Supervision", "Partiality, harsh behaviour, lack of recognition"], ["Management policy", "Unfair promotion, transfers, discipline, lack of clear rules"], ["Individual", "Personal problems, ego clashes, misunderstandings"]]))
