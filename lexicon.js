// 西班牙文全構詞詞素資料庫 - 終極完整版 (Prefijos, Raíces A-Z, Sufijos)
// 與 index.html (西班牙文全構詞詞素字典) 放置於同一資料夾即可自動載入。
// 資料格式: [id, type, morpheme, origin, meaning, [[word, pos, breakdown, wMeaning], ...]]

window.CORE_LEXICON = [
  // ==================== PREFIJOS (字首) ====================
  [
    "pre-a",
    "prefix",
    "a- / an-",
    "希臘文 a- / an- (無、非)",
    "否定、缺乏、沒有",
    [
      ["anormal", "adj.", "a- (非) + normal (正常)", "不正常的、反常的"],
      ["anónimo", "adj./n.", "an- (無) + ónymo (名字)", "匿名的、無名氏"],
      ["apatía", "n.", "a- (無) + pathía (情感)", "冷漠、無動於衷"],
      ["asintomático", "adj.", "a- (無) + sintomático (有症狀的)", "無症狀的"],
      ["analfabeto", "adj./n.", "an- (無) + alfabeto (字母)", "文盲的、不識字的"],
      ["asimétrico", "adj.", "a- (非) + simétrico (對稱的)", "不對稱的"],
      ["analgésico", "n./adj.", "an- (無) + algésico (疼痛)", "止痛藥、鎮痛的"],
      ["anarquía", "n.", "an- (無) + arquía (統治)", "無政府狀態、混亂"]
    ]
  ],
  [
    "pre-ab",
    "prefix",
    "ab- / abs-",
    "拉丁文 ab / abs (離開)",
    "分離、脫離、遠離",
    [
      ["abstenerse", "v.", "abs- (離開) + tener (持有)", "克制、棄權"],
      ["abstraer", "v.", "abs- (離開) + traer (拉)", "抽象化、使分心"],
      ["absolver", "v.", "ab- (離開) + solver (解開)", "赦免、宣告無罪"],
      ["abdicar", "v.", "ab- (離開) + dicar (宣告)", "退位、放棄（權力）"],
      ["aberración", "n.", "ab- (偏離) + erración (走/漫遊)", "反常、偏差、畸變"],
      ["absorber", "v.", "ab- (吸走) + sorber (啜飲)", "吸收、吸引"]
    ]
  ],
  [
    "pre-ad",
    "prefix",
    "ad- / a- / ac- / af-",
    "拉丁文 ad (向、朝向)",
    "朝向、接近、附加、使成為",
    [
      ["adjuntar", "v.", "ad- (向) + juntar (連接)", "附上、隨函附寄"],
      ["adjunto", "adj./n.", "ad- (向) + junto (連接的)", "附上的、附件"],
      ["atraer", "v.", "a- (向) + traer (拉)", "吸引"],
      ["adecuado", "adj.", "ad- (向) + ecuado (平等)", "適當的、合適的"],
      ["admirar", "v.", "ad- (對) + mirar (看)", "欽佩、讚賞"],
      ["adaptar", "v.", "ad- (向) + aptar (適合)", "適應、改編"],
      ["afirmar", "v.", "a- (使) + firmar (穩固)", "肯定、斷言"],
      ["advertir", "v.", "ad- (向) + vertir (轉向)", "警告、提醒、注意到"],
      ["acceder", "v.", "ac- (向) + ceder (走/讓)", "同意、進入、存取"],
      ["acceso", "n.", "ac- (向) + ceso (走)", "入口、通道、權限"],
      ["aficionar", "v.", "a- (使) + ficionar (喜好)", "使對…產生興趣"]
    ]
  ],
  [
    "pre-aero",
    "prefix",
    "aero-",
    "希臘文 aer (空氣)",
    "空氣、航空、氣體",
    [
      ["aeropuerto", "n.", "aero- (航空) + puerto (港口)", "機場"],
      ["aerolínea", "n.", "aero- (航空) + línea (線)", "航空公司"],
      ["aerosol", "n.", "aero- (空氣) + sol (溶液)", "噴霧劑、氣溶膠"],
      ["aerodinámico", "adj.", "aero- (空氣) + dinámico (動力的)", "空氣動力學的、流線型的"],
      ["aeronave", "n.", "aero- (航空) + nave (船艦)", "飛行器、航空器"]
    ]
  ],
  [
    "pre-ambi",
    "prefix",
    "ambi- / amfi- / anfi-",
    "拉丁文 ambi / 希臘文 amphi (兩邊、周圍)",
    "兩者、雙重、周圍",
    [
      ["ambiguo", "adj.", "ambi- (兩邊) + agere (驅動)", "模稜兩可的、含糊的"],
      ["ambivalencia", "n.", "ambi- (雙重) + valencia (價值/力量)", "矛盾心理、雙重性"],
      ["ambiente", "n./adj.", "ambi- (周圍) + iente (走)", "環境、氛圍"],
      ["ambidiestro", "adj.", "ambi- (雙) + diestro (右手/靈巧)", "雙手靈巧的"],
      ["anfibio", "n./adj.", "anfi- (兩棲) + bio (生命)", "兩棲動物、水陸兩用的"],
      ["anfitrión", "n.", "anfi- (周圍/接待) + trión", "主人、東道主"]
    ]
  ],
  [
    "pre-ana",
    "prefix",
    "ana-",
    "希臘文 ana (向上、回溯、分開)",
    "重新、向後、對比、徹底",
    [
      ["analizar", "v.", "ana- (分開) + lizar (解開)", "分析"],
      ["analogía", "n.", "ana- (依照) + logía (比例/理性)", "類比、相似"],
      ["anacrónico", "adj.", "ana- (違背) + crónico (時間)", "時代錯誤的、過時的"],
      ["anatomía", "n.", "ana- (切開) + tomía (切割)", "解剖學、構造"]
    ]
  ],
  [
    "pre-ante",
    "prefix",
    "ante-",
    "拉丁文 ante (在…之前)",
    "時間或空間上的「在…之前」",
    [
      ["anteayer", "adv.", "ante- (前) + ayer (昨天)", "前天"],
      ["antepasado", "n./adj.", "ante- (前) + pasado (過去的)", "祖先、過去的"],
      ["antebrazo", "n.", "ante- (前) + brazo (手臂)", "前臂"],
      ["antelación", "n.", "ante- (前) + lación (帶來)", "提前、預先"],
      ["antemano", "adv.", "ante- (前) + mano (手)", "預先、事先 (de antemano)"],
      ["anterior", "adj.", "ante- (前) + -erior", "先前的、前面的"]
    ]
  ],
  [
    "pre-anti",
    "prefix",
    "anti-",
    "希臘文 anti (反對、對抗)",
    "反對、抵抗、防止",
    [
      ["antibiótico", "n./adj.", "anti- (抗) + biótico (生命的)", "抗生素"],
      ["antiinflamatorio", "n./adj.", "anti- (抗) + inflamatorio (發炎的)", "消炎藥、抗發炎的"],
      ["antivirus", "n.", "anti- (防) + virus (病毒)", "防毒軟體、抗病毒"],
      ["antipático", "adj.", "anti- (反) + pático (情感)", "令人討厭的、不友善的"],
      ["anticuerpo", "n.", "anti- (抗) + cuerpo (體)", "抗體"],
      ["antídoto", "n.", "anti- (抗) + doto (給予)", "解毒劑"]
    ]
  ],
  [
    "pre-archi",
    "prefix",
    "archi- / arqui- / arz-",
    "希臘文 archi (首領、最高)",
    "首席、主要、極度",
    [
      ["arquitecto", "n.", "arqui- (首席) + tecto (建造者)", "建築師"],
      ["arquitectura", "n.", "arqui- (首席) + tectura (建造)", "建築學、建築風格"],
      ["archipiélago", "n.", "archi- (主要) + piélago (海)", "群島"],
      ["archiconocido", "adj.", "archi- (極度) + conocido (有名的)", "眾所周知的、家喻戶曉的"],
      ["arzobispo", "n.", "arz- (首席) + obispo (主教)", "大主教"],
      ["archivo", "n.", "archi- (首長/官署) + -ivo", "檔案、文件夾"]
    ]
  ],
  [
    "pre-auto",
    "prefix",
    "auto-",
    "希臘文 autos (自己)",
    "自己、自動、本身",
    [
      ["autobiografía", "n.", "auto- (自己) + bio (生命) + grafía (寫)", "自傳"],
      ["automático", "adj.", "auto- (自己) + mático (動)", "自動的"],
      ["autoestima", "n.", "auto- (自己) + estima (重視)", "自尊心"],
      ["autosuficiente", "adj.", "auto- (自己) + suficiente (足夠的)", "自給自足的"],
      ["autonomía", "n.", "auto- (自己) + nomía (法律)", "自治、自主權"],
      ["autopista", "n.", "auto- (汽車) + pista (道路)", "高速公路"],
      ["autobús", "n.", "auto- (自動) + bús (眾人/omnibus)", "公車、巴士"]
    ]
  ],
  [
    "pre-bene",
    "prefix",
    "ben- / bene- / bien-",
    "拉丁文 bene (好、善)",
    "好、善、有益",
    [
      ["beneficio", "n.", "bene- (好) + ficio (做)", "利益、好處"],
      ["beneficiario", "n./adj.", "bene- (好) + ficiario (獲得者)", "受益人"],
      ["bendecir", "v.", "ben- (好) + decir (說)", "祝福"],
      ["bienestar", "n.", "bien (好) + estar (狀態)", "福祉、健康幸福"],
      ["bienvenido", "adj./interj.", "bien (好) + venido (來到的)", "受歡迎的、歡迎"],
      ["benévolo", "adj.", "bene- (善) + volo (意願)", "仁慈的、善意的"]
    ]
  ],
  [
    "pre-bi",
    "prefix",
    "bi- / bis- / biz-",
    "拉丁文 bis (兩次、雙)",
    "二、雙倍、兩次",
    [
      ["bilingüe", "adj.", "bi- (雙) + lingüe (語言)", "雙語的"],
      ["bicicleta", "n.", "bi- (雙) + cicleta (輪子)", "腳踏車"],
      ["bisabuelo", "n.", "bis- (再/二) + abuelo (祖父)", "曾祖父"],
      ["bizcocho", "n.", "biz- (兩次) + cocho (烤)", "海綿蛋糕（原指烤兩次的餅）"],
      ["bimestral", "adj.", "bi- (雙) + mestral (月的)", "雙月的、每兩個月一次的"],
      ["bisexual", "adj./n.", "bi- (雙) + sexual (性的)", "雙性戀的"]
    ]
  ],
  [
    "pre-cata",
    "prefix",
    "cata-",
    "希臘文 kata (向下、完全)",
    "向下、徹底、反轉",
    [
      ["catástrofe", "n.", "cata- (向下/翻轉) + strofe (轉向)", "大災難"],
      ["catálogo", "n.", "cata- (逐一) + logo (列舉/說)", "目錄、型錄"],
      ["catalizador", "n.", "cata- (徹底) + lizador (解開)", "催化劑、促成因素"],
      ["catastro", "n.", "cata- (逐一) + astro (登記)", "地籍冊、房產登記"]
    ]
  ],
  [
    "pre-centi",
    "prefix",
    "centi- / hecto- / kilo- / mili-",
    "公制單位字首",
    "度量化學數量字首（百分、百、千、千分）",
    [
      ["centímetro", "n.", "centi- (1/100) + metro (公尺)", "公分"],
      ["kilómetro", "n.", "kilo- (1000) + metro (公尺)", "公里"],
      ["miligramo", "n.", "mili- (1/1000) + gramo (克)", "毫克"],
      ["hectárea", "n.", "hecto- (100) + área (公畝)", "公頃"],
      ["kilogramo", "n.", "kilo- (1000) + gramo (克)", "公斤"]
    ]
  ],
  [
    "pre-circum",
    "prefix",
    "circun- / circum-",
    "拉丁文 circum (周圍)",
    "環繞、周圍",
    [
      ["circunstancia", "n.", "circun- (周圍) + stancia (站立)", "情況、環境"],
      ["circunferencia", "n.", "circun- (周圍) + ferencia (帶)", "圓周"],
      ["circunnavegar", "v.", "circun- (環繞) + navegar (航行)", "環球航行"],
      ["circunvalación", "n.", "circun- (環繞) + valación (築牆)", "環城公路、外環道"]
    ]
  ],
  [
    "pre-con",
    "prefix",
    "con- / com- / co-",
    "拉丁文 cum (共同、一起)",
    "共同、一起、完全",
    [
      ["compartir", "v.", "com- (共同) + partir (分)", "分享、分擔"],
      ["colaborar", "v.", "co- (共同) + laborar (工作)", "合作、協作"],
      ["convivir", "v.", "con- (一起) + vivir (生活)", "共處、同居"],
      ["comprender", "v.", "com- (完全) + prender (抓住)", "理解、包含"],
      ["comprensión", "n.", "com- (完全) + prensión (抓住)", "理解、體諒"],
      ["coincidir", "v.", "co- (共同) + incidir (落入)", "巧合、意見一致"],
      ["comprobar", "v.", "com- (完全) + probar (測試)", "核實、檢查"],
      ["concentrar", "v.", "con- (共同) + centrar (中心)", "集中、專注"],
      ["conocimiento", "n.", "co- (完全) + nocimiento (認識)", "知識、認識"]
    ]
  ],
  [
    "pre-contra",
    "prefix",
    "contra-",
    "拉丁文 contra (對立、相反)",
    "反對、相反、對抗",
    [
      ["contradecir", "v.", "contra- (反) + decir (說)", "反駁、與…矛盾"],
      ["contraseña", "n.", "contra- (對) + seña (記號)", "密碼、暗號"],
      ["contraproducente", "adj.", "contra- (反) + producente (產生)", "適得其反的"],
      ["contratiempo", "n.", "contra- (逆) + tiempo (時間/天氣)", "意外阻礙、小波折"],
      ["contrabando", "n.", "contra- (違背) + bando (法令)", "走私"],
      ["contrario", "adj./n.", "contra- (相反) + -ario", "相反的、對立面"],
      ["contraer", "v.", "contra- (拉在一起) + traer (拉)", "收縮、感染、締結"]
    ]
  ],
  [
    "pre-cuadri",
    "prefix",
    "cuadri- / cuadr- / tetra-",
    "拉丁文 quattuor / 希臘文 tetra (四)",
    "四、四倍",
    [
      ["cuadrado", "n./adj.", "cuadr- (四) + -ado", "正方形、平方的"],
      ["cuatrimestre", "n.", "cuatri- (四) + mestre (月)", "四個月（一學期）"],
      ["cuadrúpedo", "n./adj.", "cuadrú- (四) + pedo (腳)", "四足動物"],
      ["tetralogía", "n.", "tetra- (四) + logía (作品)", "四部曲"]
    ]
  ],
  [
    "pre-de",
    "prefix",
    "de- / des- / dis-",
    "拉丁文 de- / dis- (分離、否定)",
    "否定、去除、向下、分離",
    [
      ["desaparecer", "v.", "des- (否定) + aparecer (出現)", "消失"],
      ["descubrir", "v.", "des- (去除) + cubrir (覆蓋)", "發現、揭開"],
      ["descender", "v.", "de- (向下) + scender (爬)", "下降、下坡"],
      ["disculpar", "v.", "dis- (去除) + culpar (責怪)", "原諒、道歉"],
      ["desarrollar", "v.", "des- (展開) + arrollar (捲)", "發展、開發"],
      ["descargar", "v.", "des- (卸下) + cargar (裝載)", "下載、卸貨"],
      ["desplegar", "v.", "des- (展開) + plegar (折疊)", "展開、部署"],
      ["desechar", "v.", "des- (去除) + echar (丟)", "丟棄、淘汰"],
      ["despejado", "adj.", "des- (去除) + pejado (阻礙)", "晴朗的、暢通的"],
      ["desodorante", "n.", "des- (去除) + odorante (氣味)", "除臭劑、體香劑"],
      ["desventaja", "n.", "des- (無) + ventaja (優勢)", "劣勢、缺點"],
      ["deprimido", "adj.", "de- (向下) + primido (壓)", "沮喪的、憂鬱的"]
    ]
  ],
  [
    "pre-dia",
    "prefix",
    "dia-",
    "希臘文 dia (穿過、橫越、之間)",
    "穿過、徹底、彼此之間",
    [
      ["diálogo", "n.", "dia- (之間) + logo (說話)", "對話"],
      ["dialogar", "v.", "dia- (之間) + logar (說話)", "交談、對話"],
      ["diagnóstico", "n.", "dia- (徹底) + gnóstico (認識)", "診斷"],
      ["diagonal", "adj./n.", "dia- (穿過) + gonal (角)", "對角線的、斜線"],
      ["diámetro", "n.", "dia- (穿過) + metro (測量)", "直徑"],
      ["diabético", "adj./n.", "dia- (穿過/排出) + bético (走)", "糖尿病的、糖尿病患者"]
    ]
  ],
  [
    "pre-dis-gr",
    "prefix",
    "dis- (希臘)",
    "希臘文 dys- (困難、不良)",
    "困難、異常、障礙",
    [
      ["disfunción", "n.", "dis- (不良) + función (功能)", "功能障礙、失調"],
      ["dislexia", "n.", "dis- (困難) + lexia (閱讀/詞語)", "閱讀障礙"],
      ["distopía", "n.", "dis- (壞) + topía (地方)", "反烏托邦"]
    ]
  ],
  [
    "pre-en",
    "prefix",
    "en- / em-",
    "拉丁文 in- (在內、使成為)",
    "在…裡面、使成為…狀態",
    [
      ["encarcelar", "v.", "en- (入) + cárcel (監獄) + -ar", "監禁、關入監獄"],
      ["embotellar", "v.", "em- (入) + botella (瓶子) + -ar", "裝瓶、交通堵塞"],
      ["enriquecer", "v.", "en- (使) + rico (富有的) + -ecer", "使豐富、致富"],
      ["empeorar", "v.", "em- (使) + peor (更糟) + -ar", "惡化、變糟"],
      ["enfocar", "v.", "en- (入) + foco (焦點) + -ar", "聚焦、專注於"],
      ["embarque", "n.", "em- (上/入) + barque (船)", "登機、裝船"],
      ["enchufar", "v.", "en- (入) + chufar (套管)", "插上插頭、接通電源"],
      ["empacar", "v.", "em- (入) + pacar (包裹)", "打包、裝箱"],
      ["envolver", "v.", "en- (入) + volver (捲)", "包裹、纏繞"],
      ["enfadado", "adj.", "en- (使) + fadado (厭煩)", "生氣的、惱怒的"]
    ]
  ],
  [
    "pre-endo",
    "prefix",
    "endo- / exo-",
    "希臘文 endon (內部) / exo (外部)",
    "內部 vs. 外部",
    [
      ["endocrino", "adj.", "endo- (內) + crino (分泌)", "內分泌的"],
      ["exótico", "adj.", "exo- (外國/外部) + -tico", "異國風情的、奇異的"],
      ["exoesqueleto", "n.", "exo- (外) + esqueleto (骨骼)", "外骨骼"]
    ]
  ],
  [
    "pre-entre",
    "prefix",
    "entre- / inter-",
    "拉丁文 inter (在…之間)",
    "在…之間、相互",
    [
      ["entrevista", "n.", "entre- (互相) + vista (見面)", "面試、採訪"],
      ["internacional", "adj.", "inter- (之間) + nacional (國家的)", "國際的"],
      ["entretener", "v.", "entre- (在其中) + tener (持有)", "娛樂、使分心"],
      ["entretenido", "adj.", "entre- (在其中) + tenido (持有)", "有趣的、消遣的"],
      ["intercambiar", "v.", "inter- (互相) + cambiar (交換)", "交換、交流"],
      ["intercambio", "n.", "inter- (互相) + cambio (交換)", "交流、交換"],
      ["interrumpir", "v.", "inter- (在中間) + rumpir (打斷)", "打斷、中斷"],
      ["interior", "n./adj.", "inter- (內部) + -ior", "內部、內陸"],
      ["interfono", "n.", "inter- (互相) + fono (聲音)", "對講機、門鈴電話"]
    ]
  ],
  [
    "pre-epi",
    "prefix",
    "epi-",
    "希臘文 epi (在…之上、附帶)",
    "在表面上、在…之後、附加",
    [
      ["epidemia", "n.", "epi- (降臨於) + demia (人民)", "流行病、疫情"],
      ["epílogo", "n.", "epi- (在後) + logo (言詞)", "結語、尾聲"],
      ["epidermis", "n.", "epi- (在表面) + dermis (皮膚)", "表皮"]
    ]
  ],
  [
    "pre-equi",
    "prefix",
    "equi- / iso-",
    "拉丁文 aequus / 希臘文 isos (相等)",
    "相等、平均、平衡",
    [
      ["equilibrio", "n.", "equi- (相等) + librio (天平/重量)", "平衡、均衡"],
      ["equilibrado", "adj.", "equi- (相等) + librado (稱重)", "平衡的、穩重的"],
      ["equivalente", "adj./n.", "equi- (相等) + valente (價值)", "等值的、相當於"],
      ["equivocar", "v.", "equi- (相同) + vocar (稱呼)", "弄錯、誤認"],
      ["equivocado", "adj.", "equi- (相同) + vocado (稱呼)", "錯誤的"],
      ["isótopo", "n.", "iso- (相同) + topo (位置)", "同位素"]
    ]
  ],
  [
    "pre-eu",
    "prefix",
    "eu-",
    "希臘文 eu (好、美好、正常)",
    "良好、愉快、優美",
    [
      ["euforia", "n.", "eu- (好) + foria (承受/感覺)", "欣快感、極度興奮"],
      ["eufemismo", "n.", "eu- (好聽) + femismo (說話)", "委婉語"],
      ["eutanasia", "n.", "eu- (安詳/好) + tanasia (死亡)", "安樂死"]
    ]
  ],
  [
    "pre-ex",
    "prefix",
    "ex- / e-",
    "拉丁文 ex (向外、前任)",
    "向外、離開、前任的",
    [
      ["exportar", "v.", "ex- (向外) + portar (運送)", "出口、輸出"],
      ["expresar", "v.", "ex- (向外) + presar (壓)", "表達、表示"],
      ["exalumno", "n.", "ex- (前任) + alumno (學生)", "校友、畢業生"],
      ["emigrar", "v.", "e- (向外) + migrar (移動)", "移居國外"],
      ["excluir", "v.", "ex- (向外) + cluir (關)", "排除、排斥"],
      ["exigir", "v.", "ex- (向外) + igir (驅動)", "要求、索取"],
      ["expulsar", "v.", "ex- (向外) + pulsar (推)", "驅逐、開除"]
    ]
  ],
  [
    "pre-extra",
    "prefix",
    "extra-",
    "拉丁文 extra (在…之外)",
    "在…之外、額外、極度",
    [
      ["extraordinario", "adj.", "extra- (超出) + ordinario (平常的)", "非凡的、特別的"],
      ["extranjero", "n./adj.", "extra- (外部) + -ero", "外國人、外國的"],
      ["extranjería", "n.", "extra- (外部) + -ería", "外僑事務、外國人身分"],
      ["extraterrestre", "n./adj.", "extra- (之外) + terrestre (地球的)", "外星人、地球外的"],
      ["extravagante", "adj.", "extra- (超出常軌) + vagante (漫遊)", "古怪的、奢華浮誇的"],
      ["extravío", "n.", "extra- (偏離) + vío (道路)", "遺失、迷失"]
    ]
  ],
  [
    "pre-hemi",
    "prefix",
    "hemi- / semi-",
    "希臘文 hemi / 拉丁文 semi (一半)",
    "半、部分、幾乎",
    [
      ["hemisferio", "n.", "hemi- (半) + sferio (球體)", "半球"],
      ["semifinal", "n.", "semi- (半) + final (決賽)", "準決賽、半決賽"],
      ["semicírculo", "n.", "semi- (半) + círculo (圓)", "半圓"],
      ["semidesnatado", "adj.", "semi- (半) + desnatado (脫脂的)", "半脫脂的（牛奶）"]
    ]
  ],
  [
    "pre-hetero",
    "prefix",
    "hetero- / homo-",
    "希臘文 heteros (不同) / homos (相同)",
    "異質 vs. 同質",
    [
      ["heterogéneo", "adj.", "hetero- (不同) + géneo (種類)", "異質的、成分不同的"],
      ["homogéneo", "adj.", "homo- (相同) + géneo (種類)", "同質的、均勻的"],
      ["homónimo", "n./adj.", "homo- (相同) + ónimo (名字)", "同音異義詞、同名者"],
      ["homologación", "n.", "homo- (相同) + logación (認可)", "官方認證、學歷認證"]
    ]
  ],
  [
    "pre-hiper",
    "prefix",
    "hiper-",
    "希臘文 hyper (超過、過度)",
    "過度、超級、高於正常",
    [
      ["hipermercado", "n.", "hiper- (超大) + mercado (市場)", "大型量販店"],
      ["hipertensión", "n.", "hiper- (高) + tensión (壓力/血壓)", "高血壓"],
      ["hiperactivo", "adj.", "hiper- (過度) + activo (活躍的)", "過動的、極度活躍的"],
      ["hipérbole", "n.", "hiper- (超過) + bole (投擲)", "誇張法（修辭）"]
    ]
  ],
  [
    "pre-hipo",
    "prefix",
    "hipo-",
    "希臘文 hypo (在…之下)",
    "不足、低於、在…之下",
    [
      ["hipotermia", "n.", "hipo- (低) + termia (溫度)", "失溫症"],
      ["hipótesis", "n.", "hipo- (下) + tesis (放置/論點)", "假設、假說"],
      ["hipoglucemia", "n.", "hipo- (低) + glucemia (血糖)", "低血糖"],
      ["hipócrita", "adj./n.", "hipo- (在面具下) + crita (判斷/演戲)", "偽善的、偽君子"],
      ["hipocresía", "n.", "hipo- (在面具下) + cresía (演戲)", "虛偽、偽善"]
    ]
  ],
  [
    "pre-in",
    "prefix",
    "in- / im- / i-",
    "拉丁文 in- (否定 / 向內)",
    "1.否定、不 2.向內、進入",
    [
      ["imposible", "adj.", "im- (不) + posible (可能的)", "不可能的"],
      ["invisible", "adj.", "in- (不) + visible (看得見的)", "看不見的"],
      ["ilegal", "adj.", "i- (不) + legal (合法的)", "非法的"],
      ["importar", "v.", "im- (向內) + portar (運送)", "進口、重要"],
      ["incluir", "v.", "in- (向內) + cluir (關)", "包含"],
      ["inscribirse", "v.", "in- (入) + scribirse (寫)", "報名、註冊"],
      ["ingresar", "v.", "in- (向內) + gresar (走)", "進入、存入、入院"],
      ["instalar", "v.", "in- (入) + stalar (安置)", "安裝、設置"],
      ["impulsar", "v.", "im- (向內/前) + pulsar (推)", "推動、促進"],
      ["inmediato", "adj.", "in- (不) + mediato (隔開的)", "立即的、直接的"],
      ["inquilino", "n.", "in- (在內) + quilino (居住)", "房客、承租人"]
    ]
  ],
  [
    "pre-infra",
    "prefix",
    "infra-",
    "拉丁文 infra (在…下面)",
    "在…之下、低於",
    [
      ["infraestructura", "n.", "infra- (下層) + estructura (結構)", "基礎設施"],
      ["infravalorar", "v.", "infra- (低) + valorar (評估價值)", "低估"],
      ["infrarrojo", "adj./n.", "infra- (低於) + rojo (紅色)", "紅外線的"],
      ["infracción", "n.", "in- (違背) + fracción (打破)", "違規、違法行為"]
    ]
  ],
  [
    "pre-intra",
    "prefix",
    "intra- / intro-",
    "拉丁文 intra / intro (在內部、向內)",
    "在…之內、向內",
    [
      ["introducir", "v.", "intro- (向內) + ducir (引導)", "介紹、引入、插入"],
      ["introvertido", "adj./n.", "intro- (向內) + vertido (轉向)", "內向的、內向者"],
      ["intravenoso", "adj.", "intra- (在內) + venoso (靜脈的)", "靜脈內的"],
      ["intranquilidad", "n.", "in- (不) + tranquilidad (平靜)", "不安、焦慮"]
    ]
  ],
  [
    "pre-macro",
    "prefix",
    "macro- / mega-",
    "希臘文 makros (大) / megas (巨大)",
    "宏觀的、巨大的、百萬",
    [
      ["macroeconomía", "n.", "macro- (宏觀) + economía (經濟學)", "總體經濟學"],
      ["megáfono", "n.", "mega- (大) + fono (聲音)", "擴音器、大聲公"],
      ["megalópolis", "n.", "mega- (巨大) + polis (城市)", "特大城市、大都會帶"]
    ]
  ],
  [
    "pre-mal",
    "prefix",
    "mal- / mali-",
    "拉丁文 male (壞、惡)",
    "壞、錯誤、不良",
    [
      ["malentendido", "n.", "mal- (錯誤) + entendido (理解)", "誤會"],
      ["maleducado", "adj.", "mal- (壞) + educado (受教育的)", "沒禮貌的、缺乏教養的"],
      ["malgastar", "v.", "mal- (壞) + gastar (花費)", "浪費、揮霍"],
      ["malhumorado", "adj.", "mal- (壞) + humorado (心情)", "脾氣壞的、心情不好的"],
      ["maldecir", "v.", "mal- (壞) + decir (說)", "詛咒、咒罵"]
    ]
  ],
  [
    "pre-meta",
    "prefix",
    "meta-",
    "希臘文 meta (超越、變化、之後)",
    "超越、轉變、後設",
    [
      ["metáfora", "n.", "meta- (轉移) + fora (攜帶)", "隱喻、暗喻"],
      ["metamorfosis", "n.", "meta- (變化) + morfosis (形態)", "變形、蛻變"],
      ["metabolismo", "n.", "meta- (變化) + bolismo (投擲/運作)", "新陳代謝"]
    ]
  ],
  [
    "pre-micro",
    "prefix",
    "micro-",
    "希臘文 mikros (微小)",
    "微小的、百萬分之一",
    [
      ["microondas", "n.", "micro- (微) + ondas (波)", "微波爐"],
      ["microscopio", "n.", "micro- (微) + scopio (看)", "顯微鏡"],
      ["microorganismo", "n.", "micro- (微) + organismo (生物體)", "微生物"],
      ["microbio", "n.", "micro- (微) + bio (生命)", "細菌、微生物"]
    ]
  ],
  [
    "pre-mono",
    "prefix",
    "mono-",
    "希臘文 monos (單一)",
    "單一、獨自、一個",
    [
      ["monólogo", "n.", "mono- (單一) + logo (說話)", "獨白"],
      ["monotonía", "n.", "mono- (單一) + tonía (音調)", "單調、乏味"],
      ["monopolio", "n.", "mono- (單一) + polio (販賣)", "壟斷、專賣"],
      ["monolingüe", "adj.", "mono- (單一) + lingüe (語言)", "單語的"]
    ]
  ],
  [
    "pre-multi",
    "prefix",
    "multi- / pluri-",
    "拉丁文 multus / plus (多)",
    "多、許多",
    [
      ["multicultural", "adj.", "multi- (多) + cultural (文化的)", "多元文化的"],
      ["multitud", "n.", "multi- (多) + -tud (狀態)", "群眾、大量"],
      ["multinacional", "adj./n.", "multi- (多) + nacional (國家的)", "跨國的、跨國公司"],
      ["pluriempleo", "n.", "pluri- (多) + empleo (工作)", "兼職多份工作"]
    ]
  ],
  [
    "pre-neo",
    "prefix",
    "neo-",
    "希臘文 neos (新)",
    "新的、現代的、復興的",
    [
      ["neologismo", "n.", "neo- (新) + logismo (詞語)", "新詞、新造詞"],
      ["neoclásico", "adj.", "neo- (新) + clásico (古典的)", "新古典主義的"],
      ["neonatal", "adj.", "neo- (新) + natal (出生的)", "新生兒的"]
    ]
  ],
  [
    "pre-omni",
    "prefix",
    "omni- / pan-",
    "拉丁文 omnis / 希臘文 pan (全部)",
    "全部、無所不在、泛",
    [
      ["omnipotente", "adj.", "omni- (全) + potente (有能力的)", "全能的"],
      ["omnívoro", "adj./n.", "omni- (全) + voro (吃)", "雜食性的、雜食動物"],
      ["panorama", "n.", "pan- (全) + orama (景象)", "全景、全貌"],
      ["pandemia", "n.", "pan- (全) + demia (人民)", "全球大流行病"]
    ]
  ],
  [
    "pre-para",
    "prefix",
    "para-",
    "希臘文 para / 西文 parar",
    "1.在旁、類似 2.阻擋、防護",
    [
      ["paraguas", "n.", "para- (阻擋) + aguas (水)", "雨傘"],
      ["parabrisas", "n.", "para- (阻擋) + brisas (微風)", "擋風玻璃"],
      ["paralelo", "adj./n.", "para- (在旁) + lelo (彼此)", "平行的、平行線"],
      ["paradoja", "n.", "para- (違背) + doxa (觀點)", "悖論、自相矛盾"],
      ["paracaídas", "n.", "para- (阻擋) + caídas (墜落)", "降落傘"]
    ]
  ],
  [
    "pre-per",
    "prefix",
    "per-",
    "拉丁文 per (穿過、徹底)",
    "貫穿、通過、完全",
    [
      ["permanecer", "v.", "per- (持續) + manecer (停留)", "停留、保持"],
      ["permitir", "v.", "per- (通過) + mitir (送/放)", "允許"],
      ["permiso", "n.", "per- (通過) + miso (送/放)", "許可、允許、駕照"],
      ["perfeccionar", "v.", "per- (完全) + feccionar (做)", "使完美、改進"],
      ["perspectiva", "n.", "per- (穿透) + spectiva (看)", "透視、觀點"],
      ["perseguir", "v.", "per- (徹底) + seguir (跟隨)", "追捕、追求"],
      ["perfil", "n.", "per- (沿著) + fil (線條)", "側面、輪廓、個人資料"]
    ]
  ],
  [
    "pre-peri",
    "prefix",
    "peri-",
    "希臘文 peri (周圍)",
    "周圍、附近",
    [
      ["periferia", "n.", "peri- (周圍) + feria (帶)", "外圍、市郊"],
      ["perímetro", "n.", "peri- (周圍) + metro (測量)", "周長、周邊"],
      ["periódico", "n./adj.", "peri- (循環一圈) + ódico (路)", "報紙、週期性的"]
    ]
  ],
  [
    "pre-poli",
    "prefix",
    "poli-",
    "希臘文 polys (多)",
    "多、複數",
    [
      ["políglota", "n./adj.", "poli- (多) + glota (舌頭/語言)", "通曉多種語言的人"],
      ["polideportivo", "n.", "poli- (多) + deportivo (運動的)", "綜合體育館"],
      ["policromía", "n.", "poli- (多) + cromía (顏色)", "多彩"],
      ["política", "n.", "polis (城邦) + -tica", "政治（城邦事務）"]
    ]
  ],
  [
    "pre-post",
    "prefix",
    "post- / pos-",
    "拉丁文 post (在…之後)",
    "在…之後、延後",
    [
      ["posponer", "v.", "pos- (在後) + poner (放)", "推遲、延期"],
      ["posgrado", "n.", "pos- (在後) + grado (學位)", "研究所、研究生階段"],
      ["postguerra", "n.", "post- (之後) + guerra (戰爭)", "戰後"],
      ["posterior", "adj.", "post- (之後) + -erior", "隨後的、後面的"],
      ["posteriormente", "adv.", "post- (之後) + -erior + -mente", "後來、隨後"],
      ["postre", "n.", "post- (最後/在後) + -re", "甜點（餐後食物）"]
    ]
  ],
  [
    "pre-pre",
    "prefix",
    "pre-",
    "拉丁文 prae (在…之前)",
    "預先、在…之前",
    [
      ["predecir", "v.", "pre- (預先) + decir (說)", "預測、預言"],
      ["preocupar", "v.", "pre- (提前) + ocupar (佔據)", "使擔心"],
      ["preocuparse", "v.", "pre- (提前) + ocuparse (佔據)", "擔心、操心"],
      ["preparar", "v.", "pre- (預先) + parar (準備)", "準備"],
      ["prejuicio", "n.", "pre- (預先) + juicio (判斷)", "偏見、成見"],
      ["presupuesto", "n.", "pre- (預先) + supuesto (假設/放置)", "預算"],
      ["previo", "adj.", "pre- (在先) + vio (道路)", "先前的、預先的"],
      ["previsto", "adj.", "pre- (預先) + visto (看見)", "預料的、預定的"],
      ["presencia", "n.", "pre- (在前方) + sencia (存在)", "出席、在場"]
    ]
  ],
  [
    "pre-pro",
    "prefix",
    "pro-",
    "拉丁文/希臘文 pro (向前、支持)",
    "向前、代替、支持",
    [
      ["progreso", "n.", "pro- (向前) + greso (走)", "進步、進展"],
      ["promover", "v.", "pro- (向前) + mover (移動)", "促進、推廣、升遷"],
      ["pronombre", "n.", "pro- (代替) + nombre (名詞)", "代名詞"],
      ["proponer", "v.", "pro- (向前) + poner (放)", "提議、建議"],
      ["propuesta", "n.", "pro- (向前) + puesta (放置)", "提案、建議"],
      ["propósito", "n.", "pro- (向前) + pósito (放置)", "目的、決心"],
      ["proteger", "v.", "pro- (在前方) + teger (遮蓋)", "保護"],
      ["proseguir", "v.", "pro- (向前) + seguir (跟隨)", "繼續、進行"],
      ["procedimiento", "n.", "pro- (向前) + cedimiento (走)", "程序、手續"],
      ["proporcionar", "v.", "pro- (向前) + porcionar (分配)", "提供、供給"],
      ["proveedor", "n.", "pro- (向前) + veedor (看/準備)", "供應商"]
    ]
  ],
  [
    "pre-proto",
    "prefix",
    "proto-",
    "希臘文 protos (第一、原始)",
    "第一、最初、原型",
    [
      ["prototipo", "n.", "proto- (原始) + tipo (模型)", "原型、樣機"],
      ["protocolo", "n.", "proto- (第一) + colo (黏貼的紙頁)", "禮儀、協議、規程"],
      ["protagonista", "n.", "proto- (第一) + agonista (演員/競爭者)", "主角"]
    ]
  ],
  [
    "pre-pseudo",
    "prefix",
    "pseudo- / seudo-",
    "希臘文 pseudes (假的)",
    "假的、偽裝的、冒充的",
    [
      ["seudónimo", "n.", "seudo- (假) + ónimo (名字)", "筆名、化名"],
      ["pseudociencia", "n.", "pseudo- (偽) + ciencia (科學)", "偽科學"]
    ]
  ],
  [
    "pre-re",
    "prefix",
    "re-",
    "拉丁文 re- (再次、向後)",
    "再次、重複、向後、加強",
    [
      ["repetir", "v.", "re- (再次) + petir (尋求)", "重複"],
      ["regresar", "v.", "re- (向後) + gresar (走)", "返回、回來"],
      ["regreso", "n.", "re- (向後) + greso (走)", "返回、歸來"],
      ["reconstruir", "v.", "re- (再次) + construir (建造)", "重建"],
      ["reconocer", "v.", "re- (再次) + conocer (認識)", "認出、承認"],
      ["reconocimiento", "n.", "re- (再次) + conocimiento (認識)", "認可、表揚、識別"],
      ["rechazar", "v.", "re- (向後) + chazar (推)", "拒絕"],
      ["relación", "n.", "re- (回) + lación (帶)", "關係、聯繫"],
      ["relacionar", "v.", "re- (回) + lacionar (帶)", "使聯繫、關聯"],
      ["revista", "n.", "re- (再次) + vista (看)", "雜誌、檢閱"],
      ["rebaja", "n.", "re- (向下/再) + baja (降低)", "折扣、降價"],
      ["redactar", "v.", "re- (整理) + dactar (驅動/寫)", "起草、撰寫"]
    ]
  ],
  [
    "pre-retro",
    "prefix",
    "retro-",
    "拉丁文 retro (向後)",
    "向後、追溯",
    [
      ["retroceder", "v.", "retro- (向後) + ceder (走/讓)", "後退、倒退"],
      ["retrospectiva", "n.", "retro- (向後) + spectiva (看)", "回顧展、回顧"],
      ["retroalimentación", "n.", "retro- (回) + alimentación (供給)", "回饋 (feedback)"]
    ]
  ],
  [
    "pre-sin",
    "prefix",
    "sin- / sim-",
    "希臘文 syn / sym (共同、一起)",
    "共同、同時、和諧",
    [
      ["síntoma", "n.", "sin- (一起) + toma (落下/發生)", "症狀"],
      ["sinfonía", "n.", "sin- (共同) + fonía (聲音)", "交響樂"],
      ["simpatía", "n.", "sim- (共同) + patía (情感)", "好感、同情"],
      ["simpático", "adj.", "sim- (共同) + pático (情感)", "友善的、令人喜歡的"],
      ["síntesis", "n.", "sin- (一起) + tesis (放置)", "綜合、合成"],
      ["similitud", "n.", "simil- (相似) + -itud", "相似性、類似"]
    ]
  ],
  [
    "pre-sobre",
    "prefix",
    "sobre- / super- / supra-",
    "拉丁文 super (在…之上、過度)",
    "在…之上、超越、過度",
    [
      ["sobrevivir", "v.", "sobre- (超過) + vivir (活)", "生存、倖存"],
      ["sobrecargar", "v.", "sobre- (過度) + cargar (裝載)", "使超載、使負擔過重"],
      ["supermercado", "n.", "super- (超級) + mercado (市場)", "超市"],
      ["superficial", "adj.", "super- (表面) + ficial (臉/面)", "表面的、膚淺的"],
      ["sobresalir", "v.", "sobre- (超出) + salir (出來)", "突出、出類拔萃"],
      ["sobremesa", "n.", "sobre- (在…上/後) + mesa (餐桌)", "餐後閒聊時光"]
    ]
  ],
  [
    "pre-sub",
    "prefix",
    "sub- / so- / sos- / sus-",
    "拉丁文 sub (在…之下)",
    "在…之下、次級、暗中",
    [
      ["subrayar", "v.", "sub- (在下方) + rayar (畫線)", "畫底線、強調"],
      ["subterráneo", "adj./n.", "sub- (在下方) + terráneo (土地)", "地下的、地鐵"],
      ["subestimar", "v.", "sub- (低於) + estimar (評估)", "低估"],
      ["sostener", "v.", "sos- (從下方) + tener (握住)", "支撐、維持"],
      ["suspender", "v.", "sus- (在下方) + pender (懸掛)", "暫停、懸掛、不及格"],
      ["socorrer", "v.", "so- (從下方) + correr (跑)", "救助、援助"],
      ["socorro", "n./interj.", "so- (從下方) + corro (跑)", "救援、救命！"],
      ["sustantivo", "n./adj.", "sus- (在下方) + tantivo (站立)", "名詞、實質的"]
    ]
  ],
  [
    "pre-tele",
    "prefix",
    "tele-",
    "希臘文 tele (遠距離)",
    "遠距離、遙遠",
    [
      ["teléfono", "n.", "tele- (遠) + fono (聲音)", "電話"],
      ["televisión", "n.", "tele- (遠) + visión (視覺)", "電視"],
      ["televisor", "n.", "tele- (遠) + visor (觀看器)", "電視機"],
      ["teletrabajo", "n.", "tele- (遠距) + trabajo (工作)", "遠距工作"],
      ["telecomunicación", "n.", "tele- (遠距) + comunicación (通訊)", "電信、遠程通訊"]
    ]
  ],
  [
    "pre-trans",
    "prefix",
    "trans- / tras-",
    "拉丁文 trans (橫過、越過)",
    "穿過、跨越、轉變",
    [
      ["transporte", "n.", "trans- (跨越) + porte (運送)", "交通、運輸"],
      ["traducir", "v.", "tra- (越過) + ducir (引導)", "翻譯"],
      ["transformar", "v.", "trans- (轉變) + formar (形狀)", "改變、改造"],
      ["traslado", "n.", "tras- (轉移) + lado (帶走)", "搬遷、調動、轉移"],
      ["transparente", "adj.", "trans- (穿過) + parente (顯現)", "透明的"]
    ]
  ],
  [
    "pre-ultra",
    "prefix",
    "ultra-",
    "拉丁文 ultra (超出、極端)",
    "超過、極度、在…之外",
    [
      ["ultramar", "n./adj.", "ultra- (越過) + mar (海)", "海外、遠洋"],
      ["ultrasonido", "n.", "ultra- (超出) + sonido (聲音)", "超音波"],
      ["ultravioleta", "adj.", "ultra- (超出) + violeta (紫色)", "紫外線的"]
    ]
  ],
  [
    "pre-uni",
    "prefix",
    "uni-",
    "拉丁文 unus (一)",
    "單一、統一",
    [
      ["uniforme", "n./adj.", "uni- (單一) + forme (形式)", "制服、一致的"],
      ["universidad", "n.", "uni- (一) + versidad (轉向/整體)", "大學"],
      ["único", "adj.", "ún- (一) + -ico", "唯一的、獨特的"],
      ["unificar", "v.", "uni- (一) + ficar (做)", "統一、合併"]
    ]
  ],
  [
    "pre-vice",
    "prefix",
    "vice- / viz- / vi-",
    "拉丁文 vice (代替)",
    "副手、代理",
    [
      ["vicepresidente", "n.", "vice- (副) + presidente (總統/主席)", "副總統、副主席"],
      ["viceministro", "n.", "vice- (副) + ministro (部長)", "副部長"],
      ["virrey", "n.", "vi- (代理) + rey (國王)", "總督"]
    ]
  ],

  // ==================== RAÍCES (核心字根 A-Z) ====================
  [
    "root-aud",
    "root",
    "-aud- / -oíd-",
    "拉丁文 audire (聽)",
    "聽覺、聲音",
    [
      ["auditorio", "n.", "aud- (聽) + -itorio (場所)", "禮堂、聽眾席"],
      ["audiencia", "n.", "aud- (聽) + -iencia", "聽眾、觀眾、聽證會"],
      ["audible", "adj.", "aud- (聽) + -ible (可…的)", "聽得見的"],
      ["audífono", "n.", "audi- (聽) + fono (聲音)", "助聽器、耳機"]
    ]
  ],
  [
    "root-bio",
    "root",
    "-bio- / -viv- / -vit-",
    "希臘文 bios / 拉丁文 vivere (生命、活)",
    "生命、生活、生存",
    [
      ["biografía", "n.", "bio- (生命) + grafía (寫)", "傳記"],
      ["biología", "n.", "bio- (生命) + logía (學科)", "生物學"],
      ["vitalidad", "n.", "vit- (生命) + -alidad", "活力、生命力"],
      ["vivienda", "n.", "viv- (居住/生活) + -ienda", "住房、住宅"],
      ["convivencia", "n.", "con- (共同) + viv- (生活) + -encia", "共處、和睦相處"]
    ]
  ],
  [
    "root-cap",
    "root",
    "-cap- / -cab- / -cep-",
    "拉丁文 capere (拿、抓) / caput (頭)",
    "1.抓取、容納 2.頭部、首要",
    [
      ["capacidad", "n.", "cap- (容納) + -acidad", "能力、容量"],
      ["capturar", "v.", "capt- (抓) + -urar", "捕捉、捕獲"],
      ["capital", "n./adj.", "capit- (頭/首) + -al", "首都、資本、首要的"],
      ["capítulo", "n.", "capit- (頭) + -ulo (小)", "章節"],
      ["recepción", "n.", "re- (回) + cep- (拿/接) + -ción", "接待處、接收"]
    ]
  ],
  [
    "root-cred",
    "root",
    "-cred- / -cre-",
    "拉丁文 credere (相信)",
    "相信、信任、信用",
    [
      ["crédito", "n.", "créd- (相信) + -ito", "信用、貸款、學分"],
      ["increíble", "adj.", "in- (不) + cre- (相信) + -íble", "難以置信的"],
      ["creencia", "n.", "cre- (相信) + -encia", "信念、信仰"],
      ["credencial", "n./adj.", "cred- (信任) + -encial", "證件、憑證"]
    ]
  ],
  [
    "root-cron",
    "root",
    "-crono-",
    "希臘文 chronos (時間)",
    "時間、年代",
    [
      ["cronología", "n.", "crono- (時間) + logía (學科)", "年表、年代學"],
      ["crónico", "adj.", "crón- (時間) + -ico", "慢性的、長期的"],
      ["sincronizar", "v.", "sin- (共同) + cron- (時間) + -izar", "使同步"]
    ]
  ],
  [
    "root-dic",
    "root",
    "-dic- / -dec-",
    "拉丁文 dicere (說、宣告)",
    "說話、陳述、指示",
    [
      ["diccionario", "n.", "dic- (詞語/說) + -cionario", "字典"],
      ["indicar", "v.", "in- (向) + dic- (說/指) + -ar", "指示、表明"],
      ["dedicar", "v.", "de- (完全) + dic- (宣告) + -ar", "奉獻、致力於"],
      ["predicción", "n.", "pre- (預先) + dic- (說) + -ción", "預言、預報"]
    ]
  ],
  [
    "root-duc",
    "root",
    "-duc- / -duct-",
    "拉丁文 ducere (引導、帶領)",
    "引導、帶領、產生",
    [
      ["conducir", "v.", "con- (一起) + duc- (引導) + -ir", "駕駛、引導"],
      ["conductor", "n.", "con- (一起) + duct- (引導) + -or", "司機、導體"],
      ["producir", "v.", "pro- (向前) + duc- (引導) + -ir", "生產、產生"],
      ["producto", "n.", "pro- (向前) + duct- (引導) + -o", "產品"],
      ["reducir", "v.", "re- (向後) + duc- (引導) + -ir", "減少、縮小"],
      ["educación", "n.", "e- (向外) + duc- (引導) + -ación", "教育"]
    ]
  ],
  [
    "root-fac",
    "root",
    "-fac- / -fic- / -fec- / -hac-",
    "拉丁文 facere (做、製造)",
    "做、製造、產生",
    [
      ["fábrica", "n.", "fábr- (製造) + -ica", "工廠"],
      ["facilitar", "v.", "fac- (易於做) + -ilitar", "促進、使容易"],
      ["edificio", "n.", "edi- (建築) + fic- (做) + -io", "建築物、大樓"],
      ["beneficio", "n.", "bene- (好) + fic- (做) + -io", "利益、好處"],
      ["satisfecho", "adj.", "satis- (足夠) + fecho (做)", "滿意的"],
      ["artefacto", "n.", "arte (技藝) + fact- (製造) + -o", "器物、裝置"]
    ]
  ],
  [
    "root-fono",
    "root",
    "-fono- / -fon-",
    "希臘文 phone (聲音)",
    "聲音、語音",
    [
      ["teléfono", "n.", "tele- (遠) + fono (聲音)", "電話"],
      ["micrófono", "n.", "micro- (微) + fono (聲音)", "麥克風"],
      ["fonética", "n.", "fon- (聲音) + -ética", "語音學"],
      ["audífono", "n.", "audi- (聽) + fono (聲音)", "耳機、助聽器"]
    ]
  ],
  [
    "root-form",
    "root",
    "-form-",
    "拉丁文 forma (形狀、形式)",
    "形狀、結構、形成",
    [
      ["información", "n.", "in- (入) + form- (塑造) + -ación", "資訊、消息"],
      ["informática", "n.", "in- (入) + form- (形式) + -ática", "資訊科學、電腦技術"],
      ["formulario", "n.", "form- (形式) + -ulario", "表格、申請表"],
      ["deformar", "v.", "de- (毀壞) + form- (形狀) + -ar", "使變形"],
      ["formalidad", "n.", "form- (形式) + -alidad", "正式手續、禮節"]
    ]
  ],
  [
    "root-geo",
    "root",
    "-geo-",
    "希臘文 ge (地球、土地)",
    "地球、地理、土地",
    [
      ["geografía", "n.", "geo- (地球) + grafía (描寫)", "地理學"],
      ["geología", "n.", "geo- (地球) + logía (學科)", "地質學"],
      ["geometría", "n.", "geo- (土地) + metría (測量)", "幾何學"]
    ]
  ],
  [
    "root-graf",
    "root",
    "-graf- / -gram-",
    "希臘文 graphein (寫、畫、記錄)",
    "書寫、描繪、記錄",
    [
      ["fotografía", "n.", "foto- (光) + graf- (畫/寫) + -ía", "攝影、照片"],
      ["bolígrafo", "n.", "boli- (球) + graf- (寫) + -o", "原子筆"],
      ["programa", "n.", "pro- (預先) + grama (寫)", "節目、程式、計畫"],
      ["ortografía", "n.", "orto- (正確) + graf- (寫) + -ía", "正字法、拼寫法"]
    ]
  ],
  [
    "root-log",
    "root",
    "-log- / -logía-",
    "希臘文 logos (詞語、理性、學科)",
    "言語、理性、…學科",
    [
      ["psicología", "n.", "psico- (心靈) + logía (學科)", "心理學"],
      ["tecnología", "n.", "tecno- (技藝) + logía (學科)", "科技、技術"],
      ["lógica", "n.", "lóg- (理性) + -ica", "邏輯"],
      ["catálogo", "n.", "cata- (逐一) + logo (列舉)", "目錄"]
    ]
  ],
  [
    "root-man",
    "root",
    "-man- / -manu-",
    "拉丁文 manus (手)",
    "手、手工、操作",
    [
      ["manual", "adj./n.", "manu- (手) + -al", "手工的、手冊"],
      ["manipular", "v.", "mani- (手) + pular (裝滿/操作)", "操縱、操作"],
      ["mantener", "v.", "man- (手) + tener (握住)", "維持、保持"],
      ["manuscrito", "n./adj.", "manu- (手) + scrito (寫)", "手稿、手寫的"]
    ]
  ],
  [
    "root-mit",
    "root",
    "-mit- / -mis-",
    "拉丁文 mittere (送、發射、放)",
    "發送、傳遞、派遣",
    [
      ["transmitir", "v.", "trans- (越過) + mit- (送) + -ir", "傳輸、轉播、傳染"],
      ["permitir", "v.", "per- (通過) + mit- (放) + -ir", "允許"],
      ["permiso", "n.", "per- (通過) + mis- (放) + -o", "許可證、允許"],
      ["compromiso", "n.", "com- (共同) + pro- (向前) + mis- (送)", "承諾、妥協、約會"],
      ["emitir", "v.", "e- (向外) + mit- (送) + -ir", "發出、播送、發行"]
    ]
  ],
  [
    "root-pon",
    "root",
    "-pon- / -pos- / -puest-",
    "拉丁文 ponere (放置)",
    "放置、安排、擺設",
    [
      ["disponer", "v.", "dis- (分開) + pon- (放) + -er", "安排、擁有、處置"],
      ["suponer", "v.", "su- (在下方) + pon- (放) + -er", "假設、猜想"],
      ["exponer", "v.", "ex- (向外) + pon- (放) + -er", "展覽、陳述、暴露"],
      ["exposición", "n.", "ex- (向外) + pos- (放) + -ición", "展覽會、陳述"],
      ["impuesto", "n.", "im- (在…上) + puest- (放) + -o", "稅金"],
      ["puesto", "n./adj.", "puest- (放) + -o", "職位、攤位、放置的"]
    ]
  ],
  [
    "root-port",
    "root",
    "-port-",
    "拉丁文 portare (搬運、攜帶)",
    "運送、攜帶、港口",
    [
      ["exportar", "v.", "ex- (向外) + port- (運) + -ar", "出口"],
      ["importar", "v.", "im- (向內) + port- (運) + -ar", "進口、重要"],
      ["importancia", "n.", "im- (向內) + port- (帶) + -ancia", "重要性"],
      ["portátil", "adj./n.", "port- (攜帶) + -átil", "便攜式的、筆記型電腦"],
      ["oportunidad", "n.", "ob- (朝向) + port- (港口) + -unidad", "機會（船隻順利進港）"],
      ["deporte", "n.", "de- (遠離工作) + port- (帶/消遣) + -e", "運動"]
    ]
  ],
  [
    "root-scrib",
    "root",
    "-scrib- / -script- / -escrit-",
    "拉丁文 scribere (寫)",
    "書寫、記錄、登記",
    [
      ["escribir", "v.", "escrib- (寫) + -ir", "寫"],
      ["escritorio", "n.", "escrit- (寫) + -orio (場所)", "書桌、辦公桌"],
      ["describir", "v.", "de- (向下/詳細) + scrib- (寫) + -ir", "描述、形容"],
      ["inscripción", "n.", "in- (入) + scrip- (寫) + -ción", "報名、銘文"],
      ["suscribirse", "v.", "sus- (在下方) + scrib- (寫) + -irse", "訂閱（在下方簽名）"]
    ]
  ],
  [
    "root-sent",
    "root",
    "-sent- / -sens-",
    "拉丁文 sentire (感覺、思考)",
    "感覺、知覺、情感",
    [
      ["sentimiento", "n.", "sent- (感覺) + -imiento", "感情、情緒"],
      ["sensación", "n.", "sens- (感覺) + -ación", "感覺、轟動"],
      ["sensible", "adj.", "sens- (感覺) + -ible", "敏感的、感性的"],
      ["consentir", "v.", "con- (共同) + sent- (感覺) + -ir", "同意、縱容"]
    ]
  ],
  [
    "root-spect",
    "root",
    "-spect- / -spec-",
    "拉丁文 specere (看、觀察)",
    "觀看、視線、外表",
    [
      ["espectáculo", "n.", "spect- (看) + -áculo", "表演、奇觀"],
      ["espectador", "n.", "spect- (看) + -ador", "觀眾"],
      ["aspecto", "n.", "a- (向) + spect- (看) + -o", "外表、方面"],
      ["inspección", "n.", "in- (向內) + spec- (看) + -ción", "檢查、視察"],
      ["sospechar", "v.", "sos- (暗中) + pech- (看) + -ar", "懷疑"]
    ]
  ],
  [
    "root-ten",
    "root",
    "-ten- / -tin- / -tent-",
    "拉丁文 tenere (持有、握住)",
    "持有、保持、包含",
    [
      ["tener", "v.", "ten- (持有) + -er", "有、持有"],
      ["contenido", "n./adj.", "con- (一起) + ten- (持有) + -ido", "內容、克制的"],
      ["obtener", "v.", "ob- (朝向) + ten- (持有) + -er", "獲得、取得"],
      ["detener", "v.", "de- (向下/制止) + ten- (持有) + -er", "阻止、逮捕"],
      ["continente", "n.", "con- (連在一起) + tin- (持有) + -ente", "大陸、洲"]
    ]
  ],
  [
    "root-terr",
    "root",
    "-terr- / -tierr-",
    "拉丁文 terra (土地、地球)",
    "土地、地面、領土",
    [
      ["terreno", "n./adj.", "terr- (土地) + -eno", "土地、地帶、領域"],
      ["territorio", "n.", "terr- (土地) + -itorio", "領土、版圖"],
      ["terremoto", "n.", "terre- (地) + moto (移動)", "地震"],
      ["aterrizar", "v.", "a- (向) + terr- (地面) + -izar", "降落、著陸"]
    ]
  ],
  [
    "root-vert",
    "root",
    "-vert- / -vers-",
    "拉丁文 vertere (轉向、旋轉)",
    "轉變、方向、反轉",
    [
      ["convertir", "v.", "con- (完全) + vert- (轉) + -ir", "轉變、轉換"],
      ["divertido", "adj.", "di- (分開/轉移注意力) + vert- (轉) + -ido", "有趣的、好玩的"],
      ["advertencia", "n.", "ad- (向) + vert- (轉) + -encia", "警告、提醒"],
      ["controvertido", "adj.", "contro- (相反) + vert- (轉) + -ido", "有爭議的"],
      ["versión", "n.", "vers- (轉) + -ión", "版本、說法"]
    ]
  ],
  [
    "root-vis",
    "root",
    "-vis- / -vid-",
    "拉丁文 videre (看見)",
    "視覺、看、預見",
    [
      ["visita", "n.", "vis- (看) + -ita", "拜訪、參觀"],
      ["evidente", "adj.", "e- (向外) + vid- (看) + -ente", "明顯的、顯而易見的"],
      ["provisiones", "n.", "pro- (預先) + vis- (看/準備) + -iones", "糧食、補給品"],
      ["supervisar", "v.", "super- (在上方) + vis- (看) + -ar", "監督、管理"]
    ]
  ],

  // ==================== SUFIJOS (字尾) ====================
  [
    "suf-cion",
    "suffix",
    "-ción / -sión",
    "拉丁文 -tio / -sio (動作或結果名詞)",
    "動詞轉抽象名詞（動作、過程、狀態）",
    [
      ["actuación", "n.", "actuar (表演/行動) + -ción", "演出、表現、行動"],
      ["autorización", "n.", "autorizar (授權) + -ción", "授權、許可證"],
      ["pronunciación", "n.", "pronunciar (發音) + -ción", "發音"],
      ["comprensión", "n.", "comprender (理解) + -sión", "理解、體諒"],
      ["posesión", "n.", "poseer (擁有) + -sión", "擁有、財產"]
    ]
  ],
  [
    "suf-dad",
    "suffix",
    "-dad / -tad / -idad",
    "拉丁文 -tas (性質抽象名詞)",
    "形容詞轉抽象名詞（性質、狀態）",
    [
      ["igualdad", "n.", "igual (平等的) + -dad", "平等、相等"],
      ["soledad", "n.", "solo (孤獨的) + -edad", "孤獨、寂寞"],
      ["personalidad", "n.", "personal (個人的) + -idad", "個性、人格"],
      ["posibilidad", "n.", "posible (可能的) + -idad", "可能性"],
      ["especialidad", "n.", "especial (特別的) + -idad", "專業、特產"]
    ]
  ],
  [
    "suf-miento",
    "suffix",
    "-miento / -mento",
    "拉丁文 -mentum (動作結果或工具)",
    "動詞轉名詞（行為、結果、過程）",
    [
      ["acontecimiento", "n.", "acontecer (發生) + -imiento", "事件、大事"],
      ["entrenamiento", "n.", "entrenar (訓練) + -amiento", "訓練、培訓"],
      ["conocimiento", "n.", "conocer (認識) + -imiento", "知識、認識"],
      ["estacionamiento", "n.", "estacionar (停車) + -amiento", "停車場、停車"]
    ]
  ],
  [
    "suf-ero",
    "suffix",
    "-ero / -era / -ería",
    "拉丁文 -arius (職業、場所、容器)",
    "1.職業/人 2.商店/場所 3.物品/容器",
    [
      ["obrero", "n./adj.", "obra (工程/工作) + -ero", "工人、勞工的"],
      ["panadero", "n.", "pan (麵包) + -adero", "麵包師傅"],
      ["panadería", "n.", "pan (麵包) + -adería", "麵包店"],
      ["comisaría", "n.", "comisario (警官) + -ía", "警察局"],
      ["bibliotecario", "n.", "biblioteca (圖書館) + -ario", "圖書館員"]
    ]
  ],
  [
    "suf-dor",
    "suffix",
    "-dor / -dora",
    "拉丁文 -tor (施動者、機器)",
    "1.執行動作的人 2.機器/工具/場所",
    [
      ["entrenador", "n.", "entrenar (訓練) + -ador", "教練"],
      ["probador", "n.", "probar (試穿) + -ador", "試衣間"],
      ["parador", "n.", "parar (停留) + -ador", "國營古堡旅館、驛站"],
      ["impresora", "n.", "imprimir (列印) + -sora", "印表機"],
      ["aspiradora", "n.", "aspirar (吸) + -dora", "吸塵器"]
    ]
  ],
  [
    "suf-ble",
    "suffix",
    "-ble (-able / -ible)",
    "拉丁文 -bilis (可能性)",
    "動詞轉形容詞（可被…的、令人…的）",
    [
      ["agradable", "adj.", "agradar (使愉快) + -able", "令人愉快的、宜人的"],
      ["disponible", "adj.", "disponer (安排/使用) + -ible", "可用的、有空的"],
      ["amable", "adj.", "amar (愛) + -able", "親切的、友善的"],
      ["imprescindible", "adj.", "im- (不) + prescindir (省去) + -ible", "不可或缺的"]
    ]
  ],
  [
    "suf-oso",
    "suffix",
    "-oso / -osa",
    "拉丁文 -osus (充滿、具有)",
    "名詞/動詞轉形容詞（充滿…的、具有…特質的）",
    [
      ["espacioso", "adj.", "espacio (空間) + -oso", "寬敞的"],
      ["ansioso", "adj.", "ansia (焦慮/渴望) + -oso", "焦慮的、渴望的"],
      ["precioso", "adj.", "precio (價值) + -oso", "珍貴的、美麗的"],
      ["peligroso", "adj.", "peligro (危險) + -oso", "危險的"]
    ]
  ],
  [
    "suf-mente",
    "suffix",
    "-mente",
    "拉丁文 mente (以…之心態/方式)",
    "陰性形容詞 + -mente 轉副詞（…地）",
    [
      ["aproximadamente", "adv.", "aproximada (大約的) + -mente", "大約、大概"],
      ["posteriormente", "adv.", "posterior (隨後的) + -mente", "後來、隨後"],
      ["positivamente", "adv.", "positiva (積極的) + -mente", "積極地、肯定地"],
      ["simpáticamente", "adv.", "simpática (友善的) + -mente", "友善地、親切地"]
    ]
  ]
];
