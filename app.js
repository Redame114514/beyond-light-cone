const STORAGE_KEY = "beyondLightConeConsole.v1";

const DATA = {
  aspectRatios: [
    {
      value: "portrait-9-16",
      labelZh: "9:16 竖版",
      labelEn: "9:16 vertical",
      descriptionZh: "强调竖向压迫、塔体、界墙和低地平线。",
      descriptionEn: "emphasizing vertical pressure, towers, boundary walls, and low horizons",
      arParam: "9:16",
      recommendedCompositions: ["edge-intrusion", "low-horizon", "vertical-axis", "pilgrimage-distance"],
    },
    {
      value: "wide-16-9",
      labelZh: "16:9 横版",
      labelEn: "16:9 wide",
      descriptionZh: "强调横向延展、远距叙事和地平线关系。",
      descriptionEn: "emphasizing horizontal extension, distant narrative, and horizon relationships",
      arParam: "16:9",
      recommendedCompositions: ["horizontal-slice", "pilgrimage-distance", "diagonal-pressure"],
    },
    {
      value: "square-1-1",
      labelZh: "1:1 方图",
      labelEn: "1:1 square",
      descriptionZh: "强调中心张力、框景和体块平衡。",
      descriptionEn: "emphasizing central tension, framing, and mass balance",
      arParam: "1:1",
      recommendedCompositions: ["framed-threshold", "vertical-axis", "negative-space"],
    },
    {
      value: "social-4-5",
      labelZh: "4:5 竖幅社媒",
      labelEn: "4:5 vertical social",
      descriptionZh: "强调人物与巨构的朝圣式关系。",
      descriptionEn: "emphasizing the pilgrimage relationship between the figure and the megastructure",
      arParam: "4:5",
      recommendedCompositions: ["pilgrimage-distance", "low-horizon", "foreground-occlusion"],
    },
    {
      value: "photo-3-2",
      labelZh: "3:2 摄影横幅",
      labelEn: "3:2 photographic",
      descriptionZh: "强调摄影感、前中远景层次和自然透视。",
      descriptionEn: "emphasizing photographic depth, foreground-midground-background layering, and natural perspective",
      arParam: "3:2",
      recommendedCompositions: ["foreground-occlusion", "diagonal-pressure", "high-angle"],
    },
    {
      value: "cinema-239-100",
      labelZh: "2.39:1 超宽电影画幅",
      labelEn: "2.39:1 ultrawide cinema",
      descriptionZh: "强调电影宽银幕、横向切割和孤独距离。",
      descriptionEn: "emphasizing cinematic widescreen, horizontal slicing, and lonely distance",
      arParam: "239:100",
      recommendedCompositions: ["horizontal-slice", "pilgrimage-distance", "negative-space"],
    },
  ],
  compositionSchemes: [
    {
      value: "edge-intrusion",
      labelZh: "边缘压入式构图",
      labelEn: "edge-intrusion composition",
      descriptionZh: "主体体块从画面边缘切入，只显露局部，但形成最大视觉压力。",
      descriptionEn: "the main mass cuts in from the edge, only partly visible, yet creates the strongest visual pressure",
      allowedStructurePositions: ["left-edge-intrusion", "right-edge-intrusion", "partial-edge"],
      allowedFigurePlacements: ["lower-right-third", "lower-left-third", "edge-lit-patch"],
      allowedLeadingLines: ["s-curve-light", "shadow-boundary", "mass-arc"],
      recommendedStructureShareRange: [68, 84],
      foregroundDepthRuleZh: "前景保持低矮，中景留给人物，远景由巨大体块压入。",
      foregroundDepthRuleEn: "low foreground, a midground figure, and a huge distant mass pressing into the frame",
      whitespaceRuleZh: "留白放在巨构相反一侧，用空域衬托压迫感。",
      whitespaceRuleEn: "negative space stays opposite the structure, amplifying pressure through emptiness",
      cameraRuleZh: "略低机位或平视，避免普通对称正面图。",
      cameraRuleEn: "slightly low or eye-level camera, avoiding ordinary frontal symmetry",
    },
    {
      value: "low-horizon",
      labelZh: "低地平线仰视构图",
      labelEn: "low-horizon upward composition",
      descriptionZh: "地平线被压低，主体占据上方大面积，形成仰望尺度。",
      descriptionEn: "the horizon is pushed low while the main body dominates the upper frame",
      allowedStructurePositions: ["above-low-horizon", "top-down-pressure", "upper-center-mass"],
      allowedFigurePlacements: ["lower-right-third", "lower-center-pilgrim", "horizon-speck"],
      allowedLeadingLines: ["vertical-cable", "mass-arc", "no-road-volume"],
      recommendedStructureShareRange: [72, 88],
      foregroundDepthRuleZh: "地表只保留窄带，人物压在低处作为尺度参照。",
      foregroundDepthRuleEn: "the ground remains a narrow band, with the figure low as a scale marker",
      whitespaceRuleZh: "留白主要在主体周围的高处，表现空气和距离。",
      whitespaceRuleEn: "upper negative space surrounds the mass, expressing air and distance",
      cameraRuleZh: "仰视或低机位，强调不可理解的高度。",
      cameraRuleEn: "low-angle view, emphasizing incomprehensible height",
    },
    {
      value: "high-angle",
      labelZh: "高机位俯视构图",
      labelEn: "high-angle composition",
      descriptionZh: "从高处观察地表路径和小人物，让尺度关系更冷静清楚。",
      descriptionEn: "observing from above to clarify ground paths, the tiny figure, and scale relationships",
      allowedStructurePositions: ["diagonal-through-frame", "distant-horizon-mass", "partial-edge"],
      allowedFigurePlacements: ["line-second-bend", "lower-left-third", "platform-edge"],
      allowedLeadingLines: ["s-curve-light", "diagonal-light-boundary", "array-alignment"],
      recommendedStructureShareRange: [58, 76],
      foregroundDepthRuleZh: "前中远景以地表线条区分，巨构仍保持主要视觉权重。",
      foregroundDepthRuleEn: "foreground, midground, and distance are separated by ground lines while the megastructure keeps primary weight",
      whitespaceRuleZh: "留白可分布在地表或高处，但不能削弱主体尺度。",
      whitespaceRuleEn: "negative space may sit on ground or upper areas but must not weaken scale",
      cameraRuleZh: "高机位俯视，路径和人物位置必须清晰。",
      cameraRuleEn: "high-angle view with clear path and figure placement",
    },
    {
      value: "diagonal-pressure",
      labelZh: "对角线压迫构图",
      labelEn: "diagonal pressure composition",
      descriptionZh: "主要体块和引导线沿对角方向组织，制造运动与压迫。",
      descriptionEn: "the main mass and guiding line organize along a diagonal, creating motion and pressure",
      allowedStructurePositions: ["diagonal-through-frame", "left-edge-intrusion", "right-edge-intrusion"],
      allowedFigurePlacements: ["diagonal-end", "lower-left-third", "lower-right-third"],
      allowedLeadingLines: ["diagonal-light-boundary", "shadow-boundary", "surface-fissure"],
      recommendedStructureShareRange: [64, 82],
      foregroundDepthRuleZh: "前景线条进入画面，中景人物承接方向，远景体块完成压迫。",
      foregroundDepthRuleEn: "foreground lines enter the frame, the midground figure receives direction, and the distant mass completes pressure",
      whitespaceRuleZh: "留白沿对角线一侧展开，形成方向感。",
      whitespaceRuleEn: "negative space opens along one side of the diagonal, creating direction",
      cameraRuleZh: "轻微倾斜或斜向取景，避免水平平铺。",
      cameraRuleEn: "slightly oblique framing, avoiding flat horizontal layout",
    },
    {
      value: "framed-threshold",
      labelZh: "框景构图",
      labelEn: "threshold framing composition",
      descriptionZh: "主体的一部分形成巨大边框，人物和地表被包在边界内。",
      descriptionEn: "part of the main body forms a vast frame enclosing the figure and ground",
      allowedStructurePositions: ["enclosing-frame", "upper-center-mass", "partial-edge"],
      allowedFigurePlacements: ["inside-frame-offside", "lower-center-pilgrim", "edge-lit-patch"],
      allowedLeadingLines: ["mass-arc", "platform-edge-line", "no-road-volume"],
      recommendedStructureShareRange: [62, 80],
      foregroundDepthRuleZh: "前景边界可遮挡少量画面，中景人物被框入，远景保持空旷。",
      foregroundDepthRuleEn: "foreground boundary may occlude slightly, the figure sits inside the frame, and the distance stays open",
      whitespaceRuleZh: "留白放在框内深处，像不可抵达的空间。",
      whitespaceRuleEn: "negative space sits deep inside the frame like an unreachable interior",
      cameraRuleZh: "稳定取景，强调门槛、边界和框内空间。",
      cameraRuleEn: "stable framing emphasizing threshold, boundary, and interior space",
    },
    {
      value: "horizontal-slice",
      labelZh: "横向切割构图",
      labelEn: "horizontal slicing composition",
      descriptionZh: "主体横向切开画面，地表和人物被压缩成很小的尺度带。",
      descriptionEn: "the main body slices horizontally through the image, compressing ground and figure into a small scale band",
      allowedStructurePositions: ["upper-horizontal-slice", "above-low-horizon", "distant-horizon-mass"],
      allowedFigurePlacements: ["horizon-speck", "lower-right-third", "lower-left-third"],
      allowedLeadingLines: ["horizontal-shadow", "array-alignment", "no-road-volume"],
      recommendedStructureShareRange: [70, 88],
      foregroundDepthRuleZh: "前景很少，中远景被横向体块切分。",
      foregroundDepthRuleEn: "minimal foreground, with midground and distance divided by a horizontal mass",
      whitespaceRuleZh: "留白沿横向延展，突出孤独距离。",
      whitespaceRuleEn: "negative space stretches horizontally, emphasizing lonely distance",
      cameraRuleZh: "宽银幕或远距镜头最合适。",
      cameraRuleEn: "widescreen or distant lens works best",
    },
    {
      value: "pilgrimage-distance",
      labelZh: "远距朝圣构图",
      labelEn: "distant pilgrimage composition",
      descriptionZh: "人物和主体之间保留长距离，画面强调抵达之前的静止时刻。",
      descriptionEn: "a long distance remains between the figure and the main body, emphasizing the still moment before arrival",
      allowedStructurePositions: ["distant-horizon-mass", "above-low-horizon", "upper-center-mass"],
      allowedFigurePlacements: ["lower-center-pilgrim", "horizon-speck", "line-second-bend"],
      allowedLeadingLines: ["s-curve-light", "no-road-volume", "surface-fissure"],
      recommendedStructureShareRange: [58, 78],
      foregroundDepthRuleZh: "前景提供起点，中景是空距，远景是巨构。",
      foregroundDepthRuleEn: "foreground as departure, midground as distance, and background as megastructure",
      whitespaceRuleZh: "留白承担距离和沉默，不放置多余事件。",
      whitespaceRuleEn: "negative space carries distance and silence, without extra events",
      cameraRuleZh: "远距镜头，人物必须小而克制。",
      cameraRuleEn: "distant lens, with a tiny restrained figure",
    },
    {
      value: "negative-space",
      labelZh: "大留白极简构图",
      labelEn: "minimal negative-space composition",
      descriptionZh: "用大片空域衬托少量体块和人物，画面信息极度克制。",
      descriptionEn: "large empty areas set off limited mass and figure, keeping visual information restrained",
      allowedStructurePositions: ["partial-edge", "distant-horizon-mass", "upper-center-mass"],
      allowedFigurePlacements: ["horizon-speck", "edge-lit-patch", "lower-right-third"],
      allowedLeadingLines: ["no-road-volume", "mass-arc", "diagonal-light-boundary"],
      recommendedStructureShareRange: [52, 72],
      foregroundDepthRuleZh: "前中远景关系极简，用少量边界暗示空间。",
      foregroundDepthRuleEn: "minimal depth relation, using sparse boundaries to imply space",
      whitespaceRuleZh: "留白是主叙事元素，不能被纹理填满。",
      whitespaceRuleEn: "negative space is the main narrative element and must not be filled with texture",
      cameraRuleZh: "安静、稳定、低信息密度。",
      cameraRuleEn: "quiet, stable, low-information framing",
    },
    {
      value: "foreground-occlusion",
      labelZh: "前景遮挡电影构图",
      labelEn: "cinematic foreground-occlusion composition",
      descriptionZh: "前景局部遮挡画面，中景放人物，远景保留主体压迫。",
      descriptionEn: "foreground partially occludes the frame, the figure sits in midground, and the distant subject remains oppressive",
      allowedStructurePositions: ["distant-horizon-mass", "partial-edge", "diagonal-through-frame"],
      allowedFigurePlacements: ["platform-edge", "edge-lit-patch", "line-second-bend"],
      allowedLeadingLines: ["platform-edge-line", "shadow-boundary", "surface-fissure"],
      recommendedStructureShareRange: [60, 80],
      foregroundDepthRuleZh: "前景遮挡要服务层次，不喧宾夺主。",
      foregroundDepthRuleEn: "foreground occlusion must serve depth without taking over",
      whitespaceRuleZh: "留白在遮挡之后打开，制造电影纵深。",
      whitespaceRuleEn: "negative space opens behind the occlusion to create cinematic depth",
      cameraRuleZh: "电影式中远景，边缘可有压暗遮挡。",
      cameraRuleEn: "cinematic middle-long view with possible dark edge occlusion",
    },
    {
      value: "vertical-axis",
      labelZh: "垂直轴线构图",
      labelEn: "vertical-axis composition",
      descriptionZh: "画面围绕一条垂直轴线建立尺度，人物在轴线附近但不必完全居中。",
      descriptionEn: "the image builds scale around a vertical axis, with the figure near but not necessarily on center",
      allowedStructurePositions: ["upper-center-mass", "top-down-pressure", "above-low-horizon"],
      allowedFigurePlacements: ["lower-center-pilgrim", "lower-right-third", "horizon-speck"],
      allowedLeadingLines: ["vertical-cable", "mass-arc", "no-road-volume"],
      recommendedStructureShareRange: [68, 86],
      foregroundDepthRuleZh: "前景简化，中景人物压低，主体沿轴线上升。",
      foregroundDepthRuleEn: "simplified foreground, low midground figure, and main body rising along the axis",
      whitespaceRuleZh: "留白在轴线两侧保持克制平衡。",
      whitespaceRuleEn: "negative space stays restrained and balanced on both sides of the axis",
      cameraRuleZh: "正向或轻微仰视，强调竖向秩序。",
      cameraRuleEn: "frontal or slightly upward view emphasizing vertical order",
    },
  ],
  structurePositions: [
    { value: "left-edge-intrusion", labelZh: "从左侧边缘大面积切入", labelEn: "large intrusion from the left edge", descriptionZh: "巨构从左侧压入，只露局部但视觉重量极高。", descriptionEn: "the megastructure presses in from the left, only partly visible yet visually dominant" },
    { value: "right-edge-intrusion", labelZh: "从右侧边缘大面积切入", labelEn: "large intrusion from the right edge", descriptionZh: "巨构从右侧压入，人物通常放在相反侧或低处。", descriptionEn: "the megastructure presses in from the right, with the figure usually opposite or low" },
    { value: "partial-edge", labelZh: "只露出局部边缘但视觉重量极高", labelEn: "partial edge with extreme visual weight", descriptionZh: "巨构只显露边界或截面，依靠尺度暗示完整体量。", descriptionEn: "only the edge or cut face appears, implying full mass through scale" },
    { value: "above-low-horizon", labelZh: "作为低地平线之上的主体", labelEn: "dominant body above a low horizon", descriptionZh: "巨构压在低地平线上方，地表只保留窄带。", descriptionEn: "the megastructure sits above a low horizon, leaving the ground as a narrow band" },
    { value: "top-down-pressure", labelZh: "从画面顶部向下悬压", labelEn: "suspended pressure from the top", descriptionZh: "巨构从上方压下，形成悬置的重量感。", descriptionEn: "the megastructure descends from above, creating suspended weight" },
    { value: "distant-horizon-mass", labelZh: "位于远景地平线但尺度极大", labelEn: "far horizon mass at enormous scale", descriptionZh: "巨构在远处仍巨大，靠距离反衬不可抵达。", descriptionEn: "the megastructure remains immense at distance, making it feel unreachable" },
    { value: "enclosing-frame", labelZh: "形成包围人物的巨大框架", labelEn: "giant frame enclosing the figure", descriptionZh: "巨构局部成为边框或门槛，把人物包入其中。", descriptionEn: "part of the structure becomes a frame or threshold enclosing the figure" },
    { value: "diagonal-through-frame", labelZh: "沿对角线贯穿画面", labelEn: "running diagonally through the frame", descriptionZh: "巨构沿对角方向穿过画面，形成方向压力。", descriptionEn: "the megastructure crosses diagonally, creating directional pressure" },
    { value: "upper-center-mass", labelZh: "占据中央偏上的巨大静止体", labelEn: "huge still mass in the upper center", descriptionZh: "巨构位于中央偏上，稳定、沉默、不可移动。", descriptionEn: "the megastructure sits high and central, stable, silent, immovable" },
    { value: "upper-horizontal-slice", labelZh: "横向压过画面上半部", labelEn: "horizontal pressure across the upper frame", descriptionZh: "巨构像横向体块切过画面，压缩地表和人物。", descriptionEn: "the megastructure slices horizontally, compressing ground and figure" },
  ],
  leadingLines: [
    { value: "s-curve-light", labelZh: "S 形浅亮路径", labelEn: "pale S-curve path", descriptionZh: "浅亮线条从前景弯向主体，人物可停在第二个弯折处。", descriptionEn: "a pale line curves from foreground toward the subject, with the figure near the second bend" },
    { value: "diagonal-light-boundary", labelZh: "对角线明暗边界", labelEn: "diagonal light-shadow boundary", descriptionZh: "明暗分界沿对角线推进，呼应主体压力。", descriptionEn: "a light-shadow boundary advances diagonally, echoing structural pressure" },
    { value: "shadow-boundary", labelZh: "巨构阴影边缘", labelEn: "edge of the megastructure shadow", descriptionZh: "阴影边缘成为视线入口，人物可站在亮暗交界。", descriptionEn: "the shadow edge becomes the visual entry, with the figure at the light-dark boundary" },
    { value: "platform-edge-line", labelZh: "平台边缘线", labelEn: "platform edge line", descriptionZh: "平台或地表边缘作为硬质线条，把视线推向主体。", descriptionEn: "a platform or ground edge pushes the eye toward the subject" },
    { value: "surface-fissure", labelZh: "地表裂隙线", labelEn: "surface fissure line", descriptionZh: "细长裂隙或界面线暗示方向和尺度。", descriptionEn: "a long fissure or seam suggests direction and scale" },
    { value: "reflection-band", labelZh: "水面反光带", labelEn: "water reflection band", descriptionZh: "低亮反光带形成安静的引导。", descriptionEn: "a low reflective band forms a quiet guide" },
    { value: "array-alignment", labelZh: "阵列排布线", labelEn: "array alignment line", descriptionZh: "重复装置或标记形成递进秩序。", descriptionEn: "repeated devices or markers form a receding order" },
    { value: "vertical-cable", labelZh: "垂直缆索方向", labelEn: "vertical cable direction", descriptionZh: "竖向线索把视线引到高处主体。", descriptionEn: "vertical lines pull the gaze toward the high subject" },
    { value: "mass-arc", labelZh: "巨构弧线", labelEn: "arc of the megastructure", descriptionZh: "主体弧线本身引导视线，不额外增加道路。", descriptionEn: "the structure's arc guides the eye without adding a road" },
    { value: "no-road-volume", labelZh: "无明确道路，仅由留白和体块引导", labelEn: "no road, guided by void and mass", descriptionZh: "不设置明显路径，只靠空域、边界和体块组织视线。", descriptionEn: "no visible path; void, boundary, and mass organize attention" },
    { value: "horizontal-shadow", labelZh: "横向阴影线", labelEn: "horizontal shadow line", descriptionZh: "横向阴影把画面切成上下两个尺度层。", descriptionEn: "a horizontal shadow divides the image into two scale layers" },
  ],
  figurePlacements: [
    { value: "lower-right-third", labelZh: "右下三分点", labelEn: "lower-right third", descriptionZh: "人物在右下三分点附近，作为低处尺度标记。", descriptionEn: "the figure sits near the lower-right third as a low scale marker" },
    { value: "lower-left-third", labelZh: "左下三分点", labelEn: "lower-left third", descriptionZh: "人物在左下三分点附近，避开普通居中。", descriptionEn: "the figure sits near the lower-left third, avoiding default centering" },
    { value: "edge-lit-patch", labelZh: "画面边缘小亮区", labelEn: "small bright patch near the edge", descriptionZh: "人物站在边缘亮区，被巨大阴影包围。", descriptionEn: "the figure stands in an edge-lit patch surrounded by huge shadow" },
    { value: "line-second-bend", labelZh: "引导线第二弯折处", labelEn: "second bend of the guiding line", descriptionZh: "人物停在引导线第二个弯折处，形成路径停顿。", descriptionEn: "the figure pauses at the second bend, making the path feel interrupted" },
    { value: "shadow-edge", labelZh: "巨构阴影边界", labelEn: "edge of the megastructure shadow", descriptionZh: "人物位于亮暗边界，强调被体块压住的尺度。", descriptionEn: "the figure stands at the light-dark edge, emphasizing scale under the mass" },
    { value: "inside-frame-offside", labelZh: "框景内部偏侧位置", labelEn: "offside position inside the frame", descriptionZh: "人物被巨构框入，但略偏一侧。", descriptionEn: "the figure is enclosed by the frame but offset to one side" },
    { value: "horizon-speck", labelZh: "远景地平线附近", labelEn: "near the distant horizon", descriptionZh: "人物几乎只是地平线上的小点。", descriptionEn: "the figure is almost only a speck near the horizon" },
    { value: "lower-center-pilgrim", labelZh: "下方中央朝圣式位置", labelEn: "lower-center pilgrim position", descriptionZh: "人物可居中但必须极小，强调仪式性尺度。", descriptionEn: "the figure may be centered but must remain tiny, emphasizing ritual scale" },
    { value: "platform-edge", labelZh: "前景平台边缘", labelEn: "foreground platform edge", descriptionZh: "人物站在前景边缘，面向主体或边界。", descriptionEn: "the figure stands on the foreground edge, facing the subject or boundary" },
    { value: "diagonal-end", labelZh: "对角线末端", labelEn: "end of the diagonal", descriptionZh: "人物位于对角线的末端，承接画面方向。", descriptionEn: "the figure sits at the end of the diagonal, receiving the composition direction" },
  ],
  megastructureTypes: [
    { value: "arc-boundary-wall", labelZh: "巨型弧形界墙", labelEn: "colossal curved boundary wall", descriptionZh: "超大弧面边界结构，表面有纵向结构缝和银灰外壳。", descriptionEn: "an immense curved boundary structure with vertical seams and a silver-gray shell" },
    { value: "broken-orbital-ring", labelZh: "断裂轨道环", labelEn: "fractured orbital ring", descriptionZh: "破碎的环形工程构件，带有巨型装甲面板和断裂截面。", descriptionEn: "a broken ring-shaped engineering component with huge armor panels and fractured cross-sections" },
    { value: "planetary-shell-fragment", labelZh: "行星级外壳残片", labelEn: "planetary shell fragment", descriptionZh: "巨大曲面壳体，像被切开的人工外层结构。", descriptionEn: "a huge curved shell, like a cut-open artificial outer layer" },
    { value: "beacon-tower", labelZh: "超高信标塔", labelEn: "impossibly tall beacon tower", descriptionZh: "极高竖向塔体，周围有微弱光学偏折。", descriptionEn: "an extremely tall vertical tower with subtle optical distortion around it" },
    { value: "suspended-platform-body", labelZh: "悬浮平台体", labelEn: "suspended platform body", descriptionZh: "厚重水平平台结构，底部有暗色骨架和分层舱段。", descriptionEn: "a heavy horizontal platform with dark underside framework and layered bays" },
    { value: "broken-dome-shell", labelZh: "半埋穹顶残骸", labelEn: "broken dome shell", descriptionZh: "破损穹顶外壳，表面有白灰面板与风化痕迹。", descriptionEn: "a damaged dome shell with white-gray panels and weathered marks" },
    { value: "skybridge-component", labelZh: "巨型天空桥构件", labelEn: "giant skybridge component", descriptionZh: "超长桥体结构，远端不可见，体块连续而克制。", descriptionEn: "an extremely long bridge-like structure whose far end disappears, continuous and restrained" },
    { value: "ring-threshold-device", labelZh: "环形门槛结构", labelEn: "ring threshold device", descriptionZh: "巨大的环状边界装置，像门槛而非传送门特效。", descriptionEn: "a huge ring-shaped boundary device, threshold-like rather than a portal effect" },
    { value: "composite-garden-structure", labelZh: "复合式后人类花园构件", labelEn: "composite post-human garden structure", descriptionZh: "圆环、塔楼、平台与桥体交错的复合结构。", descriptionEn: "a composite structure of rings, towers, platforms, and bridge bodies" },
    { value: "dark-ark-mass", labelZh: "黑灰方舟状巨构", labelEn: "dark ark-like mass", descriptionZh: "巨大方舟形壳体，体块沉重，细节克制。", descriptionEn: "a giant ark-shaped shell, heavy in mass and restrained in detail" },
    { value: "double-offset-wall", labelZh: "双层错位界墙", labelEn: "double offset boundary wall", descriptionZh: "两层错位弧形边界结构，制造前后门槛关系。", descriptionEn: "two offset curved boundary layers creating a front-back threshold relationship" },
    { value: "light-cone-array", labelZh: "光锥观测阵列", labelEn: "light-cone observation array", descriptionZh: "多个信标、环体和测量框架组成的观测系统。", descriptionEn: "an observation system made of beacons, rings, and measurement frames" },
  ],
  sceneBases: [
    { value: "short-grassland", labelZh: "短草草原", labelEn: "short-grass grassland", descriptionZh: "平坦开阔的短草地，环境只提供尺度和路径区域。", descriptionEn: "flat open short grass, providing scale and path area only" },
    { value: "abandoned-industrial", labelZh: "废弃工业厂区", labelEn: "abandoned industrial district", descriptionZh: "空旷混凝土地坪、旧厂房与管线遗留，没有现代运转痕迹。", descriptionEn: "empty concrete slabs, old industrial halls, and leftover pipes without active operation" },
    { value: "planetary-facility", labelZh: "行星级荒原设施", labelEn: "planet-scale wasteland facility", descriptionZh: "宽阔地表上残留超大尺度能源设施和测量阵列。", descriptionEn: "vast surface with huge energy facilities and measurement arrays" },
    { value: "cloud-sea-platform", labelZh: "高空云海平台", labelEn: "high-altitude cloud-sea platform", descriptionZh: "狭窄平台悬于明亮云海上方，空间稀薄而清晰。", descriptionEn: "a narrow platform suspended above a luminous cloud sea, thin and clear" },
    { value: "low-orbit-edge", labelZh: "近地轨道边缘", labelEn: "low-orbit edge", descriptionZh: "可站立结构旁可见行星弧面，空间真实而克制。", descriptionEn: "a walkable structure with a visible planetary arc, realistic and restrained" },
    { value: "lunar-surface", labelZh: "月面或类月地表", labelEn: "lunar or moonlike surface", descriptionZh: "低重力荒原、细灰尘与低饱和硬质地表。", descriptionEn: "low-gravity barren ground, fine gray dust, and low-saturation hard surface" },
    { value: "cooling-tower-ruins", labelZh: "巨型冷却塔群遗址", labelEn: "giant cooling tower ruins", descriptionZh: "巨大冷却塔遗留成山体般的静止背景。", descriptionEn: "giant cooling tower remains as mountain-like silent background forms" },
    { value: "abandoned-launch-site", labelZh: "废弃发射场", labelEn: "abandoned launch site", descriptionZh: "空旷发射平台、导流槽和竖向塔架遗留。", descriptionEn: "empty launch platforms, flame trenches, and leftover vertical towers" },
    { value: "observation-array-plain", labelZh: "观测阵列平原", labelEn: "observation array plain", descriptionZh: "巨大环形天线、信标和测量塔有序排列。", descriptionEn: "huge ring antennas, beacons, and measuring towers arranged in order" },
    { value: "icefield", labelZh: "冰原与银灰遗迹", labelEn: "icefield with silver-gray relics", descriptionZh: "低饱和冰面、细薄雪层和冷光反射。", descriptionEn: "low-saturation ice, thin snow layers, and cold reflected light" },
    { value: "wetland-reflection", labelZh: "浅水湿地与倒影", labelEn: "shallow wetland and reflections", descriptionZh: "浅水、短草边缘和被风打碎的镜面反光。", descriptionEn: "shallow water, low grass edges, and mirror reflections broken by wind" },
    { value: "cosmic-surface-boundary", labelZh: "宇宙背景下的地表边界", labelEn: "surface boundary under cosmic backdrop", descriptionZh: "地面很窄，天空或宇宙成为主要空域。", descriptionEn: "a narrow ground strip under a large sky or cosmic void" },
    { value: "ringworld-inner-wall", labelZh: "环世界内壁地貌", labelEn: "ringworld inner-wall terrain", descriptionZh: "远方地平线向上弯曲，暗示人工世界内壁。", descriptionEn: "the distant horizon curves upward, suggesting an artificial world's inner wall" },
    { value: "orbital-elevator-base", labelZh: "轨道电梯基座区域", labelEn: "orbital elevator base zone", descriptionZh: "巨大缆索或塔柱从地表垂直升起。", descriptionEn: "huge cables or pylons rising vertically from the surface" },
    { value: "post-human-ecology", labelZh: "后人类生态修复区", labelEn: "post-human ecological restoration zone", descriptionZh: "草地、湿地、苔藓和银灰工业遗迹共存，宁静而非废土。", descriptionEn: "grass, wetland, moss, and silver-gray relics coexist, quiet rather than wasteland" },
  ],
  surfaceTextures: [
    { value: "grass-flat-meadow", sceneBase: "short-grassland", labelZh: "平坦短草草甸", labelEn: "flat short meadow", descriptionZh: "草层均匀贴地，纹理清楚但不过度微距。", descriptionEn: "an even low grass layer, clear but not macro-detailed" },
    { value: "grass-after-rain", sceneBase: "short-grassland", labelZh: "雨后低矮草皮", labelEn: "low turf after rain", descriptionZh: "细密低矮草皮带轻微反光。", descriptionEn: "dense low turf with subtle reflective moisture" },
    { value: "grass-wind-streaks", sceneBase: "short-grassland", labelZh: "风扫过的贴地草纹", labelEn: "wind-swept low grass streaks", descriptionZh: "浅色风纹沿地表拉开方向。", descriptionEn: "pale wind streaks pull direction across the ground" },
    { value: "industrial-concrete", sceneBase: "abandoned-industrial", labelZh: "风化混凝土地坪", labelEn: "weathered concrete slab", descriptionZh: "大面积灰绿混凝土有雨痕和细裂纹。", descriptionEn: "large gray-green concrete slabs with rain marks and fine cracks" },
    { value: "industrial-old-paint", sceneBase: "abandoned-industrial", labelZh: "旧漆剥落与低矮管线", labelEn: "peeling paint and low pipes", descriptionZh: "低矮管线和剥落旧漆只作为边缘纹理。", descriptionEn: "low pipes and peeling old paint remain edge texture only" },
    { value: "industrial-wet-metal", sceneBase: "abandoned-industrial", labelZh: "微湿金属平台边缘", labelEn: "damp metal platform edge", descriptionZh: "暗银金属边缘有轻微潮湿反光。", descriptionEn: "dark silver metal edges with slight wet reflections" },
    { value: "facility-dust", sceneBase: "planetary-facility", labelZh: "浅灰荒原粉尘", labelEn: "pale wasteland dust", descriptionZh: "宽阔粉尘地表带有稀疏测量标记。", descriptionEn: "broad dusty ground with sparse measuring marks" },
    { value: "facility-plate-seams", sceneBase: "planetary-facility", labelZh: "地面接口缝线", labelEn: "ground interface seams", descriptionZh: "硬质地面接口线暗示工程尺度。", descriptionEn: "hard ground seam lines imply engineered scale" },
    { value: "cloud-white-platform", sceneBase: "cloud-sea-platform", labelZh: "白灰平台甲板", labelEn: "white-gray platform deck", descriptionZh: "窄平台边缘干净、冷白、无杂物。", descriptionEn: "a narrow platform edge, clean, cold white, and uncluttered" },
    { value: "cloud-condensation", sceneBase: "cloud-sea-platform", labelZh: "薄雾凝结边缘", labelEn: "thin condensation edge", descriptionZh: "平台边缘有极轻薄的凝结水雾。", descriptionEn: "very light condensation mist along the platform edge" },
    { value: "orbit-white-deck", sceneBase: "low-orbit-edge", labelZh: "白灰金属甲板", labelEn: "white-gray metal deck", descriptionZh: "金属甲板有细密维护刻线。", descriptionEn: "a metal deck with fine maintenance engravings" },
    { value: "orbit-thermal-panel", sceneBase: "low-orbit-edge", labelZh: "黑色隔热板", labelEn: "black thermal panels", descriptionZh: "低反射黑色隔热板形成克制几何纹理。", descriptionEn: "low-reflective black thermal panels create restrained geometry" },
    { value: "lunar-fine-dust", sceneBase: "lunar-surface", labelZh: "细灰尘与浅脚印", labelEn: "fine gray dust and faint footprints", descriptionZh: "粉尘明亮干燥，浅脚印只暗示人物尺度。", descriptionEn: "bright dry dust with faint footprints only suggesting human scale" },
    { value: "lunar-hard-powder", sceneBase: "lunar-surface", labelZh: "明亮硬质粉尘表面", labelEn: "bright hard powdery surface", descriptionZh: "硬质粉尘低饱和、颗粒细小、轮廓清晰。", descriptionEn: "low-saturation hard dust, fine particles, and crisp contours" },
    { value: "cooling-moss", sceneBase: "cooling-tower-ruins", labelZh: "苔藓与旧混凝土", labelEn: "moss and old concrete", descriptionZh: "少量苔藓只沿混凝土裂缝出现。", descriptionEn: "small moss patches appear only along concrete cracks" },
    { value: "launch-scorched-slab", sceneBase: "abandoned-launch-site", labelZh: "浅焦痕发射地坪", labelEn: "lightly scorched launch slab", descriptionZh: "旧导流痕迹低调可见，不出现火焰。", descriptionEn: "old flame-channel marks remain subtle, with no fire" },
    { value: "array-marker-stones", sceneBase: "observation-array-plain", labelZh: "测量标记与细碎石", labelEn: "measurement marks and fine gravel", descriptionZh: "细碎石和测量标记形成冷静秩序。", descriptionEn: "fine gravel and measurement marks form a calm order" },
    { value: "ice-thin-snow", sceneBase: "icefield", labelZh: "细薄雪层与蓝灰冰面", labelEn: "thin snow over blue-gray ice", descriptionZh: "雪层薄而低饱和，反射冷白天光。", descriptionEn: "thin low-saturation snow reflecting cold white sky light" },
    { value: "wetland-mirror", sceneBase: "wetland-reflection", labelZh: "浅水镜面反光", labelEn: "shallow mirror-like water", descriptionZh: "浅水倒影被风轻微打碎。", descriptionEn: "shallow reflections gently broken by wind" },
    { value: "cosmic-narrow-ground", sceneBase: "cosmic-surface-boundary", labelZh: "窄地表边界线", labelEn: "narrow ground boundary line", descriptionZh: "地面只是暗示可站立边界的窄带。", descriptionEn: "the ground is only a narrow walkable boundary band" },
    { value: "ringworld-curved-terrain", sceneBase: "ringworld-inner-wall", labelZh: "向上弯曲的远方地貌", labelEn: "upward-curving distant terrain", descriptionZh: "远方地貌轻微上弯，保持真实透视。", descriptionEn: "the distant terrain bends upward subtly while keeping realistic perspective" },
    { value: "elevator-anchor-plate", sceneBase: "orbital-elevator-base", labelZh: "锚定甲板与缆索基座", labelEn: "anchor deck and cable base", descriptionZh: "巨大基座周围的甲板线条清晰克制。", descriptionEn: "clear restrained deck lines around the enormous anchor base" },
    { value: "ecology-moss-wildflowers", sceneBase: "post-human-ecology", labelZh: "苔藓、湿地与白色野花", labelEn: "moss, wetland, and white wildflowers", descriptionZh: "生态修复细节少量出现，宁静而非繁茂。", descriptionEn: "restoration details appear sparsely, quiet rather than lush" },
  ],
  foregroundElements: [
    { value: "none-minimal", labelZh: "无明显前景，保持极简", labelEn: "no obvious foreground", descriptionZh: "前景几乎清空，只保留尺度入口。", descriptionEn: "foreground nearly empty, preserving only a scale entry" },
    { value: "low-slope", labelZh: "低矮地表坡面", labelEn: "low surface slope", descriptionZh: "低矮坡面形成轻微遮挡。", descriptionEn: "a low slope creates slight occlusion" },
    { value: "wet-reflection", labelZh: "湿润浅水反光", labelEn: "wet shallow reflection", descriptionZh: "浅亮反光带提供前景入口。", descriptionEn: "a pale reflective band gives foreground entry" },
    { value: "orbital-fragment", labelZh: "废弃轨道碎片", labelEn: "abandoned orbital fragment", descriptionZh: "碎片很少，只作为尺度参照。", descriptionEn: "fragments remain sparse, only for scale" },
    { value: "low-pipes", labelZh: "低矮工业管线", labelEn: "low industrial pipes", descriptionZh: "管线贴地且不抢主体。", descriptionEn: "pipes stay low and never dominate" },
    { value: "concrete-edge", labelZh: "旧混凝土平台边缘", labelEn: "old concrete platform edge", descriptionZh: "硬边界切入前景，带来电影层次。", descriptionEn: "a hard edge enters foreground, adding cinematic depth" },
    { value: "metal-catwalk", labelZh: "金属检修栈道", labelEn: "metal maintenance catwalk", descriptionZh: "窄栈道作为人物尺度线。", descriptionEn: "a narrow catwalk acts as a human scale line" },
    { value: "moss-panel", labelZh: "苔藓覆盖的装甲板", labelEn: "moss-covered armor plate", descriptionZh: "少量苔藓让工业遗迹变得安静。", descriptionEn: "small moss makes the industrial relic quiet" },
    { value: "glowing-marker", labelZh: "发光测量标记", labelEn: "glowing measurement marker", descriptionZh: "微弱标记仅提示观测尺度，不做 UI 特效。", descriptionEn: "a faint marker suggests measurement scale without UI effects" },
    { value: "broken-instrument", labelZh: "破损观测仪残件", labelEn: "broken observation instrument", descriptionZh: "残件低矮、稀少、克制。", descriptionEn: "fragments are low, sparse, and restrained" },
  ],
  figureScales: [
    { value: "tiny-one-percent", labelZh: "极小人物，占画面高度约 1%", labelEn: "tiny figure, about 1% of image height", descriptionZh: "人物只作为尺度标记，不承担英雄叙事。", descriptionEn: "the figure is only a scale marker, not a heroic subject" },
    { value: "nearly-invisible", labelZh: "几乎不可见的人物，只作为尺度噪点", labelEn: "nearly invisible scale speck", descriptionZh: "人物接近消失，强化巨构不可理解的尺度。", descriptionEn: "the figure nearly disappears, strengthening incomprehensible scale" },
    { value: "small-two-percent", labelZh: "小人物，占画面高度约 2%", labelEn: "small figure, about 2% of image height", descriptionZh: "人物可被辨认，但面积仍非常克制。", descriptionEn: "the figure is readable but still restrained" },
    { value: "clear-three-percent", labelZh: "明确可见但仍很小，占画面高度约 3%", labelEn: "clearly visible but small, about 3%", descriptionZh: "人物轮廓清楚，但不抢走巨构视觉重量。", descriptionEn: "the silhouette is clear but does not steal visual weight" },
    { value: "modest-five-percent", labelZh: "中小人物，占画面高度约 5%", labelEn: "modest small figure, about 5%", descriptionZh: "人物更容易阅读，但仍低于场景和巨构权重。", descriptionEn: "the figure is easier to read but remains below the environment and megastructure in weight" },
    { value: "centered-pilgrim", labelZh: "居中朝圣者，极小，强调仪式感", labelEn: "centered tiny pilgrim", descriptionZh: "允许居中，但必须极小、安静、仪式化。", descriptionEn: "centering is allowed, but the figure must stay tiny, quiet, and ritualized" },
    { value: "small-group", labelZh: "一组极小人物，2 到 3 人，分散而不拥挤", labelEn: "tiny group of two or three", descriptionZh: "人数极少、分散、不拥挤，只增加尺度层次。", descriptionEn: "few, scattered, never crowded, adding only scale layers" },
    { value: "single-back-view", labelZh: "单人背影，轮廓清楚但面积克制", labelEn: "single back-view figure", descriptionZh: "背影可读，但情绪不表演化。", descriptionEn: "the back-view silhouette is readable without theatrical emotion" },
  ],
  figureOrientations: [
    { value: "facing-structure", labelZh: "面向巨构", labelEn: "facing the megastructure", descriptionZh: "人物朝向主体，像在观察或抵达之前停下。", descriptionEn: "the figure faces the subject, as if pausing before arrival" },
    { value: "back-to-viewer", labelZh: "背对观者", labelEn: "back to viewer", descriptionZh: "人物背影面向远处，避免表演化表情。", descriptionEn: "the figure faces away, avoiding expressive acting" },
    { value: "side-walking", labelZh: "侧向行走", labelEn: "walking sideways", descriptionZh: "人物沿构图方向缓慢移动。", descriptionEn: "the figure moves slowly along the composition direction" },
    { value: "still-standing", labelZh: "静止站立", labelEn: "standing still", descriptionZh: "人物静止不动，像被尺度压住。", descriptionEn: "the figure stands still, held by scale" },
    { value: "following-line", labelZh: "沿引导线前进", labelEn: "moving along the guiding line", descriptionZh: "人物行动与引导线一致。", descriptionEn: "the figure's movement aligns with the guiding line" },
    { value: "stopped-before-boundary", labelZh: "停在边界前", labelEn: "stopped before the boundary", descriptionZh: "人物停在不可跨越的边界之前。", descriptionEn: "the figure stops before an uncrossable boundary" },
  ],
  lightingWeather: [
    { value: "high-key-daylight", labelZh: "晴朗高调日光", labelEn: "clear high-key daylight", descriptionZh: "明亮但不过曝，巨构边缘有柔和银灰高光。", descriptionEn: "bright but not overexposed, with soft silver-gray highlights along edges" },
    { value: "after-rain-air", labelZh: "雨后透明空气", labelEn: "transparent air after rain", descriptionZh: "远景清晰，地表有轻微反光，阴影干净。", descriptionEn: "clear distance, slight ground reflection, and clean shadows" },
    { value: "pale-boundary-light", labelZh: "苍白边界天光", labelEn: "pale boundary skylight", descriptionZh: "像世界边缘的漫射光，低对比但清楚。", descriptionEn: "diffuse light like the edge of the world, low contrast but clear" },
    { value: "cold-high-altitude", labelZh: "高空冷白光", labelEn: "cold high-altitude light", descriptionZh: "适合轨道、月面、云海，空气稀薄，轮廓硬朗。", descriptionEn: "suited to orbit, lunar surfaces, and cloud seas, with thin air and crisp silhouettes" },
    { value: "soft-morning-rake", labelZh: "柔和清晨斜光", labelEn: "soft morning raking light", descriptionZh: "拉出长阴影，增强人物尺度。", descriptionEn: "long shadows increase human scale" },
    { value: "reflected-skylight", labelZh: "反射天光", labelEn: "reflected skylight", descriptionZh: "来自冰面、水面或金属甲板的低亮反光。", descriptionEn: "low reflected light from ice, water, or metal decks" },
    { value: "optical-bending-glow", labelZh: "光学偏折微光", labelEn: "subtle optical-bending glow", descriptionZh: "只在巨构边缘出现，不做魔法特效。", descriptionEn: "appears only near structural edges, never as magic effects" },
  ],
  skyCosmos: [
    { value: "pale-blue-thin-cloud", labelZh: "明亮淡蓝天空与薄云", labelEn: "pale blue sky with thin clouds", descriptionZh: "天空清澈，薄云只提供尺度层次。", descriptionEn: "clear sky with thin clouds only adding scale layers" },
    { value: "after-rain-transparent", labelZh: "雨后透明天空", labelEn: "transparent after-rain sky", descriptionZh: "空气透明，远景边缘清楚。", descriptionEn: "transparent air with clear distant edges" },
    { value: "pale-high-sky", labelZh: "苍白高空天光", labelEn: "pale high-altitude sky", descriptionZh: "光线冷淡、干净、接近世界边界。", descriptionEn: "cool, clean light near a sense of world boundary" },
    { value: "low-orbit-black-blue", labelZh: "近地轨道可见的黑蓝宇宙", labelEn: "black-blue cosmos near low orbit", descriptionZh: "宇宙背景真实克制，不出现太空战斗。", descriptionEn: "a restrained realistic cosmic backdrop, with no space battle" },
    { value: "daylight-planet-arc", labelZh: "白昼中隐约可见的行星弧面", labelEn: "faint planetary arc in daylight", descriptionZh: "行星弧面很淡，只增强尺度。", descriptionEn: "the planetary arc is faint, only increasing scale" },
    { value: "upper-atmosphere-stars", labelZh: "极高空稀薄云层与星点", labelEn: "upper-atmosphere thin clouds and sparse stars", descriptionZh: "星点稀少，画面仍明亮清晰。", descriptionEn: "stars are sparse while the image remains bright and clear" },
    { value: "half-sky-occluded", labelZh: "巨构遮蔽半个天空", labelEn: "megastructure occluding half the sky", descriptionZh: "遮蔽造成尺度压迫，但不让画面过暗。", descriptionEn: "occlusion creates scale pressure without making the image too dark" },
    { value: "light-cone-glow", labelZh: "光锥边界般的柔和辉光", labelEn: "soft light-cone boundary glow", descriptionZh: "边界辉光极轻，只暗示不可抵达。", descriptionEn: "a very subtle boundary glow suggesting unreachable distance" },
    { value: "distant-ring-body", labelZh: "远方巨大环形天体轮廓", labelEn: "distant ring-shaped celestial silhouette", descriptionZh: "轮廓遥远克制，不变成奇幻天象。", descriptionEn: "the silhouette is distant and restrained, not fantasy spectacle" },
    { value: "restrained-cosmos", labelZh: "克制宇宙背景", labelEn: "restrained cosmic backdrop", descriptionZh: "宇宙只作为空间边界，不抢巨构主体。", descriptionEn: "cosmos acts only as a spatial boundary, never stealing the subject" },
  ],
  moodTags: [
    { value: "serenity", labelZh: "宁静", labelEn: "serenity", descriptionZh: "没有动作事件，画面像被时间暂停。", descriptionEn: "no action event, as if time has paused" },
    { value: "awe", labelZh: "敬畏", labelEn: "awe", descriptionZh: "巨构尺度压过人物理解能力。", descriptionEn: "the structure's scale exceeds human comprehension" },
    { value: "poetic-solitude", labelZh: "诗性孤独", labelEn: "poetic solitude", descriptionZh: "人物像画面中的一个小停顿。", descriptionEn: "the figure feels like a small pause in the image" },
    { value: "world-boundary", labelZh: "世界边界感", labelEn: "sense of world boundary", descriptionZh: "画面像站在可见世界尽头。", descriptionEn: "the image feels like standing at the edge of the visible world" },
    { value: "sacred", labelZh: "神圣", labelEn: "sacred", descriptionZh: "人物姿态像朝圣，但不夸张表演。", descriptionEn: "the figure feels pilgrim-like without theatrical acting" },
    { value: "emptiness", labelZh: "空旷", labelEn: "vast emptiness", descriptionZh: "环境中几乎没有杂物，距离感明显。", descriptionEn: "almost no clutter, with clear distance" },
    { value: "post-human", labelZh: "后人类", labelEn: "post-human", descriptionZh: "结构来自人类之后的文明遗留。", descriptionEn: "the structure belongs to a civilization after humanity" },
    { value: "cosmic-sublime", labelZh: "宇宙崇高", labelEn: "cosmic sublime", descriptionZh: "尺度暗示行星、轨道或因果边界。", descriptionEn: "scale implies planets, orbits, or causal boundaries" },
    { value: "bright-clear", labelZh: "明亮通透", labelEn: "bright translucency", descriptionZh: "空气清澈，色彩低饱和但不阴郁。", descriptionEn: "clear air, low saturation, but never gloomy" },
    { value: "civilization-relic", labelZh: "文明遗迹", labelEn: "civilization relic", descriptionZh: "结构静止、巨大、失去原功能。", descriptionEn: "the structure is still, huge, and no longer functional" },
    { value: "pilgrimage", labelZh: "朝圣感", labelEn: "pilgrimage", descriptionZh: "人物朝向巨构，行动缓慢而克制。", descriptionEn: "the figure faces the structure and moves slowly, restrained" },
    { value: "beyond-causality", labelZh: "因果之外", labelEn: "beyond causality", descriptionZh: "光线或空间关系有轻微不可解释感。", descriptionEn: "light or space feels slightly unexplainable" },
    { value: "beyond-horizon", labelZh: "视界之外", labelEn: "beyond the horizon", descriptionZh: "巨构像遮挡或标记不可见边界。", descriptionEn: "the structure blocks or marks an invisible boundary" },
    { value: "beyond-light-cone", labelZh: "光锥之外", labelEn: "beyond the light cone", descriptionZh: "观测、边界、距离和不可抵达感共同成立。", descriptionEn: "observation, boundary, distance, and unreachable scale align" },
  ],
  negativePrompt: {
    zh: "不要现代城市，不要普通摩天楼，不要街道交通，不要人群，不要赛博朋克霓虹，不要飞船大战，不要爆炸，不要士兵武器，不要动漫卡通，不要奇幻城堡，不要蒸汽朋克，不要高饱和脏艳色彩，不要厚重乌云，不要暴风雨，不要末日废土感过强，不要枯草荒地，不要长草丛生，不要过度微距草叶，不要峡谷悬崖，不要陡峭山地，不要人物居中，不要默认对称构图，不要巨构太小，不要文字水印，不要低清晰度，不要现代工厂正在运转，不要浓烟污染，不要拥挤机械，不要复杂管线喧宾夺主，不要太空战斗，不要激光炮，不要星舰交火，不要过度科幻 UI，不要霓虹广告，不要普通游戏场景，不要人物过大，不要英雄站姿抢主体，不要廉价末世废土，不要脏乱工业垃圾堆。",
    en: "no modern city, no ordinary skyscrapers, no street traffic, no crowds, no cyberpunk neon, no spaceship battle, no explosions, no soldiers, no weapons, no anime, no cartoon, no fantasy castle, no steampunk, no oversaturated colors, no heavy storm clouds, no thunderstorm, no excessive apocalypse wasteland, no dry dead grass, no tall grass, no macro grass close-up, no canyon cliffs, no steep mountains, no centered figure, no default symmetrical composition, no small megastructure, no text, no watermark, no low quality, no active modern factory, no pollution smoke, no crowded machinery, no overly busy pipes dominating the image, no space battle, no laser cannon, no starship combat, no excessive sci-fi UI, no neon ads, no generic game environment, no oversized figure, no heroic character pose dominating the subject, no cheap post-apocalyptic wasteland, no messy industrial junkyard.",
  },
};

const VOCAB_LABELS = {
  aspectRatios: "画面比例",
  compositionSchemes: "构图方案",
  structurePositions: "巨构位置",
  leadingLines: "路径 / 引导线",
  figurePlacements: "人物位置",
  megastructureTypes: "巨构类型",
  sceneBases: "场景基底",
  surfaceTextures: "场景元素质感",
  foregroundElements: "前景元素",
  figureScales: "人物大小",
  figureOrientations: "人物朝向",
  lightingWeather: "光线天气",
  skyCosmos: "天空 / 宇宙背景",
  moodTags: "情绪氛围",
  negativePrompt: "负面提示词",
};

const EDITABLE_LISTS = Object.keys(VOCAB_LABELS).filter((key) => key !== "negativePrompt");

let state = {
  data: clone(DATA),
  options: null,
  workflowOpen: true,
};

let activeEditKey = null;
const elements = {};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function makeDefaultOptions(data = state.data) {
  const sceneBase = firstValue(data.sceneBases);
  const compositionScheme = firstValue(data.compositionSchemes);
  return {
    aspectRatio: firstValue(data.aspectRatios),
    compositionScheme,
    structurePosition: firstCompatibleValue("structurePositions", compositionScheme, data),
    leadingLine: firstCompatibleValue("leadingLines", compositionScheme, data),
    figurePlacement: firstCompatibleValue("figurePlacements", compositionScheme, data),
    megastructureType: firstValue(data.megastructureTypes),
    megastructureShare: 75,
    groundShare: 18,
    sceneBase,
    surfaceTexture: firstSurfaceTextureValue(sceneBase, data),
    foregroundElement: firstValue(data.foregroundElements),
    figureScale: firstValue(data.figureScales),
    figureOrientation: firstValue(data.figureOrientations),
    lightingWeather: firstValue(data.lightingWeather),
    skyCosmos: firstValue(data.skyCosmos),
    moodTags: data.moodTags.slice(0, 4).map((item) => item.value),
    language: "zh",
    modelPreset: "chatgpt",
    includeNegative: true,
  };
}

function firstValue(list) {
  return list && list.length ? list[0].value : "";
}

function firstCompatibleValue(key, compositionValue, data = state.data) {
  const list = getCompatibleList(key, compositionValue, data);
  return firstValue(list);
}

function firstSurfaceTextureValue(sceneBase, data = state.data) {
  return firstValue(getSurfaceTextures(sceneBase, data));
}

function loadState() {
  const fallback = {
    data: clone(DATA),
    options: makeDefaultOptions(clone(DATA)),
    workflowOpen: true,
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    const data = sanitizeData(parsed.data || DATA);
    const options = validateOptions({ ...makeDefaultOptions(data), ...(parsed.options || {}) }, data);
    return {
      data,
      options,
      workflowOpen: parsed.workflowOpen !== false,
    };
  } catch (error) {
    console.warn("Failed to load saved config", error);
    return fallback;
  }
}

function sanitizeData(data) {
  const next = clone(DATA);
  EDITABLE_LISTS.forEach((key) => {
    if (Array.isArray(data[key]) && data[key].length) {
      next[key] = data[key].map((item) => normalizeItem(item, key));
    }
  });
  if (data.negativePrompt && typeof data.negativePrompt === "object") {
    next.negativePrompt = {
      zh: String(data.negativePrompt.zh || DATA.negativePrompt.zh),
      en: String(data.negativePrompt.en || DATA.negativePrompt.en),
    };
  }
  return next;
}

function normalizeItem(item, key) {
  const normalized = {
    value: item.value || uniqueValue(key, item.labelEn || item.labelZh || "custom"),
    labelZh: item.labelZh || item.zh || item.label || "未命名条目",
    labelEn: item.labelEn || item.en || item.label || "Untitled item",
    descriptionZh: item.descriptionZh || item.zh || item.labelZh || "",
    descriptionEn: item.descriptionEn || item.en || item.labelEn || "",
  };

  Object.keys(item).forEach((field) => {
    if (!(field in normalized) && !["zh", "en", "label"].includes(field)) {
      normalized[field] = item[field];
    }
  });

  if (key === "compositionSchemes") {
    normalized.allowedStructurePositions ||= [];
    normalized.allowedFigurePlacements ||= [];
    normalized.allowedLeadingLines ||= [];
    normalized.recommendedStructureShareRange ||= [60, 80];
    normalized.foregroundDepthRuleZh ||= "前中远景保持清晰层次。";
    normalized.foregroundDepthRuleEn ||= "foreground, midground, and background stay clearly layered";
    normalized.whitespaceRuleZh ||= "留白服务主体尺度。";
    normalized.whitespaceRuleEn ||= "negative space serves the subject scale";
    normalized.cameraRuleZh ||= "镜头保持稳定清楚。";
    normalized.cameraRuleEn ||= "the camera stays stable and clear";
  }

  if (key === "aspectRatios") {
    normalized.arParam ||= "1:1";
    normalized.recommendedCompositions ||= [];
  }

  if (key === "surfaceTextures") {
    normalized.sceneBase ||= firstValue(state?.data?.sceneBases || DATA.sceneBases);
  }

  return normalized;
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    data: state.data,
    options: state.options,
    workflowOpen: elements.workflowDetails ? elements.workflowDetails.open : state.workflowOpen,
  }));
}

function bindElements() {
  [
    "workflowDetails",
    "aspectRatio",
    "language",
    "modelPreset",
    "compositionScheme",
    "constraintHint",
    "structurePosition",
    "leadingLine",
    "figurePlacement",
    "megastructureType",
    "megastructureShare",
    "megastructureShareValue",
    "groundShare",
    "groundShareValue",
    "figureShareHint",
    "sceneBase",
    "surfaceTexture",
    "foregroundElement",
    "figureScale",
    "figureOrientation",
    "lightingWeather",
    "skyCosmos",
    "moodTags",
    "includeNegative",
    "randomButton",
    "copyButton",
    "resetButton",
    "batchButton",
    "downloadButton",
    "exportConfigButton",
    "importConfigButton",
    "restoreDefaultsButton",
    "importConfigInput",
    "positivePrompt",
    "negativePrompt",
    "negativePromptBlock",
    "constraintSummary",
    "structurePreview",
    "batchList",
    "batchCount",
    "copyStatus",
    "modelBadge",
    "vocabModal",
    "modalTitle",
    "modalHelp",
    "modalList",
    "addVocabItemButton",
    "saveVocabButton",
    "cancelVocabButton",
    "closeModalButton",
  ].forEach((id) => {
    elements[id] = document.getElementById(id);
  });
}

function bindEvents() {
  const controls = [
    "aspectRatio",
    "language",
    "modelPreset",
    "compositionScheme",
    "structurePosition",
    "leadingLine",
    "figurePlacement",
    "megastructureType",
    "megastructureShare",
    "groundShare",
    "sceneBase",
    "surfaceTexture",
    "foregroundElement",
    "figureScale",
    "figureOrientation",
    "lightingWeather",
    "skyCosmos",
    "includeNegative",
  ];

  controls.forEach((id) => {
    elements[id].addEventListener("input", handleControlChange);
    elements[id].addEventListener("change", handleControlChange);
  });

  elements.workflowDetails.addEventListener("toggle", () => {
    state.workflowOpen = elements.workflowDetails.open;
    persistState();
  });
  elements.moodTags.addEventListener("change", handleControlChange);
  document.querySelectorAll("[data-vocab]").forEach((button) => {
    button.addEventListener("click", () => openVocabEditor(button.dataset.vocab));
  });
  elements.randomButton.addEventListener("click", randomizeOptions);
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
}

function handleControlChange() {
  state.options = readOptionsFromDom();
  renderApp();
}

function readOptionsFromDom() {
  return {
    aspectRatio: elements.aspectRatio.value,
    compositionScheme: elements.compositionScheme.value,
    structurePosition: elements.structurePosition.value,
    leadingLine: elements.leadingLine.value,
    figurePlacement: elements.figurePlacement.value,
    megastructureType: elements.megastructureType.value,
    megastructureShare: Number(elements.megastructureShare.value),
    groundShare: Number(elements.groundShare.value),
    sceneBase: elements.sceneBase.value,
    surfaceTexture: elements.surfaceTexture.value,
    foregroundElement: elements.foregroundElement.value,
    figureScale: elements.figureScale.value,
    figureOrientation: elements.figureOrientation.value,
    lightingWeather: elements.lightingWeather.value,
    skyCosmos: elements.skyCosmos.value,
    moodTags: Array.from(elements.moodTags.querySelectorAll("input:checked")).map((input) => input.value),
    language: elements.language.value,
    modelPreset: elements.modelPreset.value,
    includeNegative: elements.includeNegative.checked,
  };
}

function validateOptions(options, data = state.data) {
  const next = { ...makeDefaultOptions(data), ...options };
  const simpleKeys = [
    "aspectRatios:aspectRatio",
    "compositionSchemes:compositionScheme",
    "megastructureTypes:megastructureType",
    "sceneBases:sceneBase",
    "foregroundElements:foregroundElement",
    "figureScales:figureScale",
    "figureOrientations:figureOrientation",
    "lightingWeather:lightingWeather",
    "skyCosmos:skyCosmos",
  ];

  simpleKeys.forEach((entry) => {
    const [listKey, optionKey] = entry.split(":");
    if (!data[listKey].some((item) => item.value === next[optionKey])) {
      next[optionKey] = firstValue(data[listKey]);
    }
  });

  const compatibleStructure = getCompatibleList("structurePositions", next.compositionScheme, data);
  if (!compatibleStructure.some((item) => item.value === next.structurePosition)) {
    next.structurePosition = firstValue(compatibleStructure);
  }
  const compatibleLines = getCompatibleList("leadingLines", next.compositionScheme, data);
  if (!compatibleLines.some((item) => item.value === next.leadingLine)) {
    next.leadingLine = firstValue(compatibleLines);
  }
  const compatibleFigures = getCompatibleList("figurePlacements", next.compositionScheme, data);
  if (!compatibleFigures.some((item) => item.value === next.figurePlacement)) {
    next.figurePlacement = firstValue(compatibleFigures);
  }
  const textures = getSurfaceTextures(next.sceneBase, data);
  if (!textures.some((item) => item.value === next.surfaceTexture)) {
    next.surfaceTexture = firstValue(textures);
  }

  next.megastructureShare = clamp(Number(next.megastructureShare) || 75, 45, 92);
  next.groundShare = clamp(Number(next.groundShare) || 18, 5, 45);
  next.moodTags = (next.moodTags || []).filter((value) => data.moodTags.some((item) => item.value === value));
  if (!next.moodTags.length) next.moodTags = data.moodTags.slice(0, 4).map((item) => item.value);
  return next;
}

function resolveConstraints(inputOptions, data = state.data) {
  const options = validateOptions(inputOptions, data);
  const composition = getItem(data.compositionSchemes, options.compositionScheme);
  const aspect = getItem(data.aspectRatios, options.aspectRatio);
  const range = composition.recommendedStructureShareRange || [60, 80];
  const warnings = [];
  const changed = JSON.stringify(options) !== JSON.stringify(inputOptions);

  if (aspect.recommendedCompositions?.length && !aspect.recommendedCompositions.includes(options.compositionScheme)) {
    warnings.push(`比例 ${aspect.labelZh} 更推荐 ${labelsFromValues(data.compositionSchemes, aspect.recommendedCompositions).join("、")}，当前构图可作为刻意偏离。`);
  }

  if (options.megastructureShare < range[0] || options.megastructureShare > range[1]) {
    warnings.push(`当前巨构占比 ${options.megastructureShare}% 超出该构图推荐范围 ${range[0]}%-${range[1]}%，将作为极端构图处理。`);
  }

  return { options, composition, aspect, range, warnings, changed };
}

function renderApp() {
  const resolved = resolveConstraints(state.options || makeDefaultOptions(state.data), state.data);
  state.options = resolved.options;
  populateDynamicControls();
  applyOptionsToDom(state.options);
  renderMoodTags();
  renderOutput(resolved);
  persistState();
}

function populateDynamicControls() {
  fillSelect(elements.aspectRatio, state.data.aspectRatios);
  fillSelect(elements.compositionScheme, state.data.compositionSchemes);
  fillSelect(elements.structurePosition, getCompatibleList("structurePositions", state.options.compositionScheme, state.data));
  fillSelect(elements.leadingLine, getCompatibleList("leadingLines", state.options.compositionScheme, state.data));
  fillSelect(elements.figurePlacement, getCompatibleList("figurePlacements", state.options.compositionScheme, state.data));
  fillSelect(elements.megastructureType, state.data.megastructureTypes);
  fillSelect(elements.sceneBase, state.data.sceneBases);
  fillSelect(elements.surfaceTexture, getSurfaceTextures(state.options.sceneBase, state.data));
  fillSelect(elements.foregroundElement, state.data.foregroundElements);
  fillSelect(elements.figureScale, state.data.figureScales);
  fillSelect(elements.figureOrientation, state.data.figureOrientations);
  fillSelect(elements.lightingWeather, state.data.lightingWeather);
  fillSelect(elements.skyCosmos, state.data.skyCosmos);
}

function fillSelect(select, items) {
  select.innerHTML = "";
  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.labelZh;
    select.appendChild(option);
  });
}

function applyOptionsToDom(options) {
  Object.entries({
    aspectRatio: elements.aspectRatio,
    compositionScheme: elements.compositionScheme,
    structurePosition: elements.structurePosition,
    leadingLine: elements.leadingLine,
    figurePlacement: elements.figurePlacement,
    megastructureType: elements.megastructureType,
    sceneBase: elements.sceneBase,
    surfaceTexture: elements.surfaceTexture,
    foregroundElement: elements.foregroundElement,
    figureScale: elements.figureScale,
    figureOrientation: elements.figureOrientation,
    lightingWeather: elements.lightingWeather,
    skyCosmos: elements.skyCosmos,
    language: elements.language,
    modelPreset: elements.modelPreset,
  }).forEach(([key, element]) => {
    element.value = options[key];
  });
  elements.megastructureShare.value = options.megastructureShare;
  elements.groundShare.value = options.groundShare;
  elements.megastructureShareValue.textContent = `${options.megastructureShare}%`;
  elements.groundShareValue.textContent = `${options.groundShare}%`;
  elements.includeNegative.checked = options.includeNegative;
  elements.workflowDetails.open = state.workflowOpen;
}

function renderMoodTags() {
  elements.moodTags.innerHTML = "";
  state.data.moodTags.forEach((tag) => {
    const label = document.createElement("label");
    label.className = "checkbox";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = tag.value;
    input.checked = state.options.moodTags.includes(tag.value);
    const text = document.createElement("span");
    text.textContent = `${tag.labelZh}：${tag.descriptionZh}`;
    label.append(input, text);
    elements.moodTags.appendChild(label);
  });
}

function renderOutput(resolved) {
  const options = resolved.options;
  const language = getEffectiveLanguage(options);
  const built = buildPromptBundle(options, language, resolved);
  const negative = buildNegativePrompt(language, options);
  elements.modelBadge.textContent = modelLabel(options.modelPreset);
  elements.positivePrompt.textContent = built.positive;
  elements.negativePrompt.textContent = negative;
  elements.negativePromptBlock.classList.toggle("is-hidden", !options.includeNegative);
  elements.constraintHint.textContent = buildConstraintHint(resolved);
  elements.figureShareHint.textContent = figureShareHint(options, language);
  renderConstraintSummary(options, resolved);
  renderStructurePreview(built.parts, language);
}

function buildPromptBundle(options, language, resolved = resolveConstraints(options)) {
  const parts = collectParts(options, language, resolved);
  const positive = language === "zh" ? buildChinesePrompt(parts, resolved) : buildEnglishPrompt(parts, resolved);
  return { positive, parts };
}

function collectParts(options, language, resolved) {
  const data = state.data;
  const list = (key, value) => getItem(data[key], value);
  return {
    options,
    lang: language,
    aspect: list("aspectRatios", options.aspectRatio),
    composition: list("compositionSchemes", options.compositionScheme),
    structure: list("structurePositions", options.structurePosition),
    leading: list("leadingLines", options.leadingLine),
    figurePlacement: list("figurePlacements", options.figurePlacement),
    megastructure: list("megastructureTypes", options.megastructureType),
    scene: list("sceneBases", options.sceneBase),
    surface: list("surfaceTextures", options.surfaceTexture),
    foreground: list("foregroundElements", options.foregroundElement),
    figureScale: list("figureScales", options.figureScale),
    figureOrientation: list("figureOrientations", options.figureOrientation),
    lighting: list("lightingWeather", options.lightingWeather),
    sky: list("skyCosmos", options.skyCosmos),
    moods: options.moodTags.map((value) => list("moodTags", value)).filter(Boolean),
    resolved,
  };
}

function buildChinesePrompt(parts, resolved) {
  const extreme = extremePhrase(parts.options, resolved, "zh");
  const figureSourceZh = `${parts.figurePlacement.labelZh}${parts.figurePlacement.descriptionZh}${parts.figureScale.labelZh}${parts.figureScale.descriptionZh}`;
  const centeredNote = isCenteredFigure(parts.options) && !figureSourceZh.includes("居中") ? "人物可以居中，但必须保持极小和仪式化。" : "";
  const groupNote = parts.options.figureScale === "small-group" && !figureSourceZh.includes("2 到 3 人") ? "若出现多人，人数限定为 2 到 3 人，并且必须分散、不拥挤。" : "";
  const moodText = parts.moods.map((mood) => `${zhClause(mood.labelZh)}（${zhClause(mood.descriptionZh)}）`).join("、");
  const compositionText = [parts.composition.descriptionZh, parts.aspect.descriptionZh].map(zhClause).filter(Boolean).join("；");
  const notes = [centeredNote, groupNote].filter(Boolean).join("");

  return cleanPromptText(
    [
      `生成一张${zhClause(parts.aspect.labelZh)}的超写实电影感科幻风景。`,
      `首先采用【${zhClause(parts.composition.labelZh)}】：${compositionText}。`,
      `画面结构中：巨构位置为【${zhClause(parts.structure.labelZh)}】，${zhClause(parts.structure.descriptionZh)}；人物位置为【${zhClause(parts.figurePlacement.labelZh)}】，${zhClause(parts.figurePlacement.descriptionZh)}；引导线为【${zhClause(parts.leading.labelZh)}】，${zhClause(parts.leading.descriptionZh)}。`,
      `前中远景关系：${zhClause(parts.composition.foregroundDepthRuleZh)}；留白方向：${zhClause(parts.composition.whitespaceRuleZh)}；镜头规则：${zhClause(parts.composition.cameraRuleZh)}。`,
      `巨构本体是【${zhClause(parts.megastructure.labelZh)}】：${zhClause(parts.megastructure.descriptionZh)}。画面视觉重量约为 ${parts.options.megastructureShare}%${extreme}，地表 / 场景占比约为 ${parts.options.groundShare}%。`,
      `场景基底是【${zhClause(parts.scene.labelZh)}】：${zhClause(parts.scene.descriptionZh)}。局部质感为【${zhClause(parts.surface.labelZh)}】：${zhClause(parts.surface.descriptionZh)}。前景元素为【${zhClause(parts.foreground.labelZh)}】：${zhClause(parts.foreground.descriptionZh)}。`,
      `人物大小为【${zhClause(parts.figureScale.labelZh)}】：${zhClause(parts.figureScale.descriptionZh)}。人物朝向为【${zhClause(parts.figureOrientation.labelZh)}】：${zhClause(parts.figureOrientation.descriptionZh)}。${notes}`,
      `光线为【${zhClause(parts.lighting.labelZh)}】：${zhClause(parts.lighting.descriptionZh)}。天空 / 宇宙背景为【${zhClause(parts.sky.labelZh)}】：${zhClause(parts.sky.descriptionZh)}。`,
      `整体情绪为${moodText}。`,
      "画面必须保持后人类、世界边界、宇宙崇高与诗性孤独，避免普通城市、赛博朋克霓虹、战斗、爆炸、拥挤人群、脏乱废土和喧宾夺主的场景细节。",
    ].join("")
  );
}

function buildEnglishPrompt(parts, resolved) {
  const extreme = extremePhrase(parts.options, resolved, "en");
  const figureSourceEn = `${parts.figurePlacement.labelEn}${parts.figurePlacement.descriptionEn}${parts.figureScale.labelEn}${parts.figureScale.descriptionEn}`.toLowerCase();
  const centeredNote = isCenteredFigure(parts.options) && !figureSourceEn.includes("center") ? "The figure may be centered only if it remains tiny and ritual-like. " : "";
  const groupNote = parts.options.figureScale === "small-group" && !figureSourceEn.includes("two or three") ? "The people must be two or three only, scattered and never crowded. " : "";
  const moodText = parts.moods.map((mood) => `${enClause(mood.labelEn)} (${enClause(mood.descriptionEn)})`).join(", ");
  const intro = `Create a ${parts.aspect.labelEn} hyper-real cinematic science-fiction landscape`;
  const mjSuffix = parts.options.modelPreset === "midjourney" ? ` --ar ${parts.aspect.arParam} --style raw --s 150` : "";

  return cleanPromptText(
    `${intro}. ` +
    `First use ${enClause(parts.composition.labelEn)}: ${enClause(parts.composition.descriptionEn)}; ${enClause(parts.aspect.descriptionEn)}. ` +
    `In the image structure: megastructure position is ${enClause(parts.structure.labelEn)}, ${enClause(parts.structure.descriptionEn)}; figure placement is ${enClause(parts.figurePlacement.labelEn)}, ${enClause(parts.figurePlacement.descriptionEn)}; guiding line is ${enClause(parts.leading.labelEn)}, ${enClause(parts.leading.descriptionEn)}. Foreground, midground, and background follow this rule: ${enClause(parts.composition.foregroundDepthRuleEn)}; negative space follows this rule: ${enClause(parts.composition.whitespaceRuleEn)}; camera rule: ${enClause(parts.composition.cameraRuleEn)}. ` +
    `The megastructure itself is ${enClause(parts.megastructure.labelEn)}: ${enClause(parts.megastructure.descriptionEn)}, with about ${parts.options.megastructureShare}% visual weight${extreme}, while ground or environment takes about ${parts.options.groundShare}%. ` +
    `The scene base is ${enClause(parts.scene.labelEn)}: ${enClause(parts.scene.descriptionEn)}. Local surface texture is ${enClause(parts.surface.labelEn)}: ${enClause(parts.surface.descriptionEn)}. Foreground element is ${enClause(parts.foreground.labelEn)}: ${enClause(parts.foreground.descriptionEn)}. ` +
    `Figure scale is ${enClause(parts.figureScale.labelEn)}: ${enClause(parts.figureScale.descriptionEn)}. Figure orientation is ${enClause(parts.figureOrientation.labelEn)}: ${enClause(parts.figureOrientation.descriptionEn)}. ${centeredNote}${groupNote}` +
    `Lighting is ${enClause(parts.lighting.labelEn)}: ${enClause(parts.lighting.descriptionEn)}. Sky or cosmic background is ${enClause(parts.sky.labelEn)}: ${enClause(parts.sky.descriptionEn)}. ` +
    `Overall mood: ${moodText}. Keep the image post-human, world-boundary-like, cosmically sublime, and poetically solitary; avoid ordinary cities, cyberpunk neon, combat, explosions, crowds, messy wasteland, and scene details that steal attention from the megastructure.` +
    mjSuffix
  );
}

function buildNegativePrompt(language, options) {
  let prompt = language === "zh" ? state.data.negativePrompt.zh : state.data.negativePrompt.en;
  if (isCenteredFigure(options)) {
    prompt = language === "zh"
      ? prompt.replace("不要人物居中，", "")
      : prompt.replace("no centered figure, ", "");
  }
  return prompt;
}

function zhClause(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[。！？；;，,、：:\s]+$/g, "");
}

function enClause(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.!?;,:，。；：\s]+$/g, "");
}

function cleanPromptText(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .replace(/，。/g, "。")
    .replace(/。{2,}/g, "。")
    .replace(/；。/g, "。")
    .replace(/：。/g, "。")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .trim();
}

function extremePhrase(options, resolved, language) {
  const [min, max] = resolved.range;
  if (options.megastructureShare >= min && options.megastructureShare <= max) return "";
  if (language === "zh") return `，这是超出该构图推荐范围 ${min}%-${max}% 的极端构图`;
  return `, an extreme composition outside the recommended ${min}%-${max}% range`;
}

function buildConstraintHint(resolved) {
  const comp = resolved.composition;
  const range = comp.recommendedStructureShareRange || [60, 80];
  const structure = labelsFromValues(state.data.structurePositions, comp.allowedStructurePositions).join("、");
  const figures = labelsFromValues(state.data.figurePlacements, comp.allowedFigurePlacements).join("、");
  const lines = labelsFromValues(state.data.leadingLines, comp.allowedLeadingLines).join("、");
  const warnings = resolved.warnings.length ? ` 提醒：${resolved.warnings.join(" ")}` : "";
  return `推荐巨构占比 ${range[0]}%-${range[1]}；巨构位置：${structure || "自定义"}；人物位置：${figures || "自定义"}；引导线：${lines || "自定义"}。${warnings}`;
}

function figureShareHint(options, language) {
  const figure = getItem(state.data.figureScales, options.figureScale);
  return language === "en"
    ? `Figure scale note: ${figure.descriptionEn}`
    : `人物占比提示：${figure.descriptionZh}`;
}

function renderConstraintSummary(options, resolved) {
  const rows = [
    ["比例", getItem(state.data.aspectRatios, options.aspectRatio).labelZh],
    ["构图", getItem(state.data.compositionSchemes, options.compositionScheme).labelZh],
    ["推荐占比", `${resolved.range[0]}%-${resolved.range[1]}；当前 ${options.megastructureShare}%`],
    ["巨构位置", getItem(state.data.structurePositions, options.structurePosition).labelZh],
    ["人物位置", getItem(state.data.figurePlacements, options.figurePlacement).labelZh],
    ["引导线", getItem(state.data.leadingLines, options.leadingLine).labelZh],
    ["场景", getItem(state.data.sceneBases, options.sceneBase).labelZh],
    ["质感", getItem(state.data.surfaceTextures, options.surfaceTexture).labelZh],
    ["约束提醒", resolved.warnings.join(" ") || "当前选择没有明显冲突。"],
  ];
  renderDl(elements.constraintSummary, rows);
}

function renderStructurePreview(parts) {
  const cards = [
    ["比例", `${parts.aspect.labelZh}：${parts.aspect.descriptionZh}`],
    ["构图", `${parts.composition.labelZh}；${parts.composition.cameraRuleZh}`],
    ["巨构", `${parts.megastructure.labelZh}；位置：${parts.structure.labelZh}`],
    ["场景", `${parts.scene.labelZh}；质感：${parts.surface.labelZh}`],
    ["人物", `${parts.figurePlacement.labelZh}；${parts.figureScale.labelZh}`],
    ["光线", `${parts.lighting.labelZh}；${parts.sky.labelZh}`],
    ["氛围", parts.moods.map((mood) => mood.labelZh).join("、")],
  ];

  elements.structurePreview.innerHTML = "";
  cards.forEach(([title, text]) => {
    const card = document.createElement("div");
    card.className = "preview-card";
    const strong = document.createElement("strong");
    strong.textContent = title;
    const span = document.createElement("span");
    span.textContent = text;
    card.append(strong, span);
    elements.structurePreview.appendChild(card);
  });
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

function getEffectiveLanguage(options) {
  if (options.modelPreset === "midjourney" || options.modelPreset === "sdxl") return "en";
  return options.language;
}

function modelLabel(value) {
  return {
    chatgpt: "ChatGPT 图片生成",
    midjourney: "Midjourney",
    sdxl: "SDXL/FLUX",
  }[value] || value;
}

function isCenteredFigure(options) {
  return options.figurePlacement === "lower-center-pilgrim" || options.figureScale === "centered-pilgrim";
}

function getCompatibleList(key, compositionValue, data = state.data) {
  const list = data[key] || [];
  const composition = getItem(data.compositionSchemes, compositionValue);
  const allowField = {
    structurePositions: "allowedStructurePositions",
    leadingLines: "allowedLeadingLines",
    figurePlacements: "allowedFigurePlacements",
  }[key];

  if (!composition || !allowField) return list;
  const allowed = composition[allowField] || [];
  if (!allowed.length) return list;
  return list.filter((item) => {
    if (allowed.includes(item.value)) return true;
    if (!Array.isArray(item.compatibleCompositions) || !item.compatibleCompositions.length) {
      return !DATA[key]?.some((defaultItem) => defaultItem.value === item.value);
    }
    return item.compatibleCompositions.includes(compositionValue);
  });
}

function getSurfaceTextures(sceneBase, data = state.data) {
  const list = data.surfaceTextures.filter((item) => item.sceneBase === sceneBase || !item.sceneBase);
  return list.length ? list : data.surfaceTextures;
}

function getItem(list, value) {
  return list.find((item) => item.value === value) || list[0] || {};
}

function labelsFromValues(list, values = []) {
  return values.map((value) => getItem(list, value).labelZh).filter(Boolean);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function randomizeOptions() {
  const aspect = randomFrom(state.data.aspectRatios);
  const compositions = state.data.compositionSchemes.filter((item) => aspect.recommendedCompositions?.includes(item.value));
  const composition = randomFrom(compositions.length ? compositions : state.data.compositionSchemes);
  const scene = randomFrom(state.data.sceneBases);
  const range = composition.recommendedStructureShareRange || [60, 80];
  state.options = validateOptions({
    ...makeDefaultOptions(state.data),
    aspectRatio: aspect.value,
    compositionScheme: composition.value,
    structurePosition: randomFrom(getCompatibleList("structurePositions", composition.value)).value,
    leadingLine: randomFrom(getCompatibleList("leadingLines", composition.value)).value,
    figurePlacement: randomFrom(getCompatibleList("figurePlacements", composition.value)).value,
    megastructureType: randomFrom(state.data.megastructureTypes).value,
    megastructureShare: randomInteger(range[0], range[1]),
    groundShare: randomInteger(8, 34),
    sceneBase: scene.value,
    surfaceTexture: randomFrom(getSurfaceTextures(scene.value)).value,
    foregroundElement: randomFrom(state.data.foregroundElements).value,
    figureScale: randomFrom(state.data.figureScales).value,
    figureOrientation: randomFrom(state.data.figureOrientations).value,
    lightingWeather: randomFrom(state.data.lightingWeather).value,
    skyCosmos: randomFrom(state.data.skyCosmos).value,
    moodTags: randomMoodTags(),
    language: randomFrom(["zh", "en"]),
    modelPreset: randomFrom(["chatgpt", "midjourney", "sdxl"]),
    includeNegative: true,
  });
  renderApp();
  showStatus("已随机生成");
}

function generateBatch(count) {
  const variants = [];
  for (let index = 0; index < count; index += 1) {
    const original = clone(state.options);
    randomizeOptions();
    const resolved = resolveConstraints(state.options);
    const language = getEffectiveLanguage(state.options);
    const bundle = buildPromptBundle(state.options, language, resolved);
    variants.push({
      options: clone(state.options),
      prompt: bundle.positive,
      negative: buildNegativePrompt(language, state.options),
    });
    state.options = original;
  }
  renderApp();
  renderBatchList(variants);
  showStatus("已生成 10 条变体");
}

function renderBatchList(variants) {
  elements.batchList.innerHTML = "";
  elements.batchCount.textContent = `${variants.length} 条`;
  variants.forEach((variant, index) => {
    const item = document.createElement("section");
    item.className = "variant";
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
    item.append(header, text);
    elements.batchList.appendChild(item);
  });
}

function randomMoodTags() {
  const shuffled = [...state.data.moodTags].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, randomInteger(3, Math.min(6, shuffled.length))).map((item) => item.value);
}

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function copyCurrentPrompt() {
  const resolved = resolveConstraints(state.options);
  const language = getEffectiveLanguage(state.options);
  const bundle = buildPromptBundle(state.options, language, resolved);
  const text = state.options.includeNegative
    ? `${bundle.positive}\n\nNegative prompt:\n${buildNegativePrompt(language, state.options)}`
    : bundle.positive;
  await copyToClipboard(text);
  showStatus("已复制");
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
  const resolved = resolveConstraints(state.options);
  const language = getEffectiveLanguage(state.options);
  const bundle = buildPromptBundle(state.options, language, resolved);
  const lines = ["光锥之外", "", "[Positive Prompt]", bundle.positive];
  if (state.options.includeNegative || state.options.modelPreset === "sdxl") {
    lines.push("", "[Negative Prompt]", buildNegativePrompt(language, state.options));
  }
  lines.push("", "[Resolved Constraints]", elements.constraintSummary.innerText);
  downloadBlob("beyond-light-cone-prompt.txt", lines.join("\n"));
}

function exportConfigJson() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    data: state.data,
    options: state.options,
    workflowOpen: elements.workflowDetails.open,
  };
  downloadBlob("beyond-light-cone-config.json", JSON.stringify(payload, null, 2), "application/json;charset=utf-8");
}

function importConfigJson(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(String(reader.result));
      state.data = sanitizeData(payload.data || DATA);
      state.options = validateOptions(payload.options || makeDefaultOptions(state.data), state.data);
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

function openVocabEditor(key) {
  activeEditKey = key;
  elements.modalTitle.textContent = `编辑：${VOCAB_LABELS[key]}`;
  elements.modalHelp.textContent = key === "negativePrompt"
    ? "编辑中文和英文负面提示词。居中人物启用时，系统会自动移除禁止居中的片段。"
    : "每条可编辑中文/英文标签、中文/英文描述；约束字段用 JSON 保存。新增或删除后会立即参与随机生成和变体。";
  renderVocabEditor();
  elements.vocabModal.showModal();
}

function renderVocabEditor() {
  elements.modalList.innerHTML = "";
  elements.addVocabItemButton.classList.toggle("is-hidden", activeEditKey === "negativePrompt");

  if (activeEditKey === "negativePrompt") {
    const zh = createTextareaField("中文负面提示词", state.data.negativePrompt.zh, "negative-zh");
    const en = createTextareaField("English negative prompt", state.data.negativePrompt.en, "negative-en");
    elements.modalList.append(zh, en);
    return;
  }

  state.data[activeEditKey].forEach((item, index) => {
    elements.modalList.appendChild(createVocabRow(item, index));
  });
}

function createVocabRow(item, index) {
  const row = document.createElement("section");
  row.className = "vocab-row";
  row.dataset.value = item.value;
  const meta = { ...item };
  delete meta.value;
  delete meta.labelZh;
  delete meta.labelEn;
  delete meta.descriptionZh;
  delete meta.descriptionEn;

  const title = document.createElement("h4");
  title.innerHTML = `<span>${String(index + 1).padStart(2, "0")} / ${item.value}</span>`;
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "remove-row";
  remove.textContent = "删除";
  remove.addEventListener("click", () => row.remove());
  title.appendChild(remove);
  row.appendChild(title);
  row.append(
    createInputField("中文标签", item.labelZh, "labelZh"),
    createInputField("English label", item.labelEn, "labelEn"),
    createTextareaField("中文描述", item.descriptionZh, "descriptionZh"),
    createTextareaField("English description", item.descriptionEn, "descriptionEn"),
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
  summary.textContent = "约束字段 JSON";
  const label = createTextareaField("高级约束，仅在需要修改联动关系时编辑", value, "meta", true);
  details.append(summary, label);
  return details;
}

function addVocabEditorRow() {
  const base = {
    value: "",
    labelZh: "新条目",
    labelEn: "New item",
    descriptionZh: "请填写具体描述。",
    descriptionEn: "Add a concrete description.",
  };
  if (activeEditKey === "surfaceTextures") {
    base.sceneBase = state.options.sceneBase;
  }
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
      const labelZh = row.querySelector("[data-field='labelZh']").value.trim() || "未命名条目";
      const labelEn = row.querySelector("[data-field='labelEn']").value.trim() || "Untitled item";
      const descriptionZh = row.querySelector("[data-field='descriptionZh']").value.trim();
      const descriptionEn = row.querySelector("[data-field='descriptionEn']").value.trim();
      const metaText = row.querySelector("[data-field='meta']").value.trim();
      const meta = metaText ? JSON.parse(metaText) : {};
      const value = row.dataset.value || uniqueValue(activeEditKey, labelEn || labelZh, next);
      next.push(normalizeItem({ value, labelZh, labelEn, descriptionZh, descriptionEn, ...meta }, activeEditKey));
    });
  } catch (error) {
    showStatus("保存失败：约束字段 JSON 格式有误");
    return;
  }

  if (!next.length) {
    showStatus("至少保留一个条目");
    return;
  }

  state.data[activeEditKey] = next;
  state.options = validateOptions(state.options, state.data);
  closeVocabEditor();
  renderApp();
  showStatus(`${VOCAB_LABELS[activeEditKey]} 已保存`);
}

function closeVocabEditor() {
  elements.vocabModal.close();
  activeEditKey = null;
}

function uniqueValue(key, label, localList = []) {
  const base = slugify(label) || "custom";
  const existing = new Set([...(state?.data?.[key] || []), ...localList].map((item) => item.value));
  let value = base;
  let index = 2;
  while (existing.has(value)) {
    value = `${base}-${index}`;
    index += 1;
  }
  return value;
}

function slugify(text) {
  return String(text)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 42);
}

function showStatus(message) {
  elements.copyStatus.textContent = message;
  window.clearTimeout(showStatus.timer);
  showStatus.timer = window.setTimeout(() => {
    elements.copyStatus.textContent = "";
  }, 2200);
}

function init() {
  state = loadState();
  bindElements();
  bindEvents();
  renderApp();
}

document.addEventListener("DOMContentLoaded", init);
