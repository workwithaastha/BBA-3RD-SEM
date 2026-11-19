# HRM study notes (notes only: no MCQs, no questions) - Units I and II.
# Sources: your HRM folder (Complete Notes file, unit slides, Notes of Unit 4, Performance Appraisal slides), the Syllabus comprehensive notes,
# and standard HRM textbooks (Dessler, Armstrong, Aswathappa, Flippo, Storey, Ulrich).
def T(head, rows):
    return "<table><tr>" + "".join(f"<th>{h}</th>" for h in head) + "</tr>" + "".join("<tr>" + "".join(f"<td>{c}</td>" for c in r) + "</tr>" for r in rows) + "</table>"


def UL(*a):
    return "<ul>" + "".join(f"<li>{x}</li>" for x in a) + "</ul>"


def OL(*a):
    return "<ol>" + "".join(f"<li>{x}</li>" for x in a) + "</ol>"


def P(x):
    return f"<p>{x}</p>"


def FL(*a):
    return "<div class='box'><b>Flow:</b> " + " &rarr; ".join(a) + "</div>"


def EG(x):
    return f"<div class='eg'><b>Example:</b> {x}</div>"


def KEY(x):
    return f"<div class='box'><b>Remember:</b> {x}</div>"


UNIT1 = ("UNIT I", "Introduction to Human Resource Management", "10 lectures - evolution, definition, objectives, scope, importance, HRM vs personnel management, HR managers, globalisation and digital HR", [
    ("1.1 Meaning and definition of HRM",
     P("Every organisation uses money, machines, materials and methods, but all of them are put to work by <b>people</b>. <b>Human Resource Management (HRM)</b> is the part of management that deals with these people: how they are found, trained, paid, motivated, looked after and kept. The word <i>resource</i> shows that employees are treated as a valuable asset to be developed, not as a cost to be cut.")
     + P("<b>Gary Dessler:</b> HRM is the process of <b>acquiring, training, appraising and compensating</b> employees, and of attending to their labour relations, health, safety and fairness concerns.")
     + P("<b>Simple definition:</b> HRM is the process of <b>acquiring, developing, motivating and retaining</b> people so that individual, organisational and social objectives are achieved effectively and efficiently.")
     + "<h4>Main characteristics</h4>"
     + UL("<b>People-oriented</b> - concerned with the human side of the enterprise.", "<b>Pervasive</b> - every manager, in every department, handles people, so HRM is spread through the whole organisation.", "<b>Continuous</b> - it is not a one-time activity; it goes on as long as the organisation exists.", "<b>Development-oriented</b> - aims at growing the skills and potential of employees.", "<b>Both art and science</b> - science in its policies, tests and analytics; art in dealing with human feelings.", "<b>Integrated</b> - aligns individual goals with organisational objectives.")),
    ("1.2 Evolution of HRM",
     P("HRM did not appear overnight. It developed in stages, each shaped by the economic, social and industrial conditions of its time. Knowing the stages explains why HR works the way it does today.")
     + T(["Stage", "Period", "Main idea", "What happened"], [
         ["1. Commodity concept", "Before 1900s", "Labour is a commodity bought and sold like any raw material", "Workers had no rights, no job security and received bare subsistence wages"],
         ["2. Welfare concept", "Early 1900s - 1920s", "Humane treatment of workers", "Factory unrest and social reformers led employers to give canteens, rest rooms and safety; <b>Welfare Officers</b> were appointed"],
         ["3. Bureaucratic concept", "1920s - 1930s", "Formal rules, hierarchy and procedures (Max Weber)", "Large organisations introduced standard methods for hiring, promoting and disciplining"],
         ["4. Human relations concept", "1930s - 1950s", "Workers have social and emotional needs", "The <b>Hawthorne Studies</b> (Elton Mayo, Western Electric) showed that attention, recognition and group belonging raise output"],
         ["5. Behavioural science concept", "1950s - 1970s", "Motivation and leadership theories guide management", "Maslow's need hierarchy, Herzberg's two-factor theory and McGregor's Theory X and Theory Y shaped job and policy design"],
         ["6. Strategic HRM concept", "1980s - present", "People are a source of competitive advantage", "HR joined top management; workforce planning is tied to business strategy"]])
     + P("Another common summary is: <b>Welfare stage</b> (before 1920) &rarr; <b>Personnel management</b> (1920s-1980s, administrative work such as hiring, payroll, discipline, records) &rarr; <b>HRM</b> (1980s-2000s, people seen as valuable resources) &rarr; <b>Strategic and digital HR</b> (2000s onward, with analytics, AI and automation).")
     + EG("Under the commodity view a mill owner hired workers daily at the lowest wage. Today a company such as Google treats hiring, learning and well-being as strategic decisions.")),
    ("1.3 Objectives of HRM",
     P("HRM has four groups of objectives. A good HR system balances all four.")
     + T(["Objective", "Meaning", "Illustration"], [
         ["Societal", "Be ethical and socially responsible; reduce the negative impact of the organisation on society", "Follow labour laws, pay fair wages, avoid discrimination, provide safe work"],
         ["Organisational", "Help the organisation reach its goals; HR is a means to effectiveness, not an end", "Better productivity, efficiency and profit through proper use of people"],
         ["Functional", "Keep the HR department's contribution at a level suited to the organisation's needs", "A small firm should not run elaborate HR systems that waste resources"],
         ["Personal", "Help employees reach their own goals, as far as they support the organisation", "Career growth, skill development, job satisfaction; unmet goals cause poor performance and quitting"]])),
    ("1.4 Scope of HRM",
     P("The scope of HRM covers the whole employee lifecycle, from before a person is hired until after the person leaves.")
     + T(["Area", "What it covers"], [
         ["Human resource planning", "Forecasting future manpower needs in number and skill"],
         ["Job analysis", "Studying job content, duties and requirements; job description and specification"],
         ["Recruitment and selection", "Attracting candidates and choosing the best"],
         ["Training and development", "Building skills for the present job and future roles"],
         ["Performance appraisal", "Evaluating the contribution of employees"],
         ["Compensation management", "Pay, incentives, benefits"],
         ["Employee welfare", "Health, safety and amenities"],
         ["Industrial relations", "Unions, collective bargaining, disputes, grievances"],
         ["HR records and information systems", "Employee data, HRIS, analytics"],
         ["Career planning and succession", "Growth paths and future leaders"]])
     + FL("Procurement", "Development", "Compensation", "Maintenance", "Integration")),
    ("1.5 Functions of HRM",
     T(["Managerial functions", "Operative functions"], [[
         UL("<b>Planning</b> - deciding manpower needs, policies and programmes", "<b>Organising</b> - arranging jobs, authority and relationships", "<b>Directing</b> - guiding, motivating and leading people", "<b>Controlling</b> - comparing actual performance with standards and correcting"),
         UL("<b>Procurement (staffing)</b> - planning, recruitment, selection, placement", "<b>Development</b> - training, career development", "<b>Compensation</b> - wages, incentives and benefits", "<b>Integration and motivation</b> - reconciling employee and organisational interests", "<b>Maintenance</b> - health, safety, welfare, social security", "<b>Emerging issues</b> - diversity, work-life balance, ethics")]])),
    ("1.6 Importance of HRM in modern organisations",
     UL("<b>Achieves organisational goals</b> - every activity is finally carried out by people, so effective HRM decides whether strategy succeeds.",
        "<b>Improves productivity and quality</b> - trained, motivated people produce more and make fewer errors.",
        "<b>Helps manage change</b> - markets, technology and customer expectations keep changing; HR prepares people through training, re-skilling and change management.",
        "<b>Builds competitive advantage</b> - machines and money can be copied, but a skilled and committed workforce is hard to replicate.",
        "<b>Maintains industrial peace</b> - fair policies reduce conflict, strikes and turnover.",
        "<b>Protects employee well-being</b> - safe conditions, fair treatment and grievance redressal build trust.",
        "<b>Supports innovation, compliance and culture</b> - skilled talent drives ideas; HR ensures legal and ethical compliance and shapes values.")),
    ("1.7 HRM and Personnel Management",
     P("<b>Personnel Management (PM)</b> is the older, narrower approach: administrative, rule-bound and concerned mainly with routine tasks such as hiring, payroll, leave and records. <b>HRM</b> grew out of it but is strategic, proactive and developmental.")
     + T(["Basis", "Personnel Management", "Human Resource Management"], [
         ["Approach", "Traditional, rule-based, administrative", "Strategic, integrated with business goals"],
         ["Nature", "Reactive - responds to problems as they arise", "Proactive - anticipates and plans"],
         ["Focus", "Employee administration and satisfaction", "Development of employees and organisational performance together"],
         ["Perspective", "Micro level, short term", "Macro level, long term"],
         ["Job design", "Division of labour, individual tasks", "Teamwork and group-based work"],
         ["Decision-making", "Slow, fixed procedures", "Fast, flexible, situation-based"],
         ["Management role", "Personnel specialists deal with employee issues", "Line managers and HR together manage people as strategic assets"],
         ["View of employees", "Cost to be controlled", "Asset to be developed"],
         ["Communication", "Indirect, through policy and procedure", "Direct, open and two-way"]])
     + "<h4>More dimensions (Storey)</h4>"
     + T(["Dimension", "PM", "HRM"], [
         ["Employment contract", "Careful written contracts", "Aims to go beyond the contract"],
         ["Rules", "Importance of clear guiding rules", "'Can do' outlook, impatience with rules"],
         ["Behaviour referent", "Norms, customs and practices", "Values and mission"],
         ["Managerial task", "Monitoring", "Nurturing"],
         ["Role of management", "Transactional", "Transformational leadership"],
         ["Conflict handling", "Reach a temporary truce", "Manage climate and culture"],
         ["Training", "Controlled access to courses", "Learning organisation"],
         ["Shared interests", "Interests of the organisation come first", "Mutuality of interests"]])),
    ("1.8 Role and responsibilities of HR managers",
     P("The HR manager wears many hats. The main roles are:")
     + T(["Role", "What the HR manager does"], [
         ["Advisory", "Acts as consultant to top management and department heads on people matters - recruitment strategy, discipline, policy design"],
         ["Policy-making", "Frames HR policies such as leave policy, code of conduct and promotion criteria so that decisions are consistent"],
         ["Welfare", "Looks after employee health, safety and amenities (the old welfare-officer role)"],
         ["Mediator", "Acts as a bridge between management and employees and settles conflicts early"],
         ["Strategic partner", "Takes part in top-level planning and aligns workforce capability with the long-term direction of the firm"]])
     + P("Modern models (Dave Ulrich) describe the same work as <b>strategic partner, administrative expert, employee champion and change agent</b>; the slides add <b>talent manager</b> and <b>learning facilitator</b>.")
     + "<h4>Key responsibilities</h4>"
     + UL("Manpower planning", "Recruitment and selection", "Organising training and development", "Designing and administering wage and salary structures", "Handling grievances and disciplinary matters", "Ensuring legal compliance (labour laws, safety rules)", "Maintaining employee records and HR information systems")),
    ("1.9 Competencies required of HR managers",
     T(["Competency", "Why it is needed"], [
         ["Business acumen", "Understanding the industry, finances and strategy so HR decisions fit business needs"],
         ["Communication skills", "HR deals constantly with employees, managers and outsiders; clear and empathetic communication is essential"],
         ["Ethical practice", "Confidentiality, fairness and integrity in sensitive matters - grievances, terminations, pay"],
         ["HR technology proficiency", "Comfort with HRIS, applicant tracking systems and HR analytics tools"],
         ["Critical evaluation", "Using data such as attrition rate and cost-per-hire to take evidence-based decisions"],
         ["Leadership and navigation", "Leading HR initiatives and handling organisational politics to bring about change"],
         ["Legal knowledge, negotiation, change management", "Needed for compliance, conflict resolution and adaptability (slides)"]])),
    ("1.10 Changing role of HR: globalisation and digital transformation",
     "<h4>Impact of globalisation</h4>"
     + UL("<b>Cross-cultural management</b> - managing multicultural, dispersed teams with different communication and work norms.", "<b>Global talent mobility</b> - international recruitment, expatriate assignments and transfers.", "<b>Global compensation and compliance</b> - different labour laws, tax rules and pay norms in each country.", "<b>Inclusive policies</b> that respect cultural differences.")
     + "<h4>Impact of digital transformation</h4>"
     + UL("<b>HR analytics</b> - predict attrition, measure engagement, support evidence-based decisions.", "<b>AI in recruitment</b> - applicant tracking systems and AI screen resumes and shortlist quickly, though they raise concerns about algorithmic bias.", "<b>HRIS / e-HR</b> - payroll, leave, performance and employee self-service on cloud platforms.", "<b>Remote and hybrid work</b> - policies for productivity, engagement and culture when people are not in the office.", "<b>Digital onboarding</b> - e-learning modules, virtual orientation and digital documents.")
     + EG("<b>Google People Operations.</b> Google replaced traditional HR with a data-driven approach. <b>Project Oxygen</b> used people analytics to find the behaviours of the best managers; hiring, promotion and retention decisions are backed by data; flexible work and experiments such as 20% time raise engagement and creativity.")
     + P("<b>In short:</b> HR has moved from an administrative support function to a strategic, technology-enabled partner of the business.")),
])

UNIT2 = ("UNIT II", "Talent Acquisition (Procurement)", "12 lectures - HR planning, forecasting, job analysis, JD and JS, recruitment, selection", [
    ("2.1 Human resource planning (HRP)",
     P("<b>Human resource planning</b> is the process of anticipating and providing for the movement of people into, within and out of an organisation, so that the <b>right number and kind of people</b> are available <b>at the right place and time</b> to achieve the organisation's objectives. It is the bridge between the business strategy and the people strategy; without it recruitment becomes reactive and haphazard.")
     + P("HRP answers three questions: <b>How many</b> people do we need? <b>What skills</b> must they have? <b>When and where</b> will they be needed?")
     + "<h4>Objectives</h4>"
     + UL("Cope with change arising from technology, markets and products.", "Provide a sound base for developing employees (training and growth).", "Decide recruitment and redundancy levels in advance.", "Control HR cost within the budget.", "Match staffing with organisational goals.")
     + "<h4>Nature</h4>"
     + UL("A continuous process, not a one-time activity.", "A sub-system of overall organisational planning.", "Both quantitative (numbers) and qualitative (skills).", "Futuristic - looks ahead.", "Matches demand and supply of manpower.")
     + "<h4>Importance</h4>"
     + UL("Ensures the right people at the right time and supports growth and diversification.", "Prepares people for the future through planned training.", "Avoids the cost of over- or under-staffing.", "Forms the base for recruitment, promotion and succession decisions.")),
    ("2.2 The HRP process and factors affecting it",
     FL("Environmental scanning", "Forecast demand", "Forecast supply", "Gap analysis", "Action planning", "Monitoring and control")
     + T(["Step", "Explanation"], [
         ["1. Environmental scanning", "Studying external factors - economic conditions, labour market, technology, government policy, competition - that will affect manpower needs"],
         ["2. Forecasting demand", "Estimating how many employees, with what skills, will be needed given business plans, expansion or downsizing"],
         ["3. Forecasting supply", "Estimating the people available inside (skills inventory, promotions) and outside (labour market)"],
         ["4. Gap analysis", "Comparing demand with supply. <b>Surplus</b> - redeploy, retrench or freeze hiring. <b>Deficit</b> - recruit, train or outsource"],
         ["5. Action planning", "Recruitment, training, redeployment and retirement programmes to close the gap"],
         ["6. Monitoring, control and feedback", "Tracking implementation and revising plans as conditions change"]])
     + "<h4>Factors affecting HRP</h4>"
     + UL("<b>Organisational growth plans</b> - expansion or diversification raises demand; downsizing reduces it.", "<b>Technology</b> - automation cuts some skills and creates demand for digital skills.", "<b>Labour market conditions</b> - availability of skilled labour decides how easily needs can be met.", "<b>Government policy and labour laws</b> - rules on hiring, retrenchment, reservation, minimum wages.", "<b>Attrition rate</b> - high turnover means continuous replacement hiring.", "<b>Nature of industry</b> - seasonal and continuous-process industries plan differently.")
     + "<h4>Barriers to effective HRP</h4>"
     + UL("Uncertainty about the future, resistance from managers, lack of reliable data, and the view that HRP is only a numbers exercise.")),
    ("2.3 Forecasting demand and supply of human resources",
     "<h4>Demand forecasting techniques</h4>"
     + T(["Technique", "How it works", "Remark"], [
         ["Managerial judgment", "Experienced managers estimate future staffing from workload and business plans", "Simple but subjective"],
         ["Work-study technique", "Time and motion study of tasks gives the standard time and hence the workers needed for a given output", "Common in manufacturing"],
         ["Delphi technique", "A panel of experts gives anonymous forecasts over several rounds; results are shared back until consensus", "Useful when past data is unavailable"],
         ["Ratio-trend analysis", "Past ratios (workers to sales volume, supervisors to workers) are projected forward", "Assumes ratios will hold"],
         ["Regression analysis", "Statistical relationship between business variables (sales) and staffing", "Needs good data"]])
     + "<h4>Supply forecasting</h4>"
     + T(["Source", "Tools and ideas"], [
         ["Internal supply", "<b>Skills inventory</b> (database of employee skills, qualifications, experience); <b>replacement charts</b> (backups for key posts); <b>succession planning</b>; promotions and transfers"],
         ["External supply", "Labour market trends, availability of skilled graduates, employment exchanges and job portals, campus recruitment, competitor hiring, unemployment rate and migration"]])),
    ("2.4 Job analysis",
     P("<b>Job analysis</b> is the systematic process of collecting, analysing and recording information about a job - its duties, responsibilities, working conditions and the skills and qualifications needed to do it. It is the <b>foundation of almost every HR activity</b>: recruitment, selection, training, appraisal, job evaluation and compensation all depend on accurate job information.")
     + "<h4>Process</h4>"
     + FL("Decide purpose and use", "Collect background information", "Select jobs to analyse", "Collect job data", "Review with participants", "Develop JD and JS")
     + "<h4>Methods of collecting job data</h4>"
     + T(["Method", "How it works", "Strength / limitation"], [
         ["Observation", "Analyst watches the worker and records tasks, tools and time", "Good for manual, repetitive jobs; poor for mental work"],
         ["Interview", "Analyst questions the job holder and supervisor", "Allows clarification; slow and open to bias"],
         ["Questionnaire", "Structured form completed by job holders", "Reaches many employees quickly"],
         ["Diary / log", "Employees record daily tasks and time spent", "Detailed first-hand account over a period"]])
     + "<h4>Uses of job analysis</h4>"
     + UL("Manpower planning, recruitment and selection (who is needed and where to find them).", "Training needs, performance standards and appraisal.", "Job evaluation and fixing pay.", "Better job design, safety and clear authority and responsibility.")
     + P("<b>Outputs of job analysis:</b> the <b>job description</b> and the <b>job specification</b>.")),
    ("2.5 Job description and job specification",
     T(["Basis", "Job description (JD)", "Job specification (JS)"], [
         ["Focus", "The job itself", "The person needed for the job"],
         ["Orientation", "Job-oriented", "Person-oriented"],
         ["Content", "Job title, department and reporting, duties and responsibilities, working conditions, tools and equipment", "Educational qualifications, experience, skills and competencies, physical and mental attributes"],
         ["Purpose", "To understand what the job requires", "To identify who is fit for the job"]])
     + EG("<b>HR Executive.</b> JD: reports to the HR Manager, head office; sourcing, screening and scheduling interviews; laptop, ATS software, telephone; office-based 9 AM to 6 PM. JS: MBA / PGDM in HR; 1-3 years in recruitment or HR operations; communication, MS Office, ATS tools; team player, detail-oriented, patient.")),
    ("2.6 Recruitment",
     P("<b>Recruitment</b> is the process of searching for and attracting potential candidates in sufficient <b>numbers and quality</b> so that the organisation can select the most suitable ones for its vacancies. It is a <b>positive</b> process - it builds the pool of applicants; the final hiring decision is made in selection.")
     + "<h4>Factors affecting recruitment</h4>"
     + T(["Internal factors", "External factors"], [[
         UL("HR policy (promote from within or hire from outside)", "Size of the organisation", "Image and reputation in the job market", "Cost of recruitment", "Growth and expansion plans"),
         UL("Labour market conditions - availability of skills", "Legal and political factors (labour laws, reservation policy)", "Competitors' recruitment and pay practices", "Unemployment rate", "Demographic factors")]])
     + "<h4>Sources of recruitment</h4>"
     + T(["Source", "Methods", "Advantages", "Disadvantages"], [
         ["Internal", "Promotions, transfers, employee referrals", "Boosts morale, saves cost, candidates know the culture", "Limits fresh ideas, may cause internal politics"],
         ["External", "Campus recruitment, employment exchanges, advertisements (newspaper, online, social media), placement agencies, online job portals (Naukri, LinkedIn, Indeed)", "Fresh talent and ideas, wider pool", "Higher cost, longer settling-in, may demotivate insiders expecting promotion"]])),
    ("2.7 Selection",
     P("<b>Selection</b> is the process of choosing the most suitable candidates from the pool created by recruitment. Unlike recruitment, selection is a <b>negative / filtering</b> process - unsuitable candidates are rejected at every stage.")
     + "<h4>Steps in the selection process</h4>"
     + OL("<b>Application screening</b> - resumes reviewed against basic eligibility.", "<b>Preliminary interview</b> - a short screening interview to remove clearly unsuitable candidates.", "<b>Employment tests</b> - written or online tests of aptitude, skills or personality.", "<b>Employment interview</b> - an in-depth interview on suitability, communication and cultural fit.", "<b>Reference and background check</b> - verifying claims with previous employers.", "<b>Medical examination</b> - checking physical fitness, important for demanding jobs.", "<b>Final selection decision</b> - taken by the hiring manager and HR.", "<b>Job offer</b> - a formal offer letter stating the terms of employment.")
     + "<h4>Types of selection tests</h4>"
     + T(["Test", "What it measures"], [["Aptitude tests", "Potential or capacity to learn or perform a type of job - numerical, verbal, mechanical aptitude"], ["Personality tests", "Traits such as emotional stability, extroversion and interpersonal style; fit with the culture"], ["Situational judgment tests", "Responses to hypothetical work scenarios - practical decision-making and problem solving"], ["Intelligence tests", "General mental ability and reasoning"]])
     + "<h4>Interviewing techniques</h4>"
     + T(["Type", "Meaning"], [["Structured", "Fixed, pre-decided questions asked of every candidate - consistent comparison"], ["Unstructured", "Open conversation without a fixed format - flexible but hard to compare"], ["Panel", "Several interviewers question the candidate together - varied viewpoints"], ["Stress", "Deliberate pressure through rapid or challenging questions - for high-pressure roles"], ["Behavioural", "Past behaviour predicts future behaviour: 'tell me about a time you resolved a conflict'"]])
     + P("<b>Common interviewer errors:</b> halo effect, first-impression bias, stereotyping, talking too much. They are reduced by training interviewers and using structured questions.")
     + "<h4>Recruitment and selection compared</h4>"
     + T(["Basis", "Recruitment", "Selection"], [["Nature", "Positive - invites applicants", "Negative - rejects unsuitable candidates"], ["Objective", "Create a large pool", "Choose the best-fit candidates"], ["Sequence", "Comes first", "Comes after recruitment"], ["Outcome", "Applications", "Job offer to the selected"]])),
])
