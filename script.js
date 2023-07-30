FamilyTree.templates.base.defs =
    `<g transform="matrix(0.05,0,0,0.05,-12,-9)" id="heart">
        <path fill="#aeaeae" d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909  l-8.431-8.909C181.284,5.762,98.663,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778 c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654 c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z"/>
        </g>
     <g transform="matrix(1,0,0,1,0,0)" id="dot"></g>
      <g id="base_node_menu" style="cursor:pointer;">
          <rect x="0" y="0" fill="transparent" width="22" height="22"></rect>
          <circle cx="4" cy="11" r="2" fill="#b1b9be"></circle>
          <circle cx="11" cy="11" r="2" fill="#b1b9be"></circle>
          <circle cx="18" cy="11" r="2" fill="#b1b9be"></circle>
      </g>
      <g style="cursor: pointer;" id="base_tree_menu">
          <rect x="0" y="0" width="25" height="25" fill="transparent"></rect>
          ${FamilyTree.icon.addUser(25, 25, '#fff', 0, 0)}
      </g>
      <g style="cursor: pointer;" id="base_tree_menu_close">
          <circle cx="12.5" cy="12.5" r="12" fill="#F57C00"></circle>
          ${FamilyTree.icon.close(25, 25, '#fff', 0, 0)}
      </g>            
      <g id="base_up">
          <circle cx="115" cy="30" r="15" fill="#fff" stroke="#b1b9be" stroke-width="1"></circle>
          ${FamilyTree.icon.ft(20, 80, '#b1b9be', 105, -10)}
      </g>
      <clipPath id="base_img_0">
        <circle id="base_img_0_stroke" cx="45" cy="62" r="35"/>
      </clipPath>
      <clipPath id="base_img_1">
        <circle id="base_img_1_stroke" cx="100" cy="62" r="35"/>
      </clipPath>
      `;

FamilyTree.templates.main = Object.assign({}, FamilyTree.templates.base);
FamilyTree.templates.main.defs = `<style>
                                        .{randId} .bft-edit-form-header, .{randId} .bft-img-button{
                                            background-color: #aeaeae;
                                        }
                                        .{randId}.male .bft-edit-form-header, .{randId}.male .bft-img-button{
                                            background-color: #6bb4df;
                                        }        
                                        .{randId}.male div.bft-img-button:hover{
                                            background-color: #cb4aaf;
                                        }
                                        .{randId}.female .bft-edit-form-header, .{randId}.female .bft-img-button{
                                            background-color: #cb4aaf;
                                        }        
                                        .{randId}.female div.bft-img-button:hover{
                                            background-color: #6bb4df;
                                        }
    </style>`;
FamilyTree.templates.main.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="3" stroke="#ccc" rx="5" ry="5"></rect>' +
    '<rect x="0" y="0" height="20" width="{w}" fill="#b1b9be" stroke-width="1" stroke="#b1b9be" rx="5" ry="5"></rect>' +
    '<line x1="0" y1="20" x2="250" y2="20" stroke-width="5" stroke="#b1b9be"></line>';

FamilyTree.templates.main.field_0 =
    '<text ' + FamilyTree.attr.width + ' ="250" style="font-size: 14px;" font-variant="all-small-caps" fill="white" x="125" y="16" text-anchor="middle">{val}</text>';
FamilyTree.templates.main.field_1 =
    '<text ' + FamilyTree.attr.width + ' ="160" data-text-overflow="multiline" style="font-size: 14px;" fill="black" x="100" y="66" text-anchor="start">{val}</text>';
FamilyTree.templates.main.field_2 =
    '<text ' + FamilyTree.attr.width + ' ="160" style="font-size: 10px;" fill="#b1b9be" x="100" y="95" text-anchor="start">{val}</text>';
FamilyTree.templates.main.field_3 =
    '<text ' + FamilyTree.attr.width + ' ="60" style="font-size: 12px;" fill="black" x="47" y="112" text-anchor="middle">{val}</text>';
FamilyTree.templates.main.img_0 =
    `<use xlink:href="#base_img_0_stroke" /> 
       <circle id="base_img_0_stroke" fill="#b1b9be" cx="45" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_0)" xlink:href="{val}" x="10" y="26" width="72" height="72"></image>`;
FamilyTree.templates.main_male = Object.assign({}, FamilyTree.templates.main);
FamilyTree.templates.main_male.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="3" stroke="#6bb4df" rx="5" ry="5"></rect>' +
    '<rect x="0" y="0" height="20" width="{w}" fill="#6bb4df" stroke-width="1" stroke="#6bb4df" rx="5" ry="5"></rect>' +
    '<line x1="0" y1="20" x2="250" y2="20" stroke-width="5" stroke="#6bb4df"></line>';
FamilyTree.templates.main_male.img_0 =
    `<use xlink:href="#base_img_0_stroke" /> 
       <circle id="base_img_0_stroke" fill="#6bb4df" cx="45" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_0)" xlink:href="{val}" x="10" y="26" width="72" height="72"></image>`;
FamilyTree.templates.main_male_child = Object.assign({}, FamilyTree.templates.main_male);
FamilyTree.templates.main_male_child.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';

FamilyTree.templates.main_female = Object.assign({}, FamilyTree.templates.main_male);
FamilyTree.templates.main_female.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="3" stroke="#cb4aaf" rx="5" ry="5"></rect>' +
    '<rect x="0" y="0" height="20" width="{w}" fill="#cb4aaf" stroke-width="1" stroke="#cb4aaf" rx="5" ry="5"></rect>' +
    '<line x1="0" y1="20" x2="250" y2="20" stroke-width="5" stroke="#cb4aaf"></line>';
FamilyTree.templates.main_female.img_0 =
    `<use xlink:href="#base_img_0_stroke" /> 
       <circle id="base_img_0_stroke" fill="#cb4aaf" cx="45" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_0)" xlink:href="{val}" x="10" y="26" width="72" height="72"></image>`;
FamilyTree.templates.main_female_child = Object.assign({}, FamilyTree.templates.main_female);
FamilyTree.templates.main_female_child.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';

FamilyTree.templates.single = Object.assign({}, FamilyTree.templates.tommy);
FamilyTree.templates.single.size = [200, 200];
FamilyTree.templates.single.defs = `<style>
                                        .{randId} .bft-edit-form-header, .{randId} .bft-img-button{
                                            background-color: #aeaeae;
                                        }
                                        .{randId}.male .bft-edit-form-header, .{randId}.male .bft-img-button{
                                            background-color: #6bb4df;
                                        }        
                                        .{randId}.male div.bft-img-button:hover{
                                            background-color: #cb4aaf;
                                        }
                                        .{randId}.female .bft-edit-form-header, .{randId}.female .bft-img-button{
                                            background-color: #cb4aaf;
                                        }        
                                        .{randId}.female div.bft-img-button:hover{
                                            background-color: #6bb4df;
                                        }
    </style>`;
FamilyTree.templates.single.node =
    '<circle cx="100" cy="100" r="100" fill="white" stroke-width="1" stroke="#aeaeae"></circle>';
FamilyTree.templates.single.field_0 = '<text ' + FamilyTree.attr.width + ' ="160" style="font-size: 14px;" font-variant="all-small-caps"  font-weight="bold" fill="black" x="100" y="115" text-anchor="middle">{val}</text>';
FamilyTree.templates.single.field_1 = '<text ' + FamilyTree.attr.width + ' ="190" data-text-overflow="multiline" style="font-size: 16px;" fill="black" x="100" y="135" text-anchor="middle">{val}</text>';
FamilyTree.templates.single.field_3 =
    '<text ' + FamilyTree.attr.width + ' ="60" style="font-size: 12px;" fill="black" x="100" y="180" text-anchor="middle">{val}</text>';
FamilyTree.templates.single.nodeMenuButton = `<use ${FamilyTree.attr.control_node_menu_id}="{id}" x="89" y="5" xlink:href="#base_node_menu" />`;
FamilyTree.templates.single_male = Object.assign({}, FamilyTree.templates.single);
FamilyTree.templates.single_male.node = '<circle cx="100" cy="100" r="100" fill="white" stroke-width="3" stroke="#6bb4df" ></circle>';
FamilyTree.templates.single_male.img_0 =
    `<use xlink:href="#base_img_1_stroke"/> 
       <circle id="base_img_1_stroke" fill="#6bb4df" cx="100" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_1)" xlink:href="{val}" x="65" y="26" width="72" height="72"></image>`;
FamilyTree.templates.single_female = Object.assign({}, FamilyTree.templates.single_male);
FamilyTree.templates.single_female.node = '<circle cx="100" cy="100" r="100" fill="white" stroke-width="3" stroke="#cb4aaf" ></circle>';
FamilyTree.templates.single_female.img_0 =
    `<use xlink:href="#base_img_1_stroke"/> 
       <circle id="base_img_1_stroke" fill="#cb4aaf" cx="100" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_1)" xlink:href="{val}" x="65" y="26" width="72" height="72"></image>`;

FamilyTree.templates.family_single_male = Object.assign({}, FamilyTree.templates.single_male);
FamilyTree.templates.family_single_male.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';
FamilyTree.templates.family_single_female = Object.assign({}, FamilyTree.templates.single_female);
FamilyTree.templates.family_single_female.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';

var family = new FamilyTree(document.getElementById("tree"), {
    template: "main",
    scaleInitial: FamilyTree.match.boundary,
    mouseScrool: FamilyTree.action.none,
    nodeMenu: {
        details: { text: "Details" }
    },
    nodeBinding: {
        field_0: "relationship",
        field_1: "name",
        field_2: "bdate",
        field_3: "id",
        img_0: "img",
    },
    editForm: {
        buttons: {
            edit: null,
            share: {
                icon: FamilyTree.icon.share(24, 24, '#fff'),
                text: 'Share'
            },
            pdf: {
                icon: FamilyTree.icon.pdf(24, 24, '#fff'),
                text: 'Save as PDF'
            },
            remove: {
                icon: FamilyTree.icon.remove(24, 24, '#fff'),
                text: 'Remove',
                hideIfDetailsMode: true
            }
        }
    },
    orderBy: "orderId",
    tags: {
        "single_male": {
            template: "single_male"
        },
        "single_female": {
            template: "single_female"
        },
        "main_female_child": {
            template: "main_female_child"
        },
        "main_male_child": {
            template: "main_male_child"
        },
        "family_single_female": {
            template: "family_single_female"
        },
        "family_single_male": {
            template: "family_single_male"
        }
    }
});

family.on('render-link', function (sender, args) {
    if (args.cnode.ppid != undefined) {
        args.html += '<use xlink:href="#heart" x="' + args.p.xa + '" y="' + args.p.ya + '"/>';
    }
});

family.on('field', function (sender, args) {
    if (args.name == "bdate") {
        if (args.data["ddate"]) {
            var bdate = args.data["bdate"];
            var ddate = args.data["ddate"];
            args.value = bdate + " - " + ddate;
        }
        else args.value = "";
    }

});

family.load([
    { id: 0, pids: [1], name: "Mu See", bdate: 1883, ddate: 1966 },
    { id: 1, pids: [0], name: "Kwan Hong Keo",  bdate: 1865, ddate: 1942 },
	{ id: 10, fid:[0], mid:[1], name: "Stanley Young"},
	{ id: 110, pids:[111], fid:[10],  name: "Valmai Au"},
	{ id: 111, pids:[110],  name: "Samuel Au"},
	{ id: 1110, mid:[110], fid:[111], name: "Janine Au"},
	{ id: 1111, mid:[110], fid:[111], pids:[1500], name: "Roselyn Au"},
    { id: 1500, pids:[1111], name: "Uncle John"},
	{ id: 1112, mid:[110], fid:[111], pids:[1113],  name: "Geoffrey Au"},
	{ id: 1113, pids:[1112],  name: "Tue Nghi Au"},
	{ id: 11120, fid:[1112], mid:[1113], name: "Rebekah Au"},
	{ id: 11121, fid:[1112], mid:[1113], pids:[12001],  name: "Phoebe Au"},
	{ id: 11122, fid:[1112], mid:[1113], name: "Zachary Au"},
	{ id: 12001, pids:[11121], fid:[1200], mid:[1600], name: "Sebastien Higgs"},

    { id: 12, name: "Bill? Higgs"},
    { id: 120, pids:[130], fid:[12], name: "Brian Higgs"},
    { id: 130, pids:[120], name: "Elizabeth Higgs"},
    { id: 1200, fid:[120], mid:[130], pids:[1600], name: "Jonathan Higgs", bdate: 1967, ddate: 2017},
    { id: 1600, fid:[170], mid:[180], pids:[1200], name: "Flavienne Higgs"},
    { id: 12000, fid:[1200], mid:[1600], pids:[12003], name: "Baptiste Higgs"},
    { id: 12002, fid:[1200], mid:[1600], name: "Emeline Higgs"},
    { id: 12003, pids:[12000], name: "Talitha Higgs"},

    { id: 170, pids:[180, 175], name: "Daniel Lemoine"},
    { id: 175, pids:[170], name: "Jacqueline Lemoine"},
    { id: 180, pids:[170, 185], name: "Marie-France Fleurbeay"},
    { id: 185, pids:[180], name: "Michel"},

	{ id: 11, fid:[0], mid:[1], pids:[20], name: "Roger Young"},
	{ id: 2, name: "Joyce and Edna's Parents"},
	{ id: 20, fid:[2], pids:[11], name: "Edna"},
	{ id: 21, fid:[2], name: "Joyce"},
	{ id: 210, mid:[21], pids:[211], name: "Harvey Showyin"},
	{ id: 220, mid:[21], pids:[420], name: "Naomi Lum Mow"},
	{ id: 211, pids:[210], fid:[50], mid:[42], name: "Jennifer Showyin"},
	{ id: 2100, pids:[2101], mid:[211], fid:[210], name: "Jared Showyin"},
	{ id: 2101, pids:[2100], fid:[88], mid:[89], name: "Jackie Showyin"},

    { id: 19, fid:[0], mid:[1], pids:[30], name: "Cecil Young"},
    { id: 30, pids:[19], fid:[3], name: "Betty Young"},
    { id: 3, name: "Mr(s?) Betty Mavis"},
    { id: 31, fid:[3], name: "Mavis Fay"},
    { id: 310, mid:[31], pids:[510], name: "Gordon (Joe) Fay"},
    { id: 3100, fid:[310], name: "Nat Fay"},

	{ id: 4, name: "Mar Parents"},
	{ id: 40, fid:[4], name: "Harry Mar"},
	{ id: 41, fid:[4], name: "Alice"},
	{ id: 42, pids:[50], fid:[4], name: "Ivy Lum Mow"},
	{ id: 43, fid:[4], pids:[60], name: "Mabel Wong See"},
	{ id: 44, fid:[4], name: "Tom Mar"},

	{ id: 400, fid:[40], name: "Gordon Mar"},
	{ id: 401, fid:[40], name: "May Mar"},
	{ id: 402, fid:[40], name: "Albert Mar"},
	{ id: 403, fid:[40], name: "Bill Mar"},
	{ id: 404, fid:[40], name: "John Mar"},

	{ id: 4030, fid:[403], name: "Mr Mar"},
	{ id: 40300, fid:[4030], name: "Matthias Mar"},

    { id: 5, name: "Mr Lum Mow"},

    { id: 50, pids:[42], fid:[5], name: "Henry Lum Mow"},
	{ id: 420, fid:[50], mid:[42], pids:[220], name: "Ray Lum Mow"},
	{ id: 422, fid:[50], mid:[42], name: "Maureen"},
    { id: 51, pids:[52], fid:[5], name: "Mr ??"},
    { id: 52, pids:[51], name: "Mrs ??"},
    { id: 510, mid:[51], fid:[52], pids:[310], name: "Virginia Fay"},

    { id: 421, fid:[50], mid:[42], pids:[440], name: "Geoff Lum Mow"},
    { id: 440, pids:[421], name: "Felicity Lum Mow"},
    { id: 4210, fid:[421], mid:[440], name: "Alistair Lum Mow"},
    { id: 4211, fid:[421], mid:[440], name: "Josh Lum Mow"},
    { id: 4212, fid:[421], mid:[440], name: "Ethan Lum Mow"},
    { id: 4213, fid:[421], mid:[440], name: "Candace Lum Mow"},

    { id: 6, name: "Mr Mr Wong See"},
    { id: 60, pids:[43], fid:[6], name: "Colin Wong See"},

	{ id: 430, mid:[43], pids:[801], name: "Graeme Wong See"},
	{ id: 801, fid:[80], mid:[81], pids:[430], name: "Wendy Wong See"},
	{ id: 4300, fid:[430], mid:[801], pids:[4999], name: "Jonathan Wong See"},
	{ id: 4999, pids:[4300], name: "Yvonne Lam"},
	{ id: 4301, fid:[430], mid:[801], name: "Benjamin Wong See"},
	{ id: 4302, fid:[430], mid:[801], name: "Daniel Wong See"},

    { id: 61, fid:[6], name: "Manfred Wong See"},
    { id: 610, pids:[700], fid:[61], name: "Linda Chen"},
    { id: 700, pids:[610], name: "Michael Chen"},
    { id: 7000, fid:[700], mid:[610], pids:[7100], name: "Annelise Kelly"},
    { id: 7100, pids:[7000], name: "Wilson Kelly"},

    { id: 80, pids:[81], name: "George Gock"},
    { id: 81, pids:[80], name: "Mary Gock"},
    { id: 800, fid:[80], mid:[81], name: "Ivy Yee"},
    { id: 802, pids:[820], fid:[80], mid:[81], name: "Wayland Gock"},
    { id: 820, pids:[802], fid:[88], mid:[89], name: "Amy Gock"},
    { id: 803, pids:[830], fid:[80], mid:[81], name: "Amy Chan"},
    { id: 830, pids:[803], name: "Charles Chan"},

    { id: 88, pids:[89], name: "Amy Jackie Parent"},
    { id: 89, pids:[88], name: "Amy n Jackie Parent"},

    { id: 8200, pids:[8210], fid:[820], mid:[802], name: "Stuart Gock"},
    { id: 8201, fid:[820], mid:[802], pids:[8900], name: "Megan 🤔"},
    { id: 8900, pids:[8201], name: "🤷🤔"},
    { id: 8202, fid:[820], mid:[802], name: "Peter Gock"},

    { id: 8300, pids:[8310], fid:[830], mid:[803], name: "Adam Chan"},
    { id: 8310, pids:[8300], name: "Yuhui"},
    { id: 8301, fid:[830], mid:[803], name: "Justin Chan"},
    { id: 8302, fid:[830], mid:[803], name: "Emma Chan"},
]);
