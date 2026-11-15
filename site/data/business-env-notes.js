// Business Environment, Ethics and Governance (Minor, F010304TN) - unit-wise NOTES (Units 1-4) + Exam Master. Objective paper: Sat 28 Nov 2026, 11:30-1:00, 1.5 hours.
// Source: BUSINESS ENV/UNIT 3 BE.pdf (Unit 3 ethical codes, pillars and cases) for Unit 3; Units 1, 2 and 4 follow the topics asked in the 800 MCQs and standard textbooks - marked [extra].
(function () {
  const SUB = window.SUBJECTS && window.SUBJECTS['business-env'];
  if (!SUB) return;
  const T = (head, rows) => '<table><tr>' + head.map((h) => '<th>' + h + '</th>').join('') + '</tr>' + rows.map((r) => '<tr>' + r.map((c) => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</table>';
  const UL = (...a) => '<ul>' + a.map((x) => '<li>' + x + '</li>').join('') + '</ul>';
  const BOX = (t, ...a) => '<div class="box"><b>' + t + '</b>' + UL(...a) + '</div>';
  const FLOW = (...a) => '<div class="box"><b>Flow:</b> ' + a.join(' &rarr; ') + '</div>';
  const MCQ = (...a) => '<div class="box"><b>🎯 MCQ points (asked often):</b>' + UL(...a) + '</div>';
  const EX = '<p class="expl">[extra] No notes PDF for this part in your BUSINESS ENV folder - written from the syllabus topics, the MCQ papers and standard textbooks. Check the numbers with your class notes.</p>';

  const U1A = `
<div class="box"><b>Unit 1 · Part A - Concept of business environment; internal and external factors</b></div>
${EX}
<h2>1. Meaning</h2>
<p>The <b>business environment</b> is the sum total of all <b>internal and external factors, forces and institutions</b> that affect the working of a business. A firm does not work in isolation - it must read and respond to its environment.</p>
<h3>Features</h3>
${UL('<b>Totality</b> of external forces; <b>dynamic</b> (keeps changing); <b>uncertain</b> (hard to predict); <b>complex</b> (many interacting factors); <b>relative</b> (differs from place to place and firm to firm); <b>specific and general</b> forces.')}
<h3>Importance</h3>
${UL('Identifies <b>opportunities and threats</b>; helps in strategy and planning; early warning of change; improves image and survival; helps in tapping resources and meeting competition.')}
<h2>2. Internal factors (within the firm - controllable)</h2>
${T(['Factor', 'Meaning'], [['Vision, mission and objectives', 'Direction and purpose of the firm'], ['Organisational structure and culture', 'Authority, reporting, shared values'], ['Human resources', 'Skills, morale, labour relations'], ['Financial resources', 'Capital, liquidity, borrowing capacity'], ['Physical and technological resources', 'Plant, machinery, technology, R&amp;D'], ['Management style / corporate image', 'Leadership approach, goodwill']])}
<h2>3. External factors (outside the firm - uncontrollable)</h2>
${T(['Micro (task) environment', 'Macro (general) environment'], [['Customers, suppliers, competitors, marketing intermediaries, public - affect one firm directly', 'Economic, political, social, technological, legal, ecological forces - affect all firms in the industry']])}
${T(['Basis', 'Internal environment', 'External environment'], [['Location', 'Within the firm', 'Outside the firm'], ['Control', 'Controllable', 'Largely uncontrollable'], ['Examples', 'Mission, HR, finance, culture', 'Government policy, inflation, technology, competitors'], ['Response', 'Strengths and weaknesses', 'Opportunities and threats']])}
<p><b>SWOT:</b> internal &rarr; <b>S</b>trengths and <b>W</b>eaknesses; external &rarr; <b>O</b>pportunities and <b>T</b>hreats.</p>
${MCQ('Internal factors are controllable; external factors are uncontrollable.', 'Micro = customers, suppliers, competitors; macro = economic, political, social, technological, legal, ecological.', 'SWOT: internal S-W, external O-T.')}`;

  const U1B = `
<div class="box"><b>Unit 1 · Part B - PESTLE analysis and role of government in business</b></div>
${EX}
<h2>1. PESTLE analysis</h2>
<p><b>PESTLE</b> is a tool for scanning the <b>macro environment</b>: <b>P</b>olitical, <b>E</b>conomic, <b>S</b>ocial, <b>T</b>echnological, <b>L</b>egal, <b>E</b>nvironmental.</p>
${T(['Factor', 'What it covers', 'Example'], [['Political', 'Government stability, policies, taxation, trade rules', 'Change in GST rate or import duty'], ['Economic', 'Inflation, interest rates, GDP growth, exchange rate, income', 'Rise in repo rate raises loan cost'], ['Social', 'Demographics, culture, lifestyle, education, attitudes', 'Growing health awareness boosts organic food'], ['Technological', 'Innovation, automation, AI, digital payments', 'UPI changes payments'], ['Legal', 'Laws and regulations - consumer, labour, company, competition', 'Consumer Protection Act 2019'], ['Environmental', 'Climate, pollution norms, resource scarcity, sustainability', 'Ban on single-use plastic']])}
<p><b>Use:</b> spot opportunities and threats before planning; repeat regularly because the environment changes.</p>
<h2>2. Role of government in business</h2>
<p>The government is a <b>regulator, promoter, entrepreneur, planner and consumer</b>.</p>
${T(['Role', 'Meaning', 'Example'], [['Regulator', 'Makes laws and rules to control business behaviour', 'Companies Act, Competition Act, SEBI rules'], ['Promoter', 'Encourages business through incentives, infrastructure, subsidies', 'Make in India, Startup India, SEZs'], ['Entrepreneur', 'Runs public-sector enterprises', 'Indian Railways, BHEL, SAIL'], ['Planner', 'Sets national priorities through plans and policy', 'NITI Aayog, budgets'], ['Consumer', 'Large buyer of goods and services', 'Defence procurement'], ['Provider of infrastructure', 'Roads, ports, power, public services', 'Highways, Digital India']])}
<h3>Forms of government intervention</h3>
${UL('Licensing and regulation; taxation and subsidies; price control; public sector; monetary and fiscal policy; consumer and environmental protection laws.')}
${MCQ('PESTLE = Political, Economic, Social, Technological, Legal, Environmental.', 'Government roles: regulator, promoter, entrepreneur, planner, consumer.', 'PESTLE analyses the macro (external) environment.')}`;

  const U1C = `
<div class="box"><b>Unit 1 · Part C - Ethical values, business ethics and corporate social responsibility</b></div>
${EX}
<h2>1. Ethical values of society</h2>
<p><b>Values</b> are beliefs about what is right and wrong, accepted by society. <b>Ethics</b> are the principles of conduct that grow out of values. Business operates within society, so it is expected to follow its values - honesty, fairness, respect, responsibility, non-exploitation.</p>
<h2>2. Business ethics</h2>
<p><b>Business ethics</b> are the moral principles and standards that guide behaviour and decision-making in business. They go beyond the law: legal compliance is the minimum; ethics asks "is it right?" not only "is it legal?".</p>
${T(['Benefits of ethical business', 'Problems from unethical business'], [['Trust of customers and investors; good reputation; fewer legal problems; employee pride and retention; long-term survival', 'Fines, lawsuits, loss of brand value, collapse (Enron, Satyam, Volkswagen)']])}
<h2>3. Corporate social responsibility (CSR)</h2>
<p><b>CSR</b> is the obligation of a business to act in ways that benefit society - beyond profit - towards employees, customers, community and the environment.</p>
${T(['Law in India (Companies Act 2013, Section 135)', 'Detail'], [['Applies to companies with', 'Net worth Rs 500 crore or more, OR turnover Rs 1,000 crore or more, OR net profit Rs 5 crore or more (in the preceding financial year)'], ['Spend', 'At least <b>2% of the average net profit</b> of the preceding three years'], ['Machinery', 'CSR Committee of the Board (3 or more directors, at least 1 independent where required); CSR policy; annual report'], ['Areas (Schedule VII)', 'Education, health, hunger and poverty, environment, women empowerment, rural development, sports, etc.']])}
<h3>Levels of responsibility (Carroll's pyramid)</h3>
${FLOW('Economic (be profitable)', 'Legal (obey the law)', 'Ethical (do what is right)', 'Philanthropic (give back)')}
${T(['Stakeholder', 'Social responsibility'], [['Owners', 'Fair returns, honest reporting'], ['Employees', 'Fair wages, safety, training'], ['Customers', 'Quality, safe goods, fair price, information'], ['Community', 'Local development, jobs'], ['Government', 'Taxes, compliance'], ['Environment', 'Control pollution, save resources']])}
<p>Examples: Tata Steel's Jamshedpur, Infosys Foundation, ITC e-Choupal [extra].</p>
${MCQ('CSR under Section 135: 2% of average net profit of the last three years.', 'Thresholds: net worth Rs 500 cr / turnover Rs 1,000 cr / net profit Rs 5 cr.', 'Business ethics goes beyond the law.')}`;

  const U2A = `
<div class="box"><b>Unit 2 · Part A - Economic systems and economic policies</b></div>
${EX}
<h2>1. Economic systems</h2>
<p>An <b>economic system</b> is the way a country organises production, distribution and consumption - answering what, how and for whom to produce.</p>
${T(['Basis', 'Capitalism', 'Socialism', 'Mixed economy'], [['Ownership', 'Private', 'State / collective', 'Both private and public'], ['Motive', 'Profit', 'Social welfare', 'Profit and welfare'], ['Prices decided by', 'Market (demand and supply)', 'Central planning', 'Market with government regulation'], ['Examples', 'USA', 'Erstwhile USSR, China (earlier)', 'India']])}
<p><b>India</b> follows a <b>mixed economy</b> (after the Industrial Policy Resolution 1948, 1956) - public and private sectors work together; since 1991 the private sector's role has grown.</p>
<h2>2. Economic policies</h2>
${T(['Policy', 'Who frames it', 'Tools / aim'], [['Industrial policy', 'Government (DPIIT)', 'Licensing, entry rules, FDI limits; promote industry. IPR 1948, 1956, 1991'], ['Fiscal policy', 'Government (Finance Ministry)', 'Taxation, public spending, borrowing - budget; controls growth, inflation, income distribution'], ['Monetary policy', 'RBI', 'Repo rate, reverse repo, CRR, SLR, open market operations - controls money supply, inflation, credit'], ['Trade (EXIM) policy', 'Commerce Ministry (DGFT)', 'Export promotion, import regulation, duties, FTAs'], ['Competition policy', 'CCI', 'Prevents monopoly and unfair practices - Competition Act 2002']])}
<p><b>Fiscal vs monetary:</b> fiscal = government revenue and expenditure; monetary = money supply and interest rates by the central bank.</p>
<h3>Five Year Plans to NITI Aayog</h3>
${UL('Planning Commission (1950) ran Five Year Plans till 2017; replaced by <b>NITI Aayog</b> (2015) as a policy think-tank.')}
${MCQ('India = mixed economy.', 'Monetary policy = RBI; fiscal policy = government.', 'Repo rate, CRR, SLR are monetary-policy tools.', 'Competition Act 2002 replaced the MRTP Act 1969.')}`;

  const U2B = `
<div class="box"><b>Unit 2 · Part B - LPG reforms (1991) and their impact on the Indian economy and society</b></div>
${EX}
<h2>1. Why reforms in 1991?</h2>
${UL('Severe <b>balance of payments crisis</b>; foreign-exchange reserves fell to cover only about 2-3 weeks of imports.', 'High fiscal deficit, inflation, poor performance of the public sector, over-regulation (licence-permit raj).', 'Gulf War oil price rise; IMF and World Bank loans with conditions.')}
<p>The government of <b>P. V. Narasimha Rao</b> with Finance Minister <b>Dr Manmohan Singh</b> introduced the <b>New Industrial Policy (24 July 1991)</b>.</p>
<h2>2. LPG - the three pillars</h2>
${T(['Pillar', 'Meaning', 'Main steps'], [['Liberalisation', 'Removing unnecessary controls and restrictions on business', 'Abolition of industrial licensing (except a few industries); MRTP limits removed; freedom to expand; reduced import duties; simpler procedures'], ['Privatisation', 'Reducing the role of the state and transferring ownership to the private sector', 'Disinvestment of public-sector shares; reducing reserved industries; sale of PSU stake (e.g. VSNL, Maruti)'], ['Globalisation', 'Integrating the Indian economy with the world economy', 'Foreign investment (FDI / FII) welcomed; rupee devaluation and partial convertibility; FERA replaced by FEMA 1999; WTO membership 1995']])}
<h2>3. Impact</h2>
${T(['Positive', 'Negative'], [['Faster GDP growth; large foreign exchange reserves; more FDI; IT, telecom and services boom; wider consumer choice; better quality and competition; more jobs in services; rise in exports', 'Wider rich-poor and rural-urban gap; agriculture neglected; job losses in some traditional industries; small-scale units hurt by foreign competition; dependence on global shocks; environmental pressure; rise in consumerism']])}
<h3>Impact on society</h3>
${UL('Growth of the middle class and urbanisation; change in lifestyle and consumption; better access to technology; but unequal benefits and stress on natural resources.')}
${MCQ('LPG = Liberalisation, Privatisation, Globalisation (1991).', 'New Industrial Policy: 24 July 1991 - Narasimha Rao / Manmohan Singh.', 'FERA replaced by FEMA in 1999; India joined WTO in 1995.', 'Cause: balance of payments crisis.')}`;

  const U2C = `
<div class="box"><b>Unit 2 · Part C - Environmental protection, unethical business practices and consumerism</b></div>
${EX}
<h2>1. Regulations for environmental protection</h2>
${T(['Law', 'Purpose'], [['Environment (Protection) Act, 1986', 'Umbrella law to protect and improve the environment; passed after the Bhopal gas tragedy'], ['Water (Prevention and Control of Pollution) Act, 1974', 'Prevent and control water pollution; Pollution Control Boards'], ['Air (Prevention and Control of Pollution) Act, 1981', 'Prevent, control and reduce air pollution'], ['Wildlife (Protection) Act, 1972', 'Protect wild animals, birds and plants'], ['Forest (Conservation) Act, 1980', 'Restrict diversion of forest land'], ['Public Liability Insurance Act, 1991', 'Compensation to victims of hazardous accidents'], ['National Green Tribunal Act, 2010', 'Fast-track environmental disputes - NGT'], ['Biological Diversity Act, 2002', 'Conserve biodiversity']])}
<p><b>Polluter pays principle:</b> the one who pollutes bears the cost of cleaning. <b>CPCB</b> and State PCBs implement the Water and Air Acts.</p>
<h2>2. Unethical business practices</h2>
${T(['Practice', 'Meaning'], [['Adulteration', 'Mixing inferior or harmful material in goods'], ['Hoarding and black marketing', 'Storing goods to create scarcity and sell at high prices'], ['Misleading advertisements', 'False claims about quality or price'], ['Insider trading', 'Trading shares using unpublished price-sensitive information'], ['Bribery and corruption', 'Illegal payments to win business or favours'], ['Tax evasion', 'Illegally hiding income or sales to avoid tax'], ['Child labour and exploitation', 'Employing children or underpaying workers'], ['Unfair trade practices / cartels', 'Price fixing, deceptive practices']])}
<h3>Regulation</h3>
${UL('<b>Competition Act 2002</b> (CCI) - cartels and abuse of dominance; <b>SEBI Act 1992</b> - insider trading and market fraud; <b>Essential Commodities Act 1955</b> - hoarding; <b>Food Safety and Standards Act 2006</b> (FSSAI) - adulteration; <b>Prevention of Corruption Act 1988</b>; <b>Consumer Protection Act 2019</b> - misleading ads (CCPA).')}
<h2>3. Consumerism and consumer rights</h2>
<p><b>Consumerism</b> is the social movement that seeks to protect and strengthen the rights of buyers against unfair practices of sellers.</p>
<h3>Consumer rights (Consumer Protection Act 2019)</h3>
${T(['Right', 'Meaning'], [['Safety', 'Protection from hazardous goods and services'], ['Information', 'Facts about quality, quantity, purity, price'], ['Choice', 'Access to a variety of goods at competitive prices'], ['To be heard', 'Consumer interests get due consideration'], ['Redressal', 'Fair settlement of genuine complaints'], ['Consumer education', 'Knowledge and skills to be an informed consumer']])}
<h3>Redressal machinery</h3>
${T(['Forum', 'Pecuniary limit (consideration paid) after 2021 rules'], [['District Commission', 'Up to Rs 50 lakh'], ['State Commission', 'Above Rs 50 lakh and up to Rs 2 crore'], ['National Commission', 'Above Rs 2 crore']])}
${UL('<b>CCPA</b> (Central Consumer Protection Authority) regulates unfair trade practices and misleading ads; <b>product liability</b>, e-commerce rules and <b>mediation</b> are included in the 2019 Act; 24 December is National Consumer Day; 15 March is World Consumer Rights Day.')}
${MCQ('Environment (Protection) Act 1986 followed the Bhopal gas tragedy.', 'Water Act 1974; Air Act 1981; NGT Act 2010.', 'Six consumer rights; three-tier commissions (District, State, National).', 'National Consumer Day: 24 December.')}`;

  const U3A = `
<div class="box"><b>Unit 3 · Part A - Business ethics, ethical codes and why they matter</b> (source: your UNIT 3 BE.pdf)</div>
<h2>1. What is business ethics?</h2>
<p>The set of <b>moral principles and standards</b> that guide behaviour and decision-making in business. It applies to everyone from the boardroom to the shop floor, goes <b>beyond the law</b> and builds trust.</p>
<h2>2. Code of ethics</h2>
<p>A <b>formal written document</b> stating an organisation's core values and the standards of conduct expected from everyone in it. It sets expectations and guides decisions in grey-area choices. Example: <b>Infosys Code of Conduct and Ethics</b>.</p>
<h2>3. Why ethical codes matter</h2>
${T(['Benefit', 'Meaning', 'Example'], [['Builds reputation', 'Ethical image attracts loyal customers and investors', 'Tata Group'], ['Reduces legal risk', 'Avoids lawsuits and penalties', 'Compliance with norms'], ['Improves employee morale', 'Pride, retention, productivity', 'Fair and honest workplace'], ['Ensures long-term survival', 'Ethical firms sustain growth', 'Enron collapsed']])}
<h2>4. Evolution of business ethics</h2>
${T(['Period', 'Development'], [['1960s-70s', 'Consumer and environmental movements demand accountability'], ['1980s', 'Corporate scandals push firms to adopt formal codes'], ['1990s', 'CSR becomes mainstream business strategy'], ['2000s', 'Enron and WorldCom trigger governance reforms'], ['Today', 'ESG, sustainability and stakeholder capitalism']])}
<h2>5. Types of ethical codes</h2>
${T(['Code', 'Meaning', 'Example'], [['Code of conduct', 'Specific rules of behaviour', 'Anti-bribery, use of company assets'], ['Code of ethics / values', 'Broad principles reflecting mission', 'Integrity, respect, excellence'], ['Compliance code', 'Adherence to laws', 'Tax, labour, data protection, competition law'], ['Professional code', 'Industry-specific standards', 'CAs, doctors, bankers']])}
<h2>6. Stakeholders</h2>
${T(['Internal', 'External'], [['Employees, management, owners and shareholders, board of directors', 'Customers, suppliers, government and regulators, community and environment']])}
${MCQ('Code of ethics = formal written statement of values and standards of conduct.', 'Four types: code of conduct, code of ethics / values, compliance code, professional code.', 'Enron and WorldCom triggered governance reforms (2000s).')}`;

  const U3B = `
<div class="box"><b>Unit 3 · Part B - The six pillars: honesty, integrity, fairness, environmental sustainability, community engagement, rights and transparency</b> (source: UNIT 3 BE.pdf; the deck lists transparency as the seventh slide-set)</div>
<h2>1. Honesty</h2>
<p>Being <b>truthful, accurate and straightforward</b> in communication, advertising, reporting and dealings. Practice: truth in advertising, accurate financial reporting, fair contracts with no hidden clauses, owning mistakes (proactive recalls).</p>
${T(['Case', 'Lesson'], [['Patagonia - 2011 "Don\'t Buy This Jacket" ad urging customers to think about over-consumption', 'Honesty about the true cost of a product builds lasting trust'], ['Volkswagen - 2015 "Dieselgate": software cheated emissions tests', 'Dishonesty leads to billions in fines and long reputational damage']])}
<h2>2. Integrity</h2>
<p>Adhering to strong moral principles <b>consistently - even when no one is watching</b>. Elements: consistency, accountability, moral courage. Leaders must "walk the talk".</p>
${T(['Compliance-driven', 'Integrity-driven'], [['Follows rules to avoid punishment; looks for loopholes; ethics stops where law stops', 'Does the right thing voluntarily; upholds the spirit; ethics guides beyond the law']])}
<p>Case: <b>Tata Group</b> - "Leadership with Trust"; Taj staff in the 2008 Mumbai attacks.</p>
<h2>3. Fairness</h2>
<p>Treating employees, customers, suppliers and competitors <b>equitably, without discrimination, favouritism or exploitation</b>.</p>
${UL('Employees: equal pay for equal work, non-discrimination, merit-based growth, safe workplace.', 'Suppliers: timely payments, reasonable terms; Fair Trade certification gives farmers a fair minimum price.', '<b>Fair pricing</b> (true cost + reasonable margin) vs <b>price gouging</b> (exploiting shortages).', 'Case: <b>Ben &amp; Jerry\'s</b> - Fair Trade sourcing of cocoa, coffee, vanilla, sugar.')}
<h2>4. Environmental sustainability</h2>
<p>Operating so as to <b>meet present needs without compromising the ability of future generations to meet theirs</b>. Elements: resource efficiency, pollution control, circular thinking.</p>
${T(['Triple bottom line', 'Meaning'], [['People', 'Fair treatment of employees, customers, communities'], ['Planet', 'Protect the environment through responsible operations'], ['Profit', 'Remain financially viable']])}
${UL('Practices: renewable energy, waste reduction and recycling, sustainable sourcing, green product design.', 'Cases: <b>IKEA</b> (sustainable wood and cotton, "climate positive"); <b>Unilever</b> Sustainable Living Plan (growth with a smaller footprint).')}
<h2>5. Community engagement</h2>
<p>The process by which a business builds relationships with, and contributes resources to, the communities affected by its operations. It is a two-way relationship and part of <b>CSR</b>.</p>
${UL('Areas: education, healthcare, local development (roads, sanitation, water), employment generation.', 'Cases: <b>Tata Steel</b> built Jamshedpur (schools, hospitals, housing) before CSR was mandated; <b>Infosys Foundation</b> (education, healthcare, rural development, disaster relief).', 'Benefits: stronger brand image, employee pride, <b>social licence to operate</b>, long-term stability.')}
<h2>6. Rights in business conduct</h2>
${T(['Stakeholder', 'Rights'], [['Employees', 'Fair wages, safe workplace, freedom of association (unions, collective bargaining), freedom from discrimination'], ['Customers', 'Safety, information, choice, redressal (Consumer Protection Act)'], ['Communities', 'Clean environment, fair treatment']])}
${UL('<b>UN Guiding Principles on Business and Human Rights</b> set global expectations, including in the supply chain.', 'Legal backing: Consumer Protection Act, labour and industrial laws, environmental regulations.')}
<h2>7. Transparency in business conduct</h2>
<p>Openly and clearly sharing <b>accurate information</b> about decisions, performance and practices with stakeholders - good news and bad. Benefits: trust, accountability, investor confidence, better decisions.</p>
${UL('Financial transparency: accurate statements (true and fair view), <b>independent audits</b>, clear disclosure of risks, related-party deals and executive pay.')}
${T(['Case', 'Lesson'], [['Enron - hid debts in off-balance-sheet entities; collapsed in 2001; led to the Sarbanes-Oxley Act', 'Hiding truth destroys trust and the business'], ['Buffer - published salary formula, revenue and diversity data', 'Radical openness can be a competitive advantage']])}
<h2>8. How the pillars connect</h2>
${UL('Honesty enables integrity; fairness needs transparency; sustainability and community engagement turn ethics into action for society.')}
${MCQ('Patagonia = honesty; Volkswagen = dishonesty (Dieselgate 2015); Tata = integrity.', 'Ben &amp; Jerry\'s = fair trade; IKEA and Unilever = sustainability.', 'Tata Steel (Jamshedpur) and Infosys Foundation = community engagement.', 'Enron = transparency failure, led to Sarbanes-Oxley Act.', 'Triple bottom line = People, Planet, Profit.')}`;

  const U4 = `
<div class="box"><b>Unit 4 - Whole-syllabus quick revision.</b> The Unit 4 MCQ set revisits all earlier topics (business environment, PESTLE, government role, ethics and CSR, economic systems and policies, LPG, environmental laws, unethical practices, consumer rights, ethical codes). Use this one-page map to revise before the exam.</div>
${T(['Topic', 'Must remember', 'Read in'], [['Business environment', 'Internal (controllable) vs external (micro and macro); SWOT', 'Unit 1-A'], ['PESTLE', 'Political, Economic, Social, Technological, Legal, Environmental', 'Unit 1-B'], ['Role of government', 'Regulator, promoter, entrepreneur, planner, consumer', 'Unit 1-B'], ['Business ethics and CSR', 'Ethics beyond law; CSR 2% of 3-year average net profit (Sec 135)', 'Unit 1-C'], ['Economic systems', 'Capitalism, socialism, mixed (India)', 'Unit 2-A'], ['Economic policies', 'Industrial, fiscal (govt), monetary (RBI), EXIM, competition', 'Unit 2-A'], ['LPG 1991', 'BoP crisis; liberalisation, privatisation, globalisation; Rao-Manmohan Singh', 'Unit 2-B'], ['Environment laws', 'EPA 1986; Water 1974; Air 1981; NGT 2010', 'Unit 2-C'], ['Unethical practices', 'Adulteration, hoarding, misleading ads, insider trading, bribery', 'Unit 2-C'], ['Consumer rights', 'Six rights; District / State / National Commissions; CPA 2019', 'Unit 2-C'], ['Ethical codes', 'Conduct, ethics / values, compliance, professional', 'Unit 3-A'], ['Six pillars and cases', 'Honesty, integrity, fairness, sustainability, community, rights, transparency', 'Unit 3-B']])}
${MCQ('PESTLE factor questions: match example to factor.', 'Law-year questions: 1974 Water, 1981 Air, 1986 EPA, 1991 LPG, 1999 FEMA, 2002 Competition, 2010 NGT, 2013 Companies, 2019 CPA.', 'Case-match questions: Patagonia, Volkswagen, Tata, Ben &amp; Jerry\'s, IKEA, Unilever, Enron, Buffer, Infosys.')}`;

  const EM = `
<div class="box"><b>Exam format:</b> objective paper - <b>Sat 28 Nov 2026, 11:30 AM - 1:00 PM, 1.5 hours</b>. Practise with the MCQ quiz (800 questions), the Mock exam and the Daily 20; use these notes for the reason behind answers.</div>
<h2>1. How to score in an MCQ paper</h2>
${UL('Read the whole question; eliminate two options first; pick the most complete option.', 'Watch "NOT", "EXCEPT" and "false" questions.', 'Do not spend more than a minute on one question; return to marked ones.', 'Use the scoreboard to repeat wrong questions.')}
<h2>2. Year and number facts</h2>
${T(['Fact', 'Value'], [['New Industrial Policy / LPG', '1991 (24 July)'], ['FERA replaced by FEMA', '1999'], ['India joins WTO', '1995'], ['Water Act / Air Act / EPA', '1974 / 1981 / 1986'], ['NGT Act', '2010'], ['Competition Act (replaced MRTP)', '2002'], ['Companies Act (CSR Section 135)', '2013'], ['Consumer Protection Act (latest)', '2019'], ['CSR spend', '2% of average net profit of last 3 years'], ['Consumer rights', '6']])}
<h2>3. Mnemonic bank</h2>
${T(['Mnemonic', 'Recall'], [['PESTLE', 'Political, Economic, Social, Technological, Legal, Environmental'], ['SWOT', 'Strengths, Weaknesses (internal); Opportunities, Threats (external)'], ['LPG', 'Liberalisation, Privatisation, Globalisation'], ['HIFE-CRT', 'Honesty, Integrity, Fairness, Environment, Community, Rights, Transparency'], ['3P', 'People, Planet, Profit'], ['S-I-C-H-R-E', 'Consumer rights: Safety, Information, Choice, Heard, Redressal, Education']])}
<h2>4. Last-night plan (90 minutes paper)</h2>
${T(['Time', 'What to do'], [['Block 1 - 40 min', 'Unit 1: environment, PESTLE, government, ethics and CSR'], ['Block 2 - 40 min', 'Unit 2: systems and policies, LPG, environment laws, consumer rights'], ['Block 3 - 40 min', 'Unit 3: codes, six pillars, case matching'], ['Block 4 - 20 min', 'Unit 4 quick-revision table'], ['Final', 'Daily 20 + review of wrong questions']])}`;

  const link = `<div class="nextsteps"><span>Next steps</span><a class="nbtn" href="#/business-env/quiz">▶ Practise MCQs</a><a class="nbtn" href="#/business-env/concepts">🧠 Concept cards</a><a class="nbtn" href="#/expected/business-env">🎯 Important questions</a></div>`;
  const pages = [
    { id: 'u1-concept', title: 'Unit 1-A · Business environment: meaning, internal and external factors', html: U1A },
    { id: 'u1-pestle', title: 'Unit 1-B · PESTLE analysis and role of government', html: U1B },
    { id: 'u1-ethics', title: 'Unit 1-C · Ethical values, business ethics and CSR', html: U1C },
    { id: 'u2-systems', title: 'Unit 2-A · Economic systems and economic policies', html: U2A },
    { id: 'u2-lpg', title: 'Unit 2-B · LPG reforms and their impact', html: U2B },
    { id: 'u2-laws', title: 'Unit 2-C · Environment laws, unethical practices, consumer rights', html: U2C },
    { id: 'u3-codes', title: 'Unit 3-A · Business ethics and ethical codes', html: U3A },
    { id: 'u3-pillars', title: 'Unit 3-B · Honesty, integrity, fairness, sustainability, community, rights, transparency', html: U3B },
    { id: 'u4-revision', title: 'Unit 4 · Whole-syllabus quick revision', html: U4 },
    { id: 'exam-master', title: '⭐ Exam Master - MCQ strategy, year facts, mnemonics, last-night plan', html: EM },
  ];
  pages.forEach((p) => { p.html += link; });
  const at = SUB.units.findIndex((u) => u.id === 'concepts');
  if (at >= 0) SUB.units.splice(at, 0, ...pages); else SUB.units.push(...pages);
  SUB.notes = pages;
})();
