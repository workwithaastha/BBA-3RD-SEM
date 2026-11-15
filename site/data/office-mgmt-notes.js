// Office Management - unit-wise NOTES (Units 1-4) + Exam Master. Objective (MCQ) paper: Sun 22 Nov 2026, 12:30-1:30 PM, 1 hour.
// Sources: OFFICE MANG/OM Unit 1.pdf, UNIT 1 PPT, Office_Automation_Secretarial_Practices.pdf, Office_Forms_and_Record_Management_Detailed_Notes.pdf,
// Unit4_Office_Management.pdf, ASSIGNMENT-2 office.pdf. Company-law numbers for Unit 4 follow the Companies Act 2013 as in the Unit 4 deck; a few extra facts are marked [extra].
(function () {
  const SUB = window.SUBJECTS && window.SUBJECTS['office-mgmt'];
  if (!SUB) return;
  const T = (head, rows) => '<table><tr>' + head.map((h) => '<th>' + h + '</th>').join('') + '</tr>' + rows.map((r) => '<tr>' + r.map((c) => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</table>';
  const UL = (...a) => '<ul>' + a.map((x) => '<li>' + x + '</li>').join('') + '</ul>';
  const BOX = (t, ...a) => '<div class="box"><b>' + t + '</b>' + UL(...a) + '</div>';
  const MN = (x) => '<div class="box"><b>Remember:</b> ' + x + '</div>';
  const FLOW = (...a) => '<div class="box"><b>Flow:</b> ' + a.join(' &rarr; ') + '</div>';
  const MCQ = (...a) => '<div class="box"><b>🎯 MCQ points (asked often):</b>' + UL(...a) + '</div>';

  const U1A = `
<div class="box"><b>Unit 1 · Part A - What is an office?</b> Meaning, characteristics, importance, functions, office organisation, office manager, support services.</div>
<h2>1. Meaning of office</h2>
<p>An <b>office</b> is a place or organisational unit where administrative, communication, record-keeping, coordination, planning and support activities are performed for the smooth functioning of an organisation. In short: the <b>administrative centre</b> where information is received, processed, recorded, stored and communicated. In modern firms it may also be a virtual or digital workplace.</p>
<h3>Characteristics (7 "centres")</h3>
${T(['Centre', 'Meaning'], [['Administrative', 'Performs administrative activities'], ['Information', 'Receives information and passes it to the right people'], ['Record', 'Creates and maintains documents and reports'], ['Communication', 'Internal and external communication'], ['Coordination', 'Links departments'], ['Service', 'Supports managers, employees, customers'], ['Decision-support', 'Managers rely on its information and reports']])}
<h2>2. Importance of office</h2>
<p>The office is the <b>nerve centre</b> of an organisation.</p>
${UL('Facilitates <b>communication</b> (management, employees, customers, government, suppliers).', 'Provides <b>information</b> for decisions.', 'Maintains <b>records</b>.', 'Ensures <b>coordination</b> among departments.', 'Saves time and effort; creates <b>efficiency</b>; supports management.')}
<h2>3. Functions of an office</h2>
${T(['Basic functions', 'Administrative functions'], [['Receiving, recording, processing, storing, retrieving and communicating information', 'Planning, organising, staffing support, coordination, controlling, correspondence, record management, meeting management']])}
${FLOW('Receive', 'Record', 'Process', 'Store', 'Retrieve', 'Communicate')}
<h2>4. Office organisation</h2>
<p><b>Office organisation</b> is the systematic arrangement of office activities, people, authority, responsibilities and resources to achieve objectives. Elements: <b>division of work, authority, responsibility, delegation, coordination, communication</b>.</p>
<h2>5. Office manager</h2>
<p>The person responsible for <b>planning, organising, coordinating and controlling</b> the administrative activities of an office - the link between management and office staff.</p>
${UL('<b>Functions:</b> planning office activities, organising resources, supervising staff, communication, record management, procurement, discipline, safety and security, <b>cost control</b>.')}
<h2>6. Office support services</h2>
${T(['Service', 'Purpose'], [['Reception', 'Welcoming visitors'], ['Telephone service', 'Communication'], ['Mail service', 'Handling correspondence'], ['Printing / photocopying', 'Document production and reproduction'], ['IT support', 'Technology assistance'], ['Maintenance', 'Office infrastructure'], ['Security', 'Protection'], ['Housekeeping', 'Cleanliness'], ['Travel / meeting support', 'Employee travel and meeting arrangements']])}
${MCQ('Office = administrative / information / coordination centre; "nerve centre" of the organisation.', 'Office manager = link between management and staff.', 'Office organisation elements: division of work, authority, responsibility, delegation, coordination, communication.')}`;

  const U1B = `
<div class="box"><b>Unit 1 · Part B - Modern, paperless and virtual office; front and back office</b></div>
<h2>1. Modern office</h2>
<p>An office that uses <b>advanced technology, digital communication, flexible work practices and efficient management systems</b>. Traditional office: paper + files + registers + physical presence. Modern office: technology + digital information + automation + connectivity + flexibility.</p>
${UL('Extensive use of technology (computers, cloud, AI tools, video conferencing).', 'Digital communication (email, messaging, collaboration platforms).', 'Automation (biometric &rarr; software &rarr; attendance report).', 'Flexible working (office, home, hybrid, co-working).', 'Paper reduction; faster retrieval; data-based decisions (dashboards).')}
<h2>2. Paperless office</h2>
<p>An office where documents and information are <b>created, processed, stored and communicated electronically</b>. It does not mean zero paper - it means <b>minimum dependence on paper</b>.</p>
${T(['Paper way', 'Paperless way'], [['Paper leave application', 'Online leave portal'], ['Printed invoice', 'E-invoice'], ['Physical meeting minutes', 'Digital document'], ['Physical file', 'Document management system']])}
${T(['Advantages', 'Limitations'], [['Saves space; fast retrieval; lower paper and printing cost; eco-friendly; easy sharing; remote access; better tracking of who accessed / edited', 'Cybersecurity risk; technology dependence (system failure); initial investment in software, hardware, training; employee resistance; data privacy issues']])}
<h2>3. Virtual office</h2>
<p>Employees perform office work <b>without being permanently located in a traditional office</b> - home, co-working space, different cities or countries - connected digitally.</p>
${T(['Advantages', 'Limitations'], [['Lower rent and infrastructure cost; wider talent pool; flexible operations; no commuting for employees', 'Communication challenges; isolation; difficult supervision; cybersecurity risk; technical problems; work-life boundary issues']])}
<h2>4. Front office vs back office</h2>
${T(['Basis', 'Front office', 'Back office'], [['Customer contact', 'High', 'Usually low'], ['Main focus', 'Customer interaction', 'Internal support'], ['Examples', 'Reception, sales, customer service, enquiry desk', 'Accounts, HR administration, data processing, payroll, IT support'], ['Visibility', 'High', 'Usually less visible'], ['Objective', 'Service and relationship', 'Efficiency and support']])}
<p>Hotel example: receptionist = front office; accounts team preparing your bill = back office.</p>
${MCQ('Paperless office = minimum paper, not zero paper.', 'Virtual office = work from anywhere, connected digitally.', 'Front office = customer contact (reception); back office = internal support (accounts, payroll).')}`;

  const U1C = `
<div class="box"><b>Unit 1 · Part C - Layout, environment, ethics and machines</b></div>
<h2>1. Office layout</h2>
<p>The <b>physical arrangement</b> of employees, furniture, equipment and workstations. Goal: work that is <b>efficient, comfortable, safe and economical</b>.</p>
<h3>Objectives</h3>
${UL('Maximum use of space; smooth workflow; easy communication; employee comfort.', 'Easy supervision; safety (clear exits and pathways); reduced cost.')}
<h3>Types of layout</h3>
${T(['Layout', 'Meaning', 'Advantages', 'Disadvantages'], [['Open', 'Common large space', 'Communication, collaboration, better space use, low cost', 'Noise, distractions, no privacy'], ['Private', 'Individual rooms', 'Privacy, concentration, confidentiality', 'High cost, less informal interaction'], ['Cubicle', 'Semi-private workstations', 'Balance of privacy and collaboration', 'Partial isolation'], ['Hybrid', 'Private + open + meeting + collaborative areas', 'Flexible; modern trend', 'Needs planning']])}
<h2>2. Office environment</h2>
<p>The physical, social, psychological and technological conditions in which employees work.</p>
${T(['Component', 'Includes'], [['Physical', 'Lighting, temperature, ventilation, noise, furniture, cleanliness, space'], ['Social', 'Relationships, teamwork, communication, cooperation'], ['Psychological', 'Stress, motivation, respect, recognition, job satisfaction'], ['Technological', 'Computers, internet, software, communication systems, cybersecurity']])}
<p><b>Good environment gives:</b> productivity, satisfaction, motivation, concentration, fewer errors, teamwork and retention.</p>
<h2>3. Workplace ethics</h2>
<p>The <b>moral principles and standards</b> that guide employees' behaviour at work.</p>
${UL('<b>Honesty</b>, <b>integrity</b>, <b>confidentiality</b>, <b>respect</b>, <b>professionalism</b>, <b>accountability</b>, <b>fairness</b>, avoiding <b>conflict of interest</b>.')}
<p>Example: a supplier offers a personal gift for approving a purchase order - the ethical choice is to <b>reject</b> it and follow policy.</p>
<h2>4. Office machines and equipment</h2>
${T(['Machine', 'Use'], [['Computer', 'Data processing, communication, documentation'], ['Printer (inkjet, laser)', 'Physical copies'], ['Scanner', 'Converts paper to digital form'], ['Photocopier', 'Copies of documents'], ['Projector', 'Presentations and training'], ['Telephone', 'Communication'], ['Shredder', 'Securely destroys confidential documents'], ['Binding machine / laminator', 'Binds documents / protects with plastic layer'], ['Biometric device', 'Attendance and access control']])}
<p><b>Before purchasing:</b> cost, quality, durability, maintenance, energy use, user-friendliness, security, compatibility, warranty, availability of spare parts.</p>
${MCQ('Layout types: open, private, cubicle, hybrid.', 'Shredder = destroy confidential papers; scanner = paper to digital; biometric = attendance / access.', 'Workplace ethics: honesty, integrity, confidentiality, respect, accountability, fairness.')}`;

  const U1D = `
<div class="box"><b>Unit 1 · Part D - Filing, indexing, office manual, etiquette and record management</b></div>
<h2>1. Filing</h2>
<p><b>Filing</b> is the systematic arrangement, classification, storage and preservation of documents so that they can be located easily when required. <b>Filing = Arrange + Store + Protect + Retrieve.</b></p>
${UL('<b>Objectives:</b> easy retrieval, preservation, security, reference, evidence, information management.', '<b>Essentials of a good system:</b> simple, economical, flexible, safe, accessible, accurate, compact, easy to retrieve.')}
<h3>Methods (classification) of filing</h3>
${T(['Method', 'Arranged by', 'Example'], [['Alphabetical', 'A-Z order of names', 'Amazon, Flipkart, Infosys'], ['Numerical', 'File number (needs an index)', '001, 002, 003'], ['Subject', 'Subject / topic', 'HR &rarr; Recruitment, Training, Leave'], ['Geographical', 'Place', 'India &rarr; UP &rarr; Kanpur'], ['Chronological', 'Date / time', '2024 &rarr; 2025 &rarr; 2026']])}
<h3>Centralised vs decentralised filing</h3>
${T(['Basis', 'Centralised', 'Decentralised'], [['Location', 'One central place', 'Each department'], ['Control', 'Central', 'Departmental'], ['Retrieval', 'May take more time', 'Usually faster locally'], ['Duplication', 'Less', 'More likely'], ['Cost', 'Generally lower', 'Generally higher'], ['Standardisation', 'High', 'May vary']])}
<h2>2. Indexing</h2>
<p>An <b>index</b> is a systematic guide that helps locate a document or file - like the index of a book.</p>
${T(['Type', 'Meaning'], [['Book index', 'Bound book with names / subjects and file references'], ['Card index', 'One card per item (name, file no., location)'], ['Loose-leaf index', 'Pages can be added, removed, rearranged'], ['Visible index', 'Cards arranged so key information is seen at once'], ['Computerised index', 'Digital search']])}
<p><b>Filing and indexing are complementary:</b> bookshelf = filing; library catalogue = indexing.</p>
${FLOW('Document received', 'Examine', 'Classify', 'Choose method', 'Assign file number', 'Index', 'Store', 'Retrieve', 'Archive / dispose')}
<h2>3. Filing, indexing and record management</h2>
<p>Filing = storage; indexing = guide to locate; <b>record management</b> = creation &rarr; classification &rarr; storage &rarr; retrieval &rarr; security &rarr; retention &rarr; disposal. Filing and indexing are <b>components</b> of record management.</p>
<h2>4. Modern trends</h2>
${UL('Digital transformation, cloud-based offices, AI (classification, data extraction, email, meeting summaries), automation, hybrid work, digital collaboration, cybersecurity.')}
<h2>5. Office manual and etiquette</h2>
${UL('<b>Office manual</b> - a written book of rules, policies, procedures and instructions for staff, giving uniformity and a reference for new employees.', '<b>Office etiquette</b> - courteous behaviour at work: punctuality, polite speech, respect for colleagues and visitors, proper dress, careful phone and email use, confidentiality.')}
<p class="expl">[extra] Short points on office manual and etiquette are standard textbook points - the Unit 1 PDF lists them only as headings.</p>
${MCQ('Filing = arrange + store + protect + retrieve.', 'Numerical filing needs an index; geographical filing suits sales firms and banks.', 'Chronological filing = by date.', 'Record management is broader than filing and indexing.')}`;

  const U2A = `
<div class="box"><b>Unit 2 · Part A - Secretary and business correspondence</b> (Office Automation &amp; Secretarial Practices)</div>
<h2>1. Who is a secretary?</h2>
<p>An office professional entrusted with <b>correspondence, record-keeping, appointments and confidential support</b> so that an executive or organisation can work smoothly.</p>
${T(['Private secretary', 'Office / administrative secretary'], [['Assists one executive personally - diary, correspondence, confidential files', 'Supports a whole department - records, visitor and mail handling']])}
<h3>Qualities</h3>
${UL('<b>Confidentiality and integrity</b>; <b>communication skills</b>; <b>time management</b>; <b>organisational ability</b>; <b>interpersonal skills</b>; <b>IT and office-automation proficiency</b>.')}
<h3>Duties</h3>
${T(['Area', 'Work'], [['Correspondence', 'Drafting, typing, dispatching letters, memos, circulars'], ['Diary and appointments', 'Scheduling meetings, managing the calendar'], ['Records management', 'Filing, indexing, retrieving'], ['Meetings and minutes', 'Agenda, minutes, venues'], ['Reception duties', 'Calls, visitors, enquiries'], ['Confidential support', 'Sensitive data, contracts, personal files']])}
<h2>2. Business letter</h2>
<p>A formal written communication between organisations, or between an organisation and individuals. <b>Functions:</b> permanent and legally admissible record, goodwill, formal requests / orders / complaints, evidence in disputes and audits.</p>
<p><b>Types:</b> enquiry and reply, order and complaint, sales and promotional, appointment / offer, recommendation, resignation and cover letters.</p>
<h3>Parts of a business letter (8)</h3>
${FLOW('Letterhead (sender\'s address)', 'Reference no. and date', 'Inside address', 'Subject line', 'Salutation', 'Body (introduction - detail - action)', 'Complimentary close', 'Signature, name, designation')}
<p>"Dear Sir/Madam" is closed with <b>"Yours faithfully"</b>; "Dear Mr Sharma" with "Yours sincerely".</p>
<h2>3. Notice, agenda, memo, circular</h2>
${T(['Document', 'Meaning', 'Key elements'], [['Notice', 'Formal announcement to a specific group about an event, meeting or decision', 'Heading NOTICE, organisation, date, subject, body (what, when, where, who), issuer\'s signature and designation'], ['Agenda', 'List of items to be discussed in a meeting, circulated in advance', 'Previous minutes, main items in priority order, any other business with the Chair\'s permission'], ['Memo (memorandum)', 'Brief internal message within the same organisation; shorter and less formal than a letter', 'To, From, Date, Subject, message'], ['Circular', 'Same message sent to many people at once', 'Circular no., date, To, Subject, message, issuer']])}
${T(['Basis', 'Letter', 'Memo', 'Circular'], [['Used for', 'External communication', 'Internal communication', 'Many recipients at once'], ['Formality', 'Formal', 'Less formal', 'Formal / general'], ['Example', 'Order reminder to a supplier', 'Monthly attendance report request to department heads', 'Revised office timings']])}
<h2>4. Email communication</h2>
<p>The electronic exchange of official messages - fast and documented. <b>Etiquette:</b> clear specific subject line; professional greeting and sign-off; concise paragraphs and one topic per mail; proofread before sending; use CC / BCC and "Reply All" carefully.</p>
${MCQ('Parts of letter: 8 (letterhead to signature).', 'Memo = internal; circular = many recipients; notice = formal announcement; agenda = list of items for a meeting.', 'Secretary qualities: confidentiality, communication, time management, organisation, interpersonal skills, IT skills.')}`;

  const U2B = `
<div class="box"><b>Unit 2 · Part B - Reception, telephone, appointments, mail handling, communication systems and office automation</b></div>
<h2>1. Reception and handling of visitors</h2>
<p>The reception desk is the organisation's <b>first point of contact</b>.</p>
${FLOW('Greet and welcome', 'Verify purpose', 'Visitor register and pass', 'Inform the concerned officer', 'Manage waiting', 'Escort and record exit')}
<h2>2. Telephone etiquette</h2>
${T(['Do', 'Do not'], [['Answer within 2-3 rings; greet and identify ("MD\'s office, Anita speaking"); speak clearly at moderate pace; take accurate messages (name, number, purpose); confirm and close politely', 'Say a blunt "Hello" without identifying; leave caller on hold without updates; eat or chew gum; give confidential information over the phone; argue']])}
<h2>3. Appointment scheduling</h2>
<p>Planning and confirming meeting times between an executive and visitors or colleagues to avoid clashes.</p>
${FLOW('Receive request', 'Check executive\'s diary', 'Confirm date, time, venue', 'Enter in calendar and send reminder')}
<p>Digital tools: Google / Outlook calendar, MS Teams / Zoom scheduler, automated SMS / email reminders.</p>
<h2>4. Mail handling</h2>
<h3>Inward mail (dak received)</h3>
${FLOW('Receiving', 'Sorting (confidential, registered, ordinary)', 'Opening and date-stamping', 'Recording in the Inward Mail Register', 'Distribution')}
<h3>Outward mail (dak sent)</h3>
${FLOW('Drafting', 'Approval / signature', 'Recording in the Outward Mail Register', 'Enveloping', 'Dispatch')}
${T(['Inward register columns', 'Outward register columns'], [['S.No., date, from, subject, marked to, remarks', 'S.No., date, to, subject, mode, dispatched by']])}
<p>Confidential envelopes are <b>not opened</b> by the mail clerk.</p>
<h2>5. Office communication systems</h2>
${T(['System', 'Use'], [['Email and groupware', 'Correspondence, scheduling, file sharing'], ['Video conferencing', 'Zoom, MS Teams, Google Meet for remote meetings'], ['Intercom / EPABX', 'Internal telephone exchange'], ['Intranet portal', 'Circulars, HR forms, notices'], ['Fax, printers, scanners, MFDs', 'Hard-copy documents'], ['Instant messaging', 'Quick internal queries']])}
<h2>6. Office automation and the smart office (assignment)</h2>
<p><b>Office automation</b> means using computers, software and networks to perform office tasks automatically - typing, communication, scheduling, records. Assignment 2 (AI-based): design a smart-office plan with an AI tool; design one office form with AI; give the prompt and name the tool used for each answer.</p>
${MCQ('Reception register = visitor register; visitor pass issued.', 'Confidential mail is not opened by the clerk; inward mail is date-stamped.', 'EPABX = internal telephone exchange; intranet = internal website.')}`;

  const U3A = `
<div class="box"><b>Unit 3 · Part A - Office forms</b></div>
<p><b>Core idea:</b> forms help an office collect and process information systematically; records preserve that information as evidence and reference. <b>Flow:</b> need for information &rarr; form prepared &rarr; information entered &rarr; transaction completed &rarr; form becomes a record &rarr; record stored and managed.</p>
<h2>1. Meaning of office form</h2>
<p>A <b>pre-designed document</b> with fields, headings, boxes or spaces in which specific information is entered for a particular business activity. Example: leave form - name, employee ID, department, dates, reason, signature, approval.</p>
<h2>2. Importance</h2>
${UL('<b>Standardisation</b>, <b>saves time</b>, <b>improves accuracy</b>, facilitates <b>communication</b> between departments.', 'Provides <b>evidence</b>; supports <b>control</b> (approval stages, signatures); makes record keeping and decision-making easier.')}
<h2>3. Types of forms</h2>
${T(['Type', 'Examples'], [['Internal', 'Leave application, purchase requisition, reimbursement, stock issue, travel authorisation'], ['External', 'Customer / supplier registration, insurance claim, bank application'], ['Accounting and financial', 'Invoice, receipt voucher, payment voucher, cash memo, expense claim, deposit slip'], ['Personnel / HR', 'Employment application, joining, leave, transfer, promotion, appraisal, exit interview'], ['Purchase and sales', 'Purchase order, goods received note, sales order, delivery challan, complaint form'], ['Digital / electronic', 'Online leave request, e-reimbursement, job application portal, digital feedback form']])}
<h2>4. Objectives of forms</h2>
${UL('Collect required information systematically; uniformity; reduce writing and repetition; fast and accurate processing; communication between departments; documentary evidence; authorisation and internal control; create information that becomes records; reporting and analysis.')}
<h2>5. Principles of form design</h2>
${T(['Principle', 'Meaning'], [['Simplicity', 'Easy to understand'], ['Clear purpose', 'Every field serves a purpose'], ['Logical sequence', 'Personal details &rarr; transaction details &rarr; approval'], ['Clear language', 'Short familiar headings'], ['Adequate space', 'Room to write or type'], ['Appropriate size', 'Not unnecessarily long'], ['Easy identification', 'Title, form number, version, date'], ['Professional appearance', 'Neat layout'], ['Suitable controls', 'Checkboxes, drop-downs, radio buttons'], ['Authorisation fields', 'Signature, date, designation'], ['Avoid duplication', 'Do not ask the same thing twice'], ['Processing suitability', 'Easy to file, verify, enter, retrieve']])}
<h2>6. Control of forms</h2>
<p><b>Form control</b> = managing creation, approval, issue, use, revision, distribution and withdrawal of forms so that only necessary and current forms are used.</p>
${T(['Need', 'Techniques'], [['Prevents duplicate forms; eliminates unnecessary paperwork; ensures the latest version is used; cuts printing, storage and processing cost; uniform procedures; easier audit', 'Form numbering (HR-01, PUR-01); central approval; version control; periodic review; controlled distribution; withdrawal of obsolete forms']])}
<h2>7. Preparing a form</h2>
${FLOW('Determine purpose', 'Identify users', 'List required information', 'Arrange logically', 'Choose format (paper / electronic)', 'Add approvals and codes', 'Test with users', 'Revise and issue', 'Give instructions')}
${MCQ('Form numbering (e.g. HR-01) is a form-control technique.', 'Leave form, purchase requisition = internal forms; invoice, voucher = accounting forms.', 'Good form: simple, clear purpose, logical sequence, adequate space, authorisation fields.')}`;

  const U3B = `
<div class="box"><b>Unit 3 · Part B - Record management</b></div>
<h2>1. Meaning</h2>
<p><b>Record management</b> is the systematic process of <b>creating, receiving, classifying, storing, protecting, retrieving, retaining and disposing</b> of business records - the right information to the right person at the right time. <b>Record keeping</b> means maintaining documents systematically for future reference, proof, reporting or operational use (employee files, attendance, invoices, contracts, minutes, stock and tax records).</p>
<h2>2. Need and importance of record keeping</h2>
${UL('Future reference; legal and regulatory requirements; decision-making; financial control; <b>audit</b>; performance measurement; accountability; protection in disputes.')}
<h2>3. Methods of maintaining records</h2>
${T(['Method', 'Meaning', 'Advantages', 'Limitations'], [['Manual', 'Registers, files, folders, ledgers, cabinets', 'Simple, familiar', 'Space, slow search, damage or loss'], ['Electronic', 'Spreadsheets, databases, ERP, cloud, DMS', 'Fast retrieval, searchable, easy backup and sharing', 'Cyber threats, technical failure, software dependence'], ['Hybrid', 'Physical originals + digital copies', 'Best of both', 'Needs two systems']])}
<h2>4. Classification of records</h2>
${T(['Classification', 'Example'], [['Subject-wise', 'Finance, HR, Marketing'], ['Alphabetical / name-wise', 'Agarwal &rarr; Banerjee &rarr; Gupta'], ['Numerical', 'Employee 1001, 1002'], ['Chronological / date-wise', 'January &rarr; February'], ['Geographical', 'Delhi, Mumbai, Jaipur region'], ['Functional', 'Purchase, sales, payroll, production']])}
<h2>5. Preservation of records</h2>
<p>Protecting records from loss, damage, deterioration, unauthorised access, alteration or destruction.</p>
${UL('Proper filing and labelling; protection from water, fire, dust, humidity, insects; <b>digital backup</b>; <b>access control</b>; passwords and encryption; <b>disaster recovery</b> plan; integrity controls (versioning, audit trails).')}
<h2>6. Centralised vs decentralised record keeping</h2>
${T(['Basis', 'Centralised', 'Decentralised'], [['Location', 'One central place / records department', 'Different departments or branches'], ['Control', 'High central control', 'Departmental'], ['Pros', 'Uniformity, less duplication, common security', 'Quick access, convenient, specialised knowledge'], ['Cons', 'Slower access, overload, distance', 'Duplicate records, inconsistent procedures, more resources']])}
<h2>7. Digital record systems</h2>
${T(['Advantages', 'Limitations'], [['Fast search, less space, easy sharing, backup, audit trail, analysis', 'Cybersecurity, system failure, training needs, dependence on backup']])}
<h2>8. Record life cycle</h2>
${FLOW('Creation / receipt', 'Classification', 'Storage', 'Use / retrieval', 'Retention', 'Disposal or archiving')}
<h2>9. Forms vs records</h2>
${T(['Basis', 'Office form', 'Record'], [['Nature', 'Blank structured document to collect information', 'Completed information kept as evidence'], ['Purpose', 'Collect, communicate, approve', 'Preserve, prove, refer'], ['Stage', 'Beginning of the process', 'After the transaction']])}
<p><b>Qualities of a good record system:</b> accurate, complete, secure, accessible, organised, up to date, compliant with retention rules, economical.</p>
${MCQ('Record life cycle ends in retention then disposal / archiving.', 'Hybrid = physical originals + scanned copies.', 'Disaster recovery plan, backup, access control = preservation methods.')}`;

  const U4A = `
<div class="box"><b>Unit 4 · Part A - Company secretary, directors, chairman and auditor</b> (Company Office Procedures and Meeting Management)</div>
<h2>1. Company secretary (CS)</h2>
<p>A qualified professional who helps a company in <b>corporate administration, legal compliance, governance, documentation and communication</b>. Under the Companies Act 2013 a CS is a <b>Key Managerial Personnel (KMP)</b> and must be a member of the <b>ICSI</b> (Institute of Company Secretaries of India). The CS is the link between the Board, management, shareholders and authorities.</p>
${T(['Point', 'Detail'], [['Appointment', 'By a Board resolution; whole-time CS compulsory for listed companies and public companies with paid-up capital of Rs 10 crore or more; smaller firms may use a practising CS'], ['Qualifications', 'Academic (graduate degree - commerce, law, management); professional (ICSI membership ACS / FCS after the CS course and training); personal skills (integrity, communication, tact, confidentiality, computer and drafting skills)'], ['Position', 'Officer of the company; agent (binds the company only within authority); adviser; link. Hierarchy: Shareholders &gt; Board &gt; MD / CEO &gt; CS &gt; office staff']])}
<h3>Functions of a secretary</h3>
${T(['Duties', 'Examples'], [['Statutory', 'Maintain registers, file returns and forms with the ROC, ensure compliance'], ['Administrative', 'Correspondence, records, share transfers, office routine'], ['Advisory', 'Advise the Board on laws, SEBI rules, governance and risk'], ['Meeting', 'Call meetings, prepare agenda, record minutes, follow up decisions']])}
<h2>2. Directors</h2>
<p>Persons appointed to the Board to take part in management, decision-making and supervision.</p>
${UL('Minimum directors: <b>public company 3, private company 2, One Person Company 1</b>; maximum <b>15</b> (more by special resolution).', 'At least one director must have stayed in India for <b>182 days</b> or more in the year.', 'Elected by shareholders; the Board acts collectively.', '<b>Duties:</b> act in good faith; due care and skill; avoid conflict of interest; attend meetings and disclose interest in contracts.')}
<h2>3. Chairman</h2>
<p>Presides over meetings of the Board and guides its functioning. Ensures meetings start on time and follow the agenda, maintains order, gives every member a fair chance, has a <b>casting vote</b> in a tie (if the Articles allow) and signs the minutes. Example: a 4-4 tie on a dividend proposal is decided by the Chairman's casting vote.</p>
<h2>4. Auditor</h2>
<p>An independent qualified professional (<b>Chartered Accountant</b>) who examines and verifies the financial records and statements to report whether they give a <b>true and fair view</b>. Appointed by shareholders at the AGM, normally for <b>5 years</b>; has right of access to books, vouchers and information; reports to members.</p>
${T(['Point', 'Director', 'Chairman', 'Auditor'], [['Role', 'Manages the company', 'Leads meetings', 'Checks the accounts'], ['Appointed by', 'Shareholders', 'Board / members', 'Shareholders at AGM'], ['Reports to', 'Members', 'Board', 'Members'], ['Independent?', 'Not necessarily', 'Not necessarily', 'Must be independent']])}
${MCQ('CS = KMP, member of ICSI, appointed by Board resolution.', 'Whole-time CS compulsory: listed companies and public companies with paid-up capital Rs 10 crore or more.', 'Directors: min 3 public / 2 private / 1 OPC, max 15; 182 days in India.', 'Auditor: CA, appointed at AGM, usually 5 years, true and fair view.', 'Chairman has the casting vote in a tie.')}`;

  const U4B = `
<div class="box"><b>Unit 4 · Part B - Meetings, agenda, quorum, voting, resolutions and minutes</b></div>
<h2>1. Meetings</h2>
<p>A <b>meeting</b> is a gathering of two or more persons for a common purpose - for decisions, coordination and communication; it gives a legal record (minutes).</p>
${T(['Meeting', 'Who attends', 'Key rule'], [['Board meeting', 'Directors', 'At least 4 a year; gap not more than 120 days'], ['AGM (Annual General Meeting)', 'All members', 'Held yearly within 6 months of the financial year end'], ['EGM (Extraordinary General Meeting)', 'All members', 'Called for urgent business'], ['Class meeting', 'One class of shareholders', 'To change the rights of that class'], ['Committee meeting', 'Selected directors / members', 'Specific matters - audit, nomination, CSR']])}
<h3>Secretary: before, during, after</h3>
${T(['Before', 'During', 'After'], [['Fix date and venue; send notice and agenda; prepare papers and attendance sheet', 'Check quorum; assist the Chairman; take notes; guide on rules', 'Draft minutes; get the Chairman\'s signature; circulate decisions; follow up action']])}
<h2>2. Notice of meeting</h2>
<p>Written intimation of the <b>date, time, place and business</b>. <b>Board meeting: at least 7 days; general meeting: 21 clear days.</b> Sent to every director or member (and the auditor for general meetings). A defective notice can make the meeting and its decisions invalid.</p>
<h2>3. Agenda</h2>
<p>The list of items of business in order, prepared by the Secretary with the Chairman and sent with the notice: minutes of the last meeting, main items, <b>any other business</b> (with the Chairman's permission), vote of thanks.</p>
<h2>4. Quorum</h2>
<p><b>Quorum</b> = the minimum number of members whose presence makes a meeting valid. Without quorum the meeting cannot transact business (it is adjourned).</p>
${T(['Meeting', 'Quorum'], [['Board meeting', 'One-third of total strength or 2 directors, whichever is higher'], ['Public company general meeting', '5 members if members are up to 1,000; 15 if 1,001-5,000; 30 if more than 5,000'], ['Private company general meeting', '2 members personally present']])}
<p class="expl">[extra] The quorum figures are standard Companies Act 2013 rules (sections 103 and 174); they are not in the Unit 4 deck - check with class notes.</p>
<h2>5. Voting</h2>
${T(['Method', 'How it works'], [['Show of hands', 'Each member present has one vote, regardless of shares'], ['Poll', 'Votes counted according to shares held; can be demanded for important matters'], ['Postal / electronic voting', 'Members vote by post or online without attending'], ['Casting vote', 'Chairman\'s extra vote to break a tie (if the Articles allow)']])}
<h2>6. Motion and resolution</h2>
${T(['Term', 'Meaning'], [['Motion', 'A formal proposal put before the meeting for discussion; moved by a member and seconded'], ['Resolution', 'A motion that has been voted and passed - the decision of the meeting'], ['Ordinary resolution', 'Passed by a simple majority (more than 50% of votes cast)'], ['Special resolution', 'Passed by at least 75% of votes cast'], ['Amendment', 'A change proposed to a motion before it is voted']])}
${FLOW('Motion proposed', 'Seconded', 'Discussion', 'Amendment (if any)', 'Vote', 'Passed = resolution')}
<h2>7. Minutes</h2>
<p><b>Minutes</b> are the official written record of what happened and what was decided at a meeting. They are recorded in the <b>minutes book</b> (pages numbered, entries in order), written in the <b>past tense and third person</b>, short and accurate, and signed by the Chairman.</p>
${T(['Contents of minutes', ''], [['Name of the company / body, type of meeting; date, time and place', 'Names of those present, absent (leave of absence) and in attendance'], ['Quorum and chairman; confirmation of previous minutes', 'Each item with decisions and resolutions passed (with proposer / seconder); Chairman\'s signature and date']])}
${FLOW('Secretary takes notes', 'Drafts minutes', 'Chairman approves', 'Entered in the minutes book', 'Signed and dated', 'Decisions circulated, action followed up')}
${MCQ('Board meeting: min 4 a year, gap ≤120 days; AGM: within 6 months of year end.', 'Notice: Board 7 days; general meeting 21 clear days.', 'Special resolution needs 75%; ordinary resolution needs a simple majority.', 'Minutes are written in the past tense and signed by the Chairman.', 'Quorum = minimum members needed for a valid meeting.')}`;

  const EM = `
<div class="box"><b>Exam format:</b> objective paper - <b>Sun 22 Nov 2026, 12:30-1:30 PM, 1 hour</b>. Practise with the MCQ quiz (235 questions), the Mock exam and the Daily 20; use these notes for the reason behind every answer.</div>
<h2>1. How to score in an MCQ paper</h2>
${UL('Read the question fully; eliminate two options first; choose the <b>most complete</b> option.', 'Watch out for "NOT", "EXCEPT" and "which of the following is false".', 'Do not spend more than a minute on one question; mark and return.', 'Answer every question - review wrong answers from the quiz scoreboard.')}
<h2>2. Facts that are asked again and again</h2>
${T(['Topic', 'Fact to remember'], [['Office', 'Administrative / information / record / communication / coordination centre; "nerve centre"'], ['Filing', 'Arrange + store + protect + retrieve; five methods: alphabetical, numerical, subject, geographical, chronological'], ['Indexing', 'Book, card, loose-leaf, visible, computerised; filing and indexing are complementary'], ['Layout', 'Open, private, cubicle, hybrid'], ['Paperless office', 'Minimum paper, not zero paper'], ['Letter parts', '8 parts; Dear Sir &rarr; Yours faithfully'], ['Memo / circular', 'Memo internal; circular to many'], ['Mail', 'Inward mail date-stamped and recorded; confidential mail not opened'], ['Forms', 'Form numbering, version control, central approval = form control'], ['Records', 'Life cycle: create &rarr; classify &rarr; store &rarr; retrieve &rarr; retain &rarr; dispose'], ['Company secretary', 'KMP; ICSI member; whole-time CS compulsory at paid-up capital Rs 10 crore'], ['Directors', 'Min 3 / 2 / 1; max 15; 182 days in India'], ['Meetings', 'Board 4 a year, gap ≤120 days; AGM within 6 months; notice 7 days (Board), 21 clear days (general)'], ['Resolutions', 'Ordinary &gt; 50%; special ≥ 75%'], ['Minutes', 'Past tense, third person, signed by the Chairman']])}
<h2>3. Mnemonic bank</h2>
${T(['Mnemonic', 'Recall'], [['R-R-P-S-R-C', 'Basic office functions: Receive, Record, Process, Store, Retrieve, Communicate'], ['A-N-S-G-C', 'Filing: Alphabetical, Numerical, Subject, Geographical, Chronological'], ['O-P-C-H', 'Layouts: Open, Private, Cubicle, Hybrid'], ['PTES', 'Environment: Physical, Technological, Emotional(psychological), Social'], ['B-C-L-V-C', 'Index types: Book, Card, Loose-leaf, Visible, Computerised']])}
<h2>4. Last-night plan (1 hour paper)</h2>
${T(['Time', 'What to do'], [['Block 1 - 30 min', 'Unit 1 notes A-D: office, modern / paperless / virtual, layout, filing, indexing'], ['Block 2 - 30 min', 'Unit 2: secretary, letter parts, memo vs circular, mail handling, telephone, reception'], ['Block 3 - 30 min', 'Unit 3: forms (types, design, control), records (classification, preservation, life cycle)'], ['Block 4 - 30 min', 'Unit 4: CS, directors, meetings, notice periods, quorum, resolutions, minutes'], ['Final - 20 questions', 'Daily 20 or a mock exam; review wrong answers']])}`;

  const link = `<div class="nextsteps"><span>Next steps</span><a class="nbtn" href="#/office-mgmt/quiz">▶ Practise MCQs</a><a class="nbtn" href="#/office-mgmt/concepts">🧠 Concept cards</a><a class="nbtn" href="#/expected/office-mgmt">🎯 Important questions</a></div>`;
  const pages = [
    { id: 'u1-office', title: 'Unit 1-A · Office, functions, organisation, office manager', html: U1A },
    { id: 'u1-modern', title: 'Unit 1-B · Modern, paperless, virtual office; front vs back office', html: U1B },
    { id: 'u1-layout', title: 'Unit 1-C · Layout, environment, ethics, machines', html: U1C },
    { id: 'u1-filing', title: 'Unit 1-D · Filing, indexing, record management', html: U1D },
    { id: 'u2-secretary', title: 'Unit 2-A · Secretary, letters, notice, agenda, memo, circular, email', html: U2A },
    { id: 'u2-reception', title: 'Unit 2-B · Reception, telephone, appointments, mail, automation', html: U2B },
    { id: 'u3-forms', title: 'Unit 3-A · Office forms (types, design, control)', html: U3A },
    { id: 'u3-records', title: 'Unit 3-B · Record management and digital records', html: U3B },
    { id: 'u4-company', title: 'Unit 4-A · Company secretary, directors, chairman, auditor', html: U4A },
    { id: 'u4-meetings', title: 'Unit 4-B · Meetings, quorum, voting, resolutions, minutes', html: U4B },
    { id: 'exam-master', title: '⭐ Exam Master - MCQ strategy, facts, mnemonics, last-night plan', html: EM },
  ];
  pages.forEach((p) => { p.html += link; });
  const at = SUB.units.findIndex((u) => u.id === 'concepts');
  if (at >= 0) SUB.units.splice(at, 0, ...pages); else SUB.units.push(...pages);
  SUB.notes = pages;
})();
