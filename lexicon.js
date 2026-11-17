// 西班牙文全構詞詞素資料庫 - 終極完整版 (Prefijos, Raíces A-Z, Sufijos)
// 與 index.html (西班牙文全構詞詞素字典) 放置於同一資料夾即可自動載入。
// 資料格式: [id, type, morpheme, origin, meaning, [[word, pos, breakdown, wMeaning], ...]]

window.CORE_LEXICON = [
  // ==================== 1. 字首 PREFIJOS ====================
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
      ["analgésico", "n./adj.", "an- (無) + algésico (疼痛的)", "止痛藥、止痛的"]
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
      ["aberración", "n.", "ab- (偏離) + erración (漫遊)", "反常、偏差"],
      ["absoluto", "adj.", "ab- (完全/脫離限制) + soluto (解開)", "絕對的、完全的"],
      ["absolutamente", "adv.", "absoluto (絕對的) + -mente", "絕對地、完全地"],
      ["abusar", "v.", "ab- (偏離/過度) + usar (使用)", "濫用、虐待"]
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
      ["atraer", "v.", "a- (向) + traer (拉)", "吸引"],
      ["adecuado", "adj.", "ad- (向) + ecuado (平等)", "適當的、合適的"],
      ["admirar", "v.", "ad- (對) + mirar (看)", "欽佩、讚賞"],
      ["adaptar", "v.", "ad- (向) + aptar (適合)", "適應、改編"],
      ["afirmar", "v.", "a- (使) + firmar (穩固)", "肯定、斷言"],
      ["adoptar", "v.", "ad- (向) + optar (選擇)", "領養、採納"],
      ["adquirir", "v.", "ad- (向) + quirir (尋求)", "獲得、購得"],
      ["advertir", "v.", "ad- (向) + vertir (轉向)", "警告、注意到"],
      ["advertencia", "n.", "advertir (警告) + -encia", "警告、告示"],
      ["adversario", "n.", "ad- (對立) + versario (轉向)", "對手、敵手"],
      ["acercar", "v.", "a- (向) + cerca (近) + -ar", "靠近、拉近"],
      ["acompañar", "v.", "a- + compañ- (同伴) + -ar", "陪伴、陪同"],
      ["acordar", "v.", "a- (向) + cord- (心) + -ar", "商定、記得 (acordarse)"],
      ["acreditar", "v.", "a- + credit- (信用) + -ar", "證明、授權、認證"],
      ["acreditación", "n.", "acreditar + -ción", "認證、資質證明"],
      ["afición", "n.", "a- + fic- (做/投入) + -ión", "愛好、興趣"],
      ["aficionar", "v.", "afición + -ar", "使產生興趣"],
      ["afiliación", "n.", "a- + fili- (子女/成員) + -ación", "加入、入會、隸屬"],
      ["agrupación", "n.", "a- + grup- (群) + -ación", "團體、組織、分組"],
      ["aliviar", "v.", "a- (使) + livi- (輕) + -ar", "減輕、緩解"],
      ["aplicación", "n.", "a- + plic- (折疊/貼近) + -ación", "應用、應用程式、申請"],
      ["aportar", "v.", "a- (向) + portar (帶來)", "提供、貢獻"],
      ["aportación", "n.", "aportar + -ción", "貢獻、出資"],
      ["aprobar", "v.", "a- (向) + probar (證明好)", "通過（考試）、批准"],
      ["aproximadamente", "adv.", "a- + próxim- (近) + -ada + -mente", "大約、近似地"],
      ["asistir", "v.", "a- (向) + sistir (站立在旁)", "出席、協助"],
      ["asistencia", "n.", "asistir + -encia", "出席、援助"],
      ["asociación", "n.", "a- + soci- (同伴) + -ación", "協會、聯合"],
      ["atención", "n.", "a- (向) + tención (伸展)", "注意、專心"],
      ["aterrizar", "v.", "a- (向) + terr- (地面) + -izar", "降落、著陸"],
      ["atractivo", "adj.", "a- (向) + tract- (拉) + -ivo", "有吸引力的"]
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
      ["aerodinámico", "adj.", "aero- (空氣) + dinámico (動力的)", "空氣動力學的、流線型的"]
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
      ["ambiente", "n./adj.", "ambi- (周圍) + iente (走)", "環境、氛圍"],
      ["ambidiestro", "adj.", "ambi- (雙) + diestro (靈巧)", "雙手靈巧的"],
      ["anfibio", "n./adj.", "anfi- (兩棲) + bio (生命)", "兩棲動物、水陸兩用的"],
      ["ambivalencia", "n.", "ambi- (雙重) + valencia (價值/力量)", "矛盾心理、雙重性"]
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
      ["antemano", "adv.", "ante- (前) + mano (手)", "預先、事先 (de antemano)"]
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
      ["antipático", "adj.", "anti- (反) + pático (情感)", "令人討厭的、不友善的"],
      ["antivirus", "n.", "anti- (防) + virus (病毒)", "防毒軟體、抗病毒"],
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
      ["arzobispo", "n.", "arz- (首席) + obispo (主教)", "大主教"]
    ]
  ],
  [
    "pre-auto",
    "prefix",
    "auto-",
    "希臘文 autos (自己)",
    "自己、自動、本身",
    [
      ["autobús", "n.", "auto- (自動) + bús (眾人/omnibus)", "公車、巴士"],
      ["automático", "adj.", "auto- (自己) + mático (動)", "自動的"],
      ["autopista", "n.", "auto- (汽車) + pista (道路)", "高速公路"],
      ["autobiografía", "n.", "auto- (自己) + bio (生命) + grafía (寫)", "自傳"],
      ["autoestima", "n.", "auto- (自己) + estima (重視)", "自尊心"],
      ["autosuficiente", "adj.", "auto- (自己) + suficiente (足夠的)", "自給自足的"],
      ["autonomía", "n.", "auto- (自己) + nomía (法律)", "自治、自主權"],
      ["autorización", "n.", "autor- (創造/授權) + -ización", "授權、許可證"]
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
      ["beneficiario", "n./adj.", "beneficio + -ario", "受益人、受惠的"],
      ["bendecir", "v.", "ben- (好) + decir (說)", "祝福"],
      ["bienestar", "n.", "bien (好) + estar (狀態)", "福祉、健康幸福"],
      ["bienvenido", "adj.", "bien (好) + venido (來到的)", "受歡迎的、歡迎光臨"],
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
      ["bisexual", "adj./n.", "bi- (雙) + sexual (性的)", "雙性戀的"],
      ["bisabuelo", "n.", "bis- (再/二) + abuelo (祖父)", "曾祖父"],
      ["bizcocho", "n.", "biz- (兩次) + cocho (烤)", "海綿蛋糕（原指烤兩次的餅）"],
      ["bimestral", "adj.", "bi- (雙) + mestral (月的)", "雙月的、每兩個月一次的"]
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
      ["catalizador", "n.", "cata- (徹底) + lizador (解開)", "催化劑、促成因素"]
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
      ["hectárea", "n.", "hecto- (100) + área (公畝)", "公頃"]
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
      ["compartido", "adj.", "compartir + -ido", "共用的、分享的"],
      ["colaborar", "v.", "co- (共同) + laborar (工作)", "合作、協作"],
      ["convivir", "v.", "con- (一起) + vivir (生活)", "共處、同居"],
      ["convivencia", "n.", "convivir + -encia", "共處、和睦相處"],
      ["comprender", "v.", "com- (完全) + prender (抓住)", "理解、包含"],
      ["comprensión", "n.", "comprender + -sión", "理解、體諒"],
      ["coincidir", "v.", "co- (共同) + incidir (落入)", "巧合、意見一致"],
      ["coincidencia", "n.", "coincidir + -encia", "巧合、一致"],
      ["combinación", "n.", "com- + bin- (雙) + -ación", "組合、搭配"],
      ["combinar", "v.", "com- + bin- (雙) + -ar", "結合、搭配"],
      ["comentar", "v.", "co- + ment- (思考) + -ar", "評論、談論"],
      ["comentario", "n.", "comentar + -io", "評論、意見"],
      ["comercial", "adj.", "com- + merc- (商業) + -ial", "商業的"],
      ["compañero", "n.", "com- (共同) + pan- (麵包) + -ero", "同伴、同學、同事"],
      ["compatible", "adj.", "com- (共同) + pat- (承受) + -ible", "相容的、合得來的"],
      ["compensación", "n.", "com- + pens- (衡量) + -ación", "補償、賠償"],
      ["competencia", "n.", "com- + pet- (追求) + -encia", "競爭、能力、比賽"],
      ["complicado", "adj.", "com- (一起) + plic- (折疊) + -ado", "複雜的"],
      ["comprobar", "v.", "com- (完全) + probar (測試)", "核實、檢查、證明"],
      ["comprobante", "n.", "comprobar + -ante", "憑證、收據"],
      ["compromiso", "n.", "com- (共同) + pro- + miso (送出)", "承諾、約會、妥協"],
      ["concesionario", "n.", "con- + ces- (讓渡) + -ionario", "經銷商、特許經營商"],
      ["concordancia", "n.", "con- (共同) + cord- (心) + -ancia", "一致、協調"],
      ["concordar", "v.", "con- (共同) + cord- (心) + -ar", "一致、吻合"],
      ["concurso", "n.", "con- (一起) + curs- (跑) + -o", "比賽、競賽"],
      ["condiciones", "n.", "con- + dic- (說/規定) + -iones", "條件、狀況"],
      ["conducir", "v.", "con- (一起) + ducir (引導)", "駕駛、引導"],
      ["conductor", "n.", "conducir + -tor", "司機、駕駛員"],
      ["congestión", "n.", "con- (一起) + gest- (帶) + -ión", "擁擠、堵塞、充血"],
      ["conocimiento", "n.", "conocer (認識) + -imiento", "知識、認識"],
      ["conseguir", "v.", "con- (完全) + seguir (跟隨)", "獲得、達成"],
      ["conservar", "v.", "con- (完全) + servar (保存)", "保存、保護"],
      ["conservador", "adj./n.", "conservar + -dor", "保守的、保守派"],
      ["construir", "v.", "con- (一起) + struir (建造)", "建造、建設"],
      ["construido", "adj.", "construir + -ido", "建成的、構造的"],
      ["contenedor", "n.", "con- (一起) + ten- (裝) + -edor", "貨櫃、垃圾桶、容器"],
      ["contestar", "v.", "con- (共同) + test- (作證) + -ar", "回答、回覆"],
      ["contratar", "v.", "con- (一起) + tratar (協商)", "雇用、簽約"],
      ["conveniencia", "n.", "con- + ven- (來) + -iencia", "便利、合適"],
      ["convenio", "n.", "con- + ven- (來) + -io", "協議、公約"],
      ["conversación", "n.", "con- + vers- (轉) + -ación", "對話、交談"],
      ["convertirse", "v.", "con- + vert- (轉) + -irse", "變成、成為"],
      ["convocar", "v.", "con- (一起) + voc- (呼喚) + -ar", "召集、召開"],
      ["convocatoria", "n.", "convocar + -toria", "召集令、公告、考試場次"],
      ["cooperativa", "n./adj.", "co- (共同) + oper- (工作) + -ativa", "合作社、合作的"],
      ["coordinación", "n.", "co- (共同) + ordin- (順序) + -ación", "協調、配合"]
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
      ["contrario", "adj./n.", "contra- (反) + -ario", "相反的、對立面"],
      ["contratar", "v.", "con- + tratar (或 contra- 締約)", "雇用、簽訂合約"],
      ["contraproducente", "adj.", "contra- (反) + producente (產生)", "適得其反的"],
      ["contratiempo", "n.", "contra- (逆) + tiempo (時間/天氣)", "意外阻礙、小波折"],
      ["contrabando", "n.", "contra- (違背) + bando (法令)", "走私"]
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
      ["cuadrúpedo", "n./adj.", "cuadrú- (四) + pedo (腳)", "四足動物"]
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
      ["desarrollo", "n.", "desarrollar 的名詞形", "發展、開發"],
      ["desactivar", "v.", "des- (取消) + activar (啟動)", "停用、關閉"],
      ["desacuerdo", "n.", "des- (不) + acuerdo (一致)", "分歧、不同意"],
      ["desafiar", "v.", "des- (否定) + fiar (信任)", "挑戰、挑釁"],
      ["desafío", "n.", "desafiar 的名詞形", "挑戰"],
      ["desafortunadamente", "adv.", "des- (不) + afortunada (幸運) + -mente", "不幸地"],
      ["desagüe", "n.", "des- (排出) + agua (水)", "排水口、下水道"],
      ["desahucio", "n.", "des- (去除) + ahuciar (希望/租約)", "驅逐、逐出（房客）"],
      ["desastre", "n.", "des- (壞) + astr- (星象)", "災難"],
      ["descansar", "v.", "des- (去除) + cansar (疲勞)", "休息"],
      ["descanso", "n.", "descansar 的名詞形", "休息、課間休息"],
      ["desconectar", "v.", "des- (斷開) + conectar (連接)", "斷開連接、放鬆"],
      ["desconocido", "adj./n.", "des- (不) + conocido (認識的)", "陌生的、未知的"],
      ["describir", "v.", "de- (詳盡) + scribir (寫)", "描述"],
      ["descuento", "n.", "des- (減去) + cuento (計算)", "折扣"],
      ["desempleado", "adj./n.", "des- (無) + empleado (受雇的)", "失業的、失業者"],
      ["desempleo", "n.", "des- (無) + empleo (工作)", "失業"],
      ["desesperado", "adj.", "des- (失去) + esperado (希望)", "絕望的、急切的"],
      ["desobedecer", "v.", "des- (不) + obedecer (服從)", "違抗、不服從"],
      ["desordenado", "adj.", "des- (無) + ordenado (整齊的)", "凌亂的、無秩序的"],
      ["despedir", "v.", "des- (送走) + pedir (要求)", "解雇、送別 (despedirse)"],
      ["despedida", "n.", "despedir + -ida", "告別、送別會"],
      ["despensa", "n.", "des- + pens- (分配食物)", "食品儲藏室"],
      ["despertador", "n.", "despertar (叫醒) + -dor", "鬧鐘"],
      ["despertar", "v.", "des- (去除睡眠) + pertar", "醒來、叫醒 (despertarse)"],
      ["desplegar", "v.", "des- (展開) + plegar (折疊)", "展開、部署"],
      ["desventaja", "n.", "des- (無/不利) + ventaja (優勢)", "劣勢、缺點"],
      ["discriminación", "n.", "dis- (分開) + crimin- (區分) + -ación", "歧視、區別對待"],
      ["disponer", "v.", "dis- (分開放置) + poner (放)", "安排、擁有、處置"],
      ["disponible", "adj.", "disponer + -ible", "可用的、有空的"],
      ["distinguirse", "v.", "dis- (分開) + tinguir (標記) + -se", "脫穎而出、區別"],
      ["distraerse", "v.", "dis- (分開) + traer (拉) + -se", "分心、消遣"],
      ["divertido", "adj.", "di- (轉開) + vert- (轉) + -ido", "有趣的、好玩的"]
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
      ["dialogar", "v.", "diálogo + -ar", "對話、交談"],
      ["diagnóstico", "n.", "dia- (徹底) + gnóstico (認識)", "診斷"],
      ["diagonal", "adj./n.", "dia- (穿過) + gonal (角)", "對角線的、斜線"],
      ["diámetro", "n.", "dia- (穿過) + metro (測量)", "直徑"]
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
      ["embajada", "n.", "em- + baj- (派遣使節) + -ada", "大使館"],
      ["embajador", "n.", "embajada + -or", "大使"],
      ["embarazada", "adj.", "em- + baraz- (阻礙/負擔) + -ada", "懷孕的"],
      ["embarcar", "v.", "em- (上) + barco (船) + -ar", "登船、登機、裝運"],
      ["embargo", "n.", "em- + barg- (阻擋)", "查封、禁運 (sin embargo 然而)"],
      ["embarque", "n.", "embarcar 的名詞形", "登機、裝船"],
      ["embutido", "n.", "em- (塞入) + butir (填充) + -ido", "香腸、灌腸肉製品"],
      ["emocionado", "adj.", "emoción + -ado", "激動的、感動的"],
      ["emocionante", "adj.", "emoción + -ante", "令人激動的、精彩的"],
      ["empacar", "v.", "em- (入) + paca (包裹) + -ar", "打包、裝箱"],
      ["empezar", "v.", "em- + pieza (部分/開始) + -ar", "開始"],
      ["empleado", "n./adj.", "emplear + -ado", "員工、受雇的"],
      ["empleador", "n.", "emplear + -ador", "雇主"],
      ["emplear", "v.", "em- + plear (折疊/投入使用)", "雇用、使用"],
      ["empleo", "n.", "emplear 的名詞形", "工作、就業"],
      ["encantado", "adj.", "encantar + -ado", "很高興的、榮幸的"],
      ["encantar", "v.", "en- (入) + cantar (咒語) + -ar", "非常喜歡、使著迷"],
      ["encanto", "n.", "encantar 的名詞形", "魅力、迷人"],
      ["enfadado", "adj.", "enfadar + -ado", "生氣的"],
      ["enfatizar", "v.", "énfasis (強調) + -izar", "強調"],
      ["enfermar", "v.", "en- (使) + fermo (不穩固/生病) + -ar", "生病"],
      ["enfermedad", "n.", "enfermo + -edad", "疾病"],
      ["enfermero", "n.", "enfermo + -ero", "護理師、護士"],
      ["enseñanza", "n.", "enseñar + -anza", "教學、教育"],
      ["enseñar", "v.", "en- (向內) + señ- (記號) + -ar", "教導、展示"],
      ["entender", "v.", "en- (向內) + tender (伸展)", "理解、明白"],
      ["entristecer", "v.", "en- (使) + triste (悲傷) + -ecer", "使悲傷"],
      ["envidia", "n.", "en- (盯著) + vid- (看) + -ia", "嫉妒、羨慕"]
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
      ["entretenido", "adj.", "entretener + -ido", "有趣的、好玩的"],
      ["entregar", "v.", "entre- + legar (交付)", "遞交、交付"],
      ["entrenador", "n.", "entrenar (訓練) + -dor", "教練"],
      ["entrenamiento", "n.", "entrenar + -miento", "訓練"],
      ["intercambio", "n.", "inter- (互相) + cambio (交換)", "交換、交流"],
      ["intercambiar", "v.", "inter- (互相) + cambiar (交換)", "交換、交流"],
      ["interesar", "v.", "inter- (在其中) + eser (存在/重要)", "使感興趣"],
      ["interesante", "adj.", "interesar + -ante", "有趣的"],
      ["interfono", "n.", "inter- (之間) + fono (聲音)", "對講機、門鈴電話"],
      ["interrumpir", "v.", "inter- (在中間) + rumpir (打斷)", "打斷、中斷"]
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
      ["equilibrado", "adj.", "equilibrar + -ado", "均衡的、平衡的"],
      ["equipaje", "n.", "equipar (裝備) + -aje", "行李"],
      ["equivalente", "adj./n.", "equi- (相等) + valente (價值)", "等值的、相當於"],
      ["equivocar", "v.", "equi- (相同) + vocar (稱呼)", "弄錯、誤認"],
      ["equivocado", "adj.", "equivocar + -ado", "錯誤的"],
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
      ["expresión", "n.", "expresar + -ión", "表達、表情"],
      ["exalumno", "n.", "ex- (前任) + alumno (學生)", "校友、畢業生"],
      ["emigrar", "v.", "e- (向外) + migrar (移動)", "移居國外"],
      ["excluir", "v.", "ex- (向外) + cluir (關)", "排除、排斥"],
      ["exacto", "adj.", "ex- (完全) + acto (完成)", "精確的、準確的"],
      ["exactitud", "n.", "exacto + -itud", "精確性、準確度"],
      ["examen", "n.", "ex- (出) + agmen (稱量/測試)", "考試、檢查"],
      ["excelente", "adj.", "ex- (超出) + cel- (高聳) + -ente", "優秀的、極好的"],
      ["excepción", "n.", "ex- (向外) + cepción (拿取)", "例外"],
      ["excursión", "n.", "ex- (向外) + curs- (跑) + -ión", "遠足、短途旅行"],
      ["excusa", "n.", "ex- (脫離) + cusa (原因)", "藉口、道歉"],
      ["exención", "n.", "ex- (免除) + empción (拿取)", "豁免、免稅"],
      ["exigir", "v.", "ex- (出) + igir (驅動)", "要求、迫切需要"],
      ["exigente", "adj.", "exigir + -ente", "嚴格的、苛求的"],
      ["exigencia", "n.", "exigir + -encia", "要求、苛求"],
      ["éxito", "n.", "ex- (出) + ito (走)", "成功"],
      ["exitoso", "adj.", "éxito + -oso", "成功的"],
      ["expedición", "n.", "ex- (出) + ped- (腳) + -ición", "遠征、發送"],
      ["expediente", "n.", "expedir + -iente", "檔案、卷宗"],
      ["expedir", "v.", "ex- (出) + pedir (腳/送出)", "簽發、寄出"],
      ["experiencia", "n.", "ex- + peri- (嘗試) + -encia", "經驗、體驗"],
      ["explicar", "v.", "ex- (展開) + plicar (折疊)", "解釋"],
      ["explicación", "n.", "explicar + -ación", "解釋、說明"],
      ["exponer", "v.", "ex- (向外) + poner (放)", "展示、陳述、暴露"],
      ["extender", "v.", "ex- (向外) + tender (伸展)", "延伸、展開"],
      ["extensión", "n.", "extender + -sión", "延伸、面積、分機"]
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
      ["extranjería", "n.", "extranjero + -ía", "外事部門、僑民事務"],
      ["extraterrestre", "n./adj.", "extra- (之外) + terrestre (地球的)", "外星人、地球外的"],
      ["extravagante", "adj.", "extra- (超出常軌) + vagante (漫遊)", "古怪的、奢華浮誇的"],
      ["extravío", "n.", "extra- (偏離) + vía (道路)", "遺失、迷失"],
      ["extrañar", "v.", "extraño (陌生的) + -ar", "想念、使驚訝"]
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
      ["homosexual", "adj./n.", "homo- (同) + sexual (性的)", "同性戀的"],
      ["heterosexual", "adj./n.", "hetero- (異) + sexual (性的)", "異性戀的"],
      ["homologación", "n.", "homo- (相同) + log- (說/認定) + -ación", "官方認證、學歷認證"]
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
      ["hipotéticas", "adj.", "hipótesis + -icas", "假設性的"],
      ["hipoglucemia", "n.", "hipo- (低) + glucemia (血糖)", "低血糖"],
      ["hipócrita", "adj./n.", "hipo- (在面具下) + crita (演戲)", "偽善的、偽君子"],
      ["hipocresía", "n.", "hipócrita + -ía", "虛偽、偽善"]
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
      ["importante", "adj.", "importar + -ante", "重要的"],
      ["importancia", "n.", "importar + -ancia", "重要性"],
      ["importe", "n.", "importar 的名詞形", "金額、款項"],
      ["incluir", "v.", "in- (向內) + cluir (關)", "包含"],
      ["impaciencia", "n.", "im- (不) + paciencia (耐心)", "不耐煩、急躁"],
      ["impaciente", "adj.", "im- (不) + paciente (有耐心的)", "不耐煩的、急躁的"],
      ["impermeable", "adj./n.", "im- (不) + permeable (可滲透的)", "防水的、雨衣"],
      ["impersonal", "adj.", "im- (非) + personal (個人的)", "無人稱的、客觀冷淡的"],
      ["impresionante", "adj.", "impresión + -ante", "令人印象深刻的"],
      ["impresora", "n.", "imprimir (列印) + -sora", "印表機"],
      ["impuesto", "n.", "im- (加在上面) + puesto (放置)", "稅金"],
      ["incorporación", "n.", "in- (入) + corpor- (體) + -ación", "加入、入職、合併"],
      ["incorrecto", "adj.", "in- (不) + correcto (正確的)", "不正確的"],
      ["independiente", "adj.", "in- (不) + dependiente (依賴的)", "獨立的"],
      ["indirecto", "adj.", "in- (不) + directo (直接的)", "間接的"],
      ["informal", "adj.", "in- (非) + formal (正式的)", "非正式的、隨便的"],
      ["inquilino", "n.", "in- (在內) + colere (居住)", "房客、租戶"],
      ["inseguro", "adj.", "in- (不) + seguro (安全的)", "不安全的、沒把握的"],
      ["intensivo", "adj.", "in- (加強) + tens- (拉緊) + -ivo", "密集的、強化的"],
      ["intranquilidad", "n.", "in- (不) + tranquilidad (平靜)", "不安、焦慮"]
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
      ["infrarrojo", "adj./n.", "infra- (低於) + rojo (紅色)", "紅外線的"]
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
      ["intravenoso", "adj.", "intra- (在內) + venoso (靜脈的)", "靜脈內的"]
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
      ["maleducado", "adj.", "mal- (壞) + educado (有教養的)", "沒禮貌的、沒教養的"],
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
      ["metabolismo", "n.", "meta- (變化) + bolismo (運作)", "新陳代謝"]
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
      ["paracaídas", "n.", "para- (阻擋) + caídas (墜落)", "降落傘"],
      ["parador", "n.", "parar (停留) + -dor", "國營古蹟旅館、驛站"]
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
      ["perfeccionar", "v.", "per- (完全) + feccionar (做)", "使完美、改進"],
      ["perfecto", "adj.", "per- (完全) + fecto (完成)", "完美的"],
      ["perspectiva", "n.", "per- (穿透) + spectiva (看)", "透視、觀點"],
      ["perdonar", "v.", "per- (完全) + donar (給予)", "原諒"],
      ["perseguir", "v.", "per- (徹底) + seguir (跟隨)", "追捕、追求"]
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
      ["política", "n.", "polis (城邦) + -tica", "政治（城邦事務）"],
      ["policía", "n.", "polis (城邦) + -icía", "警察、警局"]
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
      ["posteriormente", "adv.", "posterior + -mente", "隨後、之後"],
      ["postración", "n.", "postrar (俯伏/疲憊) + -ción", "虛脫、極度疲憊"]
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
      ["preocupar", "v.", "pre- (提前) + ocupar (佔據)", "使擔心 (preocuparse)"],
      ["preparar", "v.", "pre- (預先) + parar (準備)", "準備"],
      ["prejuicio", "n.", "pre- (預先) + juicio (判斷)", "偏見、成見"],
      ["presupuesto", "n.", "pre- (預先) + supuesto (放置)", "預算"],
      ["precepto", "n.", "pre- (預先) + cepto (拿取/規定)", "戒律、規定"],
      ["preferir", "v.", "pre- (在先) + ferir (帶)", "更喜歡、偏愛"],
      ["prefijo", "n.", "pre- (在前面) + fijo (固定)", "字首、前綴"],
      ["pregunta", "n.", "pre- + guntar (詢問)", "問題"],
      ["preguntar", "v.", "pre- + guntar (詢問)", "詢問"],
      ["presentar", "v.", "pre- (在面前) + sentar (放置)", "介紹、呈現 (presentarse)"],
      ["presentación", "n.", "presentar + -ación", "介紹、簡報、發表"],
      ["presentador", "n.", "presentar + -dor", "主持人"],
      ["preservativo", "n./adj.", "pre- (預先) + serv- (保護) + -ativo", "保險套、防腐劑"]
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
      ["proteger", "v.", "pro- (在前方) + teger (遮蓋)", "保護"],
      ["probablemente", "adv.", "probable + -mente", "大概、很可能"],
      ["probador", "n.", "probar (試穿) + -dor", "試衣間"],
      ["probar", "v.", "prob- (測試) + -ar", "嘗試、測試、試穿 (probarse)"],
      ["procedimiento", "n.", "pro- (向前) + ced- (走) + -imiento", "程序、手續"],
      ["proceso", "n.", "pro- (向前) + ceso (走)", "過程、訴訟"],
      ["producción", "n.", "producir + -ción", "生產、產量"],
      ["producto", "n.", "pro- + ducto (引出)", "產品"],
      ["profesión", "n.", "pro- (公開) + fes- (宣稱) + -ión", "職業"],
      ["profesional", "adj./n.", "profesión + -al", "專業的、專業人士"],
      ["profesor", "n.", "pro- (公開) + fesor (教導)", "老師、教授"],
      ["profesorado", "n.", "profesor + -ado", "師資、全體教師"],
      ["programación", "n.", "programa + -ción", "程式設計、節目編排"],
      ["proseguir", "v.", "pro- (向前) + seguir (跟隨)", "繼續進行"],
      ["prospecto", "n.", "pro- (向前) + specto (看)", "說明書、傳單"]
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
      ["reconstruir", "v.", "re- (再次) + construir (建造)", "重建"],
      ["reconocer", "v.", "re- (再次) + conocer (認識)", "認出、承認"],
      ["reconocimiento", "n.", "reconocer + -imiento", "認可、辨識、感激"],
      ["rechazar", "v.", "re- (向後) + chazar (推)", "拒絕"],
      ["reacción", "n.", "re- (回) + acción (行動)", "反應"],
      ["rebaja", "n.", "re- (向下) + bajar (降低)", "降價、折扣"],
      ["recargar", "v.", "re- (再次) + cargar (裝載/充電)", "充電、儲值"],
      ["recaudar", "v.", "re- + caud- (收聚) + -ar", "徵收、籌集"],
      ["recepción", "n.", "re- (回) + cepción (拿取)", "接待處、接收"],
      ["recepcionista", "n.", "recepción + -ista", "櫃台接待員"],
      ["recibir", "v.", "re- (回) + cibir (拿)", "收到、接待"],
      ["recibo", "n.", "recibir 的名詞形", "收據"],
      ["reciclaje", "n.", "reciclar + -aje", "回收利用"],
      ["reciclar", "v.", "re- (再次) + ciclar (循環)", "回收、循環利用"],
      ["reciente", "adj.", "re- + cient- (新近)", "最近的"],
      ["recientemente", "adv.", "reciente + -mente", "最近地"],
      ["recoger", "v.", "re- (聚集) + coger (拿)", "撿起、接人、領取"],
      ["recomendación", "n.", "re- + comendar + -ación", "推薦、建議"],
      ["recordar", "v.", "re- (再次) + cord- (心) + -ar", "記得、想起"],
      ["recorrer", "v.", "re- (遍及) + correr (跑)", "走遍、瀏覽、巡視"],
      ["recorrido", "n.", "recorrer + -ido", "路線、行程"],
      ["recreo", "n.", "re- (重新) + crear (創造精力)", "課間休息、娛樂"],
      ["recuerdo", "n.", "recordar 的名詞形", "回憶、紀念品"],
      ["recuperar", "v.", "re- (取回) + cuperar (獲得)", "恢復、取回"],
      ["reducir", "v.", "re- (向後) + ducir (引導)", "減少、縮小"],
      ["refresco", "n.", "re- (再次) + fresco (涼爽)", "冷飲、汽水"],
      ["relación", "n.", "re- (回) + lación (帶來)", "關係、關聯"],
      ["rellenar", "v.", "re- (再次) + llenar (填滿)", "填寫（表格）、填充"],
      ["repartir", "v.", "re- (分發) + partir (分)", "分發、配送"],
      ["repasar", "v.", "re- (再次) + pasar (經過)", "複習、檢查"],
      ["representación", "n.", "re- + presentar + -ación", "代表、演出"],
      ["representante", "n.", "representar + -ante", "代表、代理人"],
      ["reserva", "n.", "reservar 的名詞形", "預訂、保留"],
      ["reservado", "adj.", "reservar + -ado", "已預訂的、矜持內向的"],
      ["reservar", "v.", "re- (向後/預先) + servar (保留)", "預訂、保留"],
      ["resolver", "v.", "re- (再次) + solver (解開)", "解決、下定決心"],
      ["reunión", "n.", "re- (一起) + unión (聯合)", "會議、聚會"],
      ["revisar", "v.", "re- (再次) + visar (看)", "檢查、複習"]
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
      ["simpático", "adj.", "simpatía + -ico", "友善的、討人喜歡的"],
      ["síntesis", "n.", "sin- (一起) + tesis (放置)", "綜合、合成"],
      ["fotosíntesis", "n.", "foto (光) + síntesis (合成)", "光合作用"]
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
      ["sobremesa", "n.", "sobre- (在…上/之後) + mesa (餐桌)", "飯後閒聊時光"],
      ["sobrecargar", "v.", "sobre- (過度) + cargar (裝載)", "使超載、使負擔過重"],
      ["supermercado", "n.", "super- (超級) + mercado (市場)", "超市"],
      ["superficial", "adj.", "super- (表面) + ficial (面)", "表面的、膚淺的"],
      ["sobresalir", "v.", "sobre- (超出) + salir (出來)", "突出、出類拔萃"]
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
      ["subsanación", "n.", "sub- + sanar (修復) + -ación", "補正、糾正（文件缺失）"],
      ["subtítulo", "n.", "sub- (在下方) + título (標題)", "字幕、副標題"],
      ["subvención", "n.", "sub- (從下方支撐) + ven- (來) + -ción", "補助金、津貼"],
      ["suceder", "v.", "su- (在後) + ceder (走)", "發生、繼承"],
      ["sucursal", "n.", "su- + curs- (跑/隸屬) + -al", "分行、分公司"],
      ["subterráneo", "adj./n.", "sub- (在下方) + terráneo (土地)", "地下的、地鐵"],
      ["subestimar", "v.", "sub- (低於) + estimar (評估)", "低估"],
      ["sostener", "v.", "sos- (從下方) + tener (握住)", "支撐、維持"],
      ["suspender", "v.", "sus- (在下方) + pender (懸掛)", "暫停、懸掛、不及格"]
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
      ["telescopio", "n.", "tele- (遠) + scopio (看)", "望遠鏡"]
    ]
  ],
  [
    "pre-trans",
    "prefix",
    "trans- / tras- / tra-",
    "拉丁文 trans (橫越、轉變)",
    "穿過、橫越、轉變",
    [
      ["transportar", "v.", "trans- (橫越) + portar (運送)", "運輸、搬運"],
      ["transporte", "n.", "transportar 的名詞形", "交通工具、運輸"],
      ["transbordo", "n.", "trans- (跨越) + bordo (船舷/車廂)", "轉車、換乘"],
      ["transexual", "adj./n.", "trans- (跨) + sexual (性別)", "跨性別的"],
      ["transferencia", "n.", "trans- (越過) + fer- (帶) + -encia", "轉帳、轉移"],
      ["transformar", "v.", "trans- (轉變) + formar (形狀)", "轉變、改造"],
      ["traducir", "v.", "tra- (橫越) + ducir (引導)", "翻譯"],
      ["traducción", "n.", "traducir + -ción", "翻譯"],
      ["trasladar", "v.", "tras- (轉移) + ladar (帶)", "搬遷、調動"],
      ["traslado", "n.", "trasladar 的名詞形", "搬遷、調職"],
      ["trasnochar", "v.", "tras- (越過) + noche (夜) + -ar", "熬夜"],
      ["traspaso", "n.", "tras- (轉讓) + paso (通過)", "轉讓、過戶"],
      ["trastero", "n.", "tras- (後方) + -ero", "儲藏室"],
      ["trashumante", "adj.", "tras- (遷徙) + humus (土地) + -ante", "季節性放牧遷徙的"],
      ["transparente", "adj.", "trans- (穿透) + parente (顯現)", "透明的"]
    ]
  ],
  [
    "pre-tri",
    "prefix",
    "tri-",
    "拉丁文/希臘文 tri (三)",
    "三、三倍",
    [
      ["triángulo", "n.", "tri- (三) + ángulo (角)", "三角形"],
      ["trimestre", "n.", "tri- (三) + mestre (月)", "一季（三個月）"],
      ["trilingüe", "adj.", "tri- (三) + lingüe (語言)", "三語的"],
      ["tribunal", "n.", "tribuno (羅馬三部落長官) + -al", "法庭、法院"],
      ["tributo", "n.", "tribuir (分配/繳納) + -o", "稅賦、貢品、致敬"]
    ]
  ],
  [
    "pre-ultra",
    "prefix",
    "ultra-",
    "拉丁文 ultra (超越、在彼端)",
    "極度、超越界限",
    [
      ["ultrasonido", "n.", "ultra- (超) + sonido (聲音)", "超音波"],
      ["ultravioleta", "adj.", "ultra- (超) + violeta (紫色)", "紫外線的"],
      ["ultramar", "n.", "ultra- (跨越) + mar (海)", "海外"]
    ]
  ],
  [
    "pre-uni",
    "prefix",
    "uni-",
    "拉丁文 unus (一)",
    "單一、統一",
    [
      ["uniforme", "n./adj.", "uni- (單一) + forme (形狀)", "制服、一致的"],
      ["universidad", "n.", "uni- (一) + versidad (轉向/整體)", "大學"],
      ["unificar", "v.", "uni- (一) + ficar (做)", "統一"],
      ["único", "adj.", "ún- (一) + -ico", "唯一的、獨特的"]
    ]
  ],
  [
    "pre-vice",
    "prefix",
    "vice- / viz- / vi-",
    "拉丁文 vice (代替、次序)",
    "副、代理",
    [
      ["vicepresidente", "n.", "vice- (副) + presidente (總統/主席)", "副總統、副總裁"],
      ["vicerrector", "n.", "vice- (副) + rector (校長)", "副校長"],
      ["virrey", "n.", "vi- (代理) + rey (國王)", "總督"]
    ]
  ],

  // ==================== 2. 字根 RAÍCES ====================
  [
    "root-act",
    "root",
    "act- / ag-",
    "拉丁文 agere / actus (做、驅動)",
    "行動、做、推動",
    [
      ["actuar", "v.", "act- (行動) + -uar", "行動、表演"],
      ["actuación", "n.", "actuar + -ción", "演出、行動"],
      ["actividad", "n.", "act- (行動) + -ividad", "活動、活躍"],
      ["activo", "adj.", "act- (行動) + -ivo", "活躍的、積極的"],
      ["activar", "v.", "act- (行動) + -ivar", "啟動、激活"],
      ["activador", "n.", "activar + -dor", "啟動器、活化劑"],
      ["actitud", "n.", "act- (行為姿態) + -itud", "態度"],
      ["actor", "n.", "act- (表演) + -or", "男演員"],
      ["actriz", "n.", "act- (表演) + -riz", "女演員"],
      ["actual", "adj.", "act- (正在運作) + -ual", "當前的、現今的"],
      ["actualización", "n.", "actual + -ización", "更新、升級"],
      ["reaccionar", "v.", "re- (回) + accionar (行動)", "反應"],
      ["reacción", "n.", "reaccionar 的名詞形", "反應"],
      ["agenda", "n.", "ag- (做) + -enda (待辦事項)", "日程表、議程"],
      ["agencia", "n.", "ag- (代辦) + -encia", "代理處、旅行社、機構"],
      ["agente", "n.", "ag- (行動) + -ente", "代理人、警員、特工"],
      ["agilizar", "v.", "ágil (敏捷的) + -izar", "加快、簡化（流程）"],
      ["exigir", "v.", "ex- (出) + ig- (驅動) + -ir", "要求、迫切需要"]
    ]
  ],
  [
    "root-alt",
    "root",
    "alt-",
    "拉丁文 altus (高、深)",
    "高、高處",
    [
      ["alto", "adj./adv.", "拉丁文 altus", "高的、大聲的"],
      ["altura", "n.", "alt- (高) + -ura", "高度、海拔"],
      ["altavoz", "n.", "alta (高) + voz (聲音)", "擴音器、喇叭"],
      ["exaltar", "v.", "ex- (出) + alt- (高) + -ar", "讚揚、使激動"],
      ["altitud", "n.", "alt- (高) + -itud", "海拔高度"]
    ]
  ],
  [
    "root-am",
    "root",
    "am- / amic-",
    "拉丁文 amare / amicus (愛、朋友)",
    "愛、喜歡、友好",
    [
      ["amar", "v.", "am- (愛) + -ar", "愛"],
      ["amigo", "n.", "拉丁文 amicus", "朋友"],
      ["amigable", "adj.", "amigo + -able", "友好的、親切的"],
      ["amistad", "n.", "amic- (朋友) + -tad", "友誼"],
      ["amable", "adj.", "am- (愛) + -able (可…的)", "親切的、和藹的"],
      ["enamorarse", "v.", "en- + amor (愛) + -arse", "愛上"],
      ["aficionado", "n./adj.", "aficion- (喜愛) + -ado", "愛好者、業餘的"]
    ]
  ],
  [
    "root-ann",
    "root",
    "ann- / añ- / enn-",
    "拉丁文 annus (年)",
    "年、歲",
    [
      ["año", "n.", "annus 演變而來", "年"],
      ["anual", "adj.", "anu- (年) + -al", "每年的、年度的"],
      ["añoso", "adj.", "año (年) + -oso", "年老的、陳年的"],
      ["aniversario", "n.", "ani- (年) + vers- (轉) + -ario", "週年紀念日"],
      ["milenio", "n.", "mil (千) + en- (年) + -io", "一千年、千禧年"]
    ]
  ],
  [
    "root-aqu",
    "root",
    "agu- / acu- / hidr-",
    "拉丁文 aqua / 希臘文 hydor (水)",
    "水、液體",
    [
      ["agua", "n.", "拉丁文 aqua", "水"],
      ["acuático", "adj.", "acu- (水) + -ático", "水生的、水上的"],
      ["acuarela", "n.", "acu- (水) + -arela", "水彩畫"],
      ["desagüe", "n.", "des- (排出) + agu- (水) + -e", "排水口、下水道"],
      ["paraguas", "n.", "para- (擋) + aguas (水)", "雨傘"],
      ["hidratar", "v.", "hidr- (水) + -atar", "補水、使水合"]
    ]
  ],
  [
    "root-art",
    "root",
    "art-",
    "拉丁文 ars / artis (技藝、藝術)",
    "技術、藝術、關節",
    [
      ["arte", "n.", "拉丁文 ars", "藝術"],
      ["artista", "n.", "art- (藝術) + -ista", "藝術家、藝人"],
      ["artesanía", "n.", "artesano + -ía", "手工藝、手工藝品"],
      ["artificial", "adj.", "arti- (技巧) + fic- (做) + -ial", "人工的、人造的"],
      ["artículo", "n.", "art- (小節/條目) + -ículo", "文章、商品、冠詞"]
    ]
  ],
  [
    "root-biblio",
    "root",
    "biblio- / libr-",
    "希臘文 biblion / 拉丁文 liber (書)",
    "書籍",
    [
      ["libro", "n.", "拉丁文 liber", "書"],
      ["libreta", "n.", "libr- (書) + -eta (小)", "筆記本"],
      ["libresco", "adj.", "libr- (書) + -esco", "書本氣的、學究氣的"],
      ["biblioteca", "n.", "biblio- (書) + teca (收藏箱)", "圖書館"],
      ["bibliotecario", "n.", "biblioteca + -ario", "圖書館員"],
      ["librería", "n.", "libr- (書) + -ería (商店)", "書店"],
      ["biografía", "n.", "bio- (生命) + -grafía (寫)", "傳記"]
    ]
  ],
  [
    "root-cad",
    "root",
    "ca- / cad- / cid- / cas-",
    "拉丁文 cadere (落下、發生)",
    "落下、墜落、發生",
    [
      ["caer", "v.", "拉丁文 cadere", "落下、跌倒"],
      ["accidente", "n.", "ac- (向) + cid- (落下) + -ente", "意外、事故"],
      ["ocasión", "n.", "oc- (迎面) + cas- (落下/發生) + -ión", "機會、場合"],
      ["caducidad", "n.", "caduc- (過期/掉落) + -idad", "有效期、過期"],
      ["casualidad", "n.", "cas- (偶然發生) + -ualidad", "巧合、偶然"],
      ["coincidir", "v.", "co- (一起) + in- + cid- (落) + -ir", "巧合、一致"]
    ]
  ],
  [
    "root-cal",
    "root",
    "cal- / calient-",
    "拉丁文 calere (熱)",
    "熱、溫暖",
    [
      ["calor", "n.", "cal- (熱) + -or", "熱、炎熱"],
      ["caluroso", "adj.", "calor + -oso", "炎熱的、熱情的"],
      ["caliente", "adj.", "cal- (熱) + -iente", "熱的、燙的"],
      ["calentamiento", "n.", "calentar (加熱) + -miento", "暖身、變暖"],
      ["caloría", "n.", "calor- (熱) + -ía", "卡路里（熱量單位）"]
    ]
  ],
  [
    "root-cap",
    "root",
    "cap- / cab- / cept- / cip-",
    "拉丁文 caput (頭) / capere (抓)",
    "1.頭、首領 2.容納、抓取",
    [
      ["cabeza", "n.", "cap- (頭) 演變", "頭"],
      ["cabecera", "n.", "cabeza + -era", "床頭、開頭、首頁"],
      ["capital", "n./adj.", "capit- (頭) + -al", "首都、資本、主要的"],
      ["capacidad", "n.", "capaz (能容納的) + -idad", "能力、容量"],
      ["aceptar", "v.", "a- (向) + cept- (抓/拿) + -ar", "接受"],
      ["recibir", "v.", "re- (回) + cib- (拿) + -ir", "收到、接待"],
      ["recepción", "n.", "re- + cep- (拿) + -ción", "接待處、接收"],
      ["anticipo", "n.", "anti- (提前) + cip- (拿) + -o", "預付款、預告"],
      ["anticipación", "n.", "anticipar + -ción", "提前、預先"]
    ]
  ],
  [
    "root-cardi",
    "root",
    "cardi- / cord- / coraz-",
    "希臘文 kardia / 拉丁文 cor (心臟)",
    "心臟、核心、情感",
    [
      ["corazón", "n.", "cor- (心) + -azón", "心臟、愛心"],
      ["recordar", "v.", "re- (再次) + cord- (心) + -ar", "記得、想起"],
      ["recuerdo", "n.", "recordar 的名詞形", "回憶、紀念品"],
      ["acordar", "v.", "a- (向) + cord- (心) + -ar", "商定、記得 (acordarse)"],
      ["concordancia", "n.", "con- (同) + cord- (心) + -ancia", "一致、協調"],
      ["cardíaco", "adj.", "cardí- (心臟) + -aco", "心臟的"]
    ]
  ],
  [
    "root-carr",
    "root",
    "carr- / cart-",
    "拉丁文 carrus (四輪車) / charta (紙)",
    "1.車、軌道 2.紙張、地圖",
    [
      ["coche", "n.", "源自馬車詞彙", "汽車"],
      ["carrera", "n.", "carr- (車道) + -era", "賽跑、職業生涯、大學專業"],
      ["carretera", "n.", "carret- (馬車) + -era", "公路"],
      ["carril", "n.", "carr- (車軌) + -il", "車道、軌道"],
      ["carrito", "n.", "carro + -ito", "手推車、購物車"],
      ["carta", "n.", "拉丁文 charta (紙)", "信件、菜單、撲克牌"],
      ["cartera", "n.", "carta + -era", "錢包、公事包"]
    ]
  ],
  [
    "root-ced",
    "root",
    "ced- / ces-",
    "拉丁文 cedere / cessus (走、讓步)",
    "走、行進、讓步",
    [
      ["suceder", "v.", "su- (在後) + ced- (走) + -er", "發生、繼承"],
      ["procedimiento", "n.", "pro- (向前) + ced- (走) + -imiento", "程序、手續"],
      ["proceso", "n.", "pro- (向前) + ces- (走) + -o", "過程"],
      ["concesionario", "n.", "con- + ces- (讓渡) + -ionario", "經銷商"],
      ["necesario", "adj.", "ne- (不) + ces- (退讓) + -ario", "必要的"],
      ["necesitar", "v.", "neces- + -itar", "需要"]
    ]
  ],
  [
    "root-cogn",
    "root",
    "conoc- / cogn- / gnos-",
    "拉丁文 cognoscere / 希臘文 gnosis",
    "知道、認識、了解",
    [
      ["conocer", "v.", "拉丁文 cognoscere", "認識、了解"],
      ["conocido", "adj./n.", "conocer + -ido", "著名的、熟人"],
      ["conocimiento", "n.", "conocer + -imiento", "知識、認識"],
      ["reconocer", "v.", "re- (再次) + conocer (認識)", "認出、承認"],
      ["reconocimiento", "n.", "reconocer + -imiento", "認可、辨識"],
      ["desconocido", "adj./n.", "des- (不) + conocido (認識的)", "陌生的、未知的"]
    ]
  ],
  [
    "root-cre",
    "root",
    "cre- / crec- / cri-",
    "拉丁文 creare (創造) / crescere (成長)",
    "1.創造 2.成長、增加",
    [
      ["crear", "v.", "拉丁文 creare", "創造、建立"],
      ["creativo", "adj.", "creat- (創造) + -ivo", "有創意的"],
      ["crecer", "v.", "拉丁文 crescere", "成長、增長"],
      ["recreo", "n.", "re- (重新) + cre- (創造活力) + -o", "課間休息、娛樂"]
    ]
  ],
  [
    "root-cred",
    "root",
    "cre- / cred-",
    "拉丁文 credere (相信)",
    "相信、信任、信用",
    [
      ["creer", "v.", "拉丁文 credere", "相信、認為"],
      ["acreditar", "v.", "a- + credit- (信用) + -ar", "證明、授權、認證"],
      ["acreditación", "n.", "acreditar + -ción", "認證、證明文件"],
      ["increíble", "adj.", "in- (不) + cre- (信) + -íble", "難以置信的"]
    ]
  ],
  [
    "root-curr",
    "root",
    "corr- / curs-",
    "拉丁文 currere (跑、流動)",
    "跑、流動、發生",
    [
      ["correr", "v.", "拉丁文 currere", "跑、流動"],
      ["correo", "n.", "correr (跑腿送信) 的名詞形", "郵件、郵局 (correos)"],
      ["correoso", "adj.", "correa (皮帶/韌性) + -oso", "有韌性的、難嚼的"],
      ["concurso", "n.", "con- (一起) + curs- (跑) + -o", "比賽、競賽"],
      ["excursión", "n.", "ex- (向外) + curs- (跑) + -ión", "遠足、短途旅行"],
      ["sucursal", "n.", "su- + curs- (隸屬流動) + -al", "分行、分公司"]
    ]
  ],
  [
    "root-dic",
    "root",
    "dec- / dic- / dict-",
    "拉丁文 dicere (說)",
    "說、宣稱、指示",
    [
      ["decir", "v.", "拉丁文 dicere", "說"],
      ["predecir", "v.", "pre- (預先) + decir (說)", "預測"],
      ["condiciones", "n.", "con- + dic- (說/規定) + -iones", "條件、狀況"],
      ["adjudicación", "n.", "ad- + judic- (審判/宣告) + -ación", "裁決、中標、授予"],
      ["jurídico", "adj.", "jur- (法律) + dic- (說) + -o", "法律的、司法的"]
    ]
  ],
  [
    "root-duc",
    "root",
    "duc- / duct-",
    "拉丁文 ducere (引導、帶領)",
    "引導、帶領、輸送",
    [
      ["conducir", "v.", "con- (一起) + duc- (引導) + -ir", "駕駛、引導"],
      ["conductor", "n.", "conducir + -tor", "司機、駕駛員"],
      ["conducto", "n.", "con- + duct- (引導) + -o", "管道、途徑"],
      ["producir", "v.", "pro- (向前) + duc- (引) + -ir", "生產、產生"],
      ["producción", "n.", "producir + -ción", "生產"],
      ["producto", "n.", "pro- + duct- (引出) + -o", "產品、產物"],
      ["reducir", "v.", "re- (向後) + duc- (引) + -ir", "減少、縮小"],
      ["deducción", "n.", "de- (向下) + duc- (引) + -ción", "扣除、推論"],
      ["traducción", "n.", "tra- (橫越) + duc- (引) + -ción", "翻譯"],
      ["educación", "n.", "e- (引出) + duc- (導) + -ación", "教育"]
    ]
  ],
  [
    "root-fac",
    "root",
    "hac- / fac- / fec- / fic-",
    "拉丁文 facere (做、製造)",
    "做、製造、造成",
    [
      ["hacer", "v.", "拉丁文 facere (f -> h)", "做、製作"],
      ["afición", "n.", "a- + fic- (做/投入) + -ión", "愛好、興趣"],
      ["aficionar", "v.", "afición + -ar", "使感興趣"],
      ["beneficiario", "n.", "bene- (好) + fic- (做) + -iario", "受益人"],
      ["bonificación", "n.", "bono (好/獎金) + fic- (做) + -ación", "獎金、補貼、折扣"],
      ["calificar", "v.", "cual- (性質) + fic- (做) + -ar", "評分、評價、定性"],
      ["calificación", "n.", "calificar + -ción", "分數、成績、資格"],
      ["certificado", "n.", "certi- (確定) + fic- (做) + -ado", "證書、證明"],
      ["científico", "adj./n.", "scientia (科學) + fic- (做) + -o", "科學的、科學家"],
      ["edificio", "n.", "edi- (建築) + fic- (做) + -io", "建築物、大樓"],
      ["eficaz", "adj.", "e- (出) + fic- (做) + -az", "有效的"],
      ["especificación", "n.", "especie + fic- (做) + -ación", "規格、詳細說明"],
      ["planificar", "v.", "plan + fic- (做) + -ar", "規劃、計畫"],
      ["significar", "v.", "signo (記號) + fic- (做) + -ar", "意味著、意思是"],
      ["verificar", "v.", "veri- (真實) + fic- (做) + -ar", "核實、驗證"]
    ]
  ],
  [
    "root-form",
    "root",
    "form-",
    "拉丁文 forma (形狀、外觀)",
    "形狀、形式、構成",
    [
      ["forma", "n.", "拉丁文 forma", "形狀、方式"],
      ["formal", "adj.", "form- (形式) + -al", "正式的、守信的"],
      ["formalidad", "n.", "formal + -idad", "正式手續、嚴謹"],
      ["informal", "adj.", "in- (非) + formal (正式的)", "非正式的"],
      ["formulario", "n.", "form- (形式) + -ulario", "表格、申請表"],
      ["informar", "v.", "in- (入) + form- (形) + -ar", "通知、報告"],
      ["información", "n.", "informar + -ación", "資訊、消息"],
      ["informe", "n.", "informar 的名詞形", "報告"],
      ["conformidad", "n.", "con- (同) + form- (形) + -idad", "一致、同意"]
    ]
  ],
  [
    "root-graph",
    "root",
    "graf- / gram-",
    "希臘文 graphein (寫、畫)",
    "書寫、記錄、圖畫",
    [
      ["fotografía", "n.", "foto (光) + grafía (畫)", "攝影、照片"],
      ["fotógrafo", "n.", "foto (光) + grafo (畫者)", "攝影師"],
      ["biografía", "n.", "bio (生命) + grafía (寫)", "傳記"],
      ["ecografía", "n.", "eco (回聲) + grafía (畫)", "超音波檢查"],
      ["geografía", "n.", "geo (地球) + grafía (描寫)", "地理學"],
      ["bolígrafo", "n.", "boli (球) + grafo (寫)", "原子筆"],
      ["programa", "n.", "pro- (預先) + grama (寫)", "節目、程式、計畫"],
      ["programación", "n.", "programa + -ción", "程式設計、節目表"],
      ["gramaticales", "adj.", "gramática (文法) + -ales", "文法的、語法的"],
      ["gramo", "n.", "希臘文 gramma (小重量單位)", "公克"]
    ]
  ],
  [
    "root-joc",
    "root",
    "jueg- / jug- / joc-",
    "拉丁文 iocus (玩笑、遊戲)",
    "遊戲、玩樂、開玩笑",
    [
      ["jugar", "v.", "拉丁文 iocari", "玩、比賽"],
      ["juego", "n.", "iocus 雙元音化", "遊戲、比賽"],
      ["jugador", "n.", "jugar + -dor", "玩家、球員"],
      ["juguete", "n.", "jugu- (玩) + -ete", "玩具"],
      ["videojuego", "n.", "video (影像) + juego (遊戲)", "電子遊戲、電玩"]
    ]
  ],
  [
    "root-loc",
    "root",
    "lug- / loc-",
    "拉丁文 locus (地方)",
    "地方、位置",
    [
      ["lugar", "n.", "拉丁文 localis 演變", "地方、位置"],
      ["local", "adj./n.", "loc- (地方) + -al", "當地的；場所、店面"],
      ["localidad", "n.", "local + -idad", "城鎮、地點、票券座位"],
      ["localización", "n.", "local + -ización", "定位、位置"],
      ["colocar", "v.", "co- (一起) + loc- (放置) + -ar", "放置、安放"]
    ]
  ],
  [
    "root-med",
    "root",
    "medi- / mit-",
    "拉丁文 medius (中間)",
    "中間、一半、媒介",
    [
      ["medio", "adj./n.", "拉丁文 medius", "一半的；中間、手段、媒體"],
      ["media", "n./adj.", "medi- (一半) + -a", "平均數、襪子、半"],
      ["mediación", "n.", "mediar (調解) + -ción", "調解、仲介"],
      ["medianoche", "n.", "media (半) + noche (夜)", "午夜"],
      ["mediodía", "n.", "medio (半) + día (日)", "中午"],
      ["inmediato", "adj.", "in- (無) + mediat- (中間隔閡) + -o", "立即的、緊鄰的"]
    ]
  ],
  [
    "root-mov",
    "root",
    "mov- / mot- / muev-",
    "拉丁文 movere (移動)",
    "移動、推動、動機",
    [
      ["mover", "v.", "拉丁文 movere", "移動 (moverse)"],
      ["movilidad", "n.", "móvil (可移動的) + -idad", "流動性、交通出行"],
      ["motivo", "n.", "mot- (移動) + -ivo", "動機、原因"],
      ["moto", "n.", "motocicleta 的簡稱", "摩托車"],
      ["terremoto", "n.", "terre- (土地) + moto (移動)", "地震"],
      ["emoción", "n.", "e- (向外) + moc- (移動) + -ión", "情緒、激動"]
    ]
  ],
  [
    "root-part",
    "root",
    "part-",
    "拉丁文 pars / partis (部分)",
    "部分、分開、離開",
    [
      ["parte", "n.", "拉丁文 pars", "部分"],
      ["apartado", "n./adj.", "a- + part- (分開) + -ado", "條款、信箱、偏僻的"],
      ["apartamento", "n.", "a- (分開) + part- (部分) + -amento", "公寓"],
      ["apartar", "v.", "a- (分開) + part- + -ar", "移開、預留"],
      ["compartir", "v.", "com- (共同) + part- (分) + -ir", "分享"],
      ["compartido", "adj.", "compartir + -ido", "共用的"],
      ["departamento", "n.", "de- + part- (分) + -amento", "部門、公寓"],
      ["participar", "v.", "parti- (部分) + cip- (拿) + -ar", "參與、參加"],
      ["participación", "n.", "participar + -ación", "參與、股份"]
    ]
  ],
  [
    "root-pas",
    "root",
    "pas-",
    "拉丁文 passus (步、經過)",
    "經過、步伐、通行",
    [
      ["pasar", "v.", "拉丁文 passare", "經過、度過、發生"],
      ["pasado", "n./adj.", "pasar + -ado", "過去、過去的"],
      ["pasaje", "n.", "pas- (通行) + -aje", "車票、機票、通道"],
      ["pasajero", "n./adj.", "pasaje + -ero", "乘客、短暫的"],
      ["pasaporte", "n.", "pasa (通過) + porte (港口)", "護照"],
      ["pasatiempo", "n.", "pasa (消磨) + tiempo (時間)", "消遣、嗜好"],
      ["pasear", "v.", "paso (步) + -ear", "散步、逛街"],
      ["paseo", "n.", "pasear 的名詞形", "散步、林蔭大道"],
      ["traspaso", "n.", "tras- (轉讓) + paso (通過)", "轉讓、過戶"]
    ]
  ],
  [
    "root-ped",
    "root",
    "ped- / pie- / pis-",
    "拉丁文 pes / pedis (腳)",
    "腳、足部、踩踏",
    [
      ["pie", "n.", "拉丁文 pes", "腳"],
      ["expedición", "n.", "ex- (出) + ped- (腳) + -ición", "遠征、寄出"],
      ["expediente", "n.", "expedir + -iente", "檔案、卷宗"],
      ["expedir", "v.", "ex- (出) + ped- (送出) + -ir", "簽發、寄出"],
      ["pisar", "v.", "piso (腳踏面) + -ar", "踩、踏"],
      ["piso", "n.", "拉丁文 pinsere (踩平地面)", "地板、樓層、公寓"]
    ]
  ],
  [
    "root-pend",
    "root",
    "pend- / pens- / pes-",
    "拉丁文 pendere (懸掛、稱重)",
    "懸掛、衡量、思考、花費",
    [
      ["depender", "v.", "de- (從) + pend- (懸掛) + -er", "取決於、依賴"],
      ["dependencia", "n.", "depender + -encia", "依賴、附屬機構"],
      ["dependiente", "n./adj.", "depender + -iente", "店員、依賴的"],
      ["independiente", "adj.", "in- (不) + dependiente", "獨立的"],
      ["pendiente", "adj./n.", "pend- (掛) + -iente", "待處理的、耳環、斜坡"],
      ["pensar", "v.", "pens- (稱重/衡量) + -ar", "思考、認為"],
      ["pensado", "adj.", "pensar + -ado", "深思熟慮的"],
      ["pensión", "n.", "pens- (支付/衡量) + -ión", "退休金、家庭旅館"],
      ["compensación", "n.", "com- + pens- (衡量) + -ación", "補償、賠償"],
      ["despensa", "n.", "des- + pens- (分配食物)", "食品儲藏室"]
    ]
  ],
  [
    "root-plic",
    "root",
    "plic- / pleg- / plej- / ple-",
    "拉丁文 plicare (折疊) / plere (填滿)",
    "折疊、複雜、填滿、使用",
    [
      ["aplicación", "n.", "a- + plic- (貼近) + -ación", "應用、應用程式、申請"],
      ["complicado", "adj.", "com- (一起) + plic- (折) + -ado", "複雜的"],
      ["duplicado", "n./adj.", "du- (二) + plic- (折) + -ado", "副本、雙份的"],
      ["desplegar", "v.", "des- (展開) + pleg- (折) + -ar", "展開、部署"],
      ["emplear", "v.", "em- + ple- (投入) + -ar", "雇用、使用"],
      ["empleado", "n./adj.", "emplear + -ado", "員工、受雇的"],
      ["empleador", "n.", "emplear + -ador", "雇主"],
      ["empleo", "n.", "emplear 的名詞形", "工作、職業"],
      ["desempleo", "n.", "des- (無) + empleo", "失業"],
      ["cumpleaños", "n.", "cumplir (滿) + años (歲)", "生日"]
    ]
  ],
  [
    "root-pon",
    "root",
    "pon- / pos- / pues-",
    "拉丁文 ponere / positus (放置)",
    "放、安置、建立",
    [
      ["poner", "v.", "拉丁文 ponere", "放、穿戴 (ponerse)"],
      ["apuesto", "adj.", "a- + puest- (安置妥當) + -o", "英俊的、帥氣的"],
      ["disponer", "v.", "dis- (分開放置) + poner", "安排、擁有"],
      ["disponible", "adj.", "disponer + -ible", "可用的、有空的"],
      ["exponer", "v.", "ex- (向外) + poner", "展示、陳述"],
      ["impostar", "v.", "im- (放置) + post- + -ar", "（聲樂）發聲定位、冒充"],
      ["impuesto", "n.", "im- (加在上面) + puest- + -o", "稅金"],
      ["postura", "n.", "post- (放置) + -ura", "姿勢、立場"]
    ]
  ],
  [
    "root-port",
    "root",
    "port-",
    "拉丁文 portare (搬運、攜帶)",
    "搬運、攜帶、港口",
    [
      ["aportar", "v.", "a- (向) + port- (帶來) + -ar", "提供、貢獻"],
      ["aportación", "n.", "aportar + -ción", "貢獻、出資"],
      ["deporte", "n.", "de- + port- (消遣攜帶) + -e", "運動"],
      ["deportista", "n.", "deporte + -ista", "運動員"],
      ["importar", "v.", "im- (向內) + port- (運) + -ar", "進口、重要"],
      ["importante", "adj.", "importar + -ante", "重要的"],
      ["importancia", "n.", "importar + -ancia", "重要性"],
      ["importe", "n.", "importar 的名詞形", "金額、款項"],
      ["pasaporte", "n.", "pasa (通過) + porte (港口)", "護照"],
      ["transporte", "n.", "trans- (橫越) + port- + -e", "交通工具、運輸"]
    ]
  ],
  [
    "root-press",
    "root",
    "pres- / prim-",
    "拉丁文 premere / pressus (壓)",
    "壓、擠、印",
    [
      ["comprimido", "n./adj.", "com- (一起) + prim- (壓) + -ido", "藥片、壓縮的"],
      ["deprimido", "adj.", "de- (向下) + prim- (壓) + -ido", "沮喪的、憂鬱的 (deprimirse)"],
      ["empresa", "n.", "em- (入) + pres- (承接) + -a", "企業、公司"],
      ["empresario", "n.", "empresa + -ario", "企業家、老闆"],
      ["expresar", "v.", "ex- (向外) + pres- (壓) + -ar", "表達"],
      ["expresión", "n.", "expresar + -ión", "表達、表情"],
      ["impresión", "n.", "im- (向內) + pres- (壓) + -ión", "印象、印刷"],
      ["impresionante", "adj.", "impresión + -ante", "令人印象深刻的"],
      ["impresora", "n.", "imprimir + -sora", "印表機"],
      ["imprenta", "n.", "im- + prent- (壓印) + -a", "印刷廠、印刷術"]
    ]
  ],
  [
    "root-prob",
    "root",
    "prob- / prueb-",
    "拉丁文 probare (測試、證明好)",
    "測試、證明、誠實",
    [
      ["probar", "v.", "拉丁文 probare", "嘗試、測試、試穿 (probarse)"],
      ["probador", "n.", "probar + -dor", "試衣間"],
      ["prueba", "n.", "probare 雙元音化", "考試、證據、測試"],
      ["aprobar", "v.", "a- (向) + prob- (證明好) + -ar", "通過（考試）、批准"],
      ["comprobar", "v.", "com- (完全) + prob- (測試) + -ar", "核實、證明"],
      ["comprobante", "n.", "comprobar + -ante", "憑證、收據"],
      ["probablemente", "adv.", "probable + -mente", "大概、很可能"]
    ]
  ],
  [
    "root-reg",
    "root",
    "reg- / rey- / rect- / rig-",
    "拉丁文 regere (引導、統治、筆直)",
    "統治、規則、筆直",
    [
      ["correcto", "adj.", "cor- (完全) + rect- (直) + -o", "正確的"],
      ["incorrecto", "adj.", "in- (不) + correcto", "不正確的"],
      ["corrección", "n.", "corregir + -ción", "批改、糾正"],
      ["corregir", "v.", "cor- (完全) + reg- (弄直) + -ir", "糾正、批改"],
      ["directo", "adj.", "di- (分開) + rect- (筆直) + -o", "直接的"],
      ["directiva", "n./adj.", "directo + -iva", "理事會、指導方針"],
      ["directivo", "n./adj.", "directo + -ivo", "主管、管理的"],
      ["regular", "adj./v.", "regula (規則) + -ar", "規律的、一般的；調節"]
    ]
  ],
  [
    "root-scrib",
    "root",
    "escrib- / script-",
    "拉丁文 scribere (寫)",
    "書寫、刻畫",
    [
      ["escribir", "v.", "拉丁文 scribere", "寫"],
      ["describir", "v.", "de- (詳盡) + scrib- (寫) + -ir", "描述"],
      ["escrito", "n./adj.", "escribir 的不規則過去分詞", "書面文件、寫好的"],
      ["escritor", "n.", "escrit- (寫) + -or", "作家"],
      ["escritorio", "n.", "escrit- (寫) + -orio", "書桌、電腦桌面"],
      ["escritura", "n.", "escrit- (寫) + -ura", "書寫、契約書"],
      ["adscripción", "n.", "ad- + script- (登記寫入) + -ión", "隸屬、派駐"]
    ]
  ],
  [
    "root-sent",
    "root",
    "sent- / sens-",
    "拉丁文 sentire (感覺)",
    "感覺、知覺、方向",
    [
      ["sentir", "v.", "拉丁文 sentire", "感覺、感到遺憾"],
      ["asiento", "n.", "a- + sent- (坐/安放) + -o", "座位"],
      ["sentado", "adj.", "sentar + -ado", "坐著的"],
      ["presentar", "v.", "pre- (在面前) + sent- + -ar", "介紹、呈現 (presentarse)"],
      ["presentación", "n.", "presentar + -ación", "介紹、簡報"],
      ["presentador", "n.", "presentar + -dor", "主持人"],
      ["presente", "adj./n.", "pre- + sent- + -e", "出席的、現在、禮物"],
      ["representación", "n.", "re- + presentar + -ación", "代表、演出"],
      ["representante", "n.", "representar + -ante", "代表、代理人"]
    ]
  ],
  [
    "root-sequ",
    "root",
    "segu- / sec- / soc-",
    "拉丁文 sequi (跟隨)",
    "跟隨、連續、陪伴",
    [
      ["seguir", "v.", "拉丁文 sequi", "跟隨、繼續"],
      ["conseguir", "v.", "con- (完全) + seguir (跟隨)", "獲得、達成"],
      ["enseguida", "adv.", "en + seguida (緊接著)", "立刻、馬上"],
      ["perseguir", "v.", "per- (徹底) + seguir", "追捕、追求"],
      ["proseguir", "v.", "pro- (向前) + seguir", "繼續進行"],
      ["secundaria", "n./adj.", "sec- (跟隨其後) + -undaria", "中學、次要的"],
      ["inseguro", "adj.", "in- (不) + seguro", "不安全的、沒把握的"],
      ["socio", "n.", "soc- (同伴) + -io", "合夥人、會員"],
      ["sociedad", "n.", "soci- + -edad", "社會、公司"],
      ["sociable", "adj.", "soci- + -able", "好交際的"],
      ["asociación", "n.", "a- + soci- + -ación", "協會"]
    ]
  ],
  [
    "root-serv",
    "root",
    "serv-",
    "拉丁文 servare (保存) / servire (服務)",
    "1.保護、保留 2.服務",
    [
      ["servir", "v.", "拉丁文 servire", "服務、有用"],
      ["servicio", "n.", "serv- (服務) + -icio", "服務、洗手間"],
      ["conservar", "v.", "con- (完全) + serv- (保存) + -ar", "保存、保護"],
      ["conservador", "adj./n.", "conservar + -dor", "保守的、保守派"],
      ["observación", "n.", "ob- + serv- (看守) + -ación", "觀察、備註"],
      ["preservativo", "n.", "pre- + serv- (保護) + -ativo", "保險套、防腐劑"],
      ["reserva", "n.", "reservar 的名詞形", "預訂、保留"],
      ["reservado", "adj.", "reservar + -ado", "已預訂的、矜持內向的"],
      ["reservar", "v.", "re- (預先) + serv- (保留) + -ar", "預訂、保留"]
    ]
  ],
  [
    "root-sign",
    "root",
    "sign- / señ-",
    "拉丁文 signum (記號、標誌)",
    "記號、標誌、意義",
    [
      ["signo", "n.", "拉丁文 signum", "符號、星座、跡象"],
      ["significar", "v.", "sign- (記號) + -ificar", "意味著、意思是"],
      ["significado", "n.", "significar + -ado", "意義、含義"],
      ["asignatura", "n.", "a- + sign- (指定) + -atura", "科目、課程"],
      ["consigna", "n.", "con- + sign- (標記指令)", "口號、行李寄存處"],
      ["consignación", "n.", "consignar + -ción", "寄售、撥款、記載"],
      ["designación", "n.", "de- + sign- + -ación", "指定、任命"],
      ["contraseña", "n.", "contra- (對) + seña (記號)", "密碼"]
    ]
  ],
  [
    "root-spir",
    "root",
    "spir-",
    "拉丁文 spirare (呼吸)",
    "呼吸、氣息、精神",
    [
      ["respirar", "v.", "re- (再次) + spir- (呼吸) + -ar", "呼吸"],
      ["inspirar", "v.", "in- (向內) + spir- (呼吸) + -ar", "吸氣、啟發靈感"],
      ["aspirar", "v.", "a- (向) + spir- (吸氣/渴望) + -ar", "吸氣、吸塵、立志"],
      ["aspiradora", "n.", "aspirar + -dora", "吸塵器"],
      ["aspirante", "n.", "aspirar + -ante", "申請人、候選人"],
      ["espiritual", "adj.", "espíritu (精神) + -al", "精神的、心靈的"]
    ]
  ],
  [
    "root-struct",
    "root",
    "stru- / struct-",
    "拉丁文 struere (建造、堆疊)",
    "建造、結構",
    [
      ["construir", "v.", "con- (一起) + stru- (建造) + -ir", "建造、建設"],
      ["construido", "adj.", "construir + -ido", "建成的、構造的"],
      ["estructura", "n.", "struct- (建造) + -ura", "結構、構造"],
      ["estructurar", "v.", "estructura + -ar", "建構、組織"],
      ["instrucción", "n.", "in- (向內) + struct- (建) + -ión", "指示、說明書、教育"],
      ["instructor", "n.", "instruir + -tor", "教練、指導員"]
    ]
  ],
  [
    "root-ten",
    "root",
    "ten- / tin- / tent-",
    "拉丁文 tenere (握住、持有)",
    "握住、保持、容納",
    [
      ["tener", "v.", "拉丁文 tenere", "有、持有"],
      ["contenedor", "n.", "con- (一起) + ten- (裝) + -edor", "貨櫃、垃圾桶、容器"],
      ["continuar", "v.", "con- (一起) + tin- (握住不放) + -uar", "繼續"],
      ["detener", "v.", "de- (向下) + tener (握)", "阻止、逮捕、停下"],
      ["entretener", "v.", "entre- + tener", "娛樂、使分心"],
      ["entretenido", "adj.", "entretener + -ido", "有趣的"],
      ["manutención", "n.", "manu (手) + ten- (維持) + -ción", "扶養費、生活費、維護"],
      ["pertenecer", "v.", "per- + ten- (持有) + -ecer", "屬於"]
    ]
  ],
  [
    "root-tend",
    "root",
    "tend- / tens- / tent- / tiend-",
    "拉丁文 tendere (伸展、朝向)",
    "伸展、拉緊、傾向",
    [
      ["entender", "v.", "en- (向內) + tend- (伸展) + -er", "理解、明白"],
      ["malentendido", "n.", "mal- (誤) + entendido (理解)", "誤會"],
      ["atención", "n.", "a- (朝向) + tenc- (伸展) + -ión", "注意、專心"],
      ["extensión", "n.", "ex- (向外) + tens- (伸) + -ión", "延伸、面積、分機"],
      ["intensivo", "adj.", "in- + tens- (拉緊) + -ivo", "密集的、強化的"],
      ["tendedero", "n.", "tender (晾曬伸展) + -edero", "晾衣架、曬衣場"],
      ["tendencia", "n.", "tend- (傾向) + -encia", "趨勢、傾向"],
      ["tensión", "n.", "tens- (拉緊) + -ión", "緊張、張力、血壓"],
      ["tienda", "n.", "tend- (搭帳篷擺攤)", "商店、帳篷"]
    ]
  ],
  [
    "root-terr",
    "root",
    "terr- / tierr-",
    "拉丁文 terra (土地、地球)",
    "土地、地面、地球",
    [
      ["tierra", "n.", "terra 雙元音化", "土地、地球"],
      ["terremoto", "n.", "terre- (土地) + moto (移動)", "地震"],
      ["terraza", "n.", "terr- (土台) + -aza", "露台、陽台、露天咖啡座"],
      ["aterrizar", "v.", "a- (向) + terr- (地面) + -izar", "著陸、降落"]
    ]
  ],
  [
    "root-tract",
    "root",
    "tra- / tract- / trat-",
    "拉丁文 trahere (拉、拖)",
    "拉、吸引、處理",
    [
      ["traer", "v.", "拉丁文 trahere", "帶來"],
      ["atraer", "v.", "a- (向) + traer (拉)", "吸引"],
      ["atractivo", "adj.", "a- + tract- (拉) + -ivo", "有吸引力的"],
      ["contraer", "v.", "con- (一起) + traer (拉)", "收縮、感染（疾病）、締結"],
      ["distraerse", "v.", "dis- (分開) + traer (拉) + -se", "分心、消遣"],
      ["trayecto", "n.", "tra- (橫越) + yect- (投) + -o", "路程、行程"]
    ]
  ],
  [
    "root-val",
    "root",
    "val-",
    "拉丁文 valere (強壯、有價值)",
    "價值、力量、健康",
    [
      ["valer", "v.", "拉丁文 valere", "值（多少錢）、有效"],
      ["vale", "n./interj.", "valer 的命令式/名詞", "好的、優惠券"],
      ["valioso", "adj.", "vali- (價值) + -oso", "珍貴的、有價值的"],
      ["ambivalencia", "n.", "ambi- (雙) + val- (價值) + -encia", "矛盾心理、雙重性"],
      ["convalidación", "n.", "con- + valid- (有效) + -ación", "學歷/證照認證、抵免"],
      ["evaluación", "n.", "e- + valu- (價值) + -ación", "評估、考試測驗"],
      ["validar", "v.", "valid- (有效) + -ar", "驗證、使生效"],
      ["validez", "n.", "valid- (有效) + -ez", "有效性、有效期"]
    ]
  ],
  [
    "root-ven",
    "root",
    "ven- / vent-",
    "拉丁文 venire (來)",
    "來、到達、發生",
    [
      ["venir", "v.", "拉丁文 venire", "來"],
      ["avenida", "n.", "a- + ven- (來到) + -ida", "大道、林蔭道"],
      ["aventura", "n.", "ad- (向) + vent- (來) + -ura", "冒險"],
      ["bienvenido", "adj.", "bien (好) + venido (來到的)", "受歡迎的、歡迎"],
      ["convencer", "v.", "con- + vencer (或與來/勝相關)", "說服"],
      ["conveniencia", "n.", "con- + ven- (來) + -iencia", "便利、合適"],
      ["convenio", "n.", "con- + ven- (來) + -io", "協議、公約"],
      ["desventaja", "n.", "des- (無) + ventaja (優勢)", "劣勢、缺點"],
      ["evento", "n.", "e- (向外) + vent- (來) + -o", "事件、活動"]
    ]
  ],
  [
    "root-vert",
    "root",
    "vert- / vers-",
    "拉丁文 vertere (轉向)",
    "轉動、轉換、朝向",
    [
      ["convertirse", "v.", "con- (完全) + vert- (轉) + -irse", "變成、成為"],
      ["divertido", "adj.", "di- (轉開) + vert- (轉) + -ido", "有趣的、好玩的"],
      ["conversar", "v.", "con- (共同) + vers- (轉) + -ar", "交談、對話"],
      ["conversación", "n.", "conversar + -ación", "對話、交談"],
      ["adversario", "n.", "ad- (對立) + vers- (轉) + -ario", "對手"],
      ["advertir", "v.", "ad- (向) + vert- (轉向注意) + -ir", "警告、注意到"],
      ["advertencia", "n.", "advertir + -encia", "警告、告示"],
      ["aniversario", "n.", "ani- (年) + vers- (轉) + -ario", "週年紀念日"],
      ["controversial", "adj.", "contro- (反) + vers- (轉) + -ial", "有爭議的"],
      ["controvertido", "adj.", "contro- (反) + vert- (轉) + -ido", "有爭議的"]
    ]
  ],
  [
    "root-vid",
    "root",
    "ve- / vid- / vis-",
    "拉丁文 videre (看見)",
    "看、視覺、顯現",
    [
      ["ver", "v.", "拉丁文 videre", "看見"],
      ["vista", "n.", "vis- (看) + -ta", "視力、風景、視野"],
      ["vistazo", "n.", "vista + -azo", "瞥一眼、瀏覽"],
      ["entrevista", "n.", "entre- (互相) + vista (見面)", "面試、採訪"],
      ["envidia", "n.", "en- (盯著) + vid- (看) + -ia", "嫉妒、羨慕"],
      ["televisión", "n.", "tele- (遠) + vis- (看) + -ión", "電視"],
      ["televisor", "n.", "tele- (遠) + vis- (看) + -or", "電視機"],
      ["revisar", "v.", "re- (再次) + vis- (看) + -ar", "檢查、複習"]
    ]
  ],
  [
    "root-viv",
    "root",
    "viv- / vit- / vid-",
    "拉丁文 vivere / vita (活、生命)",
    "生活、生命、存活",
    [
      ["vivir", "v.", "拉丁文 vivere", "生活、居住、活著"],
      ["vida", "n.", "拉丁文 vita", "生命、生活"],
      ["convivir", "v.", "con- (共同) + viv- (生活) + -ir", "共處、同居"],
      ["convivencia", "n.", "convivir + -encia", "共處、和睦相處"],
      ["sobrevivir", "v.", "sobre- (超過) + viv- (活) + -ir", "生存、倖存"],
      ["invitar", "v.", "in- + vit- (邀請/賦予生氣) + -ar", "邀請、請客"],
      ["invitación", "n.", "invitar + -ción", "邀請、請柬"],
      ["invitado", "n./adj.", "invitar + -ado", "賓客、受邀的"],
      ["navidad", "n.", "nativitas (誕生之日)", "聖誕節"]
    ]
  ],
  [
    "root-voc",
    "root",
    "voc- / voz-",
    "拉丁文 vox / vocare (聲音、呼喚)",
    "聲音、呼喚、說",
    [
      ["voz", "n.", "拉丁文 vox", "聲音、嗓音"],
      ["altavoz", "n.", "alta (高) + voz (聲音)", "擴音器、喇叭"],
      ["vocabulario", "n.", "vocabul- (詞語) + -ario", "詞彙表"],
      ["convocar", "v.", "con- (一起) + voc- (呼喚) + -ar", "召集、召開"],
      ["convocatoria", "n.", "convocar + -toria", "召集令、公告"],
      ["equivocado", "adj.", "equi- (相同) + voc- (稱呼) + -ado", "錯誤的"],
      ["vocación", "n.", "voc- (內心呼喚) + -ación", "天職、志向"],
      ["vocal", "n./adj.", "voc- (聲音) + -al", "母音、聲樂的、委員"]
    ]
  ],

  // ==================== 3. 字尾 SUFIJOS ====================
  [
    "suf-cion",
    "suffix",
    "-ción / -sión",
    "拉丁文 -tio / -sio",
    "名詞字尾（陰性）：表示「動作、過程或結果」",
    [
      ["acción", "n.", "act- (行動) + -ción", "行動、動作"],
      ["acreditación", "n.", "acreditar + -ción", "認證、證明"],
      ["actuación", "n.", "actuar + -ción", "演出、行動"],
      ["actualización", "n.", "actualizar + -ción", "更新、升級"],
      ["adjudicación", "n.", "adjudicar + -ción", "裁決、中標、授予"],
      ["administración", "n.", "administrar + -ción", "管理、行政部門"],
      ["adscripción", "n.", "adscribir + -ción", "隸屬、派駐"],
      ["afición", "n.", "aficionar 的名詞形", "愛好、興趣"],
      ["afiliación", "n.", "afiliar + -ción", "加入、入會"],
      ["agrupación", "n.", "agrupar + -ción", "團體、組織"],
      ["alegación", "n.", "alegar + -ción", "申辯、陳述"],
      ["alimentación", "n.", "alimentar + -ción", "飲食、供電"],
      ["anticipación", "n.", "anticipar + -ción", "提前、預先"],
      ["aportación", "n.", "aportar + -ción", "貢獻、出資"],
      ["aplicación", "n.", "aplicar + -ción", "應用、應用程式"],
      ["asociación", "n.", "asociar + -ción", "協會、聯合"],
      ["atención", "n.", "atender + -ción", "注意、專心"],
      ["autorización", "n.", "autorizar + -ción", "授權、許可"],
      ["bonificación", "n.", "bonificar + -ción", "獎金、補貼、折扣"],
      ["calificación", "n.", "calificar + -ción", "分數、成績"],
      ["combinación", "n.", "combinar + -ción", "組合、搭配"],
      ["compensación", "n.", "compensar + -ción", "補償、賠償"],
      ["comprensión", "n.", "comprender + -sión", "理解、體諒"],
      ["consignación", "n.", "consignar + -ción", "寄售、撥款"],
      ["contaminación", "n.", "contaminar + -ción", "污染"],
      ["convalidación", "n.", "convalidar + -ción", "學歷/證照認證"],
      ["conversación", "n.", "conversar + -ción", "對話、交談"],
      ["coordinación", "n.", "coordinar + -ción", "協調、配合"],
      ["corrección", "n.", "corregir + -ción", "批改、糾正"],
      ["decisión", "n.", "decidir + -sión", "決定"],
      ["deducción", "n.", "deducir + -ción", "扣除、推論"],
      ["designación", "n.", "designar + -ción", "指定、任命"],
      ["discriminación", "n.", "discriminar + -ción", "歧視"],
      ["educación", "n.", "educar + -ción", "教育"],
      ["emoción", "n.", "emocionar 的名詞形", "情緒、激動"],
      ["especificación", "n.", "especificar + -ción", "規格、說明"],
      ["evaluación", "n.", "evaluar + -ción", "評估、測驗"],
      ["excepción", "n.", "exceptuar + -ción", "例外"],
      ["excursión", "n.", "excurs- + -ión", "遠足、旅行"],
      ["exención", "n.", "eximir + -ción", "豁免、免稅"],
      ["expedición", "n.", "expedir + -ción", "遠征、寄出"],
      ["explicación", "n.", "explicar + -ción", "解釋"],
      ["exportación", "n.", "exportar + -ción", "出口"],
      ["expresión", "n.", "expresar + -sión", "表達、表情"],
      ["extensión", "n.", "extender + -sión", "延伸、面積"],
      ["homologación", "n.", "homologar + -ción", "官方認證"],
      ["impresión", "n.", "imprimir + -sión", "印象、印刷"],
      ["incorporación", "n.", "incorporar + -ción", "加入、入職"],
      ["información", "n.", "informar + -ción", "資訊、消息"],
      ["instrucción", "n.", "instruir + -ción", "指示、教育"],
      ["invitación", "n.", "invitar + -ción", "邀請、請柬"],
      ["localización", "n.", "localizar + -ción", "定位、位置"],
      ["mediación", "n.", "mediar + -ción", "調解、仲介"],
      ["observación", "n.", "observar + -ción", "觀察、備註"],
      ["participación", "n.", "participar + -ción", "參與"],
      ["pensión", "n.", "pens- + -ión", "退休金、旅館"],
      ["postración", "n.", "postrar + -ción", "虛脫、極度疲憊"],
      ["preocupación", "n.", "preocupar + -ción", "擔憂"],
      ["preparación", "n.", "preparar + -ción", "準備"],
      ["presentación", "n.", "presentar + -ción", "介紹、簡報"],
      ["producción", "n.", "producir + -ción", "生產"],
      ["profesión", "n.", "profesar + -sión", "職業"],
      ["programación", "n.", "programar + -ción", "程式設計、節目表"],
      ["reacción", "n.", "reaccionar + -ción", "反應"],
      ["recepción", "n.", "recibir + -ción", "接待處、接收"],
      ["recomendación", "n.", "recomendar + -ción", "推薦、建議"],
      ["relación", "n.", "relatar + -ción", "關係、關聯"],
      ["representación", "n.", "representar + -ción", "代表、演出"],
      ["subsanación", "n.", "subsanar + -ción", "補正、糾正"],
      ["subvención", "n.", "subvenir + -ción", "補助金、津貼"],
      ["televisión", "n.", "tele- + visión", "電視"],
      ["tensión", "n.", "tensar + -sión", "緊張、張力"],
      ["traducción", "n.", "traducir + -ción", "翻譯"],
      ["tributación", "n.", "tributar + -ción", "稅收、納稅"],
      ["vocación", "n.", "vocar + -ción", "天職、志向"]
    ]
  ],
  [
    "suf-dad",
    "suffix",
    "-dad / -tad",
    "拉丁文 -tas / -tatis",
    "抽象名詞字尾（陰性）：表示「性質、狀態」",
    [
      ["actividad", "n.", "activo + -idad", "活動"],
      ["amistad", "n.", "amigo + -tad", "友誼"],
      ["ansiedad", "n.", "ansioso + -edad", "焦慮"],
      ["caducidad", "n.", "caduco + -idad", "有效期、過期"],
      ["capacidad", "n.", "capaz + -idad", "能力、容量"],
      ["casualidad", "n.", "casual + -idad", "巧合、偶然"],
      ["celebridad", "n.", "célebre + -idad", "名人、聲譽"],
      ["ciudad", "n.", "civitas 演變", "城市"],
      ["comunidad", "n.", "común + -idad", "社區、社群"],
      ["conformidad", "n.", "conforme + -idad", "一致、同意"],
      ["contabilidad", "n.", "contable + -idad", "會計學、會計業務"],
      ["curiosidad", "n.", "curioso + -idad", "好奇心、奇聞"],
      ["dificultad", "n.", "difícil + -tad", "困難"],
      ["enfermedad", "n.", "enfermo + -edad", "疾病"],
      ["especialidad", "n.", "especial + -idad", "專業、特色菜"],
      ["exactitud", "n.", "exacto + -itud", "精確性"],
      ["felicidad", "n.", "feliz + -idad", "幸福、快樂"],
      ["finalidad", "n.", "final + -idad", "目的、宗旨"],
      ["formalidad", "n.", "formal + -idad", "正式手續、嚴謹"],
      ["intranquilidad", "n.", "intranquilo + -idad", "不安、焦慮"],
      ["libertad", "n.", "libre + -tad", "自由"],
      ["localidad", "n.", "local + -idad", "城鎮、地點"],
      ["movilidad", "n.", "móvil + -idad", "流動性、交通出行"],
      ["navidad", "n.", "nativo + -idad", "聖誕節"],
      ["novedad", "n.", "nuevo + -edad", "新奇事物、最新消息"],
      ["realidad", "n.", "real + -idad", "現實、真實"],
      ["sanidad", "n.", "sano + -idad", "公共衛生、醫療體系"],
      ["sociedad", "n.", "socio + -edad", "社會、公司"],
      ["soledad", "n.", "solo + -edad", "孤獨、寂寞"],
      ["velocidad", "n.", "veloz + -idad", "速度"]
    ]
  ],
  [
    "suf-miento",
    "suffix",
    "-miento / -mento",
    "拉丁文 -mentum",
    "名詞字尾（陽性）：表示「動作的行為、工具或結果」",
    [
      ["acompañamiento", "n.", "acompañar + -miento", "陪伴、配菜、伴奏"],
      ["acontecimiento", "n.", "acontecer + -miento", "事件、大事"],
      ["agotamiento", "n.", "agotar + -miento", "精疲力竭、耗盡"],
      ["agradecimiento", "n.", "agradecer + -miento", "感謝、感激"],
      ["alimento", "n.", "alimentar 的名詞形", "食物、營養品"],
      ["almacenamiento", "n.", "almacenar + -miento", "儲存、倉儲"],
      ["alojamiento", "n.", "alojar + -miento", "住宿"],
      ["aparcamiento", "n.", "aparcar + -miento", "停車場、停車"],
      ["apartamento", "n.", "apartar + -mento", "公寓"],
      ["aplazamiento", "n.", "aplazar + -miento", "延期、推遲"],
      ["arrendamiento", "n.", "arrendar + -miento", "租賃、租約"],
      ["ayuntamiento", "n.", "ayuntar + -miento", "市政府、市政廳"],
      ["calentamiento", "n.", "calentar + -miento", "暖身、變暖"],
      ["conocimiento", "n.", "conocer + -miento", "知識、認識"],
      ["crecimiento", "n.", "crecer + -miento", "成長、增長"],
      ["departamento", "n.", "departir + -mento", "部門、公寓"],
      ["entrenamiento", "n.", "entrenar + -miento", "訓練"],
      ["entretenimiento", "n.", "entretener + -miento", "娛樂、消遣"],
      ["medicamento", "n.", "medicar + -mento", "藥物、藥品"],
      ["pensamiento", "n.", "pensar + -miento", "思想、想法"],
      ["procedimiento", "n.", "proceder + -miento", "程序、手續"],
      ["reconocimiento", "n.", "reconocer + -miento", "認可、辨識"]
    ]
  ],
  [
    "suf-ancia",
    "suffix",
    "-ancia / -encia / -anza",
    "拉丁文 -antia / -entia",
    "抽象名詞字尾（陰性）：表示「狀態、性質或行為」",
    [
      ["advertencia", "n.", "advertir + -encia", "警告、告示"],
      ["agencia", "n.", "agente + -encia", "代理處、旅行社"],
      ["ambivalencia", "n.", "ambivalente + -encia", "矛盾心理"],
      ["ambulancia", "n.", "ambulante + -ancia", "救護車"],
      ["asistencia", "n.", "asistir + -encia", "出席、援助"],
      ["ausencia", "n.", "ausente + -encia", "缺席、不在"],
      ["ciencia", "n.", "scientia 演變", "科學"],
      ["circunstancia", "n.", "circunstante + -ancia", "情況、環境"],
      ["coincidencia", "n.", "coincidir + -encia", "巧合、一致"],
      ["comparecencia", "n.", "comparecer + -encia", "出庭、到場"],
      ["competencia", "n.", "competir + -encia", "競爭、能力"],
      ["concordancia", "n.", "concordar + -ancia", "一致、協調"],
      ["conveniencia", "n.", "convenir + -iencia", "便利、合適"],
      ["convivencia", "n.", "convivir + -encia", "共處、和睦相處"],
      ["dependencia", "n.", "depender + -encia", "依賴、附屬機構"],
      ["diferencia", "n.", "diferente + -encia", "差異"],
      ["emergencia", "n.", "emerger + -encia", "緊急情況"],
      ["enseñanza", "n.", "enseñar + -anza", "教學、教育"],
      ["exigencia", "n.", "exigir + -encia", "要求、苛求"],
      ["experiencia", "n.", "experto + -encia", "經驗、體驗"],
      ["impaciencia", "n.", "impaciente + -encia", "不耐煩、急躁"],
      ["importancia", "n.", "importante + -ancia", "重要性"],
      ["paciencia", "n.", "paciente + -encia", "耐心"],
      ["preferencia", "n.", "preferir + -encia", "偏好、優先權"],
      ["presencia", "n.", "presente + -encia", "出席、在場"],
      ["referencia", "n.", "referir + -encia", "參考、提及"],
      ["residencia", "n.", "residir + -encia", "住所、居留證、宿舍"],
      ["resistencia", "n.", "resistir + -encia", "抵抗力、耐力"],
      ["solvencia", "n.", "solvente + -encia", "償付能力、資力"],
      ["tendencia", "n.", "tender + -encia", "趨勢、傾向"],
      ["transferencia", "n.", "transferir + -encia", "轉帳、轉移"]
    ]
  ],
  [
    "suf-ez",
    "suffix",
    "-ez / -eza",
    "拉丁文 -itia",
    "抽象名詞字尾（陰性）：由形容詞轉化為「特質」",
    [
      ["belleza", "n.", "bello (美麗的) + -eza", "美麗"],
      ["escasez", "n.", "escaso (稀缺的) + -ez", "缺乏、短缺"],
      ["fortaleza", "n.", "fuerte (強壯的) + -aleza", "堅強、堡壘"],
      ["limpieza", "n.", "limpio (乾淨的) + -eza", "清潔、打掃"],
      ["naturaleza", "n.", "natural (自然的) + -eza", "大自然、本性"],
      ["pobreza", "n.", "pobre (貧窮的) + -eza", "貧窮"],
      ["tristeza", "n.", "triste (悲傷的) + -eza", "悲傷"],
      ["validez", "n.", "válido (有效的) + -ez", "有效性、有效期"]
    ]
  ],
  [
    "suf-ura",
    "suffix",
    "-ura / -tura",
    "拉丁文 -ura",
    "名詞字尾（陰性）：表示「狀態、結果或集合」",
    [
      ["altura", "n.", "alto (高的) + -ura", "高度"],
      ["apertura", "n.", "abrir (打開) + -tura", "開幕、開放"],
      ["arquitectura", "n.", "arquitecto + -ura", "建築學"],
      ["asignatura", "n.", "asignar (指定) + -atura", "科目、課程"],
      ["aventura", "n.", "advenir + -tura", "冒險"],
      ["cerradura", "n.", "cerrar (關閉) + -dura", "門鎖"],
      ["cobertura", "n.", "cubrir (覆蓋) + -tura", "覆蓋範圍、訊號、保險承保"],
      ["colegiatura", "n.", "colegio + -atura", "學費（拉美用語）"],
      ["costura", "n.", "coser (縫紉) + -tura", "縫紉、接縫"],
      ["cultura", "n.", "cult- (培養) + -ura", "文化"],
      ["escritura", "n.", "escribir + -tura", "書寫、契約書"],
      ["estructura", "n.", "construir 詞根 + -ura", "結構"],
      ["postura", "n.", "poner 詞根 + -tura", "姿勢、立場"],
      ["temperatura", "n.", "temperar + -atura", "溫度"]
    ]
  ],
  [
    "suf-ismo",
    "suffix",
    "-ismo",
    "希臘文 -ismos",
    "名詞字尾（陽性）：表示「主義、學說、運動或特徵」",
    [
      ["ciclismo", "n.", "ciclo (輪/車) + -ismo", "自行車運動"],
      ["optimismo", "n.", "óptimo (最佳的) + -ismo", "樂觀主義"],
      ["organismo", "n.", "órgano (器官) + -ismo", "生物體、機構"],
      ["oscurantismo", "n.", "oscuro (黑暗的) + -antismo", "蒙昧主義、反啟蒙"],
      ["pesimismo", "n.", "pésimo (最壞的) + -ismo", "悲觀主義"],
      ["senderismo", "n.", "sendero (小徑) + -ismo", "健行、徒步旅行"],
      ["turismo", "n.", "tour (旅遊) + -ismo", "旅遊業"],
      ["urbanismo", "n.", "urbano (城市的) + -ismo", "都市計畫、城市化"]
    ]
  ],
  [
    "suf-ista",
    "suffix",
    "-ista",
    "希臘文 -istes",
    "名詞/形容詞字尾（男女同形）：表示「職業、主義者、愛好者」",
    [
      ["artista", "n.", "arte (藝術) + -ista", "藝術家"],
      ["ciclista", "n.", "ciclo (自行車) + -ista", "自行車手"],
      ["dentista", "n.", "diente (牙齒) + -ista", "牙醫"],
      ["deportista", "n.", "deporte (運動) + -ista", "運動員"],
      ["electricista", "n.", "eléctrico (電的) + -ista", "電工"],
      ["especialista", "n.", "especial (特別的) + -ista", "專家、專科醫生"],
      ["esteticista", "n.", "estética (美容) + -ista", "美容師"],
      ["flautista", "n.", "flauta (長笛) + -ista", "長笛手"],
      ["futbolista", "n.", "fútbol (足球) + -ista", "足球員"],
      ["periodista", "n.", "periódico (報紙) + -ista", "記者"],
      ["recepcionista", "n.", "recepción (接待) + -ista", "櫃台接待員"],
      ["turista", "n.", "turismo (旅遊) + -ista", "觀光客"]
    ]
  ],
  [
    "suf-dor",
    "suffix",
    "-dor / -dora / -tor / -sor",
    "拉丁文 -tor / -trix",
    "名詞/形容詞字尾：表示「執行動作的人、機器或場所」",
    [
      ["acogedor", "adj.", "acoger (接待) + -edor", "溫馨舒適的、熱情好客的"],
      ["acondicionador", "n.", "acondicionar (調節) + -dor", "潤髮乳、空調機"],
      ["activador", "n.", "activar (啟動) + -dor", "啟動器、活化劑"],
      ["actor", "n.", "actuar + -tor", "男演員"],
      ["adaptador", "n.", "adaptar (轉接/適應) + -dor", "轉接頭、變壓器"],
      ["administrador", "n.", "administrar (管理) + -dor", "管理員、執行長"],
      ["arrendador", "n.", "arrendar (出租) + -dor", "房東、出租人"],
      ["aspiradora", "n.", "aspirar (吸) + -dora", "吸塵器"],
      ["bañador", "n.", "bañar (沐浴/游泳) + -dor", "泳衣"],
      ["borrador", "n.", "borrar (擦除) + -dor", "板擦、橡皮擦、草稿"],
      ["comedor", "n.", "comer (吃) + -dor", "餐廳、飯廳"],
      ["conductor", "n.", "conducir (駕駛) + -tor", "司機、駕駛員"],
      ["despertador", "n.", "despertar (叫醒) + -dor", "鬧鐘"],
      ["empleador", "n.", "emplear (雇用) + -ador", "雇主"],
      ["entrenador", "n.", "entrenar (訓練) + -dor", "教練"],
      ["escritor", "n.", "escribir (寫) + -tor", "作家"],
      ["hablador", "adj.", "hablar (說話) + -dor", "愛說話的、健談的"],
      ["impresora", "n.", "imprimir (列印) + -sora", "印表機"],
      ["instructor", "n.", "instruir (指導) + -tor", "教練、指導員"],
      ["jugador", "n.", "jugar (玩/比賽) + -dor", "玩家、球員"],
      ["lavadora", "n.", "lavar (洗) + -dora", "洗衣機"],
      ["ordenador", "n.", "ordenar (整理/計算) + -dor", "電腦（西班牙用語）"],
      ["parador", "n.", "parar (停留) + -dor", "國營古蹟旅館、驛站"],
      ["presentador", "n.", "presentar (主持) + -dor", "主持人"],
      ["probador", "n.", "probar (試穿) + -dor", "試衣間"],
      ["profesor", "n.", "profesar (教導) + -sor", "老師、教授"],
      ["secador", "n.", "secar (吹乾) + -dor", "吹風機"],
      ["secadora", "n.", "secar (烘乾) + -dora", "烘衣機"],
      ["televisor", "n.", "tele- + visor", "電視機"],
      ["trabajador", "n./adj.", "trabajar (工作) + -dor", "工作者、勤勞的"]
    ]
  ],
  [
    "suf-ero",
    "suffix",
    "-ero / -era / -ería",
    "拉丁文 -arius",
    "表示「職業、容器、樹木」(-ero) 或「商店/場所」(-ería)",
    [
      ["bañera", "n.", "baño (洗澡) + -era", "浴缸"],
      ["bombero", "n.", "bomba (水泵) + -ero", "消防員"],
      ["caballero", "n.", "caballo (馬) + -ero", "騎士、紳士"],
      ["cabecera", "n.", "cabeza (頭) + -era", "床頭、首頁"],
      ["cafetera", "n.", "café (咖啡) + -tera", "咖啡壺、咖啡機"],
      ["cafetería", "n.", "café (咖啡) + -tería", "咖啡館"],
      ["cajero", "n.", "caja (收銀箱/ATM) + -ero", "收銀員、提款機"],
      ["camarero", "n.", "cámara (廳堂) + -ero", "服務生"],
      ["carnicería", "n.", "carne (肉) + -icería", "肉店"],
      ["carretera", "n.", "carreta (車) + -era", "公路"],
      ["cerrajero", "n.", "cerraja (鎖) + -ero", "鎖匠"],
      ["charcutería", "n.", "charcutero + -ía", "熟食冷肉店"],
      ["cocinero", "n.", "cocina (廚房) + -ero", "廚師"],
      ["compañero", "n.", "compaña + -ero", "同伴、同學、同事"],
      ["enfermero", "n.", "enfermo (病人) + -ero", "護理師、護士"],
      ["estantería", "n.", "estante (架子) + -ería", "書架、貨架"],
      ["extranjero", "n./adj.", "extraño + -ero", "外國人、外國的"],
      ["fontanería", "n.", "fontanero (水電工) + -ía", "水管工程、水電行"],
      ["frutería", "n.", "fruta (水果) + -ería", "水果店"],
      ["guardería", "n.", "guardar (看管) + -ería", "托兒所、幼兒園"],
      ["jardinero", "n.", "jardín (花園) + -ero", "園丁"],
      ["librería", "n.", "libro (書) + -ería", "書店"],
      ["niñero", "n.", "niño (小孩) + -ero", "保姆"],
      ["panadero", "n.", "pan (麵包) + -adero", "麵包師傅"],
      ["panadería", "n.", "pan (麵包) + -adería", "麵包店"],
      ["pasajero", "n./adj.", "pasaje + -ero", "乘客、短暫的"],
      ["peluquería", "n.", "peluca (假髮/頭髮) + -ería", "理髮店、美髮沙龍"],
      ["tendedero", "n.", "tender (晾曬) + -edero", "晾衣架、曬衣場"],
      ["trastero", "n.", "trasto (雜物) + -ero", "儲藏室"],
      ["viajero", "n.", "viaje (旅行) + -ero", "旅客"],
      ["zapatería", "n.", "zapato (鞋) + -ería", "鞋店"]
    ]
  ],
  [
    "suf-aje",
    "suffix",
    "-aje",
    "拉丁文 -aticum (經法文 -age)",
    "名詞字尾（陽性）：表示「行為、集合、費用或狀態」",
    [
      ["equipaje", "n.", "equipar (裝備) + -aje", "行李"],
      ["garaje", "n.", "法文 garage", "車庫"],
      ["masaje", "n.", "masar (揉捏) + -aje", "按摩"],
      ["mensaje", "n.", "法文 message", "訊息"],
      ["paisaje", "n.", "país (鄉土) + -aje", "風景"],
      ["pasaje", "n.", "pasar (通過) + -aje", "車票、機票、通道"],
      ["peaje", "n.", "pie (腳/通行) + -aje", "過路費、收費站"],
      ["peritaje", "n.", "perito (專家) + -aje", "專業鑑定"],
      ["personaje", "n.", "persona (人) + -aje", "角色、人物"],
      ["reciclaje", "n.", "reciclar (回收) + -aje", "回收利用"],
      ["tatuaje", "n.", "tatuar (刺青) + -aje", "刺青、紋身"],
      ["viaje", "n.", "vía (路) + -aje", "旅行"]
    ]
  ],
  [
    "suf-ario",
    "suffix",
    "-ario / -aria / -orio",
    "拉丁文 -arius / -orium",
    "表示「場所、集合、職業或相關形容詞」",
    [
      ["adversario", "n.", "adverso (對立的) + -ario", "對手"],
      ["aniversario", "n.", "año + verso + -ario", "週年紀念日"],
      ["armario", "n.", "arma (裝備) + -ario", "衣櫃、櫥櫃"],
      ["arrendatario", "n.", "arrendar (租) + -atario", "承租人、房客"],
      ["bancario", "adj.", "banco (銀行) + -ario", "銀行的"],
      ["beneficiario", "n.", "beneficio (利益) + -ario", "受益人"],
      ["bibliotecario", "n.", "biblioteca (圖書館) + -ario", "圖書館員"],
      ["calendario", "n.", "calendas (月初) + -ario", "日曆、行事曆"],
      ["campanario", "n.", "campana (鐘) + -ario", "鐘樓"],
      ["comentario", "n.", "comentar (評論) + -io", "評論、意見"],
      ["concesionario", "n.", "concesión + -ario", "經銷商"],
      ["contrario", "adj./n.", "contra (反) + -ario", "相反的、對立面"],
      ["destinatario", "n.", "destinar (寄往) + -atario", "收件人"],
      ["diccionario", "n.", "dicción (詞語) + -ario", "字典"],
      ["dormitorio", "n.", "dormir (睡) + -itorio", "臥室、宿舍"],
      ["escritorio", "n.", "escribir (寫) + -itorio", "書桌、桌面"],
      ["formulario", "n.", "forma (形式) + -ulario", "表格、申請表"],
      ["horario", "n.", "hora (時間) + -ario", "時間表"],
      ["inmobiliaria", "n.", "inmueble (不動產) + -aria", "房地產仲介公司"],
      ["necesario", "adj.", "neces- + -ario", "必要的"],
      ["sanitario", "adj./n.", "sanidad (衛生) + -ario", "衛生的、醫護人員"],
      ["vocabulario", "n.", "vocablo (詞語) + -ario", "詞彙表"]
    ]
  ],
  [
    "suf-ado",
    "suffix",
    "-ado / -ada / -ido / -ida",
    "拉丁文 -atus / -itus (過去分詞)",
    "構成形容詞（狀態）或名詞（行為、飲品、集合）",
    [
      ["abogado", "n.", "abogar (辯護) + -ado", "律師"],
      ["aburrido", "adj.", "aburrir (使無聊) + -ido", "無聊的"],
      ["acogida", "n.", "acoger (接待) + -ida", "接待、收容"],
      ["acostado", "adj.", "acostar (躺下) + -ado", "躺著的"],
      ["adecuado", "adj.", "adecuar (使適合) + -ado", "適當的"],
      ["agobiado", "adj.", "agobiar (使焦慮) + -ado", "喘不過氣的、焦慮的"],
      ["agotado", "adj.", "agotar (耗盡) + -ado", "精疲力竭的、售罄的"],
      ["aliviado", "adj.", "aliviar (減輕) + -ado", "鬆了一口氣的"],
      ["apartado", "n./adj.", "apartar (分開) + -ado", "條款、信箱、偏僻的"],
      ["averiado", "adj.", "averiar (損壞) + -ado", "故障的、損壞的"],
      ["batido", "n.", "batir (攪打) + -ido", "奶昔、果昔"],
      ["caminata", "n.", "caminar (走路) + -ata", "徒步健行"],
      ["cansado", "adj.", "cansar (使累) + -ado", "疲倦的"],
      ["casado", "adj.", "casar (結婚) + -ado", "已婚的"],
      ["cerrado", "adj.", "cerrar (關閉) + -ado", "關閉的"],
      ["complicado", "adj.", "complicar (使複雜) + -ado", "複雜的"],
      ["conocido", "adj./n.", "conocer (認識) + -ido", "著名的、熟人"],
      ["construido", "adj.", "construir (建造) + -ido", "建成的"],
      ["controvertido", "adj.", "controvertir + -ido", "有爭議的"],
      ["cortado", "adj./n.", "cortar (切/兌奶) + -ado", "切開的、加少許牛奶的濃縮咖啡"],
      ["desempleado", "adj./n.", "desemplear + -ado", "失業的、失業者"],
      ["desordenado", "adj.", "desordenar + -ado", "凌亂的"],
      ["despedida", "n.", "despedir (告別) + -ida", "告別、送別會"],
      ["divertido", "adj.", "divertir (使開心) + -ido", "有趣的、好玩的"],
      ["dormido", "adj.", "dormir (睡) + -ido", "睡著的"],
      ["duplicado", "n./adj.", "duplicar + -ado", "副本、雙份的"],
      ["embarazada", "adj.", "embarazar + -ada", "懷孕的"],
      ["embutido", "n.", "embutir (灌入) + -ido", "香腸、冷切肉"],
      ["emocionado", "adj.", "emocionar + -ado", "激動的"],
      ["empleado", "n./adj.", "emplear (雇用) + -ado", "員工、受雇的"],
      ["encantado", "adj.", "encantar + -ado", "很高興的、榮幸的"],
      ["enfadado", "adj.", "enfadar (使生氣) + -ado", "生氣的"],
      ["entrada", "n.", "entrar (進入) + -ada", "入口、門票、前菜"],
      ["entretenido", "adj.", "entretener + -ido", "有趣的"],
      ["equilibrado", "adj.", "equilibrar + -ado", "均衡的"],
      ["equivocado", "adj.", "equivocar + -ado", "錯誤的"],
      ["introvertido", "adj./n.", "introvertir + -ido", "內向的、內向者"],
      ["llamada", "n.", "llamar (呼叫) + -ada", "電話、呼叫"],
      ["llegada", "n.", "llegar (到達) + -ada", "到達"],
      ["maleducado", "adj.", "mal- + educar + -ado", "沒禮貌的"],
      ["mirada", "n.", "mirar (看) + -ada", "眼神、目光"],
      ["ordenado", "adj.", "ordenar (整理) + -ado", "整齊的、有條理的"],
      ["pedido", "n.", "pedir (訂購) + -ido", "訂單"],
      ["perdido", "adj.", "perder (遺失/迷路) + -ido", "迷路的、遺失的"],
      ["preocupado", "adj.", "preocupar + -ado", "擔心的"],
      ["profesorado", "n.", "profesor + -ado", "師資、全體教師"],
      ["querido", "adj./n.", "querer (愛) + -ido", "親愛的"],
      ["recorrido", "n.", "recorrer (走過) + -ido", "路線、行程"],
      ["reservado", "adj.", "reservar + -ado", "已預訂的、矜持的"],
      ["resfriado", "n./adj.", "resfriar + -ado", "感冒"],
      ["salida", "n.", "salir (出去) + -ida", "出口、出發"],
      ["sentado", "adj.", "sentar (坐) + -ado", "坐著的"],
      ["temporada", "n.", "tiempo + -orada", "季節、旺季、一季"]
    ]
  ],
  [
    "suf-able",
    "suffix",
    "-able / -ible",
    "拉丁文 -abilis / -ibilis",
    "形容詞字尾：表示「能夠被…的、值得…的」",
    [
      ["accesible", "adj.", "acceso (進入) + -ible", "可進入的、平易近人的、無障礙的"],
      ["agradable", "adj.", "agradar (使愉快) + -able", "令人愉快的"],
      ["amable", "adj.", "amar (愛) + -able", "親切的、和藹的"],
      ["amigable", "adj.", "amigo (朋友) + -able", "友好的"],
      ["compatible", "adj.", "compatir + -ible", "相容的、合得來的"],
      ["disponible", "adj.", "disponer (安排) + -ible", "可用的、有空的"],
      ["fiable", "adj.", "fiar (信任) + -able", "可靠的、值得信賴的"],
      ["flexible", "adj.", "flex- (彎曲) + -ible", "靈活的、有彈性的"],
      ["horrible", "adj.", "horror (恐懼) + -ible", "可怕的、糟糕的"],
      ["impermeable", "adj./n.", "im- + permear + -able", "防水的、雨衣"],
      ["imposible", "adj.", "im- (不) + posible (可能的)", "不可能的"],
      ["posible", "adj.", "poder (能夠) + -ible", "可能的"],
      ["saludable", "adj.", "salud (健康) + -able", "健康的、有益健康的"],
      ["sociable", "adj.", "socio (同伴) + -able", "好交際的"],
      ["terrible", "adj.", "terror (恐懼) + -ible", "可怕的、極度的"]
    ]
  ],
  [
    "suf-oso",
    "suffix",
    "-oso / -osa",
    "拉丁文 -osus",
    "形容詞字尾：表示「充滿…的、具有…特質的」",
    [
      ["ansioso", "adj.", "ansia (渴望/焦慮) + -oso", "焦慮的、渴望的"],
      ["asombroso", "adj.", "asombro (驚訝) + -oso", "驚人的、了不起的"],
      ["avaricioso", "adj.", "avaricia (貪婪) + -oso", "貪婪的、吝嗇的"],
      ["añoso", "adj.", "año (年) + -oso", "年老的、陳年的"],
      ["caluroso", "adj.", "calor (熱) + -oso", "炎熱的、熱情的"],
      ["chismoso", "adj./n.", "chisme (八卦) + -oso", "愛說長道短的、八卦的人"],
      ["contagioso", "adj.", "contagio (傳染) + -oso", "有傳染性的、有感染力的"],
      ["correoso", "adj.", "correa (皮帶/韌性) + -oso", "有韌性的、難嚼的"],
      ["curioso", "adj.", "cura (關心) + -ioso", "好奇的、奇特的"],
      ["delicioso", "adj.", "delicia (美味) + -oso", "美味的"],
      ["espacioso", "adj.", "espacio (空間) + -oso", "寬敞的"],
      ["estudioso", "adj.", "estudio (學習) + -oso", "好學的、用功的"],
      ["exitoso", "adj.", "éxito (成功) + -oso", "成功的"],
      ["famoso", "adj.", "fama (名聲) + -oso", "有名的"],
      ["gustoso", "adj.", "gusto (味道/樂意) + -oso", "美味的、樂意的"],
      ["mentiroso", "adj./n.", "mentira (謊言) + -oso", "愛說謊的、騙子"],
      ["nervioso", "adj.", "nervio (神經) + -oso", "緊張的"],
      ["perezoso", "adj./n.", "pereza (懶惰) + -oso", "懶惰的、樹懶"],
      ["precioso", "adj.", "precio (價值) + -oso", "美麗的、珍貴的"],
      ["trabajoso", "adj.", "trabajo (工作) + -oso", "費力的、艱鉅的"]
    ]
  ],
  [
    "suf-ante",
    "suffix",
    "-ante / -ente / -iente",
    "拉丁文 -ans / -ens (現在分詞)",
    "表示「正在做…的人/物」或「具有…性質的形容詞」",
    [
      ["adolescente", "n./adj.", "adolescer (成長) + -ente", "青少年"],
      ["agente", "n.", "ag- (行動) + -ente", "代理人、警員"],
      ["ambulante", "adj.", "ambular (行走) + -ante", "流動的（小販）"],
      ["arrogante", "adj.", "arrogar + -ante", "傲慢的"],
      ["asistente", "n.", "asistir (協助) + -ente", "助理、出席者"],
      ["aspirante", "n.", "aspirar (申請/渴望) + -ante", "申請人、候選人"],
      ["bajante", "n.", "bajar (下降) + -ante", "排水管、落水管"],
      ["caliente", "adj.", "cal- (熱) + -iente", "熱的、燙的"],
      ["cambiante", "adj.", "cambiar (改變) + -ante", "多變的、變化中的"],
      ["comprobante", "n.", "comprobar (核實) + -ante", "憑證、收據"],
      ["dependiente", "n./adj.", "depender (依賴) + -iente", "店員、依賴的"],
      ["emocionante", "adj.", "emocionar + -ante", "令人激動的"],
      ["estudiante", "n.", "estudiar (學習) + -ante", "學生"],
      ["excelente", "adj.", "exceler + -ente", "優秀的、極好的"],
      ["exigente", "adj.", "exigir (要求) + -ente", "嚴格的、苛求的"],
      ["expediente", "n.", "expedir + -iente", "檔案、卷宗"],
      ["hablante", "n.", "hablar (說話) + -ante", "說話者、講某語言的人"],
      ["impaciente", "adj.", "im- + paciente", "不耐煩的"],
      ["importante", "adj.", "importar (重要) + -ante", "重要的"],
      ["impresionante", "adj.", "impresionar + -ante", "令人印象深刻的"],
      ["independiente", "adj.", "in- + dependiente", "獨立的"],
      ["interesante", "adj.", "interesar (使感興趣) + -ante", "有趣的"],
      ["pendiente", "adj./n.", "pender (懸掛) + -iente", "待處理的、耳環、斜坡"],
      ["permanente", "adj.", "permanecer (停留) + -ente", "永久的"],
      ["presente", "adj./n.", "pre- + sent- + -e", "出席的、現在、禮物"],
      ["reciente", "adj.", "re- + cient- + -e", "最近的"],
      ["representante", "n.", "representar + -ante", "代表、代理人"],
      ["suavizante", "n.", "suavizar (使柔軟) + -ante", "衣物柔軟精"],
      ["terminante", "adj.", "terminar (結束) + -ante", "斷然的、決定性的"],
      ["transparente", "adj.", "trans- + parente", "透明的"],
      ["trashumante", "adj.", "tras- + humus + -ante", "季節性放牧遷徙的"]
    ]
  ],
  [
    "suf-al",
    "suffix",
    "-al / -ar",
    "拉丁文 -alis / -aris",
    "形容詞字尾：表示「屬於…的、與…相關的」或「樹林/場所」",
    [
      ["actual", "adj.", "acto + -ual", "當前的、現今的"],
      ["arterial", "adj.", "arteria (動脈) + -al", "動脈的"],
      ["bisexual", "adj./n.", "bi- + sexo + -ual", "雙性戀的"],
      ["comercial", "adj.", "comercio (商業) + -ial", "商業的"],
      ["controversial", "adj.", "controversia + -ial", "有爭議的"],
      ["cultural", "adj.", "cultura (文化) + -al", "文化的"],
      ["espiritual", "adj.", "espíritu (精神) + -al", "精神的"],
      ["estomacal", "adj.", "estómago (胃) + -al", "胃部的"],
      ["familiar", "adj./n.", "familia (家庭) + -ar", "熟悉的、家庭的、親屬"],
      ["final", "n./adj.", "fin (結束) + -al", "結尾、決賽、最終的"],
      ["formal", "adj.", "forma (形式) + -al", "正式的"],
      ["gramaticales", "adj.", "gramática (文法) + -ales", "文法的"],
      ["heterosexual", "adj./n.", "hetero- + sexo + -ual", "異性戀的"],
      ["homosexual", "adj./n.", "homo- + sexo + -ual", "同性戀的"],
      ["impersonal", "adj.", "im- + persona + -al", "無人稱的、客觀冷淡的"],
      ["informal", "adj.", "in- + formal", "非正式的"],
      ["internacional", "adj.", "inter- + nación + -al", "國際的"],
      ["local", "adj./n.", "loc- (地方) + -al", "當地的；場所"],
      ["multinacional", "adj./n.", "multi- + nación + -al", "跨國的、跨國公司"],
      ["mundial", "adj.", "mundo (世界) + -ial", "全世界的"],
      ["musical", "adj./n.", "música (音樂) + -al", "音樂的；音樂劇"],
      ["natural", "adj.", "natura (自然) + -al", "自然的"],
      ["personal", "adj./n.", "persona (人) + -al", "個人的；全體人員"],
      ["profesional", "adj./n.", "profesión + -al", "專業的、專業人士"],
      ["regular", "adj./v.", "regula (規則) + -ar", "規律的、一般的"],
      ["social", "adj.", "socio (同伴) + -ial", "社會的、社交的"],
      ["solar", "adj.", "sol (太陽) + -ar", "太陽的、太陽能的"],
      ["sucursal", "n.", "su- + curs- + -al", "分行、分公司"],
      ["temporal", "adj.", "tiempo + -oral", "暫時的、時間的"],
      ["transexual", "adj./n.", "trans- + sexo + -ual", "跨性別的"],
      ["tribunal", "n.", "tribuno + -al", "法庭、法院"],
      ["vocal", "n./adj.", "voz (聲音) + -al", "母音、聲樂的、委員"]
    ]
  ],
  [
    "suf-ico",
    "suffix",
    "-ico / -ica / -ático",
    "希臘文 -ikos / 拉丁文 -icus",
    "形容詞字尾：表示「與…有關的、…學的」",
    [
      ["acuático", "adj.", "agua (水) + -ático", "水生的、水上的"],
      ["alámbrico", "adj.", "alambre (電線) + -ico", "有線的"],
      ["alcohólicas", "adj.", "alcohol (酒精) + -icas", "含酒精的"],
      ["alérgico", "adj.", "alergia (過敏) + -ico", "過敏的"],
      ["analgésico", "n./adj.", "an- + alg- (痛) + -ésico", "止痛藥、止痛的"],
      ["antibiótico", "n./adj.", "anti- + biótico", "抗生素"],
      ["antipático", "adj.", "anti- + patía + -ico", "令人討厭的"],
      ["atlético", "adj.", "atleta (運動員) + -ico", "運動型的、健壯的"],
      ["auténtico", "adj.", "希臘文 authentikos", "道地的、真實的"],
      ["automático", "adj.", "auto- + mat- + -ico", "自動的"],
      ["católico", "adj./n.", "希臘文 katholikos", "天主教的、天主教徒"],
      ["científico", "adj./n.", "ciencia + -ífico", "科學的、科學家"],
      ["económico", "adj.", "economía (經濟) + -ico", "經濟的、實惠的"],
      ["hipotéticas", "adj.", "hipótesis (假設) + -icas", "假設性的"],
      ["histórico", "adj.", "historia (歷史) + -ico", "歷史的"],
      ["médico", "n./adj.", "medicina + -ico", "醫生；醫療的"],
      ["político", "adj./n.", "política (政治) + -ico", "政治的、政治家"],
      ["simpático", "adj.", "simpatía (好感) + -ico", "友善的、討人喜歡的"],
      ["turístico", "adj.", "turismo (旅遊) + -ico", "觀光的"],
      ["zoológico", "n./adj.", "zoo (動物) + lógico", "動物園、動物學的"]
    ]
  ],
  [
    "suf-ivo",
    "suffix",
    "-ivo / -iva",
    "拉丁文 -ivus",
    "形容詞字尾：表示「傾向於…的、具有…能力的」",
    [
      ["activo", "adj.", "act- (行動) + -ivo", "活躍的、積極的"],
      ["adhesivo", "adj./n.", "adherir (黏附) + -sivo", "有黏性的、黏合劑"],
      ["adjetivos", "n.", "ad- + ject- + -ivos", "形容詞"],
      ["afectivo", "adj.", "afecto (情感) + -ivo", "情感的、感情上的"],
      ["aperitivo", "n.", "abrir (開胃) + -itivo", "開胃酒、餐前小吃"],
      ["archivo", "n.", "archivar 的名詞形", "檔案、文件夾"],
      ["atractivo", "adj.", "atraer (吸引) + -tivo", "有吸引力的"],
      ["auditivo", "adj.", "aud- (聽) + -itivo", "聽覺的"],
      ["colectivo", "adj./n.", "colecta (收集) + -ivo", "集體的、團體"],
      ["competitivo", "adj.", "competir (競爭) + -itivo", "有競爭力的"],
      ["cooperativa", "n./adj.", "cooperar (合作) + -ativa", "合作社、合作的"],
      ["creativo", "adj.", "crear (創造) + -ativo", "有創意的"],
      ["deportivo", "adj.", "deporte (運動) + -ivo", "運動的"],
      ["directiva", "n./adj.", "directo + -iva", "理事會、指導方針"],
      ["directivo", "n./adj.", "directo + -ivo", "主管、管理的"],
      ["intensivo", "adj.", "intenso + -ivo", "密集的、強化的"],
      ["motivo", "n.", "mover + -tivo", "動機、原因"],
      ["polideportivo", "n.", "poli- + deportivo", "綜合體育館"],
      ["positivo", "adj.", "poner/pos- + -itivo", "正面的、積極的、陽性的"],
      ["preservativo", "n.", "preservar + -ativo", "保險套、防腐劑"]
    ]
  ],
  [
    "suf-escente",
    "suffix",
    "-escente / -ecer",
    "拉丁文 -escere",
    "表示「開始進入某狀態、逐漸變成…」",
    [
      ["acontecer", "v.", "a- + cont- + -ecer", "發生"],
      ["adolescente", "n./adj.", "ad- + olescere (成長) + -ente", "青少年"],
      ["agradecer", "v.", "a- + grado (感謝) + -ecer", "感謝"],
      ["amanecer", "v./n.", "a- + mañana + -ecer", "黎明、天亮"],
      ["aparecer", "v.", "a- + parecer + -ecer", "出現"],
      ["apetecer", "v.", "apetito (食慾) + -ecer", "想吃、想要"],
      ["crecer", "v.", "拉丁文 crescere", "成長、增長"],
      ["desobedecer", "v.", "des- + obedecer", "違抗、不服從"],
      ["entristecer", "v.", "en- + triste (悲傷) + -ecer", "使悲傷"],
      ["envejecer", "v.", "en- + viejo (老) + -ecer", "變老、衰老"],
      ["establecer", "v.", "estable (穩固的) + -ecer", "建立、規定"],
      ["favorecer", "v.", "favor (恩惠) + -ecer", "有利於、偏袒"],
      ["florecer", "v.", "flor (花) + -ecer", "開花、繁榮"],
      ["fortalecer", "v.", "fuerte (強壯) + -alecer", "加強、鞏固"],
      ["pertenecer", "v.", "per- + tener + -ecer", "屬於"]
    ]
  ],
  [
    "suf-izar",
    "suffix",
    "-izar / -ificar",
    "拉丁文 -izare / -ificare",
    "動詞字尾：表示「使成為…、使…化」",
    [
      ["actualizar", "v.", "actual (當前的) + -izar", "更新、升級"],
      ["agilizar", "v.", "ágil (敏捷的) + -izar", "加快、簡化（流程）"],
      ["aterrizar", "v.", "a- + tierra (地面) + -izar", "著陸、降落"],
      ["calificar", "v.", "cual- + -ificar", "評分、評價"],
      ["cotizar", "v.", "cuota (份額/報價) + -izar", "報價、上市、繳納社保"],
      ["enfatizar", "v.", "énfasis (強調) + -izar", "強調"],
      ["garantizar", "v.", "garantía (保證) + -izar", "保證、擔保"],
      ["memorizar", "v.", "memoria (記憶) + -izar", "背誦、記憶"],
      ["modernizar", "v.", "moderno (現代的) + -izar", "使現代化"],
      ["optimizar", "v.", "óptimo (最佳的) + -izar", "最佳化、優化"],
      ["organizar", "v.", "órgano (組織) + -izar", "組織、安排"],
      ["planificar", "v.", "plan (計畫) + -ificar", "規劃、計畫"],
      ["priorizar", "v.", "prior (優先的) + -izar", "優先處理"],
      ["realizar", "v.", "real (真實) + -izar", "實現、進行"],
      ["significar", "v.", "signo (記號) + -ificar", "意味著、意思是"],
      ["verificar", "v.", "vero (真實) + -ificar", "核實、驗證"]
    ]
  ],
  [
    "suf-ear",
    "suffix",
    "-ear",
    "拉丁文 -idiare",
    "高頻動詞字尾：將名詞/形容詞轉為動作（常用於新詞與日常動作）",
    [
      ["asear", "v.", "aseo (整潔) + -ear", "打掃、梳洗"],
      ["bloquear", "v.", "bloque (障礙/區塊) + -ear", "封鎖、阻擋、當機"],
      ["chatear", "v.", "chat (聊天) + -ear", "網路聊天"],
      ["crear", "v.", "拉丁文 creare", "創造"],
      ["deletrear", "v.", "de- + letra (字母) + -ear", "拼寫、拼讀"],
      ["desear", "v.", "deseo (願望) + -ear", "希望、渴望"],
      ["emplear", "v.", "empleo (工作/使用) + -ear", "雇用、使用"],
      ["escanear", "v.", "escáner (掃描器) + -ear", "掃描"],
      ["escasear", "v.", "escaso (稀缺的) + -ear", "短缺、稀少"],
      ["golpear", "v.", "golpe (敲擊) + -ear", "敲打、撞擊"],
      ["marear", "v.", "mar (海) + -ear", "使暈船/頭暈、使厭煩"],
      ["pasear", "v.", "paso (步伐) + -ear", "散步、逛街"]
    ]
  ],
  [
    "suf-mente",
    "suffix",
    "-mente",
    "拉丁文 mente (以…的心智/方式)",
    "副詞字尾：加在陰性單數形容詞後，相當於英文 -ly",
    [
      ["abiertamente", "adv.", "abierta (公開的/敞開的) + -mente", "公開地、坦率地"],
      ["absolutamente", "adv.", "absoluta (絕對的) + -mente", "絕對地、完全地"],
      ["afortunadamente", "adv.", "afortunada (幸運的) + -mente", "幸運地"],
      ["aproximadamente", "adv.", "aproximada (近似的) + -mente", "大約、近似地"],
      ["atentamente", "adv.", "atenta (專注的/敬重的) + -mente", "專心地、謹上（信末敬語）"],
      ["básicamente", "adv.", "básica (基本的) + -mente", "基本上"],
      ["bonitamente", "adv.", "bonita (漂亮的) + -mente", "漂亮地、巧妙地"],
      ["caseramente", "adv.", "casera (自製的/居家的) + -mente", "家常地、自製地"],
      ["completamente", "adv.", "completa (完全的) + -mente", "完全地"],
      ["curiosamente", "adv.", "curiosa (好奇的/奇特的) + -mente", "奇怪的是、好奇地"],
      ["desafortunadamente", "adv.", "desafortunada (不幸的) + -mente", "不幸地"],
      ["especialmente", "adv.", "especial (特別的) + -mente", "特別地"],
      ["falsamente", "adv.", "falsa (虛假的) + -mente", "虛假地、錯誤地"],
      ["finalmente", "adv.", "final (最終的) + -mente", "最後、終於"],
      ["perfectamente", "adv.", "perfecta (完美的) + -mente", "完美地、完全地"],
      ["personalmente", "adv.", "personal (個人的) + -mente", "親自地、就個人而言"],
      ["positivamente", "adv.", "positiva (正面的) + -mente", "積極地、正面地"],
      ["posteriormente", "adv.", "posterior (隨後的) + -mente", "隨後、之後"],
      ["probablemente", "adv.", "probable (可能的) + -mente", "大概、很可能"],
      ["rápidamente", "adv.", "rápida (快速的) + -mente", "快速地"],
      ["recientemente", "adv.", "reciente (最近的) + -mente", "最近地"],
      ["sencillamente", "adv.", "sencilla (簡單的) + -mente", "簡單地、簡直"],
      ["solamente", "adv.", "sola (單獨的) + -mente", "僅僅、只"]
    ]
  ],
  [
    "suf-ito",
    "suffix",
    "-ito / -ita / -illo / -illa / -ín",
    "拉丁文 -ittus / -illus",
    "指小詞字尾：表示「體積小、可愛、親切或委婉語氣」",
    [
      ["anillo", "n.", "ano (環) + -illo", "戒指、圓環"],
      ["bailarín", "n.", "bailar (跳舞) + -ín", "舞者"],
      ["bocadillo", "n.", "bocado (一口食物) + -illo", "西班牙法棍三明治"],
      ["boletín", "n.", "boleta (票單) + -ín", "公報、成績單、簡報"],
      ["bolsillo", "n.", "bolso (袋子) + -illo", "口袋"],
      ["bolsita", "n.", "bolsa (袋子) + -ita", "小袋子"],
      ["bonito", "adj.", "bueno (好) + -ito", "漂亮的、可愛的"],
      ["bordillo", "n.", "borde (邊緣) + -illo", "路緣石、人行道邊緣"],
      ["calabacín", "n.", "calabaza (南瓜) + -ín", "櫛瓜、西葫蘆"],
      ["calcetín", "n.", "calza (長襪) + -etín", "短襪"],
      ["carrito", "n.", "carro (車) + -ito", "手推車、購物車"],
      ["maletín", "n.", "maleta (行李箱) + -ín", "公事包、手提箱"],
      ["perrito", "n.", "perro (狗) + -ito", "小狗、狗狗"],
      ["semilla", "n.", "semen (種子) + -illa", "種子"],
      ["ventanilla", "n.", "ventana (窗戶) + -illa", "車窗、售票窗口"],
      ["zapatilla", "n.", "zapato (鞋) + -illa", "運動鞋、拖鞋"]
    ]
  ],
  [
    "suf-on",
    "suffix",
    "-ón / -ona / -azo / -aza / -ote",
    "拉丁文 -o / -aceus",
    "指大詞字尾：表示「體積大、程度強或動作猛烈」",
    [
      ["abrazo", "n.", "abrazar (擁抱) + -o", "擁抱"],
      ["buzón", "n.", "buzo (洞口) + -ón", "信箱、郵筒"],
      ["cabezón", "adj./n.", "cabeza (頭) + -ón", "大頭的、固執的"],
      ["corazón", "n.", "cor (心) + -azón", "心臟"],
      ["golazo", "n.", "gol (進球) + -azo", "漂亮的一球、世界波"],
      ["melocotón", "n.", "拉丁文 malum cotoneum", "水蜜桃"],
      ["portazo", "n.", "puerta (門) + -azo", "砰地關門聲"],
      ["sillón", "n.", "silla (椅子) + -ón", "扶手椅、沙發椅"],
      ["vistazo", "n.", "vista (看) + -azo", "瞥一眼、瀏覽"]
    ]
  ],
  [
    "suf-logia",
    "suffix",
    "-logía / -logo / -grafía / -metría",
    "希臘文複合學科字尾",
    "學科與專業領域字尾（…學、…專家、…描寫、…測量）",
    [
      ["biografía", "n.", "bio (生命) + -grafía (描寫記錄)", "傳記"],
      ["biología", "n.", "bio (生命) + -logía (學科)", "生物學"],
      ["ecografía", "n.", "eco (回聲) + -grafía (影像記錄)", "超音波檢查"],
      ["fotografía", "n.", "foto (光) + -grafía (描寫記錄)", "攝影、照片"],
      ["geografía", "n.", "geo (地球) + -grafía (描寫)", "地理學"],
      ["geometría", "n.", "geo (土地) + -metría (測量)", "幾何學"],
      ["psicólogo", "n.", "psico (心理) + -logo (專家)", "心理學家"],
      ["zoológico", "n./adj.", "zoo (動物) + -lógico", "動物園、動物學的"]
    ]
  ]
];

// ==================== 自動整合 translation_links.csv 擴充單字 ====================
(function mergeTranslationLinks(csvText) {
  if (!window.CORE_LEXICON || !csvText) return;

  // 1. 建立既有單字索引，避免重複加入同一個詞素條目
  const lexMap = new Map();
  window.CORE_LEXICON.forEach(entry => {
    const existingSet = new Set(entry[5].map(item => item[0].toLowerCase()));
    lexMap.set(entry[0], { entry, existingSet });
  });

  function addWord(id, word, pos, breakdown, meaning) {
    const target = lexMap.get(id);
    if (!target) return;
    const key = word.toLowerCase();
    if (target.existingSet.has(key)) return;
    target.existingSet.add(key);
    target.entry[5].push([word, pos, breakdown, meaning]);
  }

  // 2. 高頻構詞規律對照表（涵蓋字首、字根、字尾）
  const rules = [
    // 字首 Prefijos
    ["pre-anti", /^anti(?=[a-záéíóúüñ]{4,})/i, "anti- (反對/抗) + 詞根"],
    ["pre-auto", /^auto(?=[a-záéíóúüñ]{4,})/i, "auto- (自己/自動) + 詞根"],
    ["pre-contra", /^contra(?=[a-záéíóúüñ]{4,})/i, "contra- (反對/相反) + 詞根"],
    ["pre-des", /^(des|dis)(?=[a-záéíóúüñ]{4,})/i, "des-/dis- (否定/分離) + 詞根"],
    ["pre-entre", /^(entre|inter)(?=[a-záéíóúüñ]{4,})/i, "entre-/inter- (之間/相互) + 詞根"],
    ["pre-extra", /^extra(?=[a-záéíóúüñ]{4,})/i, "extra- (之外/額外) + 詞根"],
    ["pre-sobre", /^(sobre|super|supra)(?=[a-záéíóúüñ]{4,})/i, "sobre-/super- (在…之上/過度) + 詞根"],
    ["pre-sub", /^(sub|sus)(?=[a-záéíóúüñ]{4,})/i, "sub-/sus- (在…之下) + 詞根"],
    ["pre-tele", /^tele(?=[a-záéíóúüñ]{4,})/i, "tele- (遠距離) + 詞根"],
    ["pre-trans", /^(trans|tras)(?=[a-záéíóúüñ]{4,})/i, "trans-/tras- (橫越/轉變) + 詞根"],

    // 字尾 Sufijos
    ["suf-cion", /(ción|sión)$/i, "動詞詞幹 + -ción/-sión (動作/結果名詞)"],
    ["suf-dad", /(dad|tad|tud)$/i, "形容詞詞幹 + -dad/-tad (抽象性質名詞)"],
    ["suf-miento", /(miento|mento)$/i, "動詞詞幹 + -miento/-mento (行為/結果)"],
    ["suf-ancia", /(ancia|encia|anza)$/i, "詞幹 + -ancia/-encia/-anza (狀態/性質)"],
    ["suf-ez", /(ez|eza)$/i, "形容詞詞幹 + -ez/-eza (特質名詞)"],
    ["suf-ura", /(ura|tura)$/i, "詞幹 + -ura (狀態/結果名詞)"],
    ["suf-ismo", /ismo$/i, "詞幹 + -ismo (主義/運動/學說)"],
    ["suf-ista", /ista$/i, "詞幹 + -ista (職業/主義者/愛好者)"],
    ["suf-dor", /(dor|dora|tor|sor|tora|sora)$/i, "動詞詞幹 + -dor/-tor (執行者/機器/場所)"],
    ["suf-ero", /(ero|era|ería)$/i, "名詞詞幹 + -ero/-ería (職業/容器/商店)"],
    ["suf-aje", /aje$/i, "詞幹 + -aje (行為/集合/費用)"],
    ["suf-ario", /(ario|aria|orio|oria)$/i, "詞幹 + -ario/-orio (場所/職業/相關形容詞)"],
    ["suf-ado", /(ado|ada|ido|ida)$/i, "動詞詞幹 + -ado/-ido (狀態形容詞/行為名詞)"],
    ["suf-able", /(able|ible)$/i, "動詞詞幹 + -able/-ible (能夠被…的)"],
    ["suf-oso", /(oso|osa)$/i, "名詞詞幹 + -oso/-osa (充滿…特質的)"],
    ["suf-ante", /(ante|ente|iente)$/i, "動詞詞幹 + -ante/-ente (執行者/性質形容詞)"],
    ["suf-al", /(al|ar)$/i, "名詞詞幹 + -al/-ar (屬於…的/場所)"],
    ["suf-ico", /(ico|ica|ático|ática)$/i, "詞幹 + -ico/-ático (與…有關的)"],
    ["suf-ivo", /(ivo|iva)$/i, "詞幹 + -ivo/-iva (傾向於…的)"],
    ["suf-escente", /(escente|ecer)$/i, "詞幹 + -ecer/-escente (開始進入某狀態)"],
    ["suf-izar", /(izar|ificar)$/i, "詞幹 + -izar/-ificar (使成為…/使…化)"],
    ["suf-ear", /ear$/i, "名詞/形容詞詞幹 + -ear (動作化動詞)"],
    ["suf-mente", /mente$/i, "陰性形容詞 + -mente (副詞 -ly)"],
    ["suf-ito", /(ito|ita|illo|illa|ín)$/i, "名詞/形容詞詞幹 + -ito/-illo/-ín (指小詞)"],
    ["suf-on", /(ón|ona|azo|aza|ote)$/i, "詞幹 + -ón/-azo/-ote (指大詞/猛烈動作)"],
    ["suf-logia", /(logía|logo|loga|grafía|metría)$/i, "希臘詞根 + -logía/-grafía (學科/專家)"]
  ];

  // 3. 解析 CSV 並自動歸類
  const lines = csvText.split(/\r?\n/).slice(1);
  for (const line of lines) {
    if (!line.trim()) continue;
    const parts = line.split(",");
    if (parts.length < 2) continue;
    const rawSp = parts[0].replace(/^"|"$/g, "").trim();
    const rawEn = parts.slice(1).join(",").replace(/^"|"$/g, "").trim();

    let pos = "n./adj.";
    if (/^(el\/la|los\/las|el|la|los|las|un|una|unos|unas)\s+/i.test(rawSp)) pos = "n.";
    else if (/^to\s+/i.test(rawEn)) pos = "v.";
    else if (/mente$/i.test(rawSp)) pos = "adv.";

    const cleanSp = rawSp.replace(/^(el\/la|los\/las|el|la|los|las|un|una|unos|unas)\s+/i, "").trim();
    if (!/^[a-záéíóúüñ]+$/i.test(cleanSp) || cleanSp.length < 4) continue;

    if (pos === "n./adj.") {
      if (/(ar|er|ir|arse|erse|irse)$/i.test(cleanSp)) pos = "v.";
      else if (/(ción|sión|dad|tad|miento|mento|ez|eza|ncia|nza|ismo|ería|aje|ura)$/i.test(cleanSp)) pos = "n.";
      else if (/(ble|oso|osa|ivo|iva|ico|ica|ante|ente|iente|ado|ada|ido|ida)$/i.test(cleanSp)) pos = "adj.";
    }

    for (const [id, regex, breakdown] of rules) {
      if (regex.test(cleanSp)) {
        addWord(id, cleanSp, pos, breakdown, rawEn);
      }
    }
  }
})(window.TRANSLATION_LINKS_CSV || "");
