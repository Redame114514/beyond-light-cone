const STORAGE_VERSION = 2;
const STORAGE_KEY = "beyondLightConeConsole.v2";
const LEGACY_STORAGE_KEY = "beyondLightConeConsole.v1";

const DEFAULT_NEGATIVE = {
  zh: "高饱和霓虹，赛博朋克城市，飞船大战，激光炮，爆炸，战争场面，英雄姿势，人物占据主体，拥挤人群，现代广告牌，繁华城市天际线，奇幻魔法光效，宗教神圣光环，怪物化巨构，生物恐怖，卡通风格，动漫风格，游戏 UI，过度锐化，过度 HDR，杂乱机械细节，花哨装饰，暖色大片火光，不合理天气，太空中的雨雾云，月面草地，真空蓝天白云，低质量，模糊，畸形人物，多余肢体，文字水印，logo",
  en: "high-saturation neon, cyberpunk city, spaceship battle, laser cannons, explosions, war scene, heroic pose, figure as main subject, crowded people, modern billboards, busy city skyline, fantasy magic glow, religious halo, monster-like megastructure, body horror, cartoon style, anime style, game UI, over-sharpened, excessive HDR, cluttered mechanical details, decorative noise, large warm fire glow, physically impossible weather, rain or fog in space, grass on the moon, blue cloudy sky in vacuum, low quality, blurry, deformed person, extra limbs, text watermark, logo",
};

const PREVIEW_RULES = {
  "low-horizon-pilgrimage": { horizonY: 0.76, massMode: "far-horizon-large", guideMode: "subtle-path", defaultShadow: "horizontal-mega-shadow" },
  "horizontal-compression": { horizonY: 0.72, massMode: "upper-horizontal-band", guideMode: "horizontal-cloud-band", defaultShadow: "horizontal-mega-shadow" },
  "edge-intrusion": { horizonY: 0.68, massMode: "side-intrusion", guideMode: "counter-diagonal", defaultShadow: "diagonal-mega-shadow" },
  "central-monolith": { horizonY: 0.7, massMode: "central-tower-or-block", guideMode: "vertical-axis", defaultShadow: "long-cast-shadow" },
  "diagonal-approach": { horizonY: 0.72, massMode: "far-offset-anchor", guideMode: "strong-diagonal", defaultShadow: "diagonal-mega-shadow" },
  "framed-threshold": { horizonY: 0.7, massMode: "large-frame", guideMode: "frame-axis", defaultShadow: "framed-shadow" },
  "negative-space-anchor": { horizonY: 0.8, massMode: "small-heavy-anchor", guideMode: "minimal", defaultShadow: "minimal-pale-shadow" },
  "foreground-occlusion": { horizonY: 0.7, massMode: "foreground-dark-lip", guideMode: "peek-through", defaultShadow: "vertical-drop-shadow" },
  "valley-axis": { horizonY: 0.68, massMode: "far-center-anchor", guideMode: "valley-convergence", defaultShadow: "ridge-shadow" },
  "mirror-water-axis": { horizonY: 0.58, massMode: "horizon-reflected", guideMode: "water-axis", defaultShadow: "wet-reflection-shadow" },
};

const DATA = {
  moodBases: [
    mood("pale-relic", "苍白遗留", "Pale Relic", "文明已经离场，巨构像没有说完的话停在空气里。", "Civilization has left, and the megastructure remains like an unfinished sentence in the air.", ["wide-16-9", "cinema-239-1", "portrait-9-16"], ["low-horizon-pilgrimage", "negative-space-anchor", "horizontal-compression"], ["boundary-architecture", "buried-machine", "brutalist-relic"], ["terrestrial", "industrial-edge", "wetland"], ["after-rain-thin-mist", "milk-white-overcast", "low-cloud-haze"], ["pale-diffuse-overcast", "cold-morning-rake", "weak-backlit-edge"], ["pale-high-clouded-sky", "low-cloud-ceiling", "half-occluded-sky"], ["horizontal-mega-shadow", "soft-ground-shadow", "edge-of-shadow"], "灰白、银灰、低饱和草绿、雾蓝、冷灰阴影", "gray white, silver gray, low-saturation grass green, mist blue, cold gray shadows", "不要高饱和霓虹、不要战斗、不要爆炸、不要热闹城市、不要英雄姿势", "no saturated neon, no battle, no explosions, no busy city, no heroic pose", "先确定情绪基底【苍白遗留】：文明已经离场，巨构像没有说完的话停在空气里，所有光线、天气、构图和尺度都服务这种安静、冷淡、巨大的余留感。", "Civilization has left, and the megastructure remains like an unfinished sentence in the air; light, weather, composition, and scale all serve a quiet, cold, immense sense of residue."),
    mood("steel-grassland", "钢铁草原", "Steel Grassland", "草地像海面一样铺开，巨构像沉默的灰色山脉横在远方。", "The grassland spreads like a quiet sea, while the megastructure sits on the horizon like a silent gray mountain range.", ["wide-16-9", "ultrawide-21-9", "cinema-239-1"], ["horizontal-compression", "diagonal-approach", "valley-axis"], ["linear-infrastructure", "horizon-machine", "buried-machine"], ["terrestrial"], ["clear-after-wind", "thin-ground-mist", "distant-rain-curtain"], ["low-angle-side-light", "cold-morning-rake", "cloud-gap-light"], ["wide-pale-sky", "layered-cloud-bands", "half-occluded-sky"], ["diagonal-mega-shadow", "horizontal-mega-shadow", "long-cast-shadow"], "灰绿、铁灰、浅蓝灰、暗金属、局部草地反光", "gray green, iron gray, pale blue gray, dark metal, small grass reflections", "不要花海、不要奇幻森林、不要鲜艳绿色、不要现代广告牌", "no flower fields, no fantasy forest, no vivid green, no modern billboards", "先确定情绪基底【钢铁草原】：低饱和草地铺向远方，巨构像人造山脉压在地平线上，风、草浪、阴影和远距人物共同证明尺度。", "Low-saturation grassland spreads into the distance, while the megastructure presses against the horizon like an artificial mountain range."),
    mood("absolute-blankness", "绝对留白", "Absolute Blankness", "世界被雪、盐滩、浅水或高空白光擦到几乎无声，只剩巨构和尺度。", "Snow, salt flats, shallow water, or high white light mute the world until only the megastructure and scale remain.", ["square-1-1", "portrait-9-16", "wide-16-9"], ["negative-space-anchor", "central-monolith", "low-horizon-pilgrimage"], ["monolith-array", "shell-architecture", "orbital-fragment"], ["terrestrial", "lunar", "high-atmosphere"], ["polar-clear-air", "light-snow-haze", "salt-fog", "vacuum-none"], ["high-key-cold-light", "pale-diffuse-overcast", "hard-solar-rim"], ["white-empty-sky", "pale-high-clouded-sky", "restrained-cosmos"], ["minimal-pale-shadow", "edge-of-shadow", "long-cast-shadow"], "白、灰白、浅银、冰蓝、极淡黑影", "white, gray white, pale silver, ice blue, very pale black shadows", "不要复杂城市、不要大量人物、不要强烈彩色灯光", "no complex cities, no many people, no strong colored lights", "先确定情绪基底【绝对留白】：画面被冷白空气、雪面、盐滩或浅水反光压到极简，巨构必须以极少元素产生巨大存在感。", "Cold white air, snow, salt flats, or shallow reflections reduce the world to near silence; the megastructure must feel immense with very few elements."),
    mood("crack-of-light", "光的裂缝", "Crack of Light", "巨构挡住大部分天空，只在缝隙、边缘或门框中泄出一线光。", "The megastructure blocks most of the sky, allowing only a blade of light to leak through seams, edges, or thresholds.", ["portrait-9-16", "wide-16-9", "cinema-239-1"], ["framed-threshold", "edge-intrusion", "foreground-occlusion"], ["threshold-architecture", "shell-architecture", "brutalist-relic"], ["terrestrial", "interior-threshold", "artificial-world"], ["dust-in-light", "low-cloud-haze", "after-rain-thin-mist"], ["slit-light", "backlit-rim", "cloud-gap-light"], ["half-occluded-sky", "compressed-cloud-ceiling", "artificial-inner-sky"], ["framed-shadow", "edge-of-shadow", "vertical-drop-shadow"], "大面积冷灰暗部、窄条冷白光、少量湿面反光", "large cold gray dark areas, narrow cold white light, small wet reflections", "不要魔法光效、不要神圣金光、不要舞台聚光灯", "no magic glow, no holy golden light, no stage spotlight", "先确定情绪基底【光的裂缝】：巨构像一块遮住天空的实体，只从边缘、缝隙或门框中漏出一条克制的冷光，人物停在亮暗边界上。", "The megastructure blocks the sky as a physical mass, leaking only a restrained cold blade of light from an edge, seam, or frame."),
    mood("near-orbit-silence", "近轨无声", "Near-Orbit Silence", "没有天气，只有硬边太阳光、行星反照和真空里的巨大结构。", "There is no weather, only hard sunlight, planetary bounce light, and immense structures in vacuum.", ["wide-16-9", "cinema-239-1", "portrait-9-16"], ["central-monolith", "horizontal-compression", "negative-space-anchor"], ["orbital-ring", "orbital-fragment", "solar-shade"], ["orbital", "lunar"], ["vacuum-none", "ice-crystal-glint"], ["hard-solar-rim", "earth-reflected-light", "eclipse-edge-light"], ["low-orbit-black-blue", "daylight-planet-arc", "restrained-cosmos"], ["hard-vacuum-shadow", "planet-bounce-shadow", "eclipse-shadow-band"], "黑蓝、冷白、暗金属、行星反照蓝、硬边黑影", "black blue, cold white, dark metal, planet-reflected blue, hard black shadows", "不要晴天天气、不要雨、不要云中雾、不要普通蓝天白云", "no sunny weather, no rain, no clouds or fog, no ordinary blue sky", "先确定情绪基底【近轨无声】：环境没有天气，真空中只有硬边太阳光、行星弧面反照和巨大结构投下的清晰阴影。", "There is no weather; in vacuum, hard sunlight, planetary reflected light, and clear shadows define the immense structure."),
    mood("sleeping-giant", "巨人沉睡", "Sleeping Giant", "巨构不再运转，却像沉睡的生物一样占据地貌，压住天空和风。", "The megastructure no longer operates, yet it occupies the landscape like a sleeping organism, pressing down the sky and wind.", ["wide-16-9", "ultrawide-21-9", "cinema-239-1"], ["foreground-occlusion", "low-horizon-pilgrimage", "diagonal-approach"], ["buried-machine", "cooling-tower-range", "horizon-machine"], ["terrestrial", "industrial-edge"], ["milk-white-overcast", "low-cloud-haze", "distant-rain-curtain"], ["pale-diffuse-overcast", "weak-backlit-edge", "low-angle-side-light"], ["low-cloud-ceiling", "layered-cloud-bands", "half-occluded-sky"], ["soft-ground-shadow", "horizontal-mega-shadow", "diagonal-mega-shadow"], "暗灰、灰白、潮湿混凝土、低饱和土绿", "dark gray, gray white, damp concrete, low-saturation earth green", "不要机械怪兽拟人化、不要眼睛、不要怪物嘴巴、不要生物恐怖", "no anthropomorphic machine monster, no eyes, no monster mouth, no body horror", "先确定情绪基底【巨人沉睡】：巨构像停机后的巨大遗体嵌在地貌中，阴影、低云和地表起伏让它显得沉重而安静。", "The megastructure feels like a stopped giant embedded in terrain; shadows, low cloud, and ground relief make it heavy and quiet."),
    mood("rain-boundary", "雨后边界", "After-Rain Boundary", "雨停之后，空气透明，湿地、草坡和混凝土边界反射出冷光。", "After the rain, the air turns transparent, and wet ground, grass slopes, and concrete boundaries reflect cold light.", ["wide-16-9", "portrait-9-16", "cinema-239-1"], ["diagonal-approach", "low-horizon-pilgrimage", "mirror-water-axis"], ["boundary-architecture", "dam-gate", "threshold-architecture"], ["terrestrial", "wetland", "industrial-edge"], ["after-rain-thin-mist", "wet-air-clear", "low-cloud-haze"], ["pale-diffuse-overcast", "cloud-gap-light", "weak-backlit-edge"], ["pale-high-clouded-sky", "layered-cloud-bands", "half-occluded-sky"], ["wet-reflection-shadow", "edge-of-shadow", "horizontal-mega-shadow"], "湿灰、青灰、低饱和草绿、浅水反光", "wet gray, blue gray, low-saturation grass green, shallow-water reflections", "不要暴雨中动作场面、不要雷电特效、不要灾难片场面", "no action in heavy rain, no lightning effects, no disaster movie scene", "先确定情绪基底【雨后边界】：雨已经停止，湿润地面反射巨构和天空，人物位于冷灰阴影边缘，画面干净、潮湿、安静。", "The rain has stopped; wet ground reflects the megastructure and sky, and the figure stays at a cold gray shadow edge."),
    mood("ridge-machine", "山脊机器", "Ridge Machine", "自然山丘与人工巨构互相嵌合，像山脊里长出一台沉默机器。", "Natural ridges and artificial mass interlock, as if a silent machine has grown out of the hills.", ["wide-16-9", "ultrawide-21-9", "portrait-9-16"], ["valley-axis", "diagonal-approach", "low-horizon-pilgrimage"], ["buried-machine", "shell-architecture", "observation-architecture"], ["terrestrial"], ["thin-ground-mist", "low-cloud-haze", "clear-after-wind"], ["cold-morning-rake", "low-angle-side-light", "pale-diffuse-overcast"], ["layered-cloud-bands", "wide-pale-sky", "compressed-cloud-ceiling"], ["diagonal-mega-shadow", "ridge-shadow", "cloud-shadow"], "草坡灰绿、山体冷褐、混凝土灰白、云影蓝灰", "gray-green slopes, cold brown ridges, concrete gray white, blue-gray cloud shadows", "不要奇幻山门、不要东方仙侠、不要过度自然瀑布", "no fantasy mountain gate, no xianxia, no excessive waterfalls", "先确定情绪基底【山脊机器】：缓坡、山脊和人工巨构像同一个地貌系统，巨构半埋在山体中，只露出冷灰壳体和维护缝。", "Ridges, slopes, and artificial mass form one terrain system; the megastructure is half-buried and exposes only cold gray shell and service seams."),
    mood("deep-threshold", "深空门槛", "Deep-Space Threshold", "画面不是战斗太空，而是某个边界、门槛或轨道残片前的静止瞬间。", "The image is not space combat, but a still moment before a boundary, threshold, or orbital remnant.", ["cinema-239-1", "wide-16-9", "square-1-1"], ["framed-threshold", "central-monolith", "negative-space-anchor"], ["orbital-ring", "threshold-architecture", "orbital-fragment"], ["orbital", "lunar", "artificial-world"], ["vacuum-none", "ice-crystal-glint"], ["hard-solar-rim", "earth-reflected-light", "eclipse-edge-light"], ["restrained-cosmos", "daylight-planet-arc", "low-orbit-black-blue"], ["hard-vacuum-shadow", "framed-shadow", "eclipse-shadow-band"], "深蓝黑、冷白边缘光、行星灰蓝、暗金属", "deep blue black, cold white rim light, planet gray blue, dark metal", "不要飞船大战、不要激光炮、不要密集星战、不要太空歌剧海报", "no spaceship battle, no laser cannon, no dense star war, no space opera poster", "先确定情绪基底【深空门槛】：画面聚焦一个安静、巨大的边界结构，真空环境里没有天气，只有克制的深色背景和硬边光影。", "The image focuses on a quiet immense threshold structure; in vacuum there is no weather, only restrained dark backdrop and hard-edge lighting."),
    mood("echo-courtyard", "回声空庭", "Echo Courtyard", "巨构内部或边界空间像一座没有人使用的空庭，光线从高处或缝隙落下。", "The interior or threshold of the megastructure feels like an unused courtyard, with light falling from above or through seams.", ["portrait-9-16", "square-1-1", "wide-16-9"], ["framed-threshold", "central-monolith", "foreground-occlusion"], ["interior-threshold", "brutalist-relic", "shell-architecture"], ["interior-threshold", "artificial-world"], ["interior-dust-stillness", "dust-in-light", "artificial-condensation"], ["slit-light", "overhead-cold-light", "weak-backlit-edge"], ["occluded-interior-sky", "artificial-inner-sky", "half-occluded-sky"], ["framed-shadow", "vertical-drop-shadow", "interior-pool-shadow"], "冷灰混凝土、暗部蓝灰、窄缝白光、少量潮湿反光", "cold gray concrete, blue-gray darkness, narrow white seam light, small wet reflections", "不要豪华神殿、不要宗教壁画、不要繁复装饰", "no luxury temple, no religious murals, no ornate decoration", "先确定情绪基底【回声空庭】：巨构内部空旷、冷灰、巨大，光从高处或缝隙落下，人物只像一个回声的尺度点。", "The megastructure interior is vast, cold gray, and empty; light falls from high openings or seams, and the figure is only an echo-like scale point."),
  ],
  aspectRatios: [
    aspect("wide-16-9", "宽银幕 16:9", "Wide 16:9", "稳定、通用，适合远距巨构、草原、山丘、海岸和低地平线。", "stable and versatile, suited to distant megastructures, grassland, hills, coasts, and low horizons", "16:9", ["low-horizon-pilgrimage", "horizontal-compression", "diagonal-approach"]),
    aspect("cinema-239-1", "电影宽银幕 2.39:1", "Cinematic 2.39:1", "极强横向压迫，适合地平线封锁墙、长桥、轨道残骸、草原与海岸。", "strong horizontal pressure for horizon walls, long bridges, orbital remnants, grassland, and coasts", "239:100", ["horizontal-compression", "low-horizon-pilgrimage", "valley-axis"]),
    aspect("ultrawide-21-9", "超宽 21:9", "Ultrawide 21:9", "适合巨构横贯画面、地貌延展、长阴影和远方阵列。", "suited to wide-spanning megastructures, extended terrain, long shadows, and distant arrays", "21:9", ["horizontal-compression", "valley-axis", "mirror-water-axis"]),
    aspect("portrait-9-16", "竖幅 9:16", "Vertical 9:16", "适合垂直塔、门槛、穹壳、巨构从上方压入和人物仰望。", "suited to vertical towers, thresholds, shells, overhead masses, and upward-looking figures", "9:16", ["central-monolith", "framed-threshold", "edge-intrusion"]),
    aspect("square-1-1", "方形 1:1", "Square 1:1", "适合极简、留白、中心构图和单体巨构。", "suited to minimalism, negative space, central composition, and a single mass", "1:1", ["central-monolith", "negative-space-anchor", "framed-threshold"]),
    aspect("vertical-4-5", "竖构图 4:5", "Vertical 4:5", "适合社交平台展示，兼顾竖向压迫和环境细节。", "suited to social display, balancing vertical pressure and environmental detail", "4:5", ["edge-intrusion", "central-monolith", "low-horizon-pilgrimage"]),
  ],
  compositionSchemes: [
    composition("low-horizon-pilgrimage", "低地平线远距朝圣", "low-horizon distant pilgrimage", "地表压成下方窄带，人物极小，巨构或天空占据上方主空间。", "the ground compresses into a narrow lower band, with a tiny figure and the megastructure or sky dominating above", [45, 68], [35, 65], [14, 28], [64, 86]),
    composition("horizontal-compression", "横向切割压迫", "horizontal compression", "巨构以长条、墙体、桥梁或平台横切天空，让画面像被压低。", "a long beam, wall, bridge, or platform cuts across the sky and lowers the image", [50, 75], [40, 70], [12, 26], [62, 84]),
    composition("edge-intrusion", "边缘压入", "edge intrusion", "巨构从画面一侧或上方压入，另一侧保留人物和环境呼吸口。", "the megastructure intrudes from one side or above, leaving a breathing pocket for figure and terrain", [38, 62], [30, 60], [15, 32], [54, 78]),
    composition("central-monolith", "中心纪念碑", "central monolith", "单一巨构位于画面中轴，人物位于低处作为尺度锚点。", "a single mass sits on the central axis, with the figure low as a scale anchor", [35, 60], [20, 55], [16, 34], [52, 76]),
    composition("diagonal-approach", "对角线逼近", "diagonal approach", "道路、坡线、阴影或水线从前景斜向巨构，引导视线进入远方。", "road, slope, shadow, or waterline moves diagonally from foreground toward the megastructure", [42, 68], [25, 55], [18, 34], [55, 80]),
    composition("framed-threshold", "门槛框景", "framed threshold", "巨构形成门框、环体、穹壳缺口或内部开口，人物站在框内或框边。", "the megastructure forms a frame, ring, shell gap, or interior opening with the figure near the threshold", [45, 78], [35, 70], [12, 30], [58, 82]),
    composition("negative-space-anchor", "留白锚点", "negative-space anchor", "大面积天空、雪面、盐滩或深空留白，但巨构和人物必须形成明确锚点。", "large sky, snow, salt flat, or space remains empty, while mass and scale reference form clear anchors", [20, 45], [10, 35], [16, 38], [48, 72]),
    composition("foreground-occlusion", "前景遮挡窥见", "foreground occlusion", "用近处边缘、草坡、门柱或碎片遮挡部分画面，只露出远方主体。", "near edges, slopes, pillars, or fragments occlude the frame and reveal the distant subject", [45, 72], [25, 60], [18, 36], [50, 74]),
    composition("valley-axis", "山谷轴线", "valley axis", "山坡、堤坝、云层或平台边缘形成中轴，把视线推向巨构。", "slopes, dam edges, cloud layers, or platform lines form an axis leading to the megastructure", [35, 65], [20, 50], [18, 36], [54, 78]),
    composition("mirror-water-axis", "水面镜轴", "mirror water axis", "浅水、湿地、盐滩或湖岸倒影形成第二个巨构，增强空旷和尺度。", "shallow water, wetland, salt flat, or lake edge creates a reflection axis and doubles the mass", [30, 58], [20, 45], [22, 40], [42, 66]),
  ],
  structurePositions: [
    item("far-horizon-center", "远方地平线中央", "far horizon center", "巨构压在远方地平线中央。", "the megastructure sits at the far horizon center"),
    item("far-horizon-left", "远方地平线偏左", "far horizon left", "主体位于远方偏左，右侧留出空域。", "the subject sits left of the far horizon, leaving air on the right"),
    item("far-horizon-right", "远方地平线偏右", "far horizon right", "主体位于远方偏右，左侧留出空域。", "the subject sits right of the far horizon, leaving air on the left"),
    item("upper-frame-overhead", "从画面上方压入", "overhead frame intrusion", "巨构从画面上方压入并截断天空。", "the mass presses in from above and cuts off the sky"),
    item("left-edge-intrusion", "左侧边缘压入", "left edge intrusion", "主体从左侧切入，只露出一部分。", "the subject cuts in from the left edge, partly visible"),
    item("right-edge-intrusion", "右侧边缘压入", "right edge intrusion", "主体从右侧切入，只露出一部分。", "the subject cuts in from the right edge, partly visible"),
    item("background-wall", "作为远方整道背景墙", "background wall", "巨构成为远方连续背景墙。", "the megastructure becomes a continuous background wall"),
    item("center-axis-monolith", "中心轴线单体", "center-axis monolith", "主体沿画面中轴建立尺度。", "the subject builds scale along the central axis"),
    item("valley-end-anchor", "山谷 / 坡道尽头", "valley-end anchor", "主体位于轴线尽头。", "the subject anchors the end of the terrain axis"),
    item("interior-frame-opening", "内部门框或开口处", "interior frame opening", "主体成为内部开口或门槛。", "the subject becomes an interior opening or threshold"),
    item("orbital-arc-overhead", "轨道弧线跨过上方", "orbital arc overhead", "轨道弧线从上方跨过画面。", "an orbital arc crosses overhead"),
    item("half-buried-ridge", "半埋在山脊或地平线后", "half-buried behind ridge", "壳体只露出背脊和切口。", "only the back ridge and cuts of the shell are visible"),
  ],
  leadingLines: [
    item("grass-path-to-wall", "草地小径指向巨墙", "grass path to wall", "极窄草径把视线引向远方墙体。", "a narrow grass path leads toward the distant wall"),
    item("diagonal-shadow-line", "对角巨影作为引导线", "diagonal mega-shadow line", "斜向巨影同时承担光影和路径。", "a diagonal shadow acts as both light relation and guide"),
    item("ridge-line-convergence", "山脊线汇向巨构", "ridge lines converge", "坡线在远方汇向主体。", "ridge lines converge toward the subject"),
    item("wet-reflection-band", "湿地反光带指向主体", "wet reflection band", "浅水反光带形成安静引导。", "a wet reflective band quietly guides the gaze"),
    item("road-fading-to-horizon", "废弃道路消失到地平线", "road fading to horizon", "旧道路细线延伸到地平线。", "an old road line fades into the horizon"),
    item("platform-edge-line", "平台边缘线切向主体", "platform edge line", "硬质边缘把视线切向巨构。", "a hard edge slices the gaze toward the mass"),
    item("waterline-axis", "湖岸或浅水线形成水平轴", "waterline axis", "水线建立安静横轴。", "a shoreline or shallow waterline forms a quiet axis"),
    item("cable-verticals", "缆索竖线引导视线上升", "vertical cable guides", "细缆索把视线拉向高处。", "thin cables pull the gaze upward"),
    item("cloud-band-compression", "云带横向压缩画面", "cloud-band compression", "横向云带压低天空。", "horizontal cloud bands compress the sky"),
    item("no-obvious-path", "无明显路径，仅靠尺度和地平线构成", "no obvious path", "不设置道路，只靠体块、留白和地平线组织。", "no road, only mass, void, and horizon organize the frame"),
  ],
  figurePlacements: [
    item("lower-right-third", "右下三分点", "lower-right third", "人物位于右下三分点，极小而安静。", "the figure sits at the lower-right third, tiny and quiet"),
    item("lower-left-third", "左下三分点", "lower-left third", "人物位于左下三分点，避免默认居中。", "the figure sits at the lower-left third, avoiding default centering"),
    item("bottom-center-tiny", "底部中央极小点", "bottom-center tiny point", "可居中，但必须像尺度点一样极小。", "may be centered only as a tiny scale point"),
    item("shadow-edge", "巨构阴影边缘", "edge of megastructure shadow", "人物站在巨影边界上。", "the figure stands at the shadow edge"),
    item("bright-dark-boundary", "亮暗交界处", "bright-dark boundary", "人物位于亮暗分界，强化光影咬合。", "the figure sits at the light-dark boundary"),
    item("ridge-top-small", "坡顶小点", "small point on ridge top", "人物在坡顶作为尺度参照。", "the figure is a small scale mark on the ridge top"),
    item("frame-opening-bottom", "门框开口底部", "bottom of frame opening", "人物位于巨大开口下沿。", "the figure sits at the bottom of the huge opening"),
    item("reflection-edge", "水面倒影边缘", "reflection edge", "人物靠近水面或倒影边缘。", "the figure stays near the water reflection edge"),
    item("no-figure-use-scale-reference", "没有人物，使用其他尺度参照", "no figure, use scale reference", "不放人物，以车辆、灯点或门缝证明尺度。", "no person; vehicle, lights, or seams prove scale"),
    item("lost-in-lower-band", "地表窄带里的微小点", "lost in lower band", "人物几乎消失在地表窄带。", "the figure nearly disappears inside the lower ground band"),
  ],
  megastructureFamilies: [
    family("boundary-architecture", "边界建筑", "boundary architecture", "墙、门、闸、屏障、世界边界、地平线封锁结构。"),
    family("buried-machine", "半埋机器", "buried machine", "像地貌一样嵌入草坡、山脊、荒原或雪地的巨大人工壳体。"),
    family("linear-infrastructure", "线性基础设施", "linear infrastructure", "桥梁、天幕梁、轨道梁、管廊、缆索、导流槽等横向结构。"),
    family("orbital-ring", "轨道环与环带", "orbital ring and belt", "轨道环、坠落环体、行星弧线、环世界内壁相关结构。"),
    family("shell-architecture", "壳体与穹壳", "shell architecture", "破损穹壳、弧形壳片、遮阳翼、外壳残片。"),
    family("monolith-array", "碑阵与柱阵", "monolith array", "方尖碑、巨柱、塔阵、观测柱、尺度阵列。"),
    family("cooling-tower-range", "冷却塔山脉", "cooling tower range", "冷却塔、筒仓、竖井、工业遗迹组成的巨型地貌。"),
    family("threshold-architecture", "门槛结构", "threshold architecture", "门框、环门、空庭入口、内部开口、跨越边界的结构。"),
    family("dam-gate", "巨型闸门与坝体", "mega dam gate", "水坝、防波门、泄洪槽、海岸门、人工内海边界。"),
    family("orbital-fragment", "坠落轨道残片", "orbital fragment", "轨道电梯、环体肋骨、太阳帆、外壳残片落到地面或低轨。"),
    family("solar-shade", "遮阳与反照结构", "solar shade", "遮光翼、反照板、云层压缩板、日食边缘结构。"),
    family("interior-threshold", "内部空庭", "interior threshold", "巨构内部、空洞、廊道、天井、尺度极大的门槛空间。"),
    family("brutalist-relic", "粗野遗迹", "brutalist relic", "无窗混凝土块、档案墙、粗粝遗留体。"),
    family("observation-architecture", "观测建筑", "observation architecture", "雷达碟、接收阵列、观测柱与远古测量系统。"),
    family("horizon-machine", "地平线机器", "horizon machine", "沿地平线展开的沉默机械山脉。"),
  ],
  megastructureTypes: [
    mt("horizon-sealing-wall", "地平线封锁墙", "horizon-sealing wall", "boundary-architecture", ["terrestrial", "industrial-edge"], ["horizontal-mega-shadow", "edge-of-shadow"], "一整道银灰混凝土墙体压在远方地平线后方，遮住部分天空，墙面有竖向雨痕、维护缝和少量冷白尺度灯。"),
    mt("overhead-slab-beam", "水平天幕梁", "overhead slab beam", "linear-infrastructure", ["terrestrial", "high-atmosphere", "interior-threshold"], ["horizontal-mega-shadow", "vertical-drop-shadow"], "巨大混凝土梁横切天空，从画面上方压入，下缘形成厚重暗面，并在地表投下横向巨影。"),
    mt("ridge-embedded-ark", "山脊嵌入式方舟", "ridge-embedded ark", "buried-machine", ["terrestrial"], ["ridge-shadow", "diagonal-mega-shadow"], "白灰巨型壳体与山脊嵌合，像一部被地貌埋住的机器，只露出弧形背部和狭长维护缝。"),
    mt("fallen-orbital-rib", "坠落轨道肋骨", "fallen orbital rib", "orbital-fragment", ["terrestrial", "lunar"], ["diagonal-mega-shadow", "long-cast-shadow"], "断裂轨道环残片斜插入地表，像巨大的人工肋骨，远端消失在雾或地平线里。"),
    mt("concrete-observation-gate", "旧世界观测门", "old-world observation gate", "threshold-architecture", ["terrestrial", "interior-threshold"], ["framed-shadow", "edge-of-shadow"], "巨大矩形混凝土门框静立在地表，没有能量特效，只有冷灰材质、门框内暗影和边缘光。"),
    mt("cloud-compression-plate", "云层压缩板", "cloud-compression plate", "solar-shade", ["high-atmosphere", "artificial-world"], ["cloud-shadow", "horizontal-mega-shadow"], "巨型平台像压住云海的厚板，底部暗面与云层边缘产生柔软压缩关系。"),
    mt("solar-shade-wing", "反照光遮阳翼", "solar shade wing", "solar-shade", ["orbital", "lunar", "high-atmosphere"], ["eclipse-shadow-band", "hard-vacuum-shadow"], "银灰遮光翼切过天空或行星弧面，边缘被硬冷光勾亮，暗面覆盖画面大部。"),
    mt("cooling-tower-mountains", "冷却塔山脉", "cooling tower mountains", "cooling-tower-range", ["terrestrial", "industrial-edge"], ["soft-ground-shadow", "horizontal-mega-shadow"], "巨型冷却塔群像远方山脉排列，塔壁潮湿粗糙，塔口被低云和雾气吞没。"),
    mt("giant-diversion-trench", "巨型导流槽遗迹", "giant diversion trench relic", "linear-infrastructure", ["terrestrial", "industrial-edge"], ["diagonal-mega-shadow", "framed-shadow"], "人工混凝土导流槽像峡谷一样切开地表，边缘笔直，底部积水反射苍白天空。"),
    mt("concrete-sundial-tower", "混凝土日晷塔", "concrete sundial tower", "monolith-array", ["terrestrial", "lunar"], ["tower-shadow-across-ground", "long-cast-shadow"], "高耸无窗的冷灰塔体立在地表，长影跨过整个画面，人物只是影子边缘的小点。"),
    mt("silver-solar-sail-graveyard", "失效太阳能帆墓地", "failed solar sail graveyard", "orbital-fragment", ["terrestrial", "lunar", "orbital"], ["hard-vacuum-shadow", "wet-reflection-shadow"], "几片巨大银灰反射板斜插在地表或低轨平台上，像失效的太阳帆，映出冷白天空。"),
    mt("gravity-well-marker-ring", "引力井标记环", "gravity-well marker ring", "orbital-ring", ["terrestrial", "artificial-world", "lunar"], ["framed-shadow", "curved-ring-shadow"], "巨大环体半埋在地表，另一半切入天空，环内形成冷灰阴影和远方透视。"),
    mt("cable-anchor-massif", "巨型缆索锚碇", "cable anchor massif", "linear-infrastructure", ["terrestrial", "high-atmosphere"], ["cable-line-shadow", "vertical-drop-shadow"], "山体般的混凝土锚定基座从地面升起，多根极细竖向缆索消失在高空。"),
    mt("wasteland-archive-block", "荒原档案库", "wasteland archive block", "brutalist-relic", ["terrestrial", "industrial-edge"], ["edge-of-shadow", "soft-ground-shadow"], "无窗巨型混凝土块体沉在荒原上，表面只有窄缝、雨痕和极少冷光。"),
    mt("inverted-city-underside", "倒置城市底盘", "inverted city underside", "shell-architecture", ["artificial-world", "high-atmosphere"], ["vertical-drop-shadow", "cloud-shadow"], "远方悬挂着巨大的黑灰底盘，底部管廊形成压迫纹理，阴影落在下方地貌或云层上。"),
    mt("coastal-mega-floodgate", "巨型防波门", "coastal mega floodgate", "dam-gate", ["terrestrial", "wetland", "industrial-edge"], ["wet-reflection-shadow", "horizontal-mega-shadow"], "冷灰闸门横在海岸或浅水边，水面倒影拉长巨构轮廓，阴影覆盖潮湿地面。"),
    mt("ringworld-inner-pillar", "环世界内壁支柱", "ringworld inner pillar", "orbital-ring", ["artificial-world"], ["curved-ring-shadow", "cloud-shadow"], "远方巨大支柱连接内壁天空，地貌向上弯曲，人物像站在一座世界模型里。"),
    mt("white-geodesic-shells", "白色测地穹壳群", "white geodesic shells", "shell-architecture", ["terrestrial", "wetland"], ["framed-shadow", "soft-ground-shadow"], "破损白灰穹壳半埋在地表，壳体裂缝中有苔藓、积水和冷暗内部。"),
    mt("silent-obelisk-array", "静止方尖碑阵列", "silent obelisk array", "monolith-array", ["terrestrial", "lunar", "artificial-world"], ["long-cast-shadow", "tower-shadow-across-ground"], "数根冷灰方尖碑沿远方排列，大小递减形成透视，长影像刻度一样铺在地表。"),
    mt("sun-occluding-shell-fragment", "太阳遮蔽壳片", "sun-occluding shell fragment", "solar-shade", ["terrestrial", "orbital", "high-atmosphere"], ["eclipse-shadow-band", "edge-of-shadow"], "弧形巨壳切住太阳或天空，边缘漏出一条冷白光，大片阴影覆盖地表。"),
    mt("orbital-elevator-stump", "轨道电梯残桩", "orbital elevator stump", "linear-infrastructure", ["terrestrial", "high-atmosphere"], ["vertical-drop-shadow", "cable-line-shadow"], "巨大基座从地面升起，断裂缆索消失在云层里，地表有细长缆索影。"),
    mt("black-concrete-viaduct", "黑色混凝土天桥", "black concrete viaduct", "linear-infrastructure", ["terrestrial"], ["horizontal-mega-shadow", "ridge-shadow"], "巨型黑灰桥体横跨画面，下表面沉重，阴影覆盖下方坡地或河谷。"),
    mt("buried-radar-dish", "半埋雷达碟", "buried radar dish", "observation-architecture", ["terrestrial", "lunar"], ["curved-ring-shadow", "wet-reflection-shadow"], "巨大碟形结构倾斜半埋在地表，碟面冷白，边缘投下弧形阴影。"),
    mt("artificial-mountain-core", "人造山体核心", "artificial mountain core", "buried-machine", ["terrestrial"], ["interior-pool-shadow", "ridge-shadow"], "山体剖面露出内部巨大的混凝土几何核心，暗色竖井像静止的空腔。"),
    mt("silent-launch-ring", "静默发射环", "silent launch ring", "orbital-ring", ["terrestrial", "lunar"], ["curved-ring-shadow", "edge-of-shadow"], "巨大环形发射结构嵌在平原中，环体粗糙冷灰，环内地表连续穿过。"),
    mt("concrete-cloud-pier", "混凝土云码头", "concrete cloud pier", "linear-infrastructure", ["high-atmosphere", "artificial-world"], ["cloud-shadow", "vertical-drop-shadow"], "巨型平台像码头伸入云层，底部暗面压住云海，边缘有稀疏尺度灯。"),
    mt("hollow-mega-cylinder", "空心巨型圆筒", "hollow mega cylinder", "shell-architecture", ["terrestrial", "interior-threshold"], ["framed-shadow", "interior-pool-shadow"], "巨大圆筒结构横卧在地表，筒内深暗，远端露出苍白天空或冷光。"),
    mt("tidal-concrete-dam", "潮汐混凝土坝", "tidal concrete dam", "dam-gate", ["terrestrial", "wetland", "artificial-world"], ["wet-reflection-shadow", "horizontal-mega-shadow"], "巨坝横在浅水边界上，坝面有水痕、闸孔和冷灰阴影，水面反射其轮廓。"),
    mt("polar-white-array", "极地白色阵列", "polar white array", "monolith-array", ["terrestrial", "lunar"], ["minimal-pale-shadow", "long-cast-shadow"], "白色巨构阵列立在冰原或盐滩上，几乎与天空同色，只留下细缝和极淡阴影。"),
    mt("low-orbit-maintenance-spine", "低轨维护脊", "low-orbit maintenance spine", "orbital-ring", ["orbital"], ["hard-vacuum-shadow", "planet-bounce-shadow"], "低轨平台上一条巨大维护脊延伸至远方，背景有行星弧面，光影硬边清晰。"),
    mt("concrete-lighthouse-stack", "混凝土灯塔烟囱", "concrete lighthouse stack", "monolith-array", ["terrestrial", "industrial-edge"], ["tower-shadow-across-ground", "long-cast-shadow"], "高耸的冷灰塔体静立在远方，窄缝发出冷白光，长影横跨地表。"),
    mt("suspended-habitat-shell", "悬挂居住壳", "suspended habitat shell", "shell-architecture", ["high-atmosphere", "artificial-world"], ["vertical-drop-shadow", "cloud-shadow"], "巨大无窗壳体悬在山谷或云层上，底部暗面沉重，几乎没有生活痕迹。"),
    mt("concrete-canyon-gate", "混凝土峡谷门", "concrete canyon gate", "threshold-architecture", ["terrestrial", "interior-threshold"], ["framed-shadow", "diagonal-mega-shadow"], "两片巨型混凝土断墙夹出狭长通道，墙面粗糙，人物站在通道口作为尺度点。"),
    mt("abandoned-ring-harbor", "废弃环形港", "abandoned ring harbor", "orbital-ring", ["terrestrial", "wetland", "lunar"], ["curved-ring-shadow", "wet-reflection-shadow"], "巨大环形停泊结构半埋在浅水或荒地中，没有交通活动，只有冷灰倒影和阴影。"),
    mt("cloud-piercing-pylon", "刺云巨塔", "cloud-piercing pylon", "monolith-array", ["terrestrial", "high-atmosphere"], ["cloud-shadow", "tower-shadow-across-ground"], "冷灰巨塔穿过低云，塔身在云层中消失，地表只能看见厚重基座和长影。"),
    mt("buried-hull-under-grass", "草坡下的巨型船壳", "buried hull under grass", "buried-machine", ["terrestrial"], ["ridge-shadow", "soft-ground-shadow"], "巨型船壳或机器壳体被草坡覆盖，露出的曲面冷灰暗沉，切口里没有灯火。"),
    mt("silent-array-dish-field", "静默碟阵平原", "silent array dish field", "observation-architecture", ["terrestrial", "lunar"], ["curved-ring-shadow", "long-cast-shadow"], "一片巨大接收碟阵列朝向苍白天空，碟面安静无光，影子沿地表排列。"),
    mt("ring-shadow-over-hills", "山丘上的环影", "ring shadow over hills", "orbital-ring", ["terrestrial", "artificial-world"], ["curved-ring-shadow", "ridge-shadow"], "巨型环体只露出部分弧线或完全在画外，但弧形阴影清楚跨过山丘和草坡。"),
    mt("artificial-sky-rib", "人工天空肋梁", "artificial sky rib", "linear-infrastructure", ["artificial-world", "interior-threshold"], ["horizontal-mega-shadow", "cloud-shadow"], "一排巨大肋梁支撑人工天空，远方重复排列，阴影像刻度一样落在内壁地貌上。"),
    mt("black-archive-cliff", "黑色档案崖", "black archive cliff", "boundary-architecture", ["terrestrial", "interior-threshold"], ["edge-of-shadow", "vertical-drop-shadow"], "黑灰巨型档案墙像人工悬崖矗立，表面几乎无窗，仅有细密层线和冷暗阴影。"),
    mt("collapsed-skybridge", "坍塌天空桥", "collapsed skybridge", "linear-infrastructure", ["terrestrial", "high-atmosphere"], ["diagonal-mega-shadow", "horizontal-mega-shadow"], "巨大桥体断裂下垂，桥端插入远方山坡或云层，形成斜向压迫和长影。"),
    mt("moon-surface-shelter-wall", "月面庇护墙", "moon-surface shelter wall", "boundary-architecture", ["lunar"], ["hard-vacuum-shadow", "long-cast-shadow"], "无大气月面上的巨大防护墙切开黑蓝天空，阳光硬边，墙后阴影完全清晰。"),
    mt("empty-mega-courtyard-well", "空庭巨井", "empty mega courtyard well", "interior-threshold", ["interior-threshold", "artificial-world"], ["interior-pool-shadow", "vertical-drop-shadow", "framed-shadow"], "巨构内部向上打开成深井般的空庭，四壁冷灰、无窗、带维护缝，顶端窄光落在地面形成暗池。"),
    mt("horizon-machine-range", "地平线机器山脉", "horizon machine range", "horizon-machine", ["terrestrial", "industrial-edge", "artificial-world"], ["horizontal-mega-shadow", "diagonal-mega-shadow", "soft-ground-shadow"], "一整排低矮而连续的灰色机械体贴着地平线展开，像远山又像停机后的基础设施，体块沉默且无生活痕迹。"),
  ],
  sceneDomains: [
    item("terrestrial", "地表大气环境", "terrestrial atmosphere", "普通地表，有天空、云、雾、雨后、风、草地、山丘、海岸等。", "ordinary ground with sky, cloud, mist, after-rain air, wind, grass, hills, and coasts"),
    item("wetland", "湿地 / 浅水环境", "wetland or shallow water", "地表有浅水、湿草、泥滩、倒影和水汽。", "shallow water, wet grass, mud flats, reflections, and vapor"),
    item("industrial-edge", "工业边界地貌", "industrial-edge terrain", "废弃厂区边缘、水库、坝体、平台、混凝土广场和自然地貌混合。", "abandoned industrial edges, reservoirs, dams, platforms, concrete plazas, and terrain mix"),
    item("high-atmosphere", "高空 / 云层边缘", "high atmosphere", "高空平台、云海上方或稀薄大气中，可有云层但不应有普通地表天气。", "platforms above cloud seas or thin air, with cloud but not ordinary ground weather"),
    item("orbital", "近地轨道 / 真空", "low orbit or vacuum", "没有天气、雨、雾或普通蓝天。只有硬边太阳光、行星反照、真空阴影和低轨背景。", "no weather, rain, fog, or ordinary blue sky; only hard sun, planet bounce, and vacuum shadows"),
    item("lunar", "月面 / 无大气地表", "lunar airless ground", "没有雨、雾、云、草地和普通天气。光线硬，阴影清晰。", "no rain, fog, cloud, grass, or ordinary weather; hard light and crisp shadow"),
    item("artificial-world", "人工世界 / 环世界内壁", "artificial world", "人工天空、内壁地貌、弯曲地平线、尺度支柱和受控大气。", "artificial sky, inner-wall terrain, curved horizon, scale pylons, controlled air"),
    item("interior-threshold", "巨构内部 / 门槛空间", "interior threshold", "内部空庭、门框、通道、穹壳内侧，有尘埃、缝隙光和局部凝结。", "interior courtyards, frames, corridors, shell interiors, dust, seam light, and condensation"),
  ],
  sceneBases: [
    scene("low-hill-grassland", "低丘草原", "low-hill grassland", "terrestrial", "缓慢起伏的低丘草原，适合远方巨墙、半埋机器、轨道肋骨和长影。"),
    scene("gentle-foothill-slope", "缓坡山麓", "gentle foothill slope", "terrestrial", "山脚缓坡与远山边界，适合山脊机器、冷却塔山脉和巨塔。"),
    scene("plateau-tableland", "高原台地", "plateau tableland", "terrestrial", "平坦高台与低地平线，适合方尖碑阵列、太阳帆墓地、观测阵列。"),
    scene("salt-flat-mirror", "盐滩镜面", "salt flat mirror", "wetland", "浅水或盐滩形成极淡倒影，适合绝对留白和远方巨构。"),
    scene("shallow-lake-shore", "浅湖岸线", "shallow lake shore", "wetland", "湖岸、水线、湿草和倒影，适合闸门、防波门和桥体。"),
    scene("snowline-grass-slope", "雪线下的草坡", "grass slope below snowline", "terrestrial", "草坡与残雪共存，适合冷白巨构和山间遗迹。"),
    scene("sparse-conifer-edge", "稀疏针叶林边缘", "sparse conifer edge", "terrestrial", "远处稀疏林线，不要繁密森林，适合观测站和混凝土遗迹。"),
    scene("sea-fog-breakwater", "海雾防波堤", "sea-fog breakwater", "wetland", "海雾、冷水、防波堤和巨大闸门。"),
    scene("wind-eroded-plain", "风蚀平原", "wind-eroded plain", "terrestrial", "低矮荒原、风蚀纹理和长距离视野，适合轨道残片和测量塔。"),
    scene("abandoned-reservoir", "废弃水库", "abandoned reservoir", "industrial-edge", "干涸或半湿水库、混凝土坡面、泄洪槽和远方坝体。"),
    scene("cloud-level-platform", "云下山间平台", "cloud-level mountain platform", "high-atmosphere", "山间高平台接近云层，适合悬浮底盘、云码头和光裂。"),
    scene("interior-mega-courtyard", "巨构内部空庭", "interior mega courtyard", "interior-threshold", "空旷的内部庭院、混凝土地面、高处开口和缝隙光。"),
    scene("artificial-inner-sea", "人工内海边界", "artificial inner sea boundary", "artificial-world", "环世界或人工世界内海边缘，适合防波门和内壁支柱。"),
    scene("mossy-concrete-slope", "苔藓混凝土坡地", "mossy concrete slope", "industrial-edge", "混凝土坡面被苔藓和短草覆盖，适合破损穹壳与旧平台。"),
    scene("farmland-edge-wall", "农田尽头的灰墙", "gray wall at farmland edge", "terrestrial", "低调农田边缘与远方巨墙，避免普通乡村杂乱。"),
    scene("lunar-dust-plain", "月面尘原", "lunar dust plain", "lunar", "无大气地表、细尘、硬影、黑蓝天空，适合月面庇护墙和环体。"),
    scene("low-orbit-maintenance-deck", "低轨维护平台", "low-orbit maintenance deck", "orbital", "真空中的轨道平台，有行星弧面、硬边光和金属结构。"),
    scene("orbital-ring-edge", "轨道环边缘", "orbital ring edge", "orbital", "低轨或环带边缘，结构延伸到远方，背景是行星或深色空间。"),
    scene("ringworld-inner-meadow", "环世界内壁草地", "ringworld inner meadow", "artificial-world", "草地沿内壁轻微弯曲，天空有人工弧度和支撑肋梁。"),
    scene("high-altitude-cloud-sea", "高空云海", "high-altitude cloud sea", "high-atmosphere", "平台、云层、稀薄空气和冷光，不能使用普通雨后草地逻辑。"),
    scene("concrete-plaza-after-rain", "雨后混凝土广场", "concrete plaza after rain", "industrial-edge", "空旷广场、积水、反光、远方巨构。"),
    scene("tundra-flatland", "苔原平地", "tundra flatland", "terrestrial", "低矮植被、冷空气、远方地平线和白灰巨构。"),
    scene("glacier-edge", "冰川边缘", "glacier edge", "terrestrial", "冰面、雪、冷蓝阴影和远处壳体。"),
    scene("dry-lake-bed", "干涸湖床", "dry lake bed", "terrestrial", "龟裂地表、远方结构和低饱和天空。"),
    scene("misty-valley-floor", "薄雾山谷底部", "misty valley floor", "terrestrial", "两侧山坡形成轴线，远处巨构被低雾切开。"),
    scene("black-basalt-coast", "黑色玄武岩海岸", "black basalt coast", "wetland", "黑色岩岸、浅水白沫、冷灰巨构。"),
    scene("grass-covered-runway", "被草覆盖的旧跑道", "grass-covered old runway", "industrial-edge", "旧跑道长线条被短草吞没，适合轨道电梯残桩和导流槽。"),
    scene("abandoned-sports-field", "废弃操场边界", "abandoned sports field boundary", "industrial-edge", "空旷场地、低矮看台、远方巨构，避免现代校园细节抢戏。"),
    scene("mountain-reservoir-gate", "山间水库闸口", "mountain reservoir gate", "industrial-edge", "山坡、静水、混凝土闸体和低云。"),
    scene("snowfield-horizon", "雪原地平线", "snowfield horizon", "terrestrial", "低地平线和大片白地表，适合白色阵列和巨墙。"),
    scene("desert-concrete-plain", "荒漠混凝土平原", "desert concrete plain", "terrestrial", "沙尘少量、冷灰混凝土平台，不要暖色沙漠大片饱和。"),
    scene("interior-service-hall", "内部维护大厅", "interior service hall", "interior-threshold", "巨型内部廊道、维护缝、尘埃、顶光和小人物。"),
    scene("artificial-night-side", "人工世界夜侧", "artificial world night side", "artificial-world", "不是赛博夜景，而是人工天穹暗面、少量尺度灯和冷阴影。"),
    scene("polar-salt-snow-hybrid", "极地盐雪平面", "polar salt-snow plane", "terrestrial", "雪、盐滩和浅水反光混合，适合极简留白。"),
  ],
  surfaceTextures: [
    texture("wet-short-grass", "湿润短草", "wet short grass", ["terrestrial", "wetland", "industrial-edge"], "低矮湿草贴地，带冷淡反光。"),
    texture("dry-short-grass", "干短草", "dry short grass", ["terrestrial", "industrial-edge"], "短草干燥低饱和，不形成长草丛。"),
    texture("wind-bent-grass", "被风压低的草浪", "wind-bent grass", ["terrestrial"], "草浪贴地形成方向。"),
    texture("moss-on-concrete", "混凝土上的苔藓", "moss on concrete", ["industrial-edge", "interior-threshold", "terrestrial"], "苔藓只沿裂缝出现。"),
    texture("rain-darkened-concrete", "雨后发暗混凝土", "rain-darkened concrete", ["industrial-edge", "wetland", "interior-threshold"], "混凝土被雨水压暗并有反光。"),
    texture("shallow-water-film", "极浅水膜", "shallow water film", ["wetland", "industrial-edge"], "薄水膜反射天空和巨构暗面。"),
    texture("salt-crust-reflection", "盐壳微反光", "salt crust reflection", ["wetland", "terrestrial"], "盐壳只给出低亮反光。"),
    texture("snow-crust", "硬雪壳", "snow crust", ["terrestrial"], "硬雪壳冷白、低饱和。"),
    texture("powder-lunar-dust", "月面细尘", "powder lunar dust", ["lunar"], "无风细尘和硬边足迹。"),
    texture("black-basalt-wet-rock", "湿黑玄武岩", "wet black basalt", ["wetland"], "黑色岩面带冷白水汽。"),
    texture("cracked-dry-lakebed", "干涸湖床裂纹", "cracked dry lakebed", ["terrestrial"], "裂纹低调，不变成荒漠主角。"),
    texture("rust-stained-concrete", "锈痕混凝土", "rust-stained concrete", ["industrial-edge", "terrestrial"], "少量锈痕沿墙面下流。"),
    texture("smooth-industrial-floor", "平滑工业地坪", "smooth industrial floor", ["industrial-edge", "interior-threshold"], "平整地坪提供尺度和反光。"),
    texture("fog-softened-gravel", "雾中碎石地", "fog-softened gravel", ["terrestrial", "industrial-edge"], "碎石被雾压低对比。"),
    texture("thin-ice-reflection", "薄冰反光", "thin ice reflection", ["terrestrial", "wetland"], "薄冰保留冷白倒影。"),
    texture("muddy-wetland-edge", "湿地泥边", "muddy wetland edge", ["wetland"], "泥边和浅水线建立前景。"),
    texture("grass-over-old-asphalt", "旧沥青上覆盖短草", "short grass over old asphalt", ["industrial-edge"], "旧跑道被短草吞没。"),
    texture("water-stained-dam-face", "水痕坝面", "water-stained dam face", ["industrial-edge", "wetland"], "坝面水痕形成竖向尺度。"),
    texture("cold-metal-deck", "冷金属平台", "cold metal deck", ["orbital", "high-atmosphere", "industrial-edge"], "冷金属甲板有细维护线。"),
    texture("cloud-surface-softness", "云层柔软边缘", "cloud surface softness", ["high-atmosphere", "artificial-world"], "云层像地表一样被巨构压住。"),
  ],
  foregroundElements: [
    item("thin-grass-ridge", "近处细草坡脊", "thin grass ridge", "低草坡脊作为前景起点。", "a thin grass ridge anchors the foreground"),
    item("wet-concrete-edge", "湿混凝土边缘", "wet concrete edge", "湿亮硬边切入画面。", "a wet concrete edge enters the frame"),
    item("small-puddle-reflection", "小水洼反光", "small puddle reflection", "小水洼只反射局部边缘。", "small puddles reflect only a restrained edge"),
    item("broken-fence-line", "破损低矮围栏线", "broken low fence line", "低矮围栏作为尺度线。", "a low broken fence acts as scale line"),
    item("foreground-shadow-band", "前景巨构阴影带", "foreground mega-shadow band", "前景被巨影压住。", "foreground is pressed by a massive shadow"),
    item("low-rocks", "低矮石块", "low rocks", "低石块只做尺度入口。", "low rocks serve only as scale entry"),
    item("snow-drift-edge", "雪堆边缘", "snow drift edge", "雪边缘形成冷白前景。", "a snow drift edge forms a cold white foreground"),
    item("abandoned-road-stripe", "旧道路残线", "abandoned road stripe", "旧线条指向远方。", "old road markings point into distance"),
    item("cable-fragment", "断裂缆索片段", "cable fragment", "缆索碎片低矮、稀少。", "cable fragments stay low and sparse"),
    item("concrete-stair-edge", "混凝土阶梯边缘", "concrete stair edge", "阶梯边缘提供框景。", "a stair edge provides framing"),
    item("shallow-water-line", "浅水线", "shallow water line", "浅水线拉开水平轴。", "a shallow waterline extends a horizontal axis"),
    item("grass-seed-heads", "近处草籽轮廓", "grass seed silhouettes", "草籽轮廓非常少，不抢画面。", "few grass seed silhouettes, never dominant"),
    item("no-foreground-clean", "无前景，保持干净", "no foreground, clean", "前景清空，保留呼吸。", "foreground is cleared for quiet breathing space"),
    item("dark-interior-lip", "内部暗色门槛边缘", "dark interior threshold lip", "内部暗边压住画面。", "a dark interior lip presses into the frame"),
    item("metal-deck-railing", "极简金属平台边栏", "minimal metal deck railing", "栏杆作为尺度参照。", "railing acts as a scale reference"),
    item("distant-scale-lights", "远方少量尺度灯", "few distant scale lights", "极少灯点证明尺度。", "very few lights prove scale"),
    item("low-mist-layer", "贴地薄雾层", "low mist layer", "雾层贴地，不吞掉主体。", "mist stays low and never swallows the subject"),
    item("ice-crack-line", "冰面裂线", "ice crack line", "冰裂作为引导线。", "ice cracks work as guide lines"),
    item("basalt-shore-rocks", "海岸黑石", "basalt shore rocks", "黑石低矮克制。", "black rocks remain low and restrained"),
    item("service-panel-fragment", "维护面板碎片", "service panel fragment", "面板碎片只做尺度。", "panel fragments serve scale only"),
  ],
  weatherStates: [
    weather("after-rain-thin-mist", "雨后薄雾", "after-rain thin mist", ["terrestrial", "wetland", "industrial-edge"], "雨已经停，空气湿润透明，远处有轻薄雾层，地表有少量反光。"),
    weather("wet-air-clear", "雨后清透空气", "clear wet air after rain", ["terrestrial", "wetland", "industrial-edge"], "没有明显雾，空气像被洗过，湿地和混凝土反光清楚。"),
    weather("milk-white-overcast", "乳白阴天", "milk-white overcast", ["terrestrial", "wetland", "industrial-edge"], "天空均匀乳白，光线冷而散，阴影柔软但仍有方向感。"),
    weather("low-cloud-haze", "低云压境", "low-cloud haze", ["terrestrial", "high-atmosphere", "industrial-edge"], "低云靠近巨构上缘，压低天空，远方对比降低。"),
    weather("clear-after-wind", "风后清朗", "clear after wind", ["terrestrial"], "风吹散湿气或尘霾，远方结构清楚，草地有方向性。"),
    weather("thin-ground-mist", "贴地薄雾", "thin ground mist", ["terrestrial", "wetland"], "雾只贴近地表，不吞掉巨构轮廓，用来分层。"),
    weather("distant-rain-curtain", "远方雨幕", "distant rain curtain", ["terrestrial", "wetland", "industrial-edge"], "雨在远方形成灰色幕布，当前画面不处于暴雨中。"),
    weather("light-snow-haze", "轻雪雾", "light snow haze", ["terrestrial"], "少量雪雾削弱远方对比，适合白色巨构和雪原。"),
    weather("polar-clear-air", "极寒清澈空气", "polar clear air", ["terrestrial"], "极冷、干净、低湿度，轮廓硬，颜色极淡。"),
    weather("salt-fog", "盐雾", "salt fog", ["wetland", "terrestrial"], "海岸、盐滩或浅水上方的低饱和白雾。"),
    weather("dust-in-light", "光中尘埃", "dust in light", ["interior-threshold", "industrial-edge", "terrestrial"], "尘埃只在光束中可见，适合内部空庭和门槛光。"),
    weather("interior-dust-stillness", "内部静尘", "interior dust stillness", ["interior-threshold"], "巨构内部静止空气和细尘，不出现户外天气。"),
    weather("artificial-condensation", "人工凝结雾", "artificial condensation", ["interior-threshold", "artificial-world"], "人工环境中的冷凝水汽，克制、局部，不像自然云海。"),
    weather("cloud-sea-still", "静止云海", "still cloud sea", ["high-atmosphere", "artificial-world"], "云层像地表一样铺开，被平台或巨构压住。"),
    weather("high-altitude-thin-air", "高空稀薄空气", "high-altitude thin air", ["high-atmosphere"], "云层下方或平台边缘，空气透明但对比偏冷。"),
    weather("vacuum-none", "真空无天气", "vacuum, no weather", ["orbital", "lunar"], "没有雨、雾、云、风、蓝天白云，只有光照和阴影。"),
    weather("ice-crystal-glint", "冰晶微光", "ice-crystal glint", ["orbital", "lunar", "high-atmosphere"], "少量冰晶或冷微粒反射硬光，不形成天气云雾。"),
    weather("lunar-dust-still", "月尘静止", "still lunar dust", ["lunar"], "无风，无大气，尘土只作为地表质感，不形成漂浮雾。"),
    weather("artificial-night-still", "人工夜侧静止", "still artificial night side", ["artificial-world"], "受控人工环境的暗面，没有城市霓虹，只有少量尺度灯。"),
    weather("dry-cold-haze", "干冷灰霾", "dry cold haze", ["terrestrial", "industrial-edge"], "干冷空气中的低对比灰霾，不是污染大片黄雾。"),
    weather("valley-mist-layer", "山谷薄雾层", "valley mist layer", ["terrestrial"], "雾层留在山谷或坡脚，巨构上部清晰。"),
    weather("ocean-spray-haze", "海岸水汽", "ocean spray haze", ["wetland"], "海岸或防波门附近的低白水汽，画面冷而潮湿。"),
  ],
  lightingSetups: [
    light("pale-diffuse-overcast", "苍白漫射光", "pale diffuse overcast", ["terrestrial", "wetland", "industrial-edge"], ["soft-ground-shadow", "horizontal-mega-shadow", "edge-of-shadow"], "冷白、柔和、无强烈太阳形状，但仍保留巨构体积。"),
    light("cold-morning-rake", "清晨冷斜光", "cold morning raking light", ["terrestrial", "wetland", "industrial-edge"], ["long-cast-shadow", "diagonal-mega-shadow", "tower-shadow-across-ground"], "低角度冷光掠过地表，显出草坡、墙面和雨痕。"),
    light("low-angle-side-light", "低角度侧光", "low-angle side light", ["terrestrial", "industrial-edge"], ["diagonal-mega-shadow", "long-cast-shadow", "edge-of-shadow"], "横向侧光让巨构一侧亮、一侧暗，适合体块和长影。"),
    light("cloud-gap-light", "云缝光", "cloud gap light", ["terrestrial", "wetland", "industrial-edge", "high-atmosphere"], ["edge-of-shadow", "cloud-shadow", "wet-reflection-shadow"], "光从云层裂缝中落下，但避免神圣戏剧化，保持冷淡。"),
    light("weak-backlit-edge", "弱背光边缘", "weak backlit edge", ["terrestrial", "wetland", "industrial-edge", "interior-threshold"], ["edge-of-shadow", "vertical-drop-shadow"], "主体大多在暗面，只在边缘有冷白轮廓光。"),
    light("slit-light", "缝隙光", "slit light", ["interior-threshold", "artificial-world", "terrestrial"], ["framed-shadow", "edge-of-shadow", "interior-pool-shadow"], "光从巨构缝隙、门框或壳体边缘泄出，形成窄亮区。"),
    light("backlit-rim", "背光轮廓", "backlit rim", ["terrestrial", "interior-threshold", "artificial-world"], ["edge-of-shadow", "long-cast-shadow"], "太阳或强光在巨构后方，强调轮廓和人物剪影。"),
    light("high-key-cold-light", "高调冷白光", "high-key cold light", ["terrestrial", "wetland", "lunar", "high-atmosphere"], ["minimal-pale-shadow", "edge-of-shadow"], "整体明亮但低饱和，适合雪原、盐滩和绝对留白。"),
    light("hard-solar-rim", "硬边太阳光", "hard solar rim", ["orbital", "lunar", "high-atmosphere"], ["hard-vacuum-shadow", "long-cast-shadow"], "真空或无大气环境中的直接太阳光，阴影边缘清楚。"),
    light("earth-reflected-light", "地球反照光", "earth-reflected light", ["orbital", "lunar"], ["planet-bounce-shadow", "hard-vacuum-shadow"], "低轨或月面场景中由行星反射来的冷蓝弱光。"),
    light("eclipse-edge-light", "日食边缘光", "eclipse edge light", ["orbital", "lunar", "high-atmosphere"], ["eclipse-shadow-band", "hard-vacuum-shadow"], "巨大遮挡体挡住主光，只留下冷硬边缘光。"),
    light("overhead-cold-light", "顶部冷光", "overhead cold light", ["interior-threshold", "artificial-world"], ["vertical-drop-shadow", "interior-pool-shadow"], "内部空庭或高处开口落下的冷光。"),
    light("reflected-water-light", "水面反射光", "reflected water light", ["wetland", "industrial-edge"], ["wet-reflection-shadow", "soft-ground-shadow"], "浅水、湿地、盐滩把天空和巨构暗面反射回去。"),
    light("cloud-reflected-light", "云层反射光", "cloud-reflected light", ["high-atmosphere", "artificial-world"], ["cloud-shadow", "vertical-drop-shadow"], "高空云海把冷白光反射到巨构底部。"),
    light("artificial-scale-light", "尺度灯冷光", "artificial scale light", ["interior-threshold", "artificial-world", "orbital"], ["interior-pool-shadow", "edge-of-shadow"], "少量维护灯或尺度灯提供极微弱参照，不形成赛博霓虹。"),
    light("twilight-cold-band", "冷暮光带", "twilight cold band", ["terrestrial", "wetland", "industrial-edge"], ["long-cast-shadow", "horizontal-mega-shadow"], "低太阳或地平线冷光带，适合远方剪影和灰蓝天空。"),
    light("noon-white-flat", "正午白平光", "noon white flat light", ["terrestrial", "wetland", "industrial-edge"], ["minimal-pale-shadow", "soft-ground-shadow"], "高角度白光，减少戏剧性，强调块体和空旷。"),
    light("understructure-bounce-light", "巨构底部反跳光", "understructure bounce light", ["high-atmosphere", "artificial-world", "interior-threshold"], ["vertical-drop-shadow", "cloud-shadow"], "地表或云层把微弱冷光反射到巨构底面。"),
  ],
  skyCosmos: [
    sky("wide-pale-sky", "宽阔苍白天空", "wide pale sky", ["terrestrial", "wetland", "industrial-edge"], "大面积低饱和浅灰蓝天空，但必须被巨构、云带或阴影组织。"),
    sky("pale-high-clouded-sky", "苍白高云天空", "pale high-clouded sky", ["terrestrial", "wetland", "industrial-edge"], "高层薄云与冷白光，适合低地平线远距构图。"),
    sky("low-cloud-ceiling", "低云天花板", "low-cloud ceiling", ["terrestrial", "high-atmosphere", "industrial-edge"], "低云压住巨构上缘，天空像低矮天花板。"),
    sky("layered-cloud-bands", "层状云带", "layered cloud bands", ["terrestrial", "wetland", "high-atmosphere"], "横向云带强化画面压缩和远方尺度。"),
    sky("half-occluded-sky", "半遮挡天空", "half-occluded sky", ["terrestrial", "wetland", "industrial-edge", "high-atmosphere", "interior-threshold"], "天空被巨构遮住一部分，避免空白松散。"),
    sky("compressed-cloud-ceiling", "压缩云顶", "compressed cloud ceiling", ["high-atmosphere", "artificial-world", "terrestrial"], "云层像被巨构压低，适合平台和遮阳结构。"),
    sky("white-empty-sky", "白色空天", "white empty sky", ["terrestrial", "wetland"], "极简白天，但必须有清楚的巨构边缘、地平线或影子锚点。"),
    sky("restrained-cosmos", "克制深空", "restrained cosmos", ["orbital", "lunar", "artificial-world"], "少量星点或无星深色背景，不做太空歌剧。"),
    sky("low-orbit-black-blue", "低轨黑蓝背景", "low-orbit black-blue backdrop", ["orbital"], "接近行星的黑蓝空间，配合硬边光和结构轮廓。"),
    sky("daylight-planet-arc", "白昼行星弧面", "daylight planetary arc", ["orbital"], "远方或下方行星弧面提供反照光和尺度。"),
    sky("lunar-black-sky", "月面黑色天空", "lunar black sky", ["lunar"], "无大气黑色天空，禁止云、雨、雾、普通晴天。"),
    sky("artificial-inner-sky", "人工内壁天空", "artificial inner sky", ["artificial-world", "interior-threshold"], "人工世界或巨构内部的受控天空，有轻微曲率或肋梁。"),
    sky("occluded-interior-sky", "内部被遮挡天光", "occluded interior sky", ["interior-threshold"], "只有高处开口或缝隙里的窄小天光。"),
    sky("cloud-sea-horizon", "云海地平线", "cloud sea horizon", ["high-atmosphere", "artificial-world"], "云海像地表一样铺开，远方与天空融合。"),
    sky("eclipse-darkened-sky", "日食暗化天空", "eclipse-darkened sky", ["orbital", "lunar", "high-atmosphere"], "主光被遮挡，天空降低亮度，边缘光清晰。"),
    sky("curved-artificial-horizon", "弯曲人工地平线", "curved artificial horizon", ["artificial-world"], "环世界或内壁地貌的轻微曲率，避免夸张奇幻。"),
  ],
  shadowModes: [
    shadow("horizontal-mega-shadow", "横向巨影", "horizontal mega-shadow", ["pale-diffuse-overcast", "twilight-cold-band"], "巨构在地表或云层上投下一条横向冷灰阴影，压住画面下部或中部。"),
    shadow("diagonal-mega-shadow", "对角巨影", "diagonal mega-shadow", ["cold-morning-rake", "low-angle-side-light"], "阴影从一角斜切到远方，既是光影也是引导线。"),
    shadow("tower-shadow-across-ground", "塔影跨地", "tower shadow across ground", ["cold-morning-rake", "low-angle-side-light"], "高塔或方尖碑的长影跨过整个地表，人物可位于影子边缘。"),
    shadow("edge-of-shadow", "亮暗边界", "edge of shadow", ["pale-diffuse-overcast", "cloud-gap-light", "weak-backlit-edge", "slit-light"], "人物、道路或草坡位于巨构阴影边缘，用亮暗分界证明尺度。"),
    shadow("framed-shadow", "框景阴影", "framed shadow", ["slit-light"], "门框、环体、圆筒或穹壳内部形成暗框。"),
    shadow("vertical-drop-shadow", "垂直压落阴影", "vertical drop shadow", ["weak-backlit-edge", "overhead-cold-light", "understructure-bounce-light"], "上方平台或壳体把暗面直接压到地表、云层或内部空间。"),
    shadow("wet-reflection-shadow", "湿地反光阴影", "wet reflection shadow", ["cloud-gap-light", "reflected-water-light"], "水面或湿地同时反射巨构和吞入暗影。"),
    shadow("cloud-shadow", "云层阴影", "cloud shadow", ["cloud-gap-light", "cloud-reflected-light", "understructure-bounce-light"], "阴影落在云海或低云上，而非普通地表。"),
    shadow("hard-vacuum-shadow", "真空硬边阴影", "hard vacuum shadow", ["hard-solar-rim", "earth-reflected-light", "eclipse-edge-light"], "无大气环境中的清晰黑影，边缘利落。"),
    shadow("planet-bounce-shadow", "行星反照弱影", "planet bounce shadow", ["earth-reflected-light"], "低轨或月面中，行星反照让暗面带冷蓝弱光。"),
    shadow("eclipse-shadow-band", "日食影带", "eclipse shadow band", ["eclipse-edge-light"], "遮光结构或行星遮挡形成宽阔暗带。"),
    shadow("long-cast-shadow", "低光长影", "long cast shadow", ["cold-morning-rake", "low-angle-side-light", "backlit-rim", "twilight-cold-band"], "低角度光源形成长而清楚的影子。"),
    shadow("minimal-pale-shadow", "极淡白影", "minimal pale shadow", ["high-key-cold-light", "noon-white-flat"], "雪地、盐滩或高调白光下的浅淡阴影。"),
    shadow("ridge-shadow", "山脊阴影", "ridge shadow", ["cold-morning-rake", "low-angle-side-light"], "巨构和地形共同形成沿山坡展开的阴影。"),
    shadow("interior-pool-shadow", "内部暗池", "interior pool shadow", ["slit-light", "overhead-cold-light", "artificial-scale-light"], "巨构内部地面或墙面形成大片冷暗区域。"),
    shadow("curved-ring-shadow", "环形弧影", "curved ring shadow", ["hard-solar-rim", "reflected-water-light"], "环体、圆筒、碟面或轨道结构投下弧形阴影。"),
    shadow("cable-line-shadow", "缆索细影", "cable line shadow", ["cold-morning-rake", "low-angle-side-light"], "缆索或竖向结构投下细长线状阴影。"),
    shadow("soft-ground-shadow", "柔和地面阴影", "soft ground shadow", ["pale-diffuse-overcast", "noon-white-flat", "reflected-water-light"], "阴天或雾天中仍保留柔和的大尺度暗部。"),
  ],
  figureScales: [
    figureScale("tiny-witness", "极小见证者", "tiny witness", "人物只占画面极小比例，像一个尺度点。", "人物极小，只作为尺度证词，不抢占画面。", "The person is tiny, only a scale witness, never taking over the frame."),
    figureScale("distant-single-person", "远处单人", "distant single person", "一个人站在地表窄带或阴影边缘。", "远处只有一个小人，安静站立，强化巨构尺度。", "A single distant person stands quietly on a narrow ground band or shadow edge."),
    figureScale("two-or-three-people", "两三人小组", "two or three people", "两到三个人分散站立，不形成队伍或人群。", "只有两三个人，彼此分散，不拥挤。", "Only two or three people, scattered and never crowded."),
    figureScale("tiny-vehicle", "微小车辆", "tiny vehicle", "车辆像一个小尺度点，不能成为科幻载具主角。", "远处有一辆极小车辆，仅作为尺度参照。", "A tiny distant vehicle appears only as a scale reference."),
    figureScale("animal-scale", "动物尺度参照", "animal scale reference", "鹿、狗、鸟群或牛羊等微小生命作为尺度参照。", "使用小型动物作为尺度参照，避免戏剧化。", "Small animals provide scale without drama."),
    figureScale("no-human-scale-only", "无人物，仅保留尺度物", "no human, scale objects only", "没有人物，用灯点、道路、门、车辆或栏杆证明尺度。", "没有人物，使用远处尺度灯、道路或小型参照物证明巨构巨大。", "No person; distant lights, road, door seams, or small objects prove scale."),
  ],
  figureOrientations: [
    item("standing-looking-up", "站立仰望", "standing and looking up", "人物安静仰望巨构。", "the figure quietly looks up at the megastructure"),
    item("walking-toward-structure", "向巨构缓慢行走", "walking slowly toward the structure", "行动缓慢低动态。", "movement is slow and low-motion"),
    item("standing-at-shadow-edge", "站在阴影边缘", "standing at shadow edge", "人物位于亮暗边界。", "the figure stands at the light-dark boundary"),
    item("paused-on-ridge", "停在坡顶", "paused on ridge", "人物停在坡顶成为尺度点。", "the figure pauses on a ridge as a scale point"),
    item("facing-away", "背对镜头", "facing away", "避免表情表演。", "avoids expressive acting"),
    item("side-silhouette", "侧身剪影", "side silhouette", "只保留轮廓。", "only a silhouette remains"),
    item("looking-through-frame", "望向门框或环体内部", "looking through frame or ring", "人物看向开口内部。", "the figure looks into the opening"),
    item("near-waterline", "站在水线附近", "near waterline", "靠近反光水线。", "near the reflective waterline"),
    item("no-dramatic-pose", "无戏剧姿势", "no dramatic pose", "姿态克制。", "pose remains restrained"),
    item("barely-visible-dot", "几乎只是一个点", "barely visible dot", "人物几乎不可见。", "the figure is almost invisible"),
  ],
  scaleReferences: [
    item("single-human", "单个人", "single human", "单人证明尺度。", "one person proves scale"),
    item("small-group", "两三人", "two or three people", "极小分散小组。", "a tiny scattered group"),
    item("tiny-vehicle", "极小车辆", "tiny vehicle", "车辆只作为尺度点。", "vehicle only as scale point"),
    item("animal", "动物", "animal", "小型生命作为尺度参照。", "small life as scale reference"),
    item("maintenance-lights", "维护尺度灯", "maintenance scale lights", "少量冷白灯点。", "few cold white light points"),
    item("door-seams", "门缝或维护缝", "door or maintenance seams", "缝线证明体量。", "seams prove mass"),
    item("railings", "栏杆", "railings", "栏杆给出人类尺度。", "railings provide human scale"),
    item("road-line", "道路线", "road line", "道路细线证明距离。", "road line proves distance"),
    item("windowless-panels", "无窗面板分割", "windowless panel divisions", "面板分割作为尺度。", "panel divisions provide scale"),
    item("none-clean", "无额外参照", "no extra reference", "保持极简，仅靠构图证明尺度。", "minimal, scale proved only by composition"),
  ],
  secondaryMoods: [
    item("quiet-awe", "宁静敬畏", "quiet awe", "安静但有压倒性尺度。", "quiet with overwhelming scale"),
    item("post-human-solitude", "后人类孤独", "post-human solitude", "文明之后的孤独。", "solitude after civilization"),
    item("cosmic-sublime", "宇宙崇高", "cosmic sublime", "尺度暗示轨道、行星或因果边界。", "scale implies orbit, planet, or causal boundary"),
    item("world-boundary", "世界边界感", "world-boundary feeling", "像站在可见世界尽头。", "like standing at the end of the visible world"),
    item("bright-clear", "明亮通透", "bright clarity", "空气清澈但低饱和。", "clear air with low saturation"),
    item("civilization-relic", "文明遗迹", "civilization relic", "结构巨大、失去原功能。", "huge structure no longer serving its function"),
    item("pilgrimage", "朝圣感", "pilgrimage", "人物缓慢、克制地朝向主体。", "the figure faces the subject slowly and quietly"),
    item("beyond-causality", "因果之外", "beyond causality", "空间或光线有轻微不可解释感。", "space or light feels slightly unexplainable"),
    item("beyond-horizon", "视界之外", "beyond the horizon", "巨构标记不可见边界。", "the megastructure marks an invisible boundary"),
    item("beyond-light-cone", "光锥之外", "beyond the light cone", "观测、边界、距离和不可抵达感共同成立。", "observation, boundary, distance, and unreachable scale align"),
  ],
  negativePrompt: clone(DEFAULT_NEGATIVE),
};

const VOCAB_LABELS = {
  moodBases: "情绪基底",
  aspectRatios: "画面比例",
  compositionSchemes: "构图方案",
  structurePositions: "巨构位置",
  leadingLines: "路径 / 引导线",
  figurePlacements: "人物位置",
  megastructureFamilies: "巨构族",
  megastructureTypes: "巨构类型",
  sceneDomains: "场景域",
  sceneBases: "场景基底",
  surfaceTextures: "场景元素质感",
  foregroundElements: "前景元素",
  weatherStates: "天气 / 空气",
  lightingSetups: "光源方向",
  skyCosmos: "天空 / 宇宙背景",
  shadowModes: "巨构阴影",
  figureScales: "人物大小",
  figureOrientations: "人物朝向",
  scaleReferences: "尺度参照",
  secondaryMoods: "辅助情绪",
  negativePrompt: "负面提示词",
};

const EDITABLE_LISTS = Object.keys(VOCAB_LABELS).filter((key) => key !== "negativePrompt");
const elements = {};
let activeEditKey = null;
let state = { data: clone(DATA), options: null, workflowOpen: true };

function mood(value, labelZh, labelEn, descriptionZh, descriptionEn, aspectRatios, compositions, families, domains, weather, lighting, skyValues, shadows, paletteZh, paletteEn, negZh, negEn, promptSeedZh, promptSeedEn) {
  return {
    value, labelZh, labelEn, descriptionZh, descriptionEn,
    recommendedAspectRatios: aspectRatios,
    recommendedCompositions: compositions,
    recommendedMegastructureFamilies: families,
    recommendedSceneDomains: domains,
    recommendedWeatherStates: weather,
    recommendedLightingSetups: lighting,
    recommendedSkyCosmos: skyValues,
    recommendedShadowModes: shadows,
    paletteZh,
    paletteEn,
    negativeAdditionsZh: negZh,
    negativeAdditionsEn: negEn,
    promptSeedZh,
    promptSeedEn,
  };
}

function aspect(value, labelZh, labelEn, descriptionZh, descriptionEn, arParam, recommendedCompositions) {
  return { value, labelZh, labelEn, descriptionZh, descriptionEn, arParam, recommendedCompositions };
}

function composition(value, labelZh, labelEn, descriptionZh, descriptionEn, screen, skyRange, ground, horizon) {
  return {
    value, labelZh, labelEn, descriptionZh, descriptionEn,
    previewRule: value,
    recommendedScreenCoverageRange: screen,
    recommendedSkyOcclusionRange: skyRange,
    recommendedGroundShareRange: ground,
    recommendedHorizonPressureRange: horizon,
  };
}

function family(value, labelZh, labelEn, descriptionZh) {
  return { value, labelZh, labelEn, descriptionZh, descriptionEn: descriptionZh };
}

function mt(value, labelZh, labelEn, familyValue, domains, shadows, promptZh) {
  const promptEn = labelEn.replace(/-/g, " ");
  return {
    value,
    labelZh,
    labelEn,
    family: familyValue,
    compatibleDomains: domains,
    recommendedShadowModes: shadows,
    descriptionZh: promptZh,
    descriptionEn: `${promptEn}, an immense restrained post-human structure with clear physical mass, surface scale, and shadow behavior.`,
    promptZh: `主体是【${labelZh}】：${promptZh}`,
    promptEn: `The main subject is [${labelEn}]: an immense restrained post-human structure, physically massive, spatially clear, and defined by shadow, surface scale, and edge light.`,
  };
}

function scene(value, labelZh, labelEn, domain, descriptionZh) {
  return { value, labelZh, labelEn, domain, descriptionZh, descriptionEn: descriptionZh };
}

function texture(value, labelZh, labelEn, domains, descriptionZh) {
  return { value, labelZh, labelEn, domains, descriptionZh, descriptionEn: descriptionZh };
}

function weather(value, labelZh, labelEn, domains, descriptionZh) {
  return { value, labelZh, labelEn, domains, descriptionZh, descriptionEn: descriptionZh };
}

function light(value, labelZh, labelEn, domains, recommendedShadowModes, descriptionZh) {
  return { value, labelZh, labelEn, domains, recommendedShadowModes, descriptionZh, descriptionEn: descriptionZh };
}

function sky(value, labelZh, labelEn, domains, descriptionZh) {
  return { value, labelZh, labelEn, domains, descriptionZh, descriptionEn: descriptionZh };
}

function shadow(value, labelZh, labelEn, compatibleLighting, descriptionZh) {
  return { value, labelZh, labelEn, compatibleLighting, descriptionZh, descriptionEn: descriptionZh };
}

function figureScale(value, labelZh, labelEn, descriptionZh, promptZh, promptEn) {
  return { value, labelZh, labelEn, descriptionZh, descriptionEn: descriptionZh, promptZh, promptEn };
}

function item(value, labelZh, labelEn, descriptionZh, descriptionEn = descriptionZh) {
  return { value, labelZh, labelEn, descriptionZh, descriptionEn };
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function boot() {
  bindElements();
  state = loadState();
  state.options = validateOptions(state.options || makeDefaultOptions(state.data), state.data).options;
  bindEvents();
  renderApp();
}

function loadState() {
  const fallback = { data: clone(DATA), options: makeDefaultOptions(clone(DATA)), workflowOpen: true };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const data = sanitizeData(parsed.data || DATA);
      return {
        data,
        options: validateOptions(parsed.options || makeDefaultOptions(data), data).options,
        workflowOpen: parsed.workflowOpen !== false,
      };
    }
    const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacy) {
      const parsed = JSON.parse(legacy);
      const data = sanitizeData(parsed.data || DATA);
      const migrated = migrateOptionsV1ToV2(parsed.options || {}, data);
      return { data, options: validateOptions(migrated, data).options, workflowOpen: parsed.workflowOpen !== false };
    }
  } catch (error) {
    console.warn("Failed to load saved config", error);
  }
  return fallback;
}

function sanitizeData(data) {
  const next = clone(DATA);
  EDITABLE_LISTS.forEach((key) => {
    if (Array.isArray(data?.[key]) && data[key].length) {
      next[key] = data[key].map((entry) => normalizeItem(entry, key));
    }
  });
  if (data?.negativePrompt && typeof data.negativePrompt === "object") {
    next.negativePrompt = {
      zh: String(data.negativePrompt.zh || DEFAULT_NEGATIVE.zh),
      en: String(data.negativePrompt.en || DEFAULT_NEGATIVE.en),
    };
  }
  return next;
}

function normalizeItem(entry, key) {
  const itemValue = entry.value || uniqueValue(key, entry.labelEn || entry.labelZh || "custom");
  const normalized = {
    value: itemValue,
    labelZh: entry.labelZh || entry.zh || entry.label || itemValue,
    labelEn: entry.labelEn || entry.en || entry.label || itemValue,
    descriptionZh: entry.descriptionZh || entry.zh || entry.labelZh || "",
    descriptionEn: entry.descriptionEn || entry.en || entry.labelEn || "",
  };
  Object.keys(entry).forEach((field) => {
    if (!(field in normalized) && !["zh", "en", "label"].includes(field)) normalized[field] = entry[field];
  });
  return normalized;
}

function migrateOptionsV1ToV2(oldOptions, data) {
  const migrated = makeDefaultOptions(data);
  const aspectMap = { "cinema-239-100": "cinema-239-1", "photo-3-2": "wide-16-9", "social-4-5": "vertical-4-5" };
  const compositionMap = {
    "pilgrimage-distance": "low-horizon-pilgrimage",
    "low-horizon": "low-horizon-pilgrimage",
    "horizontal-slice": "horizontal-compression",
    "diagonal-pressure": "diagonal-approach",
    "framed-threshold": "framed-threshold",
    "negative-space": "negative-space-anchor",
    "edge-intrusion": "edge-intrusion",
    "foreground-occlusion": "foreground-occlusion",
    "vertical-axis": "central-monolith",
    "high-angle": "valley-axis",
  };
  const sceneMap = {
    "short-grassland": "low-hill-grassland",
    "abandoned-industrial": "concrete-plaza-after-rain",
    "planetary-facility": "wind-eroded-plain",
    "cloud-sea-platform": "high-altitude-cloud-sea",
    "low-orbit-edge": "low-orbit-maintenance-deck",
    "lunar-surface": "lunar-dust-plain",
    "cooling-tower-ruins": "mossy-concrete-slope",
    "abandoned-launch-site": "grass-covered-runway",
    "observation-array-plain": "plateau-tableland",
    "icefield": "glacier-edge",
    "wetland-reflection": "salt-flat-mirror",
    "cosmic-surface-boundary": "orbital-ring-edge",
    "ringworld-inner-wall": "ringworld-inner-meadow",
    "orbital-elevator-base": "grass-covered-runway",
    "post-human-ecology": "mossy-concrete-slope",
  };
  const lightMap = {
    "high-key-daylight": ["clear-after-wind", "noon-white-flat"],
    "after-rain-air": ["after-rain-thin-mist", "pale-diffuse-overcast"],
    "pale-boundary-light": ["milk-white-overcast", "pale-diffuse-overcast"],
    "cold-high-altitude": ["high-altitude-thin-air", "hard-solar-rim"],
    "soft-morning-rake": ["clear-after-wind", "cold-morning-rake"],
    "reflected-skylight": ["wet-air-clear", "reflected-water-light"],
    "optical-bending-glow": ["dry-cold-haze", "weak-backlit-edge"],
  };
  if (oldOptions.moodTags?.length) migrated.secondaryMoods = oldOptions.moodTags.slice(0, 4).map(mapSecondaryMood).filter(Boolean);
  if (oldOptions.aspectRatio) migrated.aspectRatio = aspectMap[oldOptions.aspectRatio] || oldOptions.aspectRatio;
  if (oldOptions.compositionScheme) migrated.compositionScheme = compositionMap[oldOptions.compositionScheme] || migrated.compositionScheme;
  if (oldOptions.sceneBase) migrated.sceneBase = sceneMap[oldOptions.sceneBase] || migrated.sceneBase;
  if (oldOptions.megastructureShare) {
    const oldShare = Number(oldOptions.megastructureShare);
    migrated.screenCoverage = clamp(oldShare, 35, 75);
    migrated.visualWeight = clamp(oldShare + 10, 55, 95);
  }
  if (oldOptions.groundShare) migrated.groundShare = clamp(Number(oldOptions.groundShare), 10, 40);
  if (oldOptions.lightingWeather && lightMap[oldOptions.lightingWeather]) {
    [migrated.weatherState, migrated.lightingSetup] = lightMap[oldOptions.lightingWeather];
  }
  migrated.language = oldOptions.language || migrated.language;
  migrated.modelPreset = oldOptions.modelPreset || migrated.modelPreset;
  migrated.includeNegative = oldOptions.includeNegative !== false;
  return migrated;
}

function mapSecondaryMood(value) {
  const map = {
    serenity: "quiet-awe",
    awe: "quiet-awe",
    "poetic-solitude": "post-human-solitude",
    "world-boundary": "world-boundary",
    sacred: "pilgrimage",
    emptiness: "post-human-solitude",
    "post-human": "post-human-solitude",
    "cosmic-sublime": "cosmic-sublime",
    "bright-clear": "bright-clear",
    "civilization-relic": "civilization-relic",
    pilgrimage: "pilgrimage",
    "beyond-causality": "beyond-causality",
    "beyond-horizon": "beyond-horizon",
    "beyond-light-cone": "beyond-light-cone",
  };
  return map[value] || value;
}

function makeDefaultOptions(data = state.data) {
  const moodBase = firstValue(data.moodBases) || "pale-relic";
  const moodItem = getItem(data.moodBases, moodBase);
  const aspectRatio = firstAvailable(moodItem.recommendedAspectRatios, data.aspectRatios);
  const compositionScheme = firstAvailable(moodItem.recommendedCompositions, data.compositionSchemes);
  const megastructureFamily = firstAvailable(moodItem.recommendedMegastructureFamilies, data.megastructureFamilies);
  const sceneDomain = firstAvailable(moodItem.recommendedSceneDomains, data.sceneDomains);
  const sceneBase = firstByDomain(data.sceneBases, sceneDomain);
  const weatherState = firstAllowedRecommended(data.weatherStates, moodItem.recommendedWeatherStates, sceneDomain);
  const lightingSetup = firstAllowedRecommended(data.lightingSetups, moodItem.recommendedLightingSetups, sceneDomain);
  const skyCosmos = firstAllowedRecommended(data.skyCosmos, moodItem.recommendedSkyCosmos, sceneDomain);
  const shadowMode = firstCompatibleShadow(data, moodItem.recommendedShadowModes, lightingSetup, megastructureFamily);
  const compositionItem = getItem(data.compositionSchemes, compositionScheme);
  return {
    moodBase,
    aspectRatio,
    compositionScheme,
    structurePosition: firstValue(data.structurePositions),
    leadingLine: firstValue(data.leadingLines),
    figurePlacement: firstValue(data.figurePlacements),
    megastructureFamily,
    megastructureType: firstMegastructureType(data, megastructureFamily, sceneDomain),
    screenCoverage: 58,
    visualWeight: 85,
    skyOcclusion: 45,
    shadowFootprint: 50,
    groundShare: 22,
    horizonPressure: clamp(midRange(compositionItem.recommendedHorizonPressureRange, 72), 0, 100),
    sceneDomain,
    sceneBase,
    surfaceTexture: firstByDomain(data.surfaceTextures, sceneDomain),
    foregroundElement: firstValue(data.foregroundElements),
    weatherState,
    lightingSetup,
    skyCosmos,
    shadowMode,
    figureScale: firstValue(data.figureScales),
    figureOrientation: firstValue(data.figureOrientations),
    scaleReference: firstValue(data.scaleReferences),
    secondaryMoods: data.secondaryMoods.slice(0, 2).map((entry) => entry.value),
    language: "zh",
    modelPreset: "chatgpt",
    includeNegative: true,
    allowNonRecommended: true,
  };
}

function bindElements() {
  [
    "workflowDetails", "moodBase", "allowNonRecommended", "applyMoodButton", "moodRandomButton", "randomButton", "moodCard",
    "aspectRatio", "language", "compositionScheme", "structurePosition", "leadingLine", "figurePlacement", "horizonPressure", "horizonPressureValue",
    "megastructureFamily", "megastructureType", "screenCoverage", "screenCoverageValue", "visualWeight", "visualWeightValue", "skyOcclusion", "skyOcclusionValue", "shadowFootprint", "shadowFootprintValue",
    "sceneDomain", "sceneBase", "groundShare", "groundShareValue", "surfaceTexture", "foregroundElement",
    "weatherState", "lightingSetup", "skyCosmos", "shadowMode", "environmentHint",
    "figureScale", "figureOrientation", "scaleReference", "secondaryMoods",
    "modelPreset", "includeNegative", "copyButton", "resetButton", "batchButton", "downloadButton", "exportConfigButton", "importConfigButton", "restoreDefaultsButton", "importConfigInput",
    "positivePrompt", "negativePrompt", "negativePromptBlock", "constraintSummary", "compositionPreview", "batchList", "batchCount", "copyStatus", "modelBadge",
    "vocabModal", "modalTitle", "modalHelp", "modalList", "addVocabItemButton", "saveVocabButton", "cancelVocabButton", "closeModalButton",
  ].forEach((id) => {
    elements[id] = document.getElementById(id);
  });
}

function bindEvents() {
  const controls = [
    "moodBase", "allowNonRecommended", "aspectRatio", "language", "compositionScheme", "structurePosition", "leadingLine", "figurePlacement", "horizonPressure",
    "megastructureFamily", "megastructureType", "screenCoverage", "visualWeight", "skyOcclusion", "shadowFootprint",
    "sceneDomain", "sceneBase", "groundShare", "surfaceTexture", "foregroundElement",
    "weatherState", "lightingSetup", "skyCosmos", "shadowMode",
    "figureScale", "figureOrientation", "scaleReference", "modelPreset", "includeNegative",
  ];
  controls.forEach((id) => {
    elements[id].addEventListener("input", handleControlChange);
    elements[id].addEventListener("change", handleControlChange);
  });
  elements.secondaryMoods.addEventListener("change", handleControlChange);
  elements.workflowDetails.addEventListener("toggle", () => {
    state.workflowOpen = elements.workflowDetails.open;
    persistState();
  });
  elements.applyMoodButton.addEventListener("click", applyMoodRecommendation);
  elements.moodRandomButton.addEventListener("click", () => randomizeOptions({ lockMood: true }));
  elements.randomButton.addEventListener("click", () => randomizeOptions({ lockMood: false }));
  elements.copyButton.addEventListener("click", copyCurrentPrompt);
  elements.resetButton.addEventListener("click", resetCurrentOptions);
  elements.batchButton.addEventListener("click", () => generateBatch(10));
  elements.downloadButton.addEventListener("click", downloadTxt);
  elements.exportConfigButton.addEventListener("click", exportConfigJson);
  elements.importConfigButton.addEventListener("click", () => elements.importConfigInput.click());
  elements.importConfigInput.addEventListener("change", importConfigJson);
  elements.restoreDefaultsButton.addEventListener("click", restoreDefaultData);
  elements.addVocabItemButton.addEventListener("click", addVocabEditorRow);
  elements.saveVocabButton.addEventListener("click", saveVocabEditor);
  elements.cancelVocabButton.addEventListener("click", closeVocabEditor);
  elements.closeModalButton.addEventListener("click", closeVocabEditor);
  document.querySelectorAll("[data-vocab]").forEach((button) => {
    button.addEventListener("click", () => openVocabEditor(button.dataset.vocab));
  });
}

function handleControlChange(event) {
  const previous = state.options || makeDefaultOptions(state.data);
  const next = getSelectedOptions();
  if (event?.target?.id === "moodBase") {
    next.allowNonRecommended = previous.allowNonRecommended;
  }
  if (event?.target?.id === "megastructureFamily") {
    next.megastructureType = firstMegastructureType(state.data, next.megastructureFamily, next.sceneDomain);
  }
  if (event?.target?.id === "sceneDomain") {
    next.sceneBase = firstByDomain(state.data.sceneBases, next.sceneDomain);
  }
  state.options = next;
  renderApp();
}

function getSelectedOptions() {
  return {
    moodBase: elements.moodBase.value,
    aspectRatio: elements.aspectRatio.value,
    compositionScheme: elements.compositionScheme.value,
    structurePosition: elements.structurePosition.value,
    leadingLine: elements.leadingLine.value,
    figurePlacement: elements.figurePlacement.value,
    megastructureFamily: elements.megastructureFamily.value,
    megastructureType: elements.megastructureType.value,
    screenCoverage: Number(elements.screenCoverage.value),
    visualWeight: Number(elements.visualWeight.value),
    skyOcclusion: Number(elements.skyOcclusion.value),
    shadowFootprint: Number(elements.shadowFootprint.value),
    groundShare: Number(elements.groundShare.value),
    horizonPressure: Number(elements.horizonPressure.value),
    sceneDomain: elements.sceneDomain.value,
    sceneBase: elements.sceneBase.value,
    surfaceTexture: elements.surfaceTexture.value,
    foregroundElement: elements.foregroundElement.value,
    weatherState: elements.weatherState.value,
    lightingSetup: elements.lightingSetup.value,
    skyCosmos: elements.skyCosmos.value,
    shadowMode: elements.shadowMode.value,
    figureScale: elements.figureScale.value,
    figureOrientation: elements.figureOrientation.value,
    scaleReference: elements.scaleReference.value,
    secondaryMoods: Array.from(elements.secondaryMoods.querySelectorAll("input:checked")).map((input) => input.value),
    language: elements.language.value,
    modelPreset: elements.modelPreset.value,
    includeNegative: elements.includeNegative.checked,
    allowNonRecommended: elements.allowNonRecommended.checked,
  };
}

function renderApp() {
  const resolved = validateOptions(state.options || makeDefaultOptions(state.data), state.data);
  state.options = resolved.options;
  populateDynamicControls();
  applyOptionsToDom(state.options);
  renderSecondaryMoods();
  renderMoodCard();
  renderPrompt(resolved);
  persistState();
}

function renderPrompt(resolved = validateOptions(state.options, state.data)) {
  const options = resolved.options;
  const language = getEffectiveLanguage(options);
  const built = buildPromptBundle(options, language, resolved);
  elements.modelBadge.textContent = modelLabel(options.modelPreset);
  elements.positivePrompt.textContent = built.positive;
  elements.negativePrompt.textContent = buildNegativePrompt(language, options);
  elements.negativePromptBlock.classList.toggle("is-hidden", !options.includeNegative && options.modelPreset !== "sdxl");
  elements.environmentHint.textContent = resolved.environmentWarnings.length
    ? resolved.environmentWarnings.join(" ")
    : "当前环境组合合理：场景域、天气、光源、天空与阴影已互相匹配。";
  renderConstraintSummary(options, resolved);
  renderCompositionPreview(options, resolved, state.data);
}

function populateDynamicControls() {
  const options = state.options || makeDefaultOptions(state.data);
  const scene = getItem(state.data.sceneBases, options.sceneBase);
  const domain = scene.domain || options.sceneDomain;
  fillSelect(elements.moodBase, state.data.moodBases);
  fillSelect(elements.aspectRatio, state.data.aspectRatios);
  fillSelect(elements.compositionScheme, state.data.compositionSchemes);
  fillSelect(elements.structurePosition, state.data.structurePositions);
  fillSelect(elements.leadingLine, state.data.leadingLines);
  fillSelect(elements.figurePlacement, state.data.figurePlacements);
  fillSelect(elements.megastructureFamily, state.data.megastructureFamilies);
  fillSelect(elements.megastructureType, getMegastructureTypesFor(options.megastructureFamily, domain, state.data));
  fillSelect(elements.sceneDomain, state.data.sceneDomains);
  fillSelect(elements.sceneBase, state.data.sceneBases.filter((item) => !options.sceneDomain || item.domain === options.sceneDomain || item.value === options.sceneBase));
  fillSelect(elements.surfaceTexture, getAllowedItemsByDomain(state.data.surfaceTextures, domain));
  fillSelect(elements.foregroundElement, state.data.foregroundElements);
  fillSelect(elements.weatherState, getAllowedItemsByDomain(state.data.weatherStates, domain));
  fillSelect(elements.lightingSetup, getAllowedItemsByDomain(state.data.lightingSetups, domain));
  fillSelect(elements.skyCosmos, getAllowedItemsByDomain(state.data.skyCosmos, domain));
  fillSelect(elements.shadowMode, getCompatibleShadows(options.lightingSetup, options.megastructureFamily, state.data));
  fillSelect(elements.figureScale, state.data.figureScales);
  fillSelect(elements.figureOrientation, state.data.figureOrientations);
  fillSelect(elements.scaleReference, state.data.scaleReferences);
}

function fillSelect(select, items) {
  select.innerHTML = "";
  items.forEach((entry) => {
    const option = document.createElement("option");
    option.value = entry.value;
    option.textContent = entry.labelZh;
    select.appendChild(option);
  });
}

function applyOptionsToDom(options) {
  const fields = [
    "moodBase", "aspectRatio", "language", "compositionScheme", "structurePosition", "leadingLine", "figurePlacement",
    "megastructureFamily", "megastructureType", "sceneDomain", "sceneBase", "surfaceTexture", "foregroundElement",
    "weatherState", "lightingSetup", "skyCosmos", "shadowMode", "figureScale", "figureOrientation", "scaleReference", "modelPreset",
  ];
  fields.forEach((field) => {
    if (elements[field]) elements[field].value = options[field];
  });
  ["horizonPressure", "screenCoverage", "visualWeight", "skyOcclusion", "shadowFootprint", "groundShare"].forEach((field) => {
    elements[field].value = options[field];
    elements[`${field}Value`].textContent = `${options[field]}%`;
  });
  elements.includeNegative.checked = options.includeNegative;
  elements.allowNonRecommended.checked = options.allowNonRecommended !== false;
  elements.workflowDetails.open = state.workflowOpen;
}

function renderSecondaryMoods() {
  elements.secondaryMoods.innerHTML = "";
  state.data.secondaryMoods.forEach((moodItem) => {
    const label = document.createElement("label");
    label.className = "checkbox";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = moodItem.value;
    input.checked = state.options.secondaryMoods.includes(moodItem.value);
    const text = document.createElement("span");
    text.textContent = `${moodItem.labelZh}：${moodItem.descriptionZh}`;
    label.append(input, text);
    elements.secondaryMoods.appendChild(label);
  });
}

function renderMoodCard() {
  const moodItem = getItem(state.data.moodBases, state.options.moodBase);
  const rows = [
    ["情绪说明", moodItem.descriptionZh],
    ["推荐画幅", labelsFromValues(state.data.aspectRatios, moodItem.recommendedAspectRatios).join("、")],
    ["推荐构图", labelsFromValues(state.data.compositionSchemes, moodItem.recommendedCompositions).join("、")],
    ["推荐巨构族", labelsFromValues(state.data.megastructureFamilies, moodItem.recommendedMegastructureFamilies).join("、")],
    ["推荐场景域", labelsFromValues(state.data.sceneDomains, moodItem.recommendedSceneDomains).join("、")],
    ["推荐天气", labelsFromValues(state.data.weatherStates, moodItem.recommendedWeatherStates).join("、")],
    ["推荐光线", labelsFromValues(state.data.lightingSetups, moodItem.recommendedLightingSetups).join("、")],
    ["推荐天空", labelsFromValues(state.data.skyCosmos, moodItem.recommendedSkyCosmos).join("、")],
    ["推荐阴影", labelsFromValues(state.data.shadowModes, moodItem.recommendedShadowModes).join("、")],
    ["色彩倾向", moodItem.paletteZh],
    ["负面补充", moodItem.negativeAdditionsZh],
  ];
  elements.moodCard.innerHTML = "";
  const title = document.createElement("h3");
  title.textContent = `${moodItem.labelZh} / ${moodItem.labelEn}`;
  const p = document.createElement("p");
  p.textContent = moodItem.promptSeedZh;
  const dl = document.createElement("dl");
  rows.forEach(([term, desc]) => {
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = term;
    dd.textContent = desc;
    dl.append(dt, dd);
  });
  elements.moodCard.append(title, p, dl);
}

function validateOptions(inputOptions, data = state.data) {
  const next = { ...makeDefaultOptions(data), ...inputOptions };
  const warnings = [];
  const autoCorrections = [];

  ensureOption(next, "moodBases", "moodBase", data);
  ensureOption(next, "aspectRatios", "aspectRatio", data);
  ensureOption(next, "compositionSchemes", "compositionScheme", data);
  ensureOption(next, "megastructureFamilies", "megastructureFamily", data);
  ensureOption(next, "sceneBases", "sceneBase", data);
  ensureOption(next, "figureScales", "figureScale", data);
  ensureOption(next, "figureOrientations", "figureOrientation", data);
  ensureOption(next, "scaleReferences", "scaleReference", data);
  ensureOption(next, "structurePositions", "structurePosition", data);
  ensureOption(next, "leadingLines", "leadingLine", data);
  ensureOption(next, "figurePlacements", "figurePlacement", data);
  ensureOption(next, "foregroundElements", "foregroundElement", data);

  const scene = getItem(data.sceneBases, next.sceneBase);
  next.sceneDomain = scene.domain || next.sceneDomain || "terrestrial";
  const moodItem = getItem(data.moodBases, next.moodBase);
  const type = getItem(data.megastructureTypes, next.megastructureType);
  if (!type.value || type.family !== next.megastructureFamily || !domainCompatible(type, next.sceneDomain)) {
    const oldLabel = type.labelZh || "未知巨构";
    next.megastructureType = firstMegastructureType(data, next.megastructureFamily, next.sceneDomain);
    const replacementType = getItem(data.megastructureTypes, next.megastructureType);
    if (replacementType.family && replacementType.family !== next.megastructureFamily) {
      next.megastructureFamily = replacementType.family;
    }
    autoCorrections.push(`已根据巨构族和场景域修正巨构类型：${oldLabel} → ${replacementType.labelZh}`);
  }
  if (!getAllowedItemsByDomain(data.surfaceTextures, next.sceneDomain).some((entry) => entry.value === next.surfaceTexture)) {
    const oldLabel = getItem(data.surfaceTextures, next.surfaceTexture).labelZh || "未知质感";
    next.surfaceTexture = firstByDomain(data.surfaceTextures, next.sceneDomain);
    autoCorrections.push(`已根据场景域修正地表质感：${oldLabel} → ${getItem(data.surfaceTextures, next.surfaceTexture).labelZh}`);
  }

  const env = resolveEnvironmentCompatibility(next, data);
  Object.assign(next, env.options);
  autoCorrections.push(...env.warnings);

  next.screenCoverage = clamp(Number(next.screenCoverage) || 58, 10, 90);
  next.visualWeight = clamp(Number(next.visualWeight) || 85, 10, 100);
  next.skyOcclusion = clamp(Number(next.skyOcclusion) || 45, 0, 90);
  next.shadowFootprint = clamp(Number(next.shadowFootprint) || 50, 0, 90);
  next.groundShare = clamp(Number(next.groundShare) || 22, 10, 40);
  next.horizonPressure = clamp(Number(next.horizonPressure) || 72, 0, 100);
  next.secondaryMoods = (next.secondaryMoods || []).filter((value) => data.secondaryMoods.some((entry) => entry.value === value));
  if (!next.secondaryMoods.length) next.secondaryMoods = data.secondaryMoods.slice(0, 2).map((entry) => entry.value);
  next.includeNegative = next.includeNegative !== false;
  next.allowNonRecommended = next.allowNonRecommended !== false;

  if (next.allowNonRecommended) {
    warnings.push(...buildRecommendationWarnings(next, moodItem, data));
  }
  const matchStatus = autoCorrections.length
    ? "fixed"
    : warnings.length
      ? "compatible"
      : "recommended";
  return { options: next, recommendationWarnings: warnings, environmentWarnings: autoCorrections, matchStatus };
}

function ensureOption(options, listKey, optionKey, data) {
  if (!data[listKey].some((entry) => entry.value === options[optionKey])) {
    options[optionKey] = firstValue(data[listKey]);
  }
}

function buildRecommendationWarnings(options, moodItem, data) {
  const checks = [
    ["recommendedAspectRatios", "aspectRatios", "aspectRatio", "画幅"],
    ["recommendedCompositions", "compositionSchemes", "compositionScheme", "构图"],
    ["recommendedMegastructureFamilies", "megastructureFamilies", "megastructureFamily", "巨构族"],
    ["recommendedSceneDomains", "sceneDomains", "sceneDomain", "场景域"],
    ["recommendedWeatherStates", "weatherStates", "weatherState", "天气"],
    ["recommendedLightingSetups", "lightingSetups", "lightingSetup", "光源"],
    ["recommendedSkyCosmos", "skyCosmos", "skyCosmos", "天空"],
    ["recommendedShadowModes", "shadowModes", "shadowMode", "阴影"],
  ];
  return checks.flatMap(([recKey, listKey, optionKey, label]) => {
    const rec = moodItem[recKey] || [];
    if (!rec.length || rec.includes(options[optionKey])) return [];
    const current = getItem(data[listKey], options[optionKey]).labelZh;
    return [`${label}【${current}】不在情绪基底【${moodItem.labelZh}】推荐内，但物理上可作为刻意偏离。`];
  });
}

function resolveEnvironmentCompatibility(options, data) {
  const next = { ...options };
  const warnings = [];
  const scene = getItem(data.sceneBases, next.sceneBase);
  const domain = scene.domain || next.sceneDomain || "terrestrial";
  next.sceneDomain = domain;

  if (!isAllowed(data.weatherStates, next.weatherState, domain)) {
    const oldLabel = getItem(data.weatherStates, next.weatherState).labelZh || "未知天气";
    next.weatherState = pickFirstRecommendedOrAllowed("weatherStates", next.moodBase, domain, data);
    warnings.push(`已根据场景域【${getItem(data.sceneDomains, domain).labelZh}】修正天气/空气：${oldLabel} → ${getItem(data.weatherStates, next.weatherState).labelZh}`);
  }
  if (!isAllowed(data.skyCosmos, next.skyCosmos, domain)) {
    const oldLabel = getItem(data.skyCosmos, next.skyCosmos).labelZh || "未知天空";
    next.skyCosmos = pickFirstRecommendedOrAllowed("skyCosmos", next.moodBase, domain, data);
    warnings.push(`已根据场景域【${getItem(data.sceneDomains, domain).labelZh}】修正天空/宇宙背景：${oldLabel} → ${getItem(data.skyCosmos, next.skyCosmos).labelZh}`);
  }
  if (!isAllowed(data.lightingSetups, next.lightingSetup, domain)) {
    const oldLabel = getItem(data.lightingSetups, next.lightingSetup).labelZh || "未知光源";
    next.lightingSetup = pickFirstRecommendedOrAllowed("lightingSetups", next.moodBase, domain, data);
    warnings.push(`已根据场景域【${getItem(data.sceneDomains, domain).labelZh}】修正光源：${oldLabel} → ${getItem(data.lightingSetups, next.lightingSetup).labelZh}`);
  }
  if (!isShadowCompatible(next.shadowMode, next.lightingSetup, next.megastructureFamily, data)) {
    const oldLabel = getItem(data.shadowModes, next.shadowMode).labelZh || "未知阴影";
    next.shadowMode = pickFirstShadowForLighting(next.lightingSetup, next.megastructureFamily, data);
    warnings.push(`已根据光源与巨构修正阴影：${oldLabel} → ${getItem(data.shadowModes, next.shadowMode).labelZh}`);
  }
  return { options: next, warnings };
}

function applyMoodRecommendation() {
  const moodItem = getItem(state.data.moodBases, state.options.moodBase);
  const sceneDomain = firstAvailable(moodItem.recommendedSceneDomains, state.data.sceneDomains);
  const sceneBase = firstByDomain(state.data.sceneBases, sceneDomain);
  const familyValue = firstAvailable(moodItem.recommendedMegastructureFamilies, state.data.megastructureFamilies);
  const compositionValue = firstAvailable(moodItem.recommendedCompositions, state.data.compositionSchemes);
  const compositionItem = getItem(state.data.compositionSchemes, compositionValue);
  const screenCoverage = midRange(compositionItem.recommendedScreenCoverageRange, 58);
  state.options = validateOptions({
    ...state.options,
    aspectRatio: firstAvailable(moodItem.recommendedAspectRatios, state.data.aspectRatios),
    compositionScheme: compositionValue,
    megastructureFamily: familyValue,
    megastructureType: firstMegastructureType(state.data, familyValue, sceneDomain),
    sceneDomain,
    sceneBase,
    weatherState: firstAllowedRecommended(state.data.weatherStates, moodItem.recommendedWeatherStates, sceneDomain),
    lightingSetup: firstAllowedRecommended(state.data.lightingSetups, moodItem.recommendedLightingSetups, sceneDomain),
    skyCosmos: firstAllowedRecommended(state.data.skyCosmos, moodItem.recommendedSkyCosmos, sceneDomain),
    shadowMode: firstCompatibleShadow(state.data, moodItem.recommendedShadowModes, firstAllowedRecommended(state.data.lightingSetups, moodItem.recommendedLightingSetups, sceneDomain), familyValue),
    screenCoverage,
    visualWeight: clamp(screenCoverage + 22, 55, 95),
    skyOcclusion: midRange(compositionItem.recommendedSkyOcclusionRange, 45),
    groundShare: midRange(compositionItem.recommendedGroundShareRange, 22),
    horizonPressure: midRange(compositionItem.recommendedHorizonPressureRange, 72),
  }, state.data).options;
  renderApp();
  showStatus("已应用情绪推荐方案");
}

function randomizeOptions({ lockMood = false } = {}) {
  const moodItem = lockMood ? getItem(state.data.moodBases, state.options.moodBase) : randomFrom(state.data.moodBases);
  const moodBase = moodItem.value;
  const sceneDomain = weightedPickRecommended(state.data.sceneDomains, moodItem.recommendedSceneDomains).value;
  const sceneBase = weightedPickRecommended(state.data.sceneBases, [], sceneDomain).value;
  const familyValue = weightedPickRecommended(state.data.megastructureFamilies, moodItem.recommendedMegastructureFamilies).value;
  const compositionValue = weightedPickRecommended(state.data.compositionSchemes, moodItem.recommendedCompositions).value;
  const compositionItem = getItem(state.data.compositionSchemes, compositionValue);
  const weatherState = weightedPickRecommended(state.data.weatherStates, moodItem.recommendedWeatherStates, sceneDomain).value;
  const lightingSetup = weightedPickRecommended(state.data.lightingSetups, moodItem.recommendedLightingSetups, sceneDomain).value;
  const skyCosmos = weightedPickRecommended(state.data.skyCosmos, moodItem.recommendedSkyCosmos, sceneDomain).value;
  const shadowMode = weightedPickRecommended(getCompatibleShadows(lightingSetup, familyValue, state.data), moodItem.recommendedShadowModes).value;
  const screenRange = compositionItem.recommendedScreenCoverageRange || [35, 70];
  const screenCoverage = randomInteger(screenRange[0], screenRange[1]);
  state.options = validateOptions({
    ...makeDefaultOptions(state.data),
    moodBase,
    aspectRatio: weightedPickRecommended(state.data.aspectRatios, moodItem.recommendedAspectRatios).value,
    compositionScheme: compositionValue,
    megastructureFamily: familyValue,
    megastructureType: weightedPickRecommended(getMegastructureTypesFor(familyValue, sceneDomain, state.data), []).value,
    sceneDomain,
    sceneBase,
    weatherState,
    lightingSetup,
    skyCosmos,
    shadowMode,
    structurePosition: randomFrom(state.data.structurePositions).value,
    leadingLine: randomFrom(state.data.leadingLines).value,
    figurePlacement: randomFrom(state.data.figurePlacements).value,
    surfaceTexture: weightedPickRecommended(getAllowedItemsByDomain(state.data.surfaceTextures, sceneDomain), []).value,
    foregroundElement: randomFrom(state.data.foregroundElements).value,
    figureScale: randomFrom(state.data.figureScales).value,
    figureOrientation: randomFrom(state.data.figureOrientations).value,
    scaleReference: randomFrom(state.data.scaleReferences).value,
    screenCoverage,
    visualWeight: clamp(randomInteger(screenCoverage + 15, screenCoverage + 35), 10, 100),
    skyOcclusion: randomRange(compositionItem.recommendedSkyOcclusionRange, 20, 65),
    shadowFootprint: randomInteger(20, 70),
    groundShare: randomRange(compositionItem.recommendedGroundShareRange, 12, 35),
    horizonPressure: randomRange(compositionItem.recommendedHorizonPressureRange, 55, 85),
    secondaryMoods: randomSecondaryMoods(),
    language: randomFrom(["zh", "en"]),
    modelPreset: randomFrom(["chatgpt", "midjourney", "sdxl"]),
    includeNegative: true,
    allowNonRecommended: state.options?.allowNonRecommended !== false,
  }, state.data).options;
  renderApp();
  showStatus(lockMood ? "已按当前情绪随机" : "已随机生成");
}

function weightedPickRecommended(list, recommendedValues = [], domain = null) {
  const source = Array.isArray(list) ? list.filter(Boolean) : [];
  const compatible = domain ? getAllowedItemsByDomain(source, domain) : source;
  const pool = compatible.length ? compatible : source;
  if (!pool.length) return { value: "" };
  const recommended = pool.filter((entry) => recommendedValues.includes(entry.value));
  if (recommended.length && Math.random() < 0.7) return randomFrom(recommended);
  return randomFrom(pool);
}

function generateBatch(count) {
  const original = clone(state.options);
  const variants = [];
  for (let index = 0; index < count; index += 1) {
    randomizeOptions({ lockMood: false });
    const resolved = validateOptions(state.options, state.data);
    const language = getEffectiveLanguage(resolved.options);
    variants.push({
      prompt: buildPromptBundle(resolved.options, language, resolved).positive,
      negative: buildNegativePrompt(language, resolved.options),
    });
  }
  state.options = original;
  renderApp();
  renderBatchList(variants);
  showStatus("已生成 10 条变体");
}

function renderBatchList(variants) {
  elements.batchList.innerHTML = "";
  elements.batchCount.textContent = `${variants.length} 条`;
  variants.forEach((variant, index) => {
    const section = document.createElement("section");
    section.className = "variant";
    const header = document.createElement("div");
    header.className = "variant-header";
    const title = document.createElement("span");
    title.className = "variant-title";
    title.textContent = `VARIANT ${String(index + 1).padStart(2, "0")}`;
    const button = document.createElement("button");
    button.className = "variant-copy";
    button.type = "button";
    button.textContent = "复制";
    button.addEventListener("click", async () => {
      await copyToClipboard(`${variant.prompt}\n\nNegative prompt:\n${variant.negative}`);
      showStatus(`已复制变体 ${index + 1}`);
    });
    const text = document.createElement("p");
    text.textContent = variant.prompt;
    header.append(title, button);
    section.append(header, text);
    elements.batchList.appendChild(section);
  });
}

function buildPrompt(options) {
  const resolved = validateOptions(options, state.data);
  return buildPromptBundle(resolved.options, getEffectiveLanguage(resolved.options), resolved).positive;
}

function buildPromptBundle(options, language, resolved = validateOptions(options, state.data)) {
  const parts = collectParts(options);
  const positive = language === "zh" ? buildChinesePrompt(parts) : buildEnglishPrompt(parts);
  return { positive, parts };
}

function collectParts(options) {
  const data = state.data;
  const list = (key, value) => getItem(data[key], value);
  return {
    options,
    mood: list("moodBases", options.moodBase),
    aspect: list("aspectRatios", options.aspectRatio),
    composition: list("compositionSchemes", options.compositionScheme),
    structurePosition: list("structurePositions", options.structurePosition),
    leadingLine: list("leadingLines", options.leadingLine),
    figurePlacement: list("figurePlacements", options.figurePlacement),
    family: list("megastructureFamilies", options.megastructureFamily),
    megastructure: list("megastructureTypes", options.megastructureType),
    sceneDomain: list("sceneDomains", options.sceneDomain),
    sceneBase: list("sceneBases", options.sceneBase),
    surfaceTexture: list("surfaceTextures", options.surfaceTexture),
    foregroundElement: list("foregroundElements", options.foregroundElement),
    weatherState: list("weatherStates", options.weatherState),
    lightingSetup: list("lightingSetups", options.lightingSetup),
    skyCosmos: list("skyCosmos", options.skyCosmos),
    shadowMode: list("shadowModes", options.shadowMode),
    figureScale: list("figureScales", options.figureScale),
    figureOrientation: list("figureOrientations", options.figureOrientation),
    scaleReference: list("scaleReferences", options.scaleReference),
    secondaryMoods: options.secondaryMoods.map((value) => list("secondaryMoods", value)).filter(Boolean),
  };
}

function buildChinesePrompt(parts) {
  const o = parts.options;
  const secondary = parts.secondaryMoods.map((entry) => entry.labelZh).join("、");
  return cleanPromptText([
    `${zhClause(parts.mood.promptSeedZh)}。`,
    `生成一张 ${zhClause(parts.aspect.labelZh)} 的超写实电影感后人类巨构风景图。采用【${zhClause(parts.composition.labelZh)}】构图，${zhClause(parts.composition.descriptionZh)}。地平线压迫程度约 ${o.horizonPressure}%，地表/场景可见面积约 ${o.groundShare}%。巨构位于【${zhClause(parts.structurePosition.labelZh)}】，视线由【${zhClause(parts.leadingLine.labelZh)}】引导，人物或尺度参照位于【${zhClause(parts.figurePlacement.labelZh)}】。`,
    `${zhClause(parts.megastructure.promptZh)}。巨构实际遮挡画面约 ${o.screenCoverage}%，视觉重量约 ${o.visualWeight}%，遮挡天空约 ${o.skyOcclusion}%。`,
    `场景为【${zhClause(parts.sceneBase.labelZh)}】：${zhClause(parts.sceneBase.descriptionZh)}。场景域为【${zhClause(parts.sceneDomain.labelZh)}】。地表质感为【${zhClause(parts.surfaceTexture.labelZh)}】：${zhClause(parts.surfaceTexture.descriptionZh)}。前景元素为【${zhClause(parts.foregroundElement.labelZh)}】：${zhClause(parts.foregroundElement.descriptionZh)}。`,
    `天气/空气为【${zhClause(parts.weatherState.labelZh)}】：${zhClause(parts.weatherState.descriptionZh)}。光源为【${zhClause(parts.lightingSetup.labelZh)}】：${zhClause(parts.lightingSetup.descriptionZh)}。天空/背景为【${zhClause(parts.skyCosmos.labelZh)}】：${zhClause(parts.skyCosmos.descriptionZh)}。`,
    `阴影模式为【${zhClause(parts.shadowMode.labelZh)}】：${zhClause(parts.shadowMode.descriptionZh)}。阴影覆盖画面约 ${o.shadowFootprint}%，必须让光线与巨构实体发生明确交互，例如暗面、投影、边缘光、湿地反光、云影或亮暗边界。`,
    `尺度设计：${zhClause(parts.figureScale.promptZh)}。人物朝向或动作是【${zhClause(parts.figureOrientation.labelZh)}】：${zhClause(parts.figureOrientation.descriptionZh)}。尺度参照为【${zhClause(parts.scaleReference.labelZh)}】：${zhClause(parts.scaleReference.descriptionZh)}。人物不得成为主角，只用于证明巨构巨大。`,
    `整体色彩倾向：${zhClause(parts.mood.paletteZh)}。辅助情绪为${secondary || "克制、宁静、低动态"}。画面保持安静、低动态、低饱和、空间关系清楚。`,
    `避免：${buildNegativePrompt("zh", o)}`,
  ].join(" "));
}

function buildEnglishPrompt(parts) {
  const o = parts.options;
  const suffix = o.modelPreset === "midjourney" ? ` --ar ${parts.aspect.arParam} --style raw --s 150` : "";
  const secondary = parts.secondaryMoods.map((entry) => entry.labelEn).join(", ");
  return cleanPromptText([
    `Set the emotional base first: [${enClause(parts.mood.labelEn)}]. ${enClause(parts.mood.promptSeedEn)}.`,
    `Create a ${enClause(parts.aspect.labelEn)} hyper-real cinematic post-human megastructure landscape. Use a [${enClause(parts.composition.labelEn)}] composition: ${enClause(parts.composition.descriptionEn)}. Horizon pressure is about ${o.horizonPressure}%, and visible ground or scene area is about ${o.groundShare}%. The megastructure is placed at [${enClause(parts.structurePosition.labelEn)}], the eye is guided by [${enClause(parts.leadingLine.labelEn)}], and the figure or scale reference is placed at [${enClause(parts.figurePlacement.labelEn)}].`,
    `The main subject is [${enClause(parts.megastructure.labelEn)}]: ${enClause(parts.megastructure.promptEn)}. The megastructure physically covers about ${o.screenCoverage}% of the frame, carries about ${o.visualWeight}% visual weight, and occludes about ${o.skyOcclusion}% of the sky.`,
    `The scene base is [${enClause(parts.sceneBase.labelEn)}]: ${enClause(parts.sceneBase.descriptionEn)}. Scene domain: [${enClause(parts.sceneDomain.labelEn)}]. Surface texture: [${enClause(parts.surfaceTexture.labelEn)}], ${enClause(parts.surfaceTexture.descriptionEn)}. Foreground element: [${enClause(parts.foregroundElement.labelEn)}], ${enClause(parts.foregroundElement.descriptionEn)}.`,
    `Weather or air state: [${enClause(parts.weatherState.labelEn)}], ${enClause(parts.weatherState.descriptionEn)}. Lighting setup: [${enClause(parts.lightingSetup.labelEn)}], ${enClause(parts.lightingSetup.descriptionEn)}. Sky or background: [${enClause(parts.skyCosmos.labelEn)}], ${enClause(parts.skyCosmos.descriptionEn)}.`,
    `Shadow mode: [${enClause(parts.shadowMode.labelEn)}], ${enClause(parts.shadowMode.descriptionEn)}. The shadow footprint covers about ${o.shadowFootprint}% of the frame. The light must clearly interact with the physical mass of the megastructure through dark faces, cast shadows, rim light, wet reflections, cloud shadows, or a bright-dark boundary.`,
    `Scale design: ${enClause(parts.figureScale.promptEn)}. Figure orientation or action: [${enClause(parts.figureOrientation.labelEn)}]. Scale reference: [${enClause(parts.scaleReference.labelEn)}], ${enClause(parts.scaleReference.descriptionEn)}. The figure must never become the main subject, only a scale witness.`,
    `Overall palette: ${enClause(parts.mood.paletteEn)}. Secondary moods: ${secondary || "quiet, restrained, low-motion"}. Keep the image quiet, low-motion, low-saturation, and spatially coherent.`,
    `Avoid: ${buildNegativePrompt("en", o)}`,
  ].join(" ") + suffix);
}

function buildNegativePrompt(language, options = state.options) {
  const moodItem = getItem(state.data.moodBases, options.moodBase);
  const base = language === "zh" ? state.data.negativePrompt.zh : state.data.negativePrompt.en;
  const addition = language === "zh" ? moodItem.negativeAdditionsZh : moodItem.negativeAdditionsEn;
  const separator = language === "zh" ? "，" : ", ";
  return dedupeCommaText(`${base}${separator}${addition}`, language);
}

function renderConstraintSummary(options, resolved) {
  const matchText = {
    recommended: "推荐内：当前选择与情绪基底推荐高度一致。",
    compatible: "兼容但偏离：当前选择不在情绪基底推荐中，但物理上成立，可作为刻意偏离。",
    fixed: "已自动修正：存在物理冲突，系统已自动替换为兼容选项。",
  }[resolved.matchStatus];
  const rows = [
    ["情绪基底", getItem(state.data.moodBases, options.moodBase).labelZh],
    ["推荐匹配", matchText],
    ["场景域", getItem(state.data.sceneDomains, options.sceneDomain).labelZh],
    ["画面", `${getItem(state.data.aspectRatios, options.aspectRatio).labelZh}，${getItem(state.data.compositionSchemes, options.compositionScheme).labelZh}`],
    ["巨构", getItem(state.data.megastructureTypes, options.megastructureType).labelZh],
    ["实际遮挡", `${options.screenCoverage}%`],
    ["视觉重量", `${options.visualWeight}%`],
    ["天空遮挡", `${options.skyOcclusion}%`],
    ["阴影覆盖", `${options.shadowFootprint}%`],
    ["场景", getItem(state.data.sceneBases, options.sceneBase).labelZh],
    ["天气", getItem(state.data.weatherStates, options.weatherState).labelZh],
    ["光源", getItem(state.data.lightingSetups, options.lightingSetup).labelZh],
    ["天空", getItem(state.data.skyCosmos, options.skyCosmos).labelZh],
    ["阴影", getItem(state.data.shadowModes, options.shadowMode).labelZh],
    ["尺度", `${getItem(state.data.figureScales, options.figureScale).labelZh} / ${getItem(state.data.scaleReferences, options.scaleReference).labelZh}`],
    ["约束提醒", [...resolved.environmentWarnings, ...resolved.recommendationWarnings].join(" ") || "当前选择没有明显冲突。"],
  ];
  renderDl(elements.constraintSummary, rows);
}

function renderCompositionPreview(options, resolved, data) {
  const aspectEntry = getItem(data.aspectRatios, options.aspectRatio);
  const [rw, rh] = parseAspect(aspectEntry.arParam);
  const width = 320;
  const height = clamp(Math.round(width * rh / rw), 132, 520);
  const rule = PREVIEW_RULES[options.compositionScheme] || PREVIEW_RULES["low-horizon-pilgrimage"];
  const horizonY = clamp(rule.horizonY + (options.horizonPressure - 50) / 500, 0.52, 0.86);
  const hy = height * horizonY;
  const skyOcc = height * (options.skyOcclusion / 100);
  const shadow = shadowSvg(options.shadowMode, options.shadowFootprint, width, height, hy);
  const guide = guideSvg(options.leadingLine, rule.guideMode, width, height, hy);
  const mass = massSvg(getItem(data.megastructureTypes, options.megastructureType).family, options.structurePosition, rule.massMode, options.screenCoverage, width, height, hy);
  const figure = figureSvg(options.figurePlacement, width, height, hy);
  const labels = [
    `巨构遮挡 ${options.screenCoverage}%`,
    `天空遮挡 ${options.skyOcclusion}%`,
    `阴影覆盖 ${options.shadowFootprint}%`,
    `地表占比 ${options.groundShare}%`,
    `地平线压迫 ${options.horizonPressure}%`,
  ];
  elements.compositionPreview.innerHTML = `
    <svg viewBox="0 0 ${width} ${height + 42}" role="img" aria-label="构图雷达">
      <rect class="svg-frame" x="1" y="1" width="${width - 2}" height="${height - 2}" rx="6"></rect>
      <g class="svg-thirds">
        <line x1="${width / 3}" y1="0" x2="${width / 3}" y2="${height}"></line>
        <line x1="${width * 2 / 3}" y1="0" x2="${width * 2 / 3}" y2="${height}"></line>
        <line x1="0" y1="${height / 3}" x2="${width}" y2="${height / 3}"></line>
        <line x1="0" y1="${height * 2 / 3}" x2="${width}" y2="${height * 2 / 3}"></line>
      </g>
      <rect class="svg-sky-occlusion" x="0" y="0" width="${width}" height="${skyOcc}"></rect>
      <rect class="svg-ground" x="0" y="${hy}" width="${width}" height="${height - hy}"></rect>
      <line class="svg-horizon" x1="0" y1="${hy}" x2="${width}" y2="${hy}"></line>
      ${shadow}
      ${guide}
      ${mass}
      ${figure}
      <g class="svg-labels">${labels.map((label, index) => `<text x="8" y="${height + 14 + index * 7}">${escapeHtml(label)}</text>`).join("")}</g>
    </svg>
  `;
}

function massSvg(familyValue, position, massMode, coverage, width, height, hy) {
  const c = clamp(coverage / 100, 0.1, 0.9);
  const baseW = width * (0.25 + c * 0.55);
  const baseH = Math.max(26, height * (0.18 + c * 0.36));
  const side = position.includes("right") ? "right" : "left";
  if (familyValue === "threshold-architecture" || familyValue === "interior-threshold" || massMode === "large-frame") {
    return `<path class="svg-mass" d="M${width * 0.18} ${hy - baseH} H${width * 0.82} V${hy + baseH * 0.35} H${width * 0.68} V${hy - baseH * 0.55} H${width * 0.32} V${hy + baseH * 0.35} H${width * 0.18} Z"></path>`;
  }
  if (familyValue === "orbital-ring") {
    return `<ellipse class="svg-mass-ring" cx="${width * 0.55}" cy="${hy - baseH * 0.32}" rx="${baseW * 0.42}" ry="${baseH * 0.7}"></ellipse>`;
  }
  if (familyValue === "shell-architecture" || familyValue === "solar-shade") {
    return `<path class="svg-mass" d="M${width * 0.12} ${hy - baseH * 0.1} Q${width * 0.52} ${hy - baseH * 1.25} ${width * 0.9} ${hy - baseH * 0.08} L${width * 0.82} ${hy + baseH * 0.22} Q${width * 0.52} ${hy - baseH * 0.35} ${width * 0.2} ${hy + baseH * 0.2} Z"></path>`;
  }
  if (familyValue === "monolith-array") {
    return Array.from({ length: 5 }, (_, i) => {
      const x = width * 0.28 + i * width * 0.09;
      const h = baseH * (0.65 + i * 0.08);
      return `<rect class="svg-mass" x="${x}" y="${hy - h}" width="${width * 0.045}" height="${h}"></rect>`;
    }).join("");
  }
  if (massMode === "upper-horizontal-band") {
    return `<rect class="svg-mass" x="${width * 0.08}" y="${hy - baseH * 1.05}" width="${width * 0.84}" height="${baseH * 0.56}"></rect>`;
  }
  if (massMode === "side-intrusion") {
    const x = side === "right" ? width - baseW : 0;
    return `<rect class="svg-mass" x="${x}" y="${height * 0.18}" width="${baseW}" height="${baseH}"></rect>`;
  }
  if (familyValue === "buried-machine" || position === "half-buried-ridge") {
    return `<path class="svg-mass" d="M${width * 0.18} ${hy + 4} Q${width * 0.5} ${hy - baseH} ${width * 0.82} ${hy + 4} Z"></path>`;
  }
  const x = position.includes("left") ? width * 0.08 : position.includes("right") ? width * 0.48 : (width - baseW) / 2;
  return `<rect class="svg-mass" x="${x}" y="${hy - baseH}" width="${baseW}" height="${baseH}"></rect>`;
}

function shadowSvg(shadowMode, footprint, width, height, hy) {
  const f = clamp(footprint / 100, 0, 0.9);
  const h = Math.max(8, height * f * 0.55);
  if (shadowMode.includes("diagonal") || shadowMode === "ridge-shadow") {
    return `<polygon class="svg-shadow" points="0,${hy + 10} ${width},${hy + h} ${width},${hy + h + 32} 0,${hy + 44}"></polygon>`;
  }
  if (shadowMode.includes("vertical")) {
    return `<polygon class="svg-shadow" points="${width * 0.28},0 ${width * 0.76},0 ${width * 0.68},${height} ${width * 0.34},${height}"></polygon>`;
  }
  if (shadowMode.includes("curved")) {
    return `<ellipse class="svg-shadow" cx="${width * 0.5}" cy="${hy + h * 0.25}" rx="${width * 0.38}" ry="${h * 0.58}"></ellipse>`;
  }
  if (shadowMode.includes("hard") || shadowMode.includes("eclipse")) {
    return `<rect class="svg-shadow hard" x="${width * 0.12}" y="${hy - 12}" width="${width * 0.76}" height="${h}"></rect>`;
  }
  if (shadowMode.includes("framed") || shadowMode.includes("interior")) {
    return `<rect class="svg-shadow" x="${width * 0.28}" y="${hy - h * 0.9}" width="${width * 0.44}" height="${h * 1.3}"></rect>`;
  }
  return `<rect class="svg-shadow" x="0" y="${hy}" width="${width}" height="${h}"></rect>`;
}

function guideSvg(leadingLine, guideMode, width, height, hy) {
  if (leadingLine.includes("diagonal") || guideMode === "strong-diagonal") {
    return `<path class="svg-guide" d="M${width * 0.08} ${height * 0.92} L${width * 0.78} ${hy - 10}"></path>`;
  }
  if (leadingLine.includes("waterline") || guideMode === "water-axis") {
    return `<path class="svg-guide" d="M${width * 0.08} ${hy + 20} C${width * 0.35} ${hy + 30}, ${width * 0.65} ${hy + 12}, ${width * 0.92} ${hy + 22}"></path>`;
  }
  if (leadingLine.includes("cable") || guideMode === "vertical-axis") {
    return `<path class="svg-guide" d="M${width * 0.5} ${height * 0.92} L${width * 0.5} ${height * 0.08}"></path>`;
  }
  if (guideMode === "minimal" || leadingLine.includes("no-obvious")) return "";
  return `<path class="svg-guide" d="M${width * 0.12} ${height * 0.92} C${width * 0.32} ${height * 0.76}, ${width * 0.42} ${hy + 16}, ${width * 0.72} ${hy - 12}"></path>`;
}

function figureSvg(placement, width, height, hy) {
  const map = {
    "lower-right-third": [0.67, 0.82],
    "lower-left-third": [0.33, 0.82],
    "bottom-center-tiny": [0.5, 0.88],
    "shadow-edge": [0.58, Math.min(0.92, hy / height + 0.08)],
    "bright-dark-boundary": [0.52, Math.min(0.92, hy / height + 0.1)],
    "ridge-top-small": [0.42, Math.max(0.55, hy / height - 0.02)],
    "frame-opening-bottom": [0.5, Math.min(0.86, hy / height + 0.05)],
    "reflection-edge": [0.45, Math.min(0.92, hy / height + 0.18)],
    "no-figure-use-scale-reference": [0.82, 0.86],
    "lost-in-lower-band": [0.36, 0.9],
  };
  const [xRatio, yRatio] = map[placement] || [0.67, 0.82];
  return `<circle class="svg-figure" cx="${width * xRatio}" cy="${height * yRatio}" r="3.2"></circle>`;
}

function copyCurrentPrompt() {
  const resolved = validateOptions(state.options, state.data);
  const language = getEffectiveLanguage(resolved.options);
  const bundle = buildPromptBundle(resolved.options, language, resolved);
  const text = resolved.options.includeNegative || resolved.options.modelPreset === "sdxl"
    ? `${bundle.positive}\n\nNegative prompt:\n${buildNegativePrompt(language, resolved.options)}`
    : bundle.positive;
  copyToClipboard(text).then(() => showStatus("已复制"));
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function downloadTxt() {
  const resolved = validateOptions(state.options, state.data);
  const language = getEffectiveLanguage(resolved.options);
  const bundle = buildPromptBundle(resolved.options, language, resolved);
  const lines = ["光锥之外", "", "[Positive Prompt]", bundle.positive];
  if (resolved.options.includeNegative || resolved.options.modelPreset === "sdxl") {
    lines.push("", "[Negative Prompt]", buildNegativePrompt(language, resolved.options));
  }
  lines.push("", "[Resolved Constraints]", elements.constraintSummary.innerText);
  downloadBlob("beyond-light-cone-v2-prompt.txt", lines.join("\n"));
}

function exportConfigJson() {
  const payload = {
    version: STORAGE_VERSION,
    exportedAt: new Date().toISOString(),
    data: state.data,
    options: state.options,
    workflowOpen: elements.workflowDetails.open,
  };
  downloadBlob("beyond-light-cone-v2-config.json", JSON.stringify(payload, null, 2), "application/json;charset=utf-8");
}

function importConfigJson(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(String(reader.result));
      state.data = sanitizeData(payload.data || DATA);
      const options = Number(payload.version) === 1 ? migrateOptionsV1ToV2(payload.options || {}, state.data) : payload.options || makeDefaultOptions(state.data);
      state.options = validateOptions(options, state.data).options;
      state.workflowOpen = payload.workflowOpen !== false;
      renderApp();
      showStatus("配置已导入");
    } catch (error) {
      showStatus("导入失败：JSON 无法解析");
    } finally {
      elements.importConfigInput.value = "";
    }
  };
  reader.readAsText(file, "utf-8");
}

function resetCurrentOptions() {
  state.options = makeDefaultOptions(state.data);
  renderApp();
  elements.batchList.innerHTML = "";
  elements.batchCount.textContent = "未生成";
  showStatus("当前配置已重置，用户词库已保留");
}

function restoreDefaultData() {
  state.data = clone(DATA);
  state.options = makeDefaultOptions(state.data);
  state.workflowOpen = true;
  renderApp();
  showStatus("已恢复默认词库");
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    version: STORAGE_VERSION,
    data: state.data,
    options: state.options,
    workflowOpen: elements.workflowDetails ? elements.workflowDetails.open : state.workflowOpen,
  }));
}

function openVocabEditor(key) {
  activeEditKey = key;
  elements.modalTitle.textContent = `编辑：${VOCAB_LABELS[key]}`;
  elements.modalHelp.textContent = key === "negativePrompt"
    ? "编辑中文和英文负面提示词。情绪基底的负面补充会自动追加并去重。"
    : "基础信息可直接编辑；高级约束 JSON 支持推荐项、兼容域、prompt 种子、色彩倾向、负面补充和预览规则。";
  renderVocabEditor();
  elements.vocabModal.showModal();
}

function renderVocabEditor() {
  elements.modalList.innerHTML = "";
  elements.addVocabItemButton.classList.toggle("is-hidden", activeEditKey === "negativePrompt");
  if (activeEditKey === "negativePrompt") {
    elements.modalList.append(
      createTextareaField("中文负面提示词", state.data.negativePrompt.zh, "negative-zh", true),
      createTextareaField("English negative prompt", state.data.negativePrompt.en, "negative-en", true)
    );
    return;
  }
  state.data[activeEditKey].forEach((entry, index) => {
    elements.modalList.appendChild(createVocabRow(entry, index));
  });
}

function createVocabRow(entry, index) {
  const row = document.createElement("section");
  row.className = "vocab-row";
  row.dataset.value = entry.value;
  const meta = { ...entry };
  delete meta.value;
  delete meta.labelZh;
  delete meta.labelEn;
  delete meta.descriptionZh;
  delete meta.descriptionEn;

  const title = document.createElement("h4");
  const label = document.createElement("span");
  label.textContent = `${String(index + 1).padStart(2, "0")} / ${entry.value}`;
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "remove-row";
  remove.textContent = "删除词条";
  remove.addEventListener("click", () => row.remove());
  title.append(label, remove);
  row.append(
    title,
    createInputField("value", entry.value, "value"),
    createInputField("中文标签", entry.labelZh, "labelZh"),
    createInputField("English label", entry.labelEn, "labelEn"),
    createTextareaField("中文描述", entry.descriptionZh, "descriptionZh"),
    createTextareaField("English description", entry.descriptionEn, "descriptionEn"),
    createAdvancedMetaField(JSON.stringify(meta, null, 2))
  );
  return row;
}

function createInputField(labelText, value, field) {
  const label = document.createElement("label");
  label.textContent = labelText;
  const input = document.createElement("input");
  input.type = "text";
  input.value = value || "";
  input.dataset.field = field;
  label.appendChild(input);
  return label;
}

function createTextareaField(labelText, value, field, wide = false) {
  const label = document.createElement("label");
  label.className = wide ? "wide" : "";
  label.textContent = labelText;
  const textarea = document.createElement("textarea");
  textarea.value = value || "";
  textarea.dataset.field = field;
  label.appendChild(textarea);
  return label;
}

function createAdvancedMetaField(value) {
  const details = document.createElement("details");
  details.className = "advanced-meta wide";
  const summary = document.createElement("summary");
  summary.textContent = "高级约束 JSON";
  const label = createTextareaField("高级约束，仅在需要修改联动关系时编辑", value, "meta", true);
  details.append(summary, label);
  return details;
}

function addVocabEditorRow() {
  const base = {
    value: "",
    labelZh: "新词条",
    labelEn: "New item",
    descriptionZh: "请填写具体描述。",
    descriptionEn: "Add a concrete description.",
  };
  elements.modalList.appendChild(createVocabRow(base, elements.modalList.children.length));
}

function saveVocabEditor() {
  if (activeEditKey === "negativePrompt") {
    state.data.negativePrompt.zh = elements.modalList.querySelector("[data-field='negative-zh']").value.trim();
    state.data.negativePrompt.en = elements.modalList.querySelector("[data-field='negative-en']").value.trim();
    closeVocabEditor();
    renderApp();
    showStatus("负面提示词已保存");
    return;
  }
  const rows = Array.from(elements.modalList.querySelectorAll(".vocab-row"));
  const next = [];
  try {
    rows.forEach((row) => {
      const value = row.querySelector("[data-field='value']").value.trim() || uniqueValue(activeEditKey, row.dataset.value || "custom", next);
      const labelZh = row.querySelector("[data-field='labelZh']").value.trim() || "未命名词条";
      const labelEn = row.querySelector("[data-field='labelEn']").value.trim() || "Untitled item";
      const descriptionZh = row.querySelector("[data-field='descriptionZh']").value.trim();
      const descriptionEn = row.querySelector("[data-field='descriptionEn']").value.trim();
      const metaText = row.querySelector("[data-field='meta']").value.trim();
      const meta = metaText ? JSON.parse(metaText) : {};
      next.push(normalizeItem({ value, labelZh, labelEn, descriptionZh, descriptionEn, ...meta }, activeEditKey));
    });
  } catch (error) {
    showStatus("高级约束 JSON 格式错误，请检查逗号、引号和数组格式。");
    return;
  }
  if (!next.length) {
    showStatus("至少保留一个词条");
    return;
  }
  state.data[activeEditKey] = next;
  state.options = validateOptions(state.options, state.data).options;
  closeVocabEditor();
  renderApp();
  showStatus(`${VOCAB_LABELS[activeEditKey]} 已保存`);
}

function closeVocabEditor() {
  elements.vocabModal.close();
  activeEditKey = null;
}

function getAllowedItemsByDomain(list, domain) {
  return list.filter((entry) => {
    if (entry.domain) return entry.domain === domain;
    if (entry.domains) return entry.domains.includes(domain);
    return true;
  });
}

function isAllowed(list, value, domain) {
  const entry = getItem(list, value);
  return Boolean(entry.value) && (!entry.domains || entry.domains.includes(domain));
}

function isLightingCompatible(value, domain, data) {
  return isAllowed(data.lightingSetups, value, domain);
}

function isShadowCompatible(shadowValue, lightingValue, familyValue, data) {
  const shadowItem = getItem(data.shadowModes, shadowValue);
  if (!shadowItem.value) return false;
  if (shadowItem.compatibleLighting?.length && !shadowItem.compatibleLighting.includes(lightingValue)) return false;
  if (shadowItem.compatibleMegastructureFamilies?.length && !shadowItem.compatibleMegastructureFamilies.includes(familyValue)) return false;
  return true;
}

function pickFirstRecommendedOrAllowed(key, moodBase, domain, data) {
  const moodItem = getItem(data.moodBases, moodBase);
  const recKey = {
    weatherStates: "recommendedWeatherStates",
    lightingSetups: "recommendedLightingSetups",
    skyCosmos: "recommendedSkyCosmos",
  }[key];
  const allowed = getAllowedItemsByDomain(data[key], domain);
  const recommended = allowed.find((entry) => moodItem[recKey]?.includes(entry.value));
  return (recommended || allowed[0] || data[key][0]).value;
}

function pickFirstShadowForLighting(lightingSetup, familyValue, data) {
  const lightItem = getItem(data.lightingSetups, lightingSetup);
  const compatible = getCompatibleShadows(lightingSetup, familyValue, data);
  const recommended = compatible.find((entry) => lightItem.recommendedShadowModes?.includes(entry.value));
  return (recommended || compatible[0] || data.shadowModes[0]).value;
}

function firstCompatibleShadow(data, recommendedValues = [], lightingSetup, familyValue) {
  const compatible = getCompatibleShadows(lightingSetup, familyValue, data);
  const recommended = compatible.find((entry) => recommendedValues.includes(entry.value));
  return (recommended || compatible[0] || data.shadowModes[0]).value;
}

function getCompatibleShadows(lightingSetup, familyValue, data) {
  const result = data.shadowModes.filter((entry) => isShadowCompatible(entry.value, lightingSetup, familyValue, data));
  return result.length ? result : data.shadowModes;
}

function getMegastructureTypesFor(familyValue, domain, data) {
  const filtered = data.megastructureTypes.filter((entry) => (!familyValue || entry.family === familyValue) && domainCompatible(entry, domain));
  if (filtered.length) return filtered;
  const sameDomain = data.megastructureTypes.filter((entry) => domainCompatible(entry, domain));
  if (sameDomain.length) return sameDomain;
  const sameFamily = data.megastructureTypes.filter((entry) => !familyValue || entry.family === familyValue);
  return sameFamily.length ? sameFamily : data.megastructureTypes;
}

function domainCompatible(entry, domain) {
  return !entry.compatibleDomains || entry.compatibleDomains.includes(domain);
}

function firstMegastructureType(data, familyValue, domain) {
  return firstValue(getMegastructureTypesFor(familyValue, domain, data));
}

function firstByDomain(list, domain) {
  return firstValue(getAllowedItemsByDomain(list, domain)) || firstValue(list);
}

function firstAllowedRecommended(list, recommendedValues = [], domain) {
  const allowed = getAllowedItemsByDomain(list, domain);
  const recommended = allowed.find((entry) => recommendedValues.includes(entry.value));
  return (recommended || allowed[0] || list[0]).value;
}

function firstAvailable(values = [], list = []) {
  const found = values.find((value) => list.some((entry) => entry.value === value));
  return found || firstValue(list);
}

function firstValue(list) {
  return list && list.length ? list[0].value : "";
}

function getItem(list, value) {
  return list.find((entry) => entry.value === value) || list[0] || {};
}

function labelsFromValues(list, values = []) {
  return values.map((value) => getItem(list, value).labelZh).filter(Boolean);
}

function midRange(range, fallback) {
  return Array.isArray(range) && range.length === 2 ? Math.round((range[0] + range[1]) / 2) : fallback;
}

function randomRange(range, min, max) {
  const source = Array.isArray(range) && range.length === 2 ? range : [min, max];
  return randomInteger(source[0], source[1]);
}

function randomSecondaryMoods() {
  const shuffled = [...state.data.secondaryMoods].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, randomInteger(2, Math.min(4, shuffled.length))).map((entry) => entry.value);
}

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function parseAspect(arParam) {
  const [w, h] = String(arParam || "16:9").split(":").map(Number);
  return [w || 16, h || 9];
}

function getEffectiveLanguage(options) {
  if (options.modelPreset === "midjourney" || options.modelPreset === "sdxl") return "en";
  return options.language;
}

function modelLabel(value) {
  return { chatgpt: "ChatGPT 图片生成", midjourney: "Midjourney", sdxl: "SDXL/FLUX" }[value] || value;
}

function renderDl(container, rows) {
  container.innerHTML = "";
  rows.forEach(([term, description]) => {
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = term;
    dd.textContent = description;
    container.append(dt, dd);
  });
}

function downloadBlob(filename, content, type = "text/plain;charset=utf-8") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function showStatus(message) {
  elements.copyStatus.textContent = message;
  window.clearTimeout(showStatus.timer);
  showStatus.timer = window.setTimeout(() => {
    elements.copyStatus.textContent = "";
  }, 2600);
}

function cleanPromptText(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .replace(/，。/g, "。")
    .replace(/。{2,}/g, "。")
    .replace(/；。/g, "。")
    .replace(/：。/g, "。")
    .replace(/\s+--ar/g, " --ar")
    .trim();
}

function zhClause(text) {
  return String(text || "").replace(/\s+/g, " ").trim().replace(/[。！？；;，,、：:\s]+$/g, "");
}

function enClause(text) {
  return String(text || "").replace(/\s+/g, " ").trim().replace(/[.!?;,:，。；：\s]+$/g, "");
}

function dedupeCommaText(text, language) {
  const splitter = language === "zh" ? /[，,]/ : /,/;
  const seen = new Set();
  return String(text || "")
    .split(splitter)
    .map((part) => part.trim())
    .filter((part) => {
      const key = part.toLowerCase();
      if (!part || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .join(language === "zh" ? "，" : ", ");
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
}

function uniqueValue(key, label, localList = []) {
  const base = slugify(label) || "custom";
  const existing = new Set([...(state?.data?.[key] || []), ...localList].map((entry) => entry.value));
  let value = base;
  let index = 2;
  while (existing.has(value)) {
    value = `${base}-${index}`;
    index += 1;
  }
  return value;
}

function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
}

document.addEventListener("DOMContentLoaded", boot);
