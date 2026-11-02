// Which original files belong to which notes page (key = unit id) or quiz unit (key = 'q:<unit label>').
// Used for the "Original files for this page" strip and the "Used for" chips in the source-file viewer.
// Names must match the files in the subject folders (checked by tools/qa.js).
(function () {
  const F = {
    // Finance
    f_unit1: 'Business Finance Unit 1 Notes.pdf', f_notes: 'Business_Finance_Notes.pdf', f_formulae: 'Business_Finance_Formulae_Sheet.pdf',
    f_coc: 'Cost_of_Capital_Financial_Leverage_Formula_Sheet 123.pdf', f_a1: 'Business_Finance_Assignment1_TVM.pdf', f_a2: 'Business Finance Assignment 2.pdf',
    f_opt: 'BUSINESS FINANCE OPT PAPER 123.pdf', f_lev: 'Operating_and_Financial_Leverage_Questions by PKS.pdf',
    // Marketing
    m_unit1: 'MM UNIT-1.pdf', m_mtp: 'MTP UNIT1.pdf', m_orient: 'Marketing_Orientations.pdf', m_green: 'Green_Marketing.pdf',
    m_digital: 'Digital Marketing - Types, Channels & Examples.pdf', m_ai: 'Advanced AI Integrated Marketing Assignment.pdf',
    m_u2: 'unit-2 notes 2026.pdf', m_u2b: 'unit-2 notes 2026 (1).pdf', m_cb: 'Consumer_Behaviour.pdf', m_factors: 'factors of consumer behaviour.pdf',
    m_mis: 'Marketing Information System.pdf', m_misb: 'Marketing Information System (1).pdf', m_misp: 'MIS_Presentation.pdf',
    m_mrp: 'Marketing Research Process 1.pdf', m_tools: 'TOOLS OF MARKETING RESEARCH.pdf', m_book: 'marketing esearch.pdf',
    m_seg: 'SEGMENTATION.pdf', m_target: 'Market_Targeting.pdf', m_pos: 'Positioning_and_Repositioning.pdf', m_india: 'Indian_Brands_Positioning_Repositioning (1).pdf',
    m_vp: 'Value_Proposition.pdf', m_vp2: 'value proposition.pdf', m_a3: 'Marketing_Management_Unit3_Assignment.pdf',
    // Business Environment
    b1: 'UNIT 1 MCQ (4).pdf', b2: 'UNIT 2 MCQ (1).pdf', b3: 'UNIT 3 MCQ (5).pdf', b3s: 'UNIT 3 BE.pdf', b4: 'UNIT 4 MCQ (2).pdf',
    // HRM
    h_iq: 'Important Questions.pdf', h_pa: 'Unit 3 - Performance_Appraisal.pdf', h_pab: 'Unit 3 - Performance_Appraisal (1).pdf', h_u4: 'Notes of Unit - 4.pdf',
    // Office Management
    o_u1: 'OM Unit 1.pdf', o_ppt: 'UNIT 1 PPT (1).pdf', o_auto: 'Office_Automation_Secretarial_Practices.pdf', o_a2: 'ASSIGNMENT-2 office.pdf',
    o_forms: 'Office_Forms_Record_Management.pdf', o_formsd: 'Office_Forms_and_Record_Management_Detailed_Notes.pdf', o_u4: 'Unit4_Office_Management.pdf',
  };
  const mk = (...k) => k.map((x) => F[x]);

  const finance = {
    u1: mk('f_notes', 'f_unit1', 'f_a1'),
    u2: mk('f_unit1', 'f_notes', 'f_a1', 'f_formulae', 'f_opt'),
    u3: mk('f_notes', 'f_a1', 'f_formulae'),
    u4: mk('f_notes', 'f_a2', 'f_opt', 'f_formulae'),
    u5: mk('f_notes', 'f_lev', 'f_coc', 'f_formulae'),
    coc: mk('f_coc', 'f_opt'),
    formulas: mk('f_formulae', 'f_coc'),
    solved: mk('f_a1', 'f_a2', 'f_opt'),
    'leverage-qs': mk('f_lev'),
    qa: mk('f_opt', 'f_a1', 'f_a2', 'f_lev'),
    concepts: mk('f_notes', 'f_formulae'),
    'q:Unit I': mk('f_notes', 'f_unit1'), 'q:Unit II': mk('f_notes', 'f_unit1', 'f_a1'), 'q:Unit III': mk('f_notes', 'f_a1'),
    'q:Unit IV': mk('f_notes', 'f_a2', 'f_opt'), 'q:Unit V': mk('f_notes', 'f_lev', 'f_coc'), 'q:Formulas': mk('f_formulae', 'f_coc'),
  };

  const mU1 = mk('m_mtp', 'm_unit1', 'm_orient', 'm_green', 'm_digital');
  const mU2 = mk('m_u2', 'm_cb', 'm_factors', 'm_mis', 'm_misp', 'm_mrp', 'm_tools', 'm_book');
  const mU3 = mk('m_seg', 'm_target', 'm_pos', 'm_india', 'm_vp', 'm_vp2', 'm_a3');
  const marketing = {
    'u1-intro': mk('m_mtp', 'm_unit1'), 'u1-core': mk('m_mtp', 'm_unit1'), 'u1-orient': mk('m_orient', 'm_mtp', 'm_unit1'),
    'u1-green': mk('m_green', 'm_mtp'), 'u1-digital': mk('m_digital', 'm_mtp', 'm_ai'),
    'u2-cb': mk('m_cb', 'm_factors', 'm_u2', 'm_u2b'), 'u2-mis': mk('m_mis', 'm_misb', 'm_misp', 'm_book'),
    'u2-mr1': mk('m_mrp', 'm_book', 'm_u2', 'm_tools'), 'u2-mr2': mk('m_book', 'm_tools'),
    'u3-seg': mk('m_seg', 'm_a3'), 'u3-target': mk('m_target'), 'u3-pos': mk('m_pos', 'm_india'), 'u3-india': mk('m_india'), 'u3-vp': mk('m_vp', 'm_vp2'),
    assign: mk('m_a3', 'm_ai'), qa: mk('m_a3', 'm_ai', 'm_book'), concepts: mU1.concat(mU2, mU3),
    'q:Unit I': mU1, 'q:Unit II': mU2, 'q:Unit III': mU3,
  };

  const be = {
    concepts: mk('b1', 'b2', 'b3', 'b3s', 'b4'),
    'q:Unit 1': mk('b1'), 'q:Unit 2': mk('b2'), 'q:Unit 3': mk('b3', 'b3s'), 'q:Unit 4': mk('b4'),
  };
  const hrm = {
    concepts: mk('h_iq', 'h_pa', 'h_u4'),
    'q:Unit 1': mk('h_iq'), 'q:Unit 2': mk('h_iq'), 'q:Unit 3': mk('h_pa', 'h_pab', 'h_iq'), 'q:Unit 4': mk('h_u4', 'h_iq'),
  };
  const office = {
    concepts: mk('o_u1', 'o_ppt', 'o_auto', 'o_forms', 'o_formsd', 'o_u4'),
    'q:Unit 1': mk('o_u1', 'o_ppt'), 'q:Unit 2': mk('o_auto', 'o_a2'), 'q:Unit 3': mk('o_forms', 'o_formsd'), 'q:Unit 4': mk('o_u4'),
  };

  const P = {
    p25: '2025-26 paper.pdf', pB: 'Z040401T-B.pdf', p24: 'bsc-bba-4-sem-physical-education-and-yoga-z040401-set-d-2024.pdf', syl: 'WhatsApp Image 2026-11-02 at 9.29.58 AM.jpeg',
  };
  const pe = {
    concepts: [P.syl, P.p25, P.pB, P.p24],
    'q:Unit I': [P.syl, P.p25, P.pB, P.p24], 'q:Unit II': [P.syl, P.p25, P.pB, P.p24], 'q:Unit III': [P.syl, P.p25, P.pB, P.p24],
    'q:Unit IV': [P.syl, P.p25, P.pB, P.p24], 'q:Sports & General': [P.p24, P.pB],
  };

  window.SOURCEMAP = { finance, marketing, 'business-env': be, hrm, 'office-mgmt': office, 'physical-education': pe };
})();
