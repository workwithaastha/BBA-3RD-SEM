// Marketing written Q&A - part 8: DETAILED model answers for Unit III (segmentation, targeting, positioning, value proposition, Indian brand cases).
// Replace earlier short answers (same marks + question). Content from the Unit III PDFs (segmentation, targeting, positioning, India, value proposition, assignment) + standard textbooks.
(function () {
  const { L, O, E, T, D, F } = window.ExamQA;
  const P = (s) => `<p>${s}</p>`;
  const H = (s) => `<h4>${s}</h4>`;
  const FL = (...a) => `<p><b>Flow:</b> ${a.join(' → ')}</p>`;
  const A3 = 'Unit III assignment (AI-based)';

  window.ExamQA.add('marketing', [
    { m: 10, u: 'Unit III', t: 'STP', p: 3, q: `Explain the STP process: segmentation (bases and benefits), targeting (strategies) and positioning (bases and repositioning).`,
      a: H(`1. Introduction`) + P(`Modern marketing is <b>target marketing</b>, done in three steps - <b>Segmentation, Targeting, Positioning (STP)</b>. The firm divides the market, picks the segments it can serve best and then builds a clear image in the minds of those customers.`) +
        FL('Segmentation (divide)', 'Targeting (choose)', 'Positioning (position in the mind)') +
        H(`2. Segmentation`) + P(`Dividing a heterogeneous market into <b>homogeneous groups</b> of buyers with similar needs (Kotler).`) +
        T(['Base', 'Question', 'Variables'], [['Geographic', 'Where?', 'Region, climate, urban / rural, population density'], ['Demographic', 'Who?', 'Age, gender, income, occupation, family size, education'], ['Psychographic', 'Why / what kind?', 'Lifestyle, personality, values, attitude'], ['Behavioural', 'How do they buy?', 'Benefits sought, usage rate, loyalty, occasion']]) +
        P(`<b>Benefits:</b> right choice of target, a mix matched to customer expectations, efficient use of effort, and small firms can compete with large ones.`) +
        H(`3. Targeting`) + T(['Strategy', 'Meaning', 'Example'], [['Undifferentiated', 'One offer for the whole market', 'Salt'], ['Differentiated', 'Different offers for several segments', 'Titan, Fastrack, Sonata'], ['Concentrated (niche)', 'Large share of one small segment', 'Rolls-Royce'], ['Micromarketing', 'Local or individual level', 'Netflix, "Share a Coke"']]) +
        P(`<b>Criteria for effective targeting:</b> measurable, accessible, substantial, differentiable, actionable.`) +
        H(`4. Positioning`) + P(`Owning a distinct place in the customer\'s mind relative to competitors. <b>Bases:</b> attribute (Volvo - safety), benefit (Sensodyne), use / occasion (Gatorade), user (Johnson\'s), competitor (Avis), category (Red Bull), quality / price (Zara).`) +
        P(`<b>Repositioning</b> - changing an existing position by <b>image</b>, <b>product</b>, <b>intangible</b> (new user) or <b>tangible</b> change.`) +
        E(`Maruti NEXA (premium retail), Cadbury "Kuch Meetha Ho Jaye", Fevicol (strength).`) +
        H(`5. Conclusion`) + P(`STP turns mass marketing into focused marketing; the 4Ps are then designed to fit the chosen target and position.`),
      ms: `Introduction 1 · segmentation 3 · targeting 2.5 · positioning 2.5 · conclusion 1`, src: A3 },
    { m: 10, u: 'Unit III', t: 'Positioning & repositioning', p: 3, q: `Explain positioning and repositioning: meaning, bases, positioning statement, perceptual mapping, repositioning triggers and approaches with cases.`,
      a: H(`1. Meaning`) + P(`<b>Positioning</b> is occupying a distinct place in the customer\'s mind relative to competitors (Ries and Trout: "what you do to the mind of the prospect"). It is about <b>perception</b>, it is <b>relative</b> to competitors and it is a <b>deliberate strategic choice</b>.`) +
        H(`2. Seven bases`) + T(['Base', 'Example'], [['Attribute', 'Volvo - safety'], ['Benefit', 'Sensodyne - sensitivity relief'], ['Use / occasion', 'Gatorade - after sports'], ['User', 'Johnson\'s - babies'], ['Competitor', 'Avis - "we try harder"'], ['Category', 'Red Bull - energy drink'], ['Quality / price', 'Zara - fast fashion at fair price']]) +
        H(`3. Positioning statement`) + F(`For [target segment] who [need], [Brand] is a [category] that [key benefit], unlike [competitor], because [reason to believe].`) +
        H(`4. Perceptual map`) + D(`Axes: Price (low-high) × Quality (low-high). Plot brands; empty spaces = "white space" for a new position.`) +
        H(`5. Repositioning - triggers and approaches`) + P(`<b>Triggers:</b> falling sales, shifting consumer values, new competitors, an image out of sync with the market.`) +
        T(['Approach', 'Product', 'Audience', 'Case'], [['Image', 'Same', 'New perception', 'Old Spice (2010) - new comic voice'], ['Product', 'Improved', 'Same', 'Domino\'s (2009) - new recipe and honesty'], ['Intangible', 'Same', 'New segment', 'Cadbury Dairy Milk - "Kuch Meetha Ho Jaye"'], ['Tangible', 'New', 'New', 'Maruti NEXA premium retail (2015)']]) +
        P(`Other Indian cases: Fevicol, Amul, Titan / Fastrack, Lifebuoy, Surf Excel "Daag Achhe Hain".`) +
        H(`6. Conclusion`) + P(`Position first, reposition only with evidence - the product must support the new promise.`),
      ms: `Meaning 1.5 · bases 2 · statement and map 2 · triggers and approaches 3 · conclusion 1.5`, src: A3 + ' Q3' },
    { m: 10, u: 'Unit III', t: 'Value proposition', p: 3, q: `What is a value proposition? Explain its types, how to write one, the keys to a good one and the difference between brand and product value propositions.`,
      a: H(`1. Meaning`) + P(`A <b>value proposition</b> is a statement explaining <b>what benefit</b> a product or service gives, <b>what problem it solves</b> and <b>why customers should choose it over competitors</b>.`) +
        F(`Problem → Solution → Benefit → Why us`) +
        H(`2. Seven types`) + T(['Type', 'Meaning', 'Example'], [['Low pricing', 'Cheapest or best price', 'Jio - free calls and cheap data'], ['Quality', 'Reliable, high-grade product', 'Tata - a name families trust'], ['Customisation', 'Made to the buyer\'s own choice', 'Nike By You'], ['Convenience', 'Saves time and effort', 'Swiggy'], ['Uniqueness', 'Nothing else like it', 'Apple "Think Different"'], ['Innovation', 'New technology or idea', 'Tesla'], ['Customer results', 'Promises a measurable outcome', 'Uber, Slack, Duolingo']]) +
        H(`3. Steps to write one`) + FL('Know the ideal customer (ICP)', 'Find the pain point', 'Show how you solve it', 'Craft a clear message', 'Test it (A/B)', 'Refine and align across touchpoints') +
        H(`4. Keys to success`) + L(`Focus on customer needs.`, `Keep it simple and clear.`, `Show your edge over competitors.`, `Test and refine.`, `Get personal - speak to one customer type.`) +
        H(`5. Brand vs product value proposition`) + T(['Brand VP', 'Product VP'], [['Why the company exists; consistent across touchpoints', 'Why one item is worth buying; tactical'], ['Nike: inspire every athlete', 'Running shoe: light and soft for long runs']]) +
        E(`For hungry students who hate queues, our Pre-Order Canteen serves hot food in 5 minutes.`) +
        H(`6. Conclusion`) + P(`A strong value proposition is the base of positioning: it is the promise that the whole marketing mix must keep.`),
      ms: `Meaning 1.5 · types 3 · steps 2 · keys 1 · brand vs product 1.5 · example 1`, src: A3 + ' Q4' },
    { m: 10, u: 'Unit III', t: 'Indian brand cases', p: 3, q: `Discuss positioning and repositioning strategies of Indian brands with at least six examples.`,
      a: H(`1. Introduction`) + P(`<b>Positioning is a choice; repositioning is survival.</b> Brands change their story when the market, the customer or competition moves on.`) +
        H(`2. Positioning cases`) + T(['Brand', 'Idea owned', 'Why it worked'], [['Fevicol', 'Unbreakable strength - "Fevicol ka jod hai, tootega nahi"', 'One word owned for decades'], ['Amul', '"The Taste of India"', 'Co-operative pride + topical Amul Girl ads'], ['Parle-G', '"G for Genius"', 'Affordable nutrition for the masses'], ['Raymond', '"The Complete Man"', 'Sold identity, not cloth'], ['Nirma', '"Sabki Pasand"', 'Price-led value when rivals went premium'], ['OYO', 'Trusted budget stay', 'Standardised a fragmented category']]) +
        H(`3. Repositioning cases`) + T(['Brand', 'Before', 'After'], [['Maruti Suzuki', 'Mass-market car brand', 'NEXA premium experience (2015)'], ['Titan', 'Time-telling device', 'Fashion accessory; Fastrack for youth'], ['Cadbury Dairy Milk', 'Children\'s treat', '"Kuch Meetha Ho Jaye" for all ages (1994)'], ['Lifebuoy', 'Carbolic soap', 'Health and hygiene mission'], ['Surf Excel', 'Functional stain removal', '"Daag Achhe Hain" - values (2010)'], ['Airtel', 'Network features', 'Emotional youth storytelling (2010)']]) +
        H(`4. Lessons`) + L(`Own <b>one</b> clear idea.`, `Reposition only with evidence; the product must support the new promise.`, `Every case began with a <b>customer insight</b>.`) +
        H(`5. Conclusion`) + P(`The strongest Indian brands either own a single idea (Fevicol, Amul) or reinvent it when the market changes (Titan, NEXA, Cadbury).`),
      ms: `Introduction 1 · positioning cases 3 · repositioning cases 3 · lessons 2 · conclusion 1`, src: A3 + ' Q3' },
    { m: 6, u: 'Unit III', t: 'Targeting', p: 3, q: `What is market targeting? Explain the targeting strategies with examples.`,
      a: P(`<b>Targeting</b> means evaluating market segments and selecting one or more of them to enter. It is the bridge between segmentation and positioning.`) +
        T(['Strategy', 'Meaning', 'Example', 'Suitable when'], [['Undifferentiated (mass)', 'One offer for the whole market', 'Salt, Coca-Cola classic', 'Needs are similar'], ['Differentiated', 'Separate offers for several segments', 'Titan / Fastrack / Sonata; Amul', 'Large firm with resources'], ['Concentrated (niche)', 'Large share of one small segment', 'Rolls-Royce, Rolex', 'Limited resources or luxury'], ['Micromarketing', 'Local or individual level', 'Netflix, "Share a Coke"', 'Data and technology available']]) +
        P(`<b>Criteria:</b> measurable, accessible, substantial, differentiable, actionable.`),
      ms: `Meaning 1 · four strategies 4 · criteria 1`, src: A3 + ' Q2' },
    { m: 6, u: 'Unit III', t: 'Positioning', p: 3, q: `What is positioning? Explain its bases and the approaches to repositioning with Indian examples.`,
      a: P(`<b>Positioning</b> = owning a distinct place in the customer\'s mind relative to competitors. Ries and Trout: "what you do to the mind of the prospect."`) +
        H(`Bases`) + T(['Base', 'Example'], [['Attribute', 'Volvo - safety'], ['Benefit', 'Sensodyne'], ['Use / occasion', 'Gatorade'], ['User', 'Johnson\'s'], ['Competitor', 'Avis'], ['Category', 'Red Bull'], ['Quality / price', 'Zara']]) +
        H(`Repositioning approaches`) + T(['Approach', 'Example'], [['Image', 'Old Spice (2010)'], ['Product', 'Domino\'s recipe change'], ['Intangible (new user base)', 'Cadbury Dairy Milk "Kuch Meetha Ho Jaye"'], ['Tangible', 'Maruti NEXA premium retail (2015)']]) +
        P(`Other Indian cases: Fevicol, Amul, Titan / Fastrack, Lifebuoy, Surf Excel "Daag Achhe Hain".`),
      ms: `Meaning 1 · bases 2 · approaches 2 · Indian cases 1`, src: A3 + ' Q3' },
    { m: 6, u: 'Unit III', t: 'Value proposition', p: 3, q: `What is a value proposition? Explain its types and how to write one.`,
      a: P(`A <b>value proposition</b> states the benefit given, the problem solved and why customers should choose you.`) +
        T(['Type', 'Example'], [['Low pricing', 'Jio'], ['Quality', 'Tata'], ['Customisation', 'Nike By You'], ['Convenience', 'Swiggy'], ['Uniqueness', 'Apple'], ['Innovation', 'Tesla'], ['Customer results', 'Uber, Slack, Duolingo']]) +
        H(`How to write`) + FL('Know the ideal customer', 'Find the pain point', 'Show how you solve it', 'Craft a clear message', 'Test it (A/B)', 'Refine and align across touchpoints'),
      ms: `Meaning 1.5 · types 2.5 · steps 2`, src: A3 + ' Q4' },
    { m: 6, u: 'Unit III', t: 'Indian brands', p: 3, q: `Explain with Indian examples how brands (a) position and (b) reposition themselves.`,
      a: H(`(a) Positioning - owning one idea`) + T(['Brand', 'Positioning'], [['Fevicol', 'Unbreakable strength - "Fevicol ka jod hai, tootega nahi"'], ['Amul', '"The Taste of India"; everyday dairy with topical ads'], ['Parle-G', '"G for Genius" - affordable nutrition for all'], ['Raymond', '"The Complete Man" - fabric as identity']]) +
        H(`(b) Repositioning - changing the story`) + T(['Brand', 'From → To'], [['Maruti Suzuki', 'Mass-market car → premium NEXA experience (2015)'], ['Titan', 'Time-telling device → fashion accessory; Fastrack for youth'], ['Cadbury Dairy Milk', 'Children\'s treat → "Kuch Meetha Ho Jaye" for all ages'], ['Lifebuoy', 'Carbolic soap → health and hygiene mission'], ['Surf Excel', '"Removes stains" → "Daag Achhe Hain" (values)'], ['Airtel', 'Network features → emotional "Har Ek Friend Zaroori Hai"']]),
      ms: `Positioning 3 · repositioning 3`, src: A3 + ' Q3' },
    { m: 5, u: 'Unit III', t: 'Segmentation', p: 3, q: `Explain the benefits of market segmentation.`,
      a: L(`<b>Distinguishes</b> one customer group from another.`, `<b>Helps choose</b> the right target market.`, `<b>Matches the marketing mix</b> to customer expectations precisely.`, `<b>Small firms</b> with limited resources can compete efficiently in chosen segments.`, `<b>Efficient effort</b> - divide and conquer; avoids wasted promotion.`, `<b>Better understanding</b> of customer needs and preferences.`) +
        P(`<b>Link:</b> STP = Segmentation → Targeting → Positioning.`),
      ms: `Any 5 points 1 each`, src: A3 + ' Q1' },
    { m: 5, u: 'Unit III', t: 'Targeting', p: 3, q: `Explain the criteria for effective targeting.`,
      a: T(['Criterion', 'Meaning', 'Check'], [['Measurable', 'Size, purchasing power and profile can be estimated', 'Do we have data?'], ['Accessible', 'Can be reached and served through distribution and promotion', 'Can we reach them?'], ['Substantial', 'Large and profitable enough for a dedicated programme', 'Is it worth the cost?'], ['Differentiable', 'Responds differently to different marketing mixes', 'Does it behave differently?'], ['Actionable', 'Effective programmes can be designed and executed', 'Can we do it?']]) +
        E(`Amul targets household, premium and youth segments with separate offers.`),
      ms: `Five criteria 4 · example 1`, src: A3 + ' Q2' },
    { m: 5, u: 'Unit III', t: 'Positioning', p: 3, q: `Distinguish between positioning and repositioning.`,
      a: T(['Basis', 'Positioning', 'Repositioning'], [['When used', 'New brand or product entering a market', 'Existing brand facing decline or market shift'], ['Goal', 'Establish a clear, distinct place in the mind', 'Change or refresh the existing perception'], ['Starting point', 'Blank slate', 'Must overcome an existing, often outdated, perception'], ['Risk', 'Lower', 'Higher - old associations resurface'], ['Product change', 'Not required', 'May or may not be required'], ['Example', 'FedEx (1970s)', 'Old Spice (2010)']]),
      ms: `Any 5 bases 1 mark each`, src: A3 + ' Q3' },
    { m: 6, u: 'Unit III', t: 'Segmentation', p: 3, q: `Explain the bases of market segmentation with examples and state its benefits.`,
      a: T(['Base', 'Variables', 'Example'], [['Geographic', 'Climate, region, country, urban / rural', 'Metro vs rural pricing'], ['Demographic', 'Age, gender, income, occupation, family size, education', 'HCL: below ₹10,000 income group → 14.5% share'], ['Psychographic', 'Lifestyle, personality, values, attitude', 'Titan, Cafe Coffee Day'], ['Behavioural', 'Benefits sought, usage rate, loyalty, occasion', 'Johnson\'s; Cadbury for occasions']]) +
        H(`Benefits`) + L(`Distinguishes one customer group from another.`, `Facilitates choice of target market and efficient effort.`, `Marketing mix matches customer expectations.`, `Small firms with limited resources compete better.`),
      ms: `Four bases 3 · benefits 3`, src: A3 + ' Q1' },
  ]);
})();
