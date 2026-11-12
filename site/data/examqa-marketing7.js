// Marketing written Q&A - part 7: DETAILED model answers for Unit II (consumer behaviour, MIS, marketing research). Replace earlier short answers (same marks + question).
// Content from the Unit 2 notes / Marketing research PDFs + standard textbooks (Kotler & Keller; Malhotra) where noted.
(function () {
  const { L, O, E, T, D, F } = window.ExamQA;
  const P = (s) => `<p>${s}</p>`;
  const H = (s) => `<h4>${s}</h4>`;
  const FL = (...a) => `<p><b>Flow:</b> ${a.join(' → ')}</p>`;
  const X = 'Unit II notes + standard textbooks';

  window.ExamQA.add('marketing', [
    { m: 10, u: 'Unit II', t: 'Consumer behaviour', p: 3, q: `Explain consumer behaviour: its importance, types, factors and the buying decision process.`,
      a: H(`1. Meaning`) + P(`<b>Consumer behaviour</b> is the study of how individuals and groups <b>select, buy, use and dispose of</b> goods, services, ideas or experiences to satisfy their needs and wants.`) +
        H(`2. Importance`) + L(`Helps in <b>segmentation</b>, targeting and positioning.`, `Guides product design, pricing, branding and promotion.`, `Improves customer retention and loyalty.`, `Supports demand forecasting and inventory planning; helps study competitors.`) +
        H(`3. Four types of buying behaviour`) + T(['Type', 'Involvement', 'Brand differences', 'Example'], [['Complex buying', 'High', 'Large', 'Car, laptop - buyer learns, then forms attitude, then buys'], ['Dissonance-reducing', 'High', 'Few', 'Mattress, flooring - buys quickly, may feel doubt afterwards'], ['Habitual buying', 'Low', 'Few', 'Toothpaste, salt - buys from habit'], ['Variety-seeking', 'Low', 'Large', 'Soft drinks, snacks - switches for variety']]) +
        H(`4. Factors influencing behaviour`) + T(['Factor', 'Elements', 'Example'], [['Cultural', 'Culture, sub-culture, social class', 'Festival buying'], ['Social', 'Reference groups, family, roles and status', 'Family chooses a TV'], ['Personal', 'Age, occupation, lifestyle, economic situation', 'A student buys earphones'], ['Psychological', 'Motivation, perception, learning, beliefs and attitudes', 'Brand trust'], ['Economic', 'Income, savings, credit', 'EMI purchase']]) +
        P(`Situational factors (store layout, music, mood, time) and digital influences (reviews, influencers) also matter.`) +
        H(`5. Buying decision process`) + FL('Problem recognition', 'Information search', 'Evaluation of alternatives', 'Purchase decision', 'Purchase', 'Post-purchase evaluation') +
        E(`A shopper scrolls Instagram, sees a shoe ad (problem recognition), reads reviews (search), compares brands, adds to cart, but abandons it at checkout because of the delivery charge.`) +
        H(`6. Conclusion`) + P(`Understanding why customers behave as they do lets a firm design the mix that fits them.`),
      ms: `Meaning and importance 2 · four types 3 · factors 2 · decision process 2 · conclusion 1`, src: X },
    { m: 10, u: 'Unit II', t: 'MIS & research', p: 3, q: `Explain the Marketing Information System and marketing research. How are they related?`,
      a: H(`1. Marketing Information System (MIS)`) + P(`Kotler: an MIS is a <b>continuing and interacting structure of people, equipment and procedures to gather, sort, analyse, evaluate and distribute pertinent, timely and accurate information</b> to marketing decision makers.`) +
        T(['Component', 'Meaning', 'Example (coffee chain)'], [['Internal records', 'Data generated inside the firm - orders, sales, costs', 'Loyalty-app purchases'], ['Marketing intelligence', 'Everyday information on competitors and trends', 'Rivals\' new launches'], ['Marketing research', 'Systematic study of specific problems', 'Flavour survey'], ['Data warehousing', 'Central storage of data', 'Cloud sales data'], ['Information output', 'Reports, dashboards', 'Store-manager dashboard']]) +
        FL('Collection', 'Processing', 'Storage', 'Retrieval', 'Dissemination') +
        P(`<b>Importance:</b> better decisions, market understanding, competitive edge, optimum use of resources, performance measurement.`) +
        H(`2. Marketing research`) + P(`The <b>systematic and objective</b> design, collection, analysis and reporting of data relevant to a specific marketing problem.`) +
        FL('Define the problem', 'Research design', 'Data types and sources', 'Data collection forms', 'Sampling', 'Collect data', 'Analyse and interpret', 'Report') +
        P(`Data may be <b>primary / secondary</b>; samples may be <b>probability / non-probability</b>.`) +
        H(`3. Relationship`) + T(['Basis', 'Marketing research', 'MIS'], [['Nature', 'Specific, one-time study of a problem', 'Continuous, ongoing system'], ['Source', 'Mainly external sources', 'Internal and external'], ['Scope', 'One component of MIS', 'Includes research, records, intelligence and analysis'], ['Time', 'Project-based', 'Permanent']]) +
        E(`Foldable-phone launch: the firm commissions a study (research) whose findings are stored and reused in the firm\'s MIS.`) +
        H(`4. Conclusion`) + P(`Research feeds the MIS with fresh external facts; the MIS turns scattered facts into regular decision support.`),
      ms: `MIS 3 · research 3 · relationship table 3 · conclusion 1`, src: X },
    { m: 10, u: 'Unit II', t: 'Research design & sampling', p: 3, q: `Explain research designs, sampling methods and the levels of measurement used in marketing research.`,
      a: H(`1. Research designs`) + T(['Design', 'Purpose', 'Methods', 'Example'], [['Exploratory', 'Clarify the problem, form hypotheses', 'Secondary data, focus groups, case studies', 'Talk to reviewers about foldable phones'], ['Descriptive', 'Describe who, what, when, where, how', 'Surveys, observation', 'Survey of 1,000 phone owners'], ['Causal (experimental)', 'Find cause and effect', 'Lab and field experiments', 'A/B test of two prices']]) +
        H(`2. Sampling`) + P(`A <b>sample</b> is a part of the population chosen to represent it; the list from which it is drawn is the <b>sampling frame</b>.`) +
        T(['Probability sampling', 'Non-probability sampling'], [['Simple random - equal known chance; Systematic - every k-th unit; Stratified - sample each homogeneous stratum; Cluster / area - sample whole clusters', 'Convenience - easy-to-reach units; Judgment - expert choice; Quota - fixed numbers per group; Snowball - respondents refer others']]) +
        L(`Probability: representative; sampling error can be measured.`, `Non-probability: cheap and quick; suits exploratory work; representativeness cannot be measured.`) +
        H(`3. Levels of measurement (NOIR)`) + T(['Level', 'Property', 'Example', 'Statistics'], [['Nominal', 'Labels categories', 'Gender, religion', 'Counts, mode, %'], ['Ordinal', 'Ranks, no size of difference', 'Brand preference rank', 'Median, mode'], ['Interval', 'Equal intervals, arbitrary zero', 'Temperature in °C', 'Mean, SD'], ['Ratio', 'Equal intervals and true zero', 'Sales, income, weight', 'All statistics']]) +
        H(`4. Data analysis (link)`) + P(`Univariate → hypothesis testing (H0 vs H1; Z, t, F, χ²) → bivariate → multivariate; Pareto 80:20.`) +
        H(`5. Conclusion`) + P(`The design, the sample and the scale together decide whether the findings are accurate and useful.`),
      ms: `Designs 3 · sampling 3 · measurement 3 · conclusion 1`, src: X },
    { m: 10, u: 'Unit II', t: 'Data collection', p: 3, q: `Explain data collection in marketing research: sources of data, observation, questionnaire design, sampling and data processing.`,
      a: H(`1. Sources of data`) + T(['Secondary (desk research)', 'Primary (field research)'], [['Internal: sales, finance, marketing, HR data. External: government, published and commercial sources, international agencies. Merits: cheap, quick. Demerits: may not fit, outdated, source bias', 'Observation, surveys / questionnaires, interviews, focus groups, experiments. Merits: specific and current. Demerits: costly, time-consuming']]) +
        P(`Ideal sequence: <b>secondary first, then primary</b> to fill the gaps.`) +
        H(`2. Observation`) + L(`Structured / unstructured; disguised / undisguised; direct / indirect; human / mechanical (e.g. footfall counters, CCTV).`, `Accurate on <b>what people do</b>, but not <b>why</b>.`) +
        H(`3. Questionnaire design`) + FL('Information required', 'Target respondents', 'Method (personal, mail, telephone)', 'Question content', 'Closed / open questions', 'Order and format', 'Closing questions', 'Appearance', 'Pilot test and revise') +
        H(`4. Sampling`) + P(`Probability (simple random, systematic, stratified, cluster) vs non-probability (convenience, judgment, quota, snowball). Sample size depends on variability, desired confidence and precision.`) +
        H(`5. Data processing`) + FL('Editing', 'Coding (codebook)', 'Tabulation (simple and cross-tab)') +
        H(`6. Conclusion`) + P(`Good data collection is the base of reliable research: the right source, a tested instrument, a representative sample and careful processing.`),
      ms: `Sources 2 · observation 1.5 · questionnaire 2 · sampling 1.5 · processing 2 · conclusion 1`, src: X },
    { m: 10, u: 'Unit II', t: 'Data analysis', p: 3, q: `Explain the stages of data analysis in marketing research: editing and coding, tabulation, univariate, bivariate and multivariate analysis, hypothesis testing and Pareto analysis.`,
      a: H(`1. Data preparation`) + T(['Step', 'What is done'], [['Editing', 'Check completeness, consistency and legibility of forms'], ['Coding', 'Assign numbers or symbols; keep a codebook'], ['Tabulation', 'Arrange data in simple tables and cross-tabulations (most common method)']]) +
        H(`2. Univariate analysis`) + P(`One variable at a time: central tendency (mean, median, mode) and dispersion (range, SD). Mean of 5, 10, 22, 25, 17 = 79 ÷ 5 = <b>15.8</b>. Use the median for skewed data.`) +
        H(`3. Hypothesis testing`) + L(`State <b>H0</b> (no effect) and <b>H1</b> (effect).`, `Choose the test statistic; set the decision rule (region of acceptance); accept or reject H0.`, `<b>Z</b> (n ≥ 30), <b>t</b> (n &lt; 30), <b>F</b> / ANOVA (2+ means), <b>χ²</b> (association in cross-tabs).`) +
        H(`4. Bivariate analysis`) + P(`Association between a dependent and an independent variable: Lambda and Chi-square (χ² = Σ(O − E)² ÷ E) for nominal data; correlation for ordinal / interval data.`) +
        H(`5. Multivariate analysis`) + T(['Type', 'Techniques'], [['Variance', 'ANOVA, ANCOVA, MANOVA'], ['Dependence', 'Regression, discriminant, conjoint analysis'], ['Interdependence', 'Factor, cluster, multi-dimensional scaling']]) +
        H(`6. Pareto analysis`) + P(`The <b>80:20 rule</b> - the "vital few and trivial many": about 20% of causes produce 80% of results (20% of customers give 80% of sales); used in quality control and ABC inventory.`) +
        H(`7. Conclusion`) + P(`Analysis moves from cleaning and describing data to testing relationships and finally to decisions.`),
      ms: `Preparation 2 · univariate 1 · hypothesis 2 · bivariate 1.5 · multivariate 1.5 · Pareto 1 · conclusion 1`, src: X },
    { m: 6, u: 'Unit II', t: 'Consumer behaviour', p: 3, q: `Explain the consumer buying decision process.`,
      a: FL('Problem recognition', 'Information search', 'Evaluation of alternatives', 'Purchase decision', 'Purchase', 'Post-purchase evaluation') +
        T(['Stage', 'Explanation', 'Example'], [['Problem recognition', 'Gap between desired and actual state', 'Cracked phone screen'], ['Information search', 'Internal (memory) and external (friends, ads, reviews); leads to the evoked set', 'Reads reviews'], ['Evaluation', 'Ranks alternatives by criteria such as price, features, brand', 'Compares 3 phones'], ['Purchase decision', 'Chooses product, brand, store and method of payment', 'Selects one model'], ['Purchase', 'Actual buying; may differ from the decision (stock-out, offers)', 'Buys online'], ['Post-purchase evaluation', 'Satisfaction or cognitive dissonance', 'Doubt after buying']]) +
        P(`Not every purchase includes all six stages: habitual buying skips search and evaluation. A satisfied buyer repeats and recommends; a dissatisfied one complains or switches.`),
      ms: `Flow 2 · stage explanations 3 · remark 1`, src: X },
    { m: 6, u: 'Unit II', t: 'Consumer behaviour', p: 3, q: `Define consumer behaviour and explain the factors that influence it.`,
      a: P(`<b>Consumer behaviour</b> is how people select, buy, use and dispose of products to satisfy their needs.`) +
        T(['Factor', 'Elements', 'Example'], [['Social', 'Reference groups, family, roles and status', 'Family chooses a TV'], ['Cultural', 'Culture, sub-culture, social class', 'Festival buying'], ['Economic', 'Income, savings, credit', 'EMI purchase'], ['Personal', 'Age, occupation, lifestyle', 'Student buys earphones'], ['Psychological', 'Motivation, perception, learning, attitude', 'Brand trust']]) +
        P(`<b>Situational factors</b> - store layout, music, mood, time pressure - are temporary influences. Marketers use these factors to segment markets and fine-tune the mix.`),
      ms: `Definition 1 · five factors 4 · situational and conclusion 1`, src: X },
    { m: 6, u: 'Unit II', t: 'MIS', p: 3, q: `What is an MIS? Explain its importance and process.`,
      a: P(`An <b>MIS</b> collects, organises and uses marketing information. Kotler: a continuing structure of people, equipment and procedures to gather, sort, analyse, evaluate and distribute pertinent, timely and accurate information to decision makers.`) +
        H(`Importance`) + L(`Better decision making; understanding of the market.`, `Competitive edge; optimum use of resources.`, `Performance measurement; lower risk and cost; customer satisfaction; strategic planning.`) +
        H(`Process (cyclical)`) + FL('Collection', 'Processing', 'Storage', 'Retrieval', 'Dissemination') +
        P(`Data is collected from internal records, intelligence and research, processed into information, stored in a database, retrieved when needed and delivered to managers as reports.`),
      ms: `Definition 2 · importance 2 · process 2`, src: X },
    { m: 6, u: 'Unit II', t: 'Marketing research', p: 3, q: `Define marketing research and explain its scope and types.`,
      a: P(`<b>Marketing research</b> is the systematic and objective study of marketing problems - collecting, analysing and reporting data to support decisions.`) +
        H(`Scope`) + T(['Area', 'Example'], [['Product management', 'Test marketing, concept testing'], ['Sales analysis', 'Market potential, market share, demand forecasts'], ['Corporate research', 'Company image'], ['Advertising research', 'Recall, readership'], ['Syndicated research', 'Shared panel data']]) +
        H(`Types`) + L(`Primary vs secondary; qualitative (focus groups) vs quantitative (surveys).`, `Exploratory vs conclusive (descriptive, causal); observational and experimental.`) +
        P(`<b>Note:</b> market research studies an industry; marketing research solves a specific marketing problem.`),
      ms: `Definition 1 · scope 2.5 · types 2 · note 0.5`, src: X },
    { m: 6, u: 'Unit II', t: 'Marketing research', p: 3, q: `Explain the sources of data (primary and secondary) with their merits and demerits.`,
      a: H(`Secondary data (desk research)`) + L(`<b>Internal:</b> sales, finance, marketing, HR and storage records.`, `<b>External:</b> government bodies, published and commercial sources, international agencies.`) +
        P(`<b>Merits:</b> economical, quick, sometimes more accurate (census). <b>Demerits:</b> may not fit the problem, outdated, definitions differ, source bias.`) +
        H(`Primary data`) + L(`Observation (what people do), questionnaire / survey (personal, telephone, mail), interviews, focus groups, experiments.`) +
        P(`<b>Merits:</b> specific and current. <b>Demerits:</b> costly and time-consuming.`) +
        T(['Basis', 'Secondary', 'Primary'], [['Cost', 'Low', 'High'], ['Time', 'Quick', 'Slow'], ['Fit', 'Often partial', 'Exact']]) +
        P(`<b>Ideal sequence:</b> secondary first, then primary to fill the gaps.`),
      ms: `Secondary 2.5 · primary 2.5 · sequence 1`, src: X },
    { m: 6, u: 'Unit II', t: 'Analysis', p: 3, q: `Explain hypothesis testing and the tests used in marketing research.`,
      a: P(`A <b>hypothesis</b> is an assumption about a population parameter, tested with sample data. <b>H0</b> (null) says there is no effect or difference; <b>H1</b> (alternative) says there is.`) +
        H(`Steps`) + FL('Formulate H0 and H1', 'Identify the test statistic', 'Fix the decision rule (region of acceptance)', 'Accept or reject H0') +
        T(['Test', 'Use'], [['Z-test', 'Large sample (n ≥ 30), known variance'], ['t-test', 'Small sample (n &lt; 30)'], ['F-test / ANOVA', 'Compare means of two or more groups'], ['χ² (Chi-square)', 'Significance of association in cross-tabs']]) +
        E(`H0: new ad does not change average sales. A t-test on 20 stores decides whether to reject H0.`),
      ms: `Concept 1.5 · steps 1.5 · tests 2 · example 1`, src: X },
    { m: 6, u: 'Unit II', t: 'Marketing research', p: 3, q: `Explain the research report: contents and how to present it (oral vs written).`,
      a: H(`Contents`) + L(`Authorisation letter, table of contents, list of illustrations.`, `Executive summary, research objectives, methodology.`, `Results, limitations, conclusions and recommendations.`, `Appendices (questionnaires, tables).`) +
        H(`Oral vs written`) + T(['Basis', 'Oral', 'Written'], [['Visuals', 'Few; audience cannot control the pace', 'Charts and diagrams; can be re-read'], ['Precision', 'Less precise', 'More precise and scrutinised'], ['Interaction', 'Questions and discussion', 'No immediate discussion']]) +
        P(`<b>Oral tips:</b> know the audience, rehearse, use simple language and use visual aids sparingly.`),
      ms: `Contents 2.5 · oral vs written 2.5 · tips 1`, src: X },
    { m: 6, u: 'Unit II', t: 'Marketing research', p: 3, q: `Distinguish between qualitative and quantitative research with examples.`,
      a: T(['Basis', 'Qualitative', 'Quantitative'], [['Purpose', 'Explore attitudes and motives - the "why"', 'Measure and test hypotheses - the "how many"'], ['Data', 'Non-numeric', 'Numeric'], ['Sample', 'Few respondents', 'Large, random sample'], ['Methods', 'Focus groups, in-depth interviews, projective techniques', 'Surveys, questionnaires, experiments'], ['Analysis', 'Thematic / content analysis', 'Statistical techniques'], ['Generalisable?', 'No', 'Yes, to the population']]) +
        E(`Focus group on why teens prefer a drink (qualitative); national survey of 2,000 buyers on preference share (quantitative).`) +
        P(`Often both are used: secondary research → focus group → national survey.`),
      ms: `Any 5 differences 4 · examples 1 · note 1`, src: X },
    { m: 6, u: 'Unit II', t: 'Measurement', p: 3, q: `Explain the four levels of measurement with examples and suitable statistics.`,
      a: T(['Level', 'What it does', 'Example', 'Statistics'], [['Nominal', 'Labels categories (haves / have-nots)', 'Gender, religion', 'Counts, mode, %'], ['Ordinal', 'Ranks objects; size of difference unknown', 'Brand preference rank', 'Median, mode, %'], ['Interval', 'Equal intervals, arbitrary zero', 'Temperature in °C', 'Mean, SD [extra]'], ['Ratio', 'Equal intervals and a true zero', 'Sales, income, weight', 'All statistics [extra]']]) +
        P(`Each higher level has all the properties of the levels below. Measurement assigns numerals to characteristics of objects, not to the objects themselves. Memory aid: <b>NOIR</b>.`),
      ms: `Four levels 4 · remark 2`, src: X },
    { m: 5, u: 'Unit II', t: 'Marketing research', p: 3, q: `Explain the steps in the marketing research process.`,
      a: FL('Define the problem', 'Research design', 'Data sources', 'Data collection forms', 'Sampling', 'Collect data', 'Analyse', 'Report') +
        T(['Step', 'Explanation'], [['Define the research problem', 'Turn the decision problem into a research problem - the most important step'], ['Determine research design', 'Exploratory, descriptive or causal'], ['Identify data types and sources', 'Primary or secondary'], ['Design data collection forms', 'Observation sheet or tested questionnaire'], ['Determine sampling design and size', 'Probability or non-probability'], ['Collect the data', 'Supervised fieldwork'], ['Analyse and interpret', 'Edit, code, tabulate; hypothesis tests'], ['Prepare the report', 'Objectives, methodology, results, recommendations']]) +
        E(`Should a smartphone brand launch a foldable phone? Research problem: will target buyers accept it at the planned price?`),
      ms: `Eight steps 4 · example 1`, src: X },
    { m: 5, u: 'Unit II', t: 'MIS', p: 3, q: `Explain the components of a Marketing Information System.`,
      a: T(['Component', 'Meaning', 'Example (coffee chain)'], [['Internal records', 'Data generated inside the firm - orders, sales, costs, inventory', 'Loyalty-app purchases'], ['Marketing intelligence', 'External information on competitors and trends', 'Rivals\' new launches'], ['Marketing research', 'Systematic study of specific problems', 'Flavour survey'], ['Data warehousing', 'Central storage of data for analysis', 'Cloud sales data'], ['Information output', 'Reports and dashboards for managers', 'Store-manager dashboard']]) +
        P(`Together they gather, store, analyse and deliver information for timely decisions.`),
      ms: `Five components 1 mark each`, src: X },
    { m: 5, u: 'Unit II', t: 'Marketing research', p: 3, q: `Distinguish between exploratory, descriptive and causal research.`,
      a: T(['Basis', 'Exploratory', 'Descriptive', 'Causal'], [['Purpose', 'Clarify the problem, form hypotheses', 'Describe who, what, when, where, how', 'Find cause and effect'], ['Nature', 'Flexible, informal', 'Rigid, structured', 'Controlled experiments'], ['Methods', 'Literature, focus groups, case studies', 'Surveys, observation', 'Lab and field experiments, simulation'], ['Data', 'Mostly secondary', 'Primary and secondary', 'Primary'], ['Example', 'Talk to reviewers about foldable phones', 'Survey 1,000 owners', 'A/B test of two prices']]),
      ms: `Five bases 1 mark each`, src: X },
    { m: 5, u: 'Unit II', t: 'Sampling', p: 3, q: `Explain the probability sampling methods.`,
      a: T(['Method', 'How it works', 'Example'], [['Simple random', 'Every unit has a known, equal chance (lottery / random numbers)', 'Draw 100 roll numbers from 1,000'], ['Systematic', 'Interval = list size ÷ sample size; random start', 'Every 10th customer'], ['Stratified', 'Divide into homogeneous strata; sample each (proportionate / disproportionate)', 'Sample each income group'], ['Cluster / area', 'Mutually exclusive clusters, each representative; area sampling uses geographic clusters (one-step / two-step)', 'Select 5 city wards']]) +
        P(`<b>Advantage:</b> representative; sampling error can be measured.`),
      ms: `Four methods 1 each · advantage 1`, src: X },
    { m: 5, u: 'Unit II', t: 'Sampling', p: 3, q: `Explain the non-probability sampling methods.`,
      a: T(['Method', 'How it works'], [['Convenience', 'Units chosen at the researcher\'s convenience; early stages'], ['Judgment (purposive)', 'An expert selects the most suitable participants'], ['Quota', 'Pre-set quotas of demographic or behavioural groups are filled'], ['Snowball (referral)', 'Respondents refer others; for rare populations']]) +
        P(`Used for exploratory work and pre-testing; cheap and quick, but representativeness cannot be measured.`),
      ms: `Four methods 4 · use 1`, src: X },
    { m: 5, u: 'Unit II', t: 'Questionnaire', p: 3, q: `Explain the steps in developing a questionnaire.`,
      a: FL('Information required', 'Target respondents', 'Method', 'Question content', 'Question type', 'Order and format', 'Closing', 'Appearance', 'Pilot test') +
        L(`Decide the <b>information required</b> and the <b>target respondents</b>.`, `Select the <b>method</b> to reach them (personal, group, mail, telephone).`, `Decide the <b>content</b> and <b>type</b> of questions - closed or open.`, `Put questions in a meaningful <b>order</b>, with easy ones first; add closing questions.`, `Check <b>physical appearance</b>; <b>pilot test</b> on a few respondents and revise.`),
      ms: `Steps 4 · explanation 1`, src: X },
    { m: 5, u: 'Unit II', t: 'Marketing research', p: 3, q: `Explain the importance of marketing research.`,
      a: L(`<b>Understands</b> customer needs and preferences.`, `<b>Identifies</b> market trends and shifts in behaviour.`, `<b>Assesses</b> the competitive landscape - rivals\' strengths and weaknesses.`, `<b>Reduces risk</b> by testing feasibility before big decisions.`, `<b>Optimises</b> marketing strategy - right audience, message and channel.`) +
        P(`Research reduces uncertainty and raises the probability and size of success; it is a tool, not a guarantee.`),
      ms: `Five points 1 each`, src: X },
  ]);
})();
