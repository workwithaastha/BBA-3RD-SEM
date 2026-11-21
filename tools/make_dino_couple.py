"""Builds the cute dinosaur-couple SVG poses used on the home banner (a random pose on every reload).
Reads site/img/cute-dino.svg (the boy dino) and recolours it for the girl. Output: site/img/dinos/couple-1.svg .. couple-6.svg
Usage: python -I tools/make_dino_couple.py
"""
import random
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
src = (ROOT / "site/img/cute-dino.svg").read_text(encoding="utf-8")
inner = src[src.index("<defs>"):src.rindex("</svg>")]
DEFS = inner[:inner.index("</defs>") + 7]
BODY = inner[inner.index("</defs>") + 7:]
BODY = BODY[:BODY.index("  <!-- little sparkles -->")]
BODY = re.sub(r"  <!-- ground shadow -->\n  <ellipse[^\n]*\n", "", BODY)
EYE_RE = re.compile(r"  <!-- eye -->.*?(?=  <!-- eyebrow -->)", re.S)


def make(suffix, repl):
    d = DEFS.replace('id="body"', f'id="body{suffix}"').replace('id="belly"', f'id="belly{suffix}"').replace('id="cheek"', f'id="cheek{suffix}"')
    b = BODY.replace("url(#body)", f"url(#body{suffix})").replace("url(#belly)", f"url(#belly{suffix})").replace("url(#cheek)", f"url(#cheek{suffix})")
    for a, c in repl.items():
        d, b = d.replace(a, c), b.replace(a, c)
    return d, b


GIRL = {"#7ee8a2": "#ffc0da", "#3fc57a": "#ff86b4", "#34b56d": "#f873a8", "#2fa564": "#e2528c", "#fff6c9": "#fff4f9", "#ffe08a": "#ffd3e6", "#f3cb6a": "#f5b3cf", "#ffb347": "#c6a4ff", "#f08f1c": "#9d74e6"}
BOY_D, BOY_B = make("B", {})
GIRL_D, GIRL_B = make("G", GIRL)
BOW = """  <g transform="translate(262 56) rotate(-12)"><path d="M0 0 L-30 -18 Q-38 0 -30 18 Z" fill="#ff5c9a" stroke="#d93a7a" stroke-width="3" stroke-linejoin="round"/><path d="M0 0 L30 -18 Q38 0 30 18 Z" fill="#ff5c9a" stroke="#d93a7a" stroke-width="3" stroke-linejoin="round"/><circle r="9" fill="#ff8fba" stroke="#d93a7a" stroke-width="3"/></g>
  <path d="M283 94 l-9 -6 M290 88 l-6 -9 M300 86 l-1 -11" stroke="#26324a" stroke-width="3.2" stroke-linecap="round"/>
"""
HEART = "M0 10 C-18 -4 -14 -22 0 -12 C14 -22 18 -4 0 10 Z"
ARC = '  <path d="M281 116 q19 -26 38 0" fill="none" stroke="#26324a" stroke-width="5.5" stroke-linecap="round"/>\n'
EYES = {
    "open": None,
    "happy": ARC,
    "wink": ARC,
    "heart": f'  <g transform="translate(300 114) scale(1.9)"><path d="{HEART}" fill="#ff3d7f"/></g>\n',
}


def eyes(body, mode):
    return body if EYES[mode] is None else EYE_RE.sub(lambda m: EYES[mode], body)


def hearts(items):
    out = []
    for k, (x, y, s, col, delay) in enumerate(items):
        dur = 2.4 + (k % 3) * 0.5
        out.append(f'<g transform="translate({x} {y})"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 -14;0 0" dur="{dur:.1f}s" begin="-{delay}s" repeatCount="indefinite"/><g transform="scale({s})"><path d="{HEART}" fill="{col}"/></g></g></g>')
    return "\n  ".join(out)


def sparkle(x, y, s=1):
    return f'<path transform="translate({x} {y}) scale({s})" d="M0 -12 l4 8 l8 4 l-8 4 l-4 8 l-4 -8 l-8 -4 l8 -4 z" fill="#fff" opacity=".95"/>'


def svg(boy_t, girl_t, boy_eye, girl_eye, front="", back="", shadow=(380, 364, 300, 14), boy_extra=""):
    sx, sy, rx, ry = shadow
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -120 800 520" width="800" height="520" role="img" aria-label="Two cute cartoon dinosaurs, a green boy and a pink girl with a bow">
{BOY_D}{GIRL_D}
  <ellipse cx="{sx}" cy="{sy}" rx="{rx}" ry="{ry}" fill="#000" opacity=".13"/>
  {back}
  <g transform="{boy_t}">
{eyes(BOY_B, boy_eye)}{boy_extra}  </g>
  <g transform="{girl_t}">
{eyes(GIRL_B, girl_eye)}{BOW}  </g>
  {front}
</svg>
"""


PINK, ROSE, SOFT, RED = "#ff5c9a", "#ff8fba", "#ffb3d1", "#ff3d7f"
BOY_N, GIRL_N = "translate(-6 6) scale(.98)", "translate(766 6) scale(-.98 .98)"
poses = {}

# 1 kiss - nose to nose, big heart and a shower of hearts
poses[1] = svg(BOY_N, GIRL_N, "open", "open", hearts([(380, -26, 3.4, PINK, 0), (444, -58, 1.7, ROSE, .6), (316, -56, 1.5, SOFT, 1.1), (380, -78, 1.2, ROSE, 1.7), (250, -34, 1.2, PINK, .3), (512, -34, 1.3, SOFT, 1.3), (206, -64, 1, ROSE, 2), (556, -66, 1.1, PINK, .9), (170, -20, .9, SOFT, 1.5), (592, -22, .9, ROSE, .2)]) + sparkle(380, -60, 1.1) + sparkle(40, 160) + sparkle(722, 176))

# 2 hug - closer, happy closed eyes, heart cloud
poses[2] = svg("translate(30 6) scale(.98)", "translate(736 6) scale(-.98 .98)", "happy", "happy", hearts([(380, -30, 3.8, PINK, 0), (322, -62, 2, RED, .5), (440, -64, 2.2, ROSE, 1), (380, -82, 1.3, SOFT, 1.6), (262, -36, 1.3, ROSE, .8), (500, -38, 1.3, SOFT, 1.3), (214, -66, 1, PINK, 2), (548, -68, 1, RED, .4), (190, -14, 1, SOFT, 1.9), (572, -16, 1, ROSE, .7)]) + sparkle(60, 170, 1.2) + sparkle(704, 160, 1.2))

# 3 study buddies - graduation cap, books, light bulb
CAP = '  <g transform="translate(284 70) rotate(-8)"><path d="M-46 0 L0 -22 L46 0 L0 22 Z" fill="#26324a" stroke="#111a2e" stroke-width="3" stroke-linejoin="round"/><path d="M-26 12 v20 q26 14 52 0 v-20" fill="#33425f"/><path d="M40 4 v34" stroke="#ffb347" stroke-width="4" stroke-linecap="round"/><circle cx="40" cy="40" r="6" fill="#ffb347"/></g>\n'


def book(x, y, c):
    return f'<g transform="translate({x} {y})"><path d="M0 0 q40 -14 80 0 v54 q-40 -14 -80 0 z" fill="{c}" stroke="#26324a" stroke-width="3" stroke-linejoin="round"/><path d="M40 -6 v54" stroke="#26324a" stroke-width="3"/><path d="M10 10 q14 -4 24 0 M10 22 q14 -4 24 0 M10 34 q14 -4 24 0 M48 10 q14 -4 24 0 M48 22 q14 -4 24 0" fill="none" stroke="#9aa9c7" stroke-width="2.5" stroke-linecap="round"/></g>'


BULB = '<g transform="translate(380 -8)"><circle r="22" fill="#ffe27a" stroke="#f0b429" stroke-width="3"/><rect x="-9" y="20" width="18" height="12" rx="4" fill="#c7cfdd" stroke="#8b97ad" stroke-width="2.5"/><path d="M-6 -4 q6 8 12 0" fill="none" stroke="#f0b429" stroke-width="3" stroke-linecap="round"/><path d="M0 -34 v-10 M-30 -20 l-8 -6 M30 -20 l8 -6" stroke="#f0b429" stroke-width="3.5" stroke-linecap="round"/></g>'
poses[3] = svg(BOY_N, GIRL_N, "open", "open", book(110, 296, "#7aa7ff") + book(570, 296, "#ffb3d1") + BULB + hearts([(300, -40, 1.6, PINK, 0), (460, -40, 1.6, ROSE, .8), (380, -66, 1.4, RED, 1.4), (236, -48, 1, SOFT, .5), (524, -50, 1, SOFT, 1.1), (210, -12, .9, ROSE, 1.7), (552, -14, .9, PINK, .3)]) + sparkle(46, 150) + sparkle(716, 150), boy_extra=CAP)

# 4 cheer - jumping with confetti
rnd = random.Random(4)
cols = ["#ffb347", "#ff5c9a", "#7aa7ff", "#7ee8a2", "#c6a4ff", "#ffe27a"]
conf = []
for i in range(30):
    x, y = rnd.randint(30, 730), rnd.randint(-85, 6)
    c = cols[i % len(cols)]
    if i % 3 == 0:
        conf.append(f'<rect x="{x}" y="{y}" width="10" height="5" rx="2" fill="{c}" transform="rotate({rnd.randint(0, 180)} {x} {y})"/>')
    elif i % 3 == 1:
        conf.append(f'<circle cx="{x}" cy="{y}" r="4" fill="{c}"/>')
    else:
        conf.append(f'<path d="M{x} {y} l5 10 l-10 0 z" fill="{c}"/>')
poses[4] = svg("translate(-20 -26) scale(.98)", "translate(786 -26) scale(-.98 .98)", "happy", "happy", "\n  ".join(conf) + hearts([(380, -34, 3, PINK, 0), (322, -66, 1.7, ROSE, .6), (440, -68, 1.7, RED, 1.2), (380, -84, 1.2, SOFT, 1.8), (250, -40, 1.2, PINK, .9), (512, -42, 1.2, SOFT, .3)]) + sparkle(60, 90, 1.3) + sparkle(700, 90, 1.3) + sparkle(380, -50, 1.1), shadow=(380, 364, 230, 10))

# 5 rose - the boy gives a rose, the girl has heart eyes
ROSE_SVG = '<g transform="translate(335 178) rotate(18)"><path d="M0 0 q-6 40 -26 78" fill="none" stroke="#2fa564" stroke-width="6" stroke-linecap="round"/><path d="M-10 40 q-22 -4 -26 -18 q16 -2 26 18 z" fill="#3fc57a"/><circle r="17" fill="#ff3d57" stroke="#c81d3a" stroke-width="3"/><path d="M-8 -3 q8 -10 16 0 q-8 8 -16 0 M-4 5 q4 4 8 0" fill="none" stroke="#c81d3a" stroke-width="3" stroke-linecap="round"/></g>'
poses[5] = svg(BOY_N, GIRL_N, "open", "heart", ROSE_SVG + hearts([(440, -30, 2.6, RED, 0), (500, -62, 1.5, PINK, .5), (382, -58, 1.5, ROSE, 1), (560, -26, 1.2, SOFT, 1.5), (300, -34, 1.1, SOFT, .8), (450, -84, 1.1, ROSE, 1.9), (330, -80, 1, PINK, 1.2), (610, -60, 1, ROSE, .6)]) + sparkle(50, 150) + sparkle(716, 190, 1.2))


# 6 dance - tilted, music notes and hearts
def note(x, y, t, s=1.0):
    return f'<text x="{x}" y="{y}" font-size="{34 * s:.0f}" fill="#fff" font-family="Segoe UI Symbol, Arial, sans-serif" opacity=".95">{t}</text>'


poses[6] = svg("translate(-6 6) scale(.98) rotate(-7 190 360)", "translate(766 6) scale(-.98 .98) rotate(-7 190 360)", "wink", "happy", note(120, -30, "&#9834;", 1.2) + note(210, -62, "&#9835;", 1.4) + note(560, -40, "&#9834;", 1.2) + note(640, -12, "&#9835;", 1.1) + hearts([(380, -30, 3, PINK, 0), (322, -64, 1.6, ROSE, .7), (440, -66, 1.6, RED, 1.2), (380, -84, 1.1, SOFT, 1.8), (270, -30, 1.1, SOFT, .4), (492, -32, 1.1, ROSE, 1.5)]) + sparkle(50, 190) + sparkle(716, 170))

out = ROOT / "site/img/dinos"
out.mkdir(parents=True, exist_ok=True)
for n, s in poses.items():
    (out / f"couple-{n}.svg").write_text(s, encoding="utf-8")
print(len(poses), "poses ->", out)
