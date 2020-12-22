import { Injectable } from '@angular/core';

@Injectable()
export class NovelsProvider {

  constructor() {
    
  }
  novels = {
    fantasy:[
      {
        novelID: "100000",
        Uid: "00000",
        nickName: "sdasdas",
        title: "Ut vel aliquet lectus",
        type: "Fantasy",
        tags: ["Fantasy", "sdakwh", "sdanwalf"],
        cover: "",
        collections: false,
        bookmarks: false,
        caption: `Suspendisse vestibulum lectus ut tincidunt sodales. Maecenas venenatis mi quis scelerisque cursus. In accumsan scelerisque gravida. Donec lacinia metus odio. Maecenas fermentum, diam a laoreet sollicitudin, odio massa volutpat augue, gravida imperdiet est mauris dapibus sem. Suspendisse congue dolor nec aliquet vulputate. Fusce at velit vel nunc ultricies maximus. Cras tincidunt tempor risus, a feugiat odio feugiat sed.

        Etiam pharetra ante in nulla tempus mollis. Nulla eu lorem at tortor luctus eleifend. Pellentesque quis diam non est porttitor tincidunt non vel eros. Proin iaculis efficitur placerat. Sed dui lorem, varius et mollis a, lacinia et velit. Quisque sed tincidunt elit. Phasellus a sem sapien.`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra eros ut dui tincidunt venenatis. Nulla id quam lectus. Pellentesque volutpat, urna sit amet pretium convallis, massa tellus placerat leo, et pharetra sapien dui non magna. Praesent venenatis nibh non diam porta, quis gravida augue fermentum. Pellentesque ac enim eget purus dapibus consequat. Sed finibus erat arcu, ut accumsan arcu commodo id. Curabitur ut dui id mi pharetra tincidunt sit amet id dui. Aliquam ullamcorper leo mauris. Donec eu diam et tortor malesuada aliquet. Ut vel euismod arcu. Sed porttitor nisl vitae felis porta iaculis. Donec ullamcorper varius velit in mattis. Maecenas gravida feugiat diam vitae dapibus.

        In fringilla metus quis diam laoreet molestie. Fusce et ante vitae eros tristique ornare eget in ipsum. Nunc sit amet tristique urna. Morbi interdum, felis laoreet luctus varius, neque massa sollicitudin quam, eget hendrerit urna eros non odio. Sed eget metus felis. Donec suscipit, nulla vel molestie blandit, urna nibh fringilla enim, non maximus nisl ex id mi. Proin quis nunc non orci facilisis 

        Curabitur malesuada eu libero ac dictum. Mauris erat nunc, sodales non mi quis, molestie tincidunt risus. Vestibulum auctor, tellus eu imperdiet consequat, nibh sapien fermentum purus, sed semper urna orci at justo. Donec ultricies volutpat malesuada. Maecenas condimentum cursus mi eu egestas. Phasellus condimentum dui at imperdiet interdum. Cras tincidunt erat in diam imperdiet, at eleifend turpis lobortis. Phasellus volutpat sem at lobortis euismod. Ut in malesuada elit. Nullam vel maximus nisi, at porttitor sapien. Quisque condimentum lorem ut dolor luctus, id faucibus mi elementum. Nulla laoreet ut enim sit amet tempor. Aenean nec mauris convallis, dictum lacus nec, accumsan nibh.

        Suspendisse vulputate arcu in orci elementum laoreet. Phasellus at fringilla tortor, ultrices consectetur ex. Donec vel tortor gravida, egestas mauris ac, bibendum turpis. Aenean dignissim justo a felis pulvinar suscipit. Curabitur commodo lacinia sapien, in venenatis risus cursus vitae. Ut a faucibus ante. Donec vel laoreet neque. Mauris ac odio dolor. Proin felis eros, euismod sit amet luctus nec, egestas ac augue. Aliquam vel tincidunt massa. Quisque placerat, sem in tempor congue, tortor sem condimentum lectus, eu rhoncus ante enim eget mi. Nam ex orci, fringilla in felis vel, lobortis pellentesque velit. Quisque at fringilla nulla. Nullam non sapien et tellus consectetur varius. Nam facilisis ac lacus sit amet suscipit.

        Aenean egestas ullamcorper eros et sagittis. Sed molestie arcu tristique risus congue dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel neque non libero laoreet dignissim. Nunc quis nulla eu velit varius consectetur. In accumsan lorem ac lorem pellentesque hendrerit. Fusce scelerisque iaculis dolor non viverra. Phasellus iaculis nibh ut consectetur volutpat.`,
        comments: [
          {nickName: "sdahjwd", comment: "dsajwkajdskdjalf"},{nickName: "sdahjwd", comment: "dsajwkajdskdjalf"}
        ],
        likes: 121
      }
    ],
    romance:[
      {
        novelID: "100001",
        Uid: "00000",
        nickName: "sdasdas",
        title: "Maecenas",
        type: "Romance",
        tags: ["Romance", "sdakwh", "sdanwalf"],
        cover: "",
        collections: false,
        bookmarks: false,
        caption: `Integer iaculis neque nec risus efficitur, id mollis ex tempus. Pellentesque magna tortor, dignissim vitae sodales vitae, bibendum et elit. Nulla at turpis augue. Vivamus lobortis odio quis dapibus condimentum. Duis elit ipsum, pharetra sed velit pharetra, euismod consectetur mi. Sed sit amet tempus enim. Phasellus rutrum erat suscipit risus imperdiet dictum. Donec ultrices sem et sapien placerat, quis fringilla odio luctus. Sed et mollis eros. Nulla consequat sodales erat, et dignissim tortor volutpat et. Vestibulum a purus sollicitudin, pellentesque ante in, placerat quam. Nullam consectetur dapibus mauris a tempor. Suspendisse potenti. Fusce consectetur, arcu vitae feugiat porta, purus metus tincidunt erat, ac congue sapien tellus at nunc.`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus massa, cursus at hendrerit lacinia, pretium ut libero. Aenean efficitur volutpat metus in tincidunt. Vivamus fermentum tortor et turpis varius semper. Cras et massa in eros hendrerit maximus. Sed gravida lacus sed ante auctor tempus. Quisque eget magna est. Suspendisse a diam vel risus luctus finibus. Proin suscipit laoreet facilisis. Vivamus laoreet semper imperdiet. Proin cursus magna sed est consequat, at congue mi elementum. Mauris congue luctus commodo. Vestibulum a vestibulum mauris. Etiam cursus elit nec turpis finibus volutpat. Donec et nulla justo.

        Integer iaculis neque nec risus efficitur, id mollis ex tempus. Pellentesque magna tortor, dignissim vitae sodales vitae, bibendum et elit. Nulla at turpis augue. Vivamus lobortis odio quis dapibus condimentum. Duis elit ipsum, pharetra sed velit pharetra, euismod consectetur mi. Sed sit amet tempus enim. Phasellus rutrum erat suscipit risus imperdiet dictum. Donec ultrices sem et sapien placerat, quis fringilla odio luctus. Sed et mollis eros. Nulla consequat sodales erat, et dignissim tortor volutpat et. Vestibulum a purus sollicitudin, pellentesque ante in, placerat quam. Nullam consectetur dapibus mauris a tempor. Suspendisse potenti. Fusce consectetur, arcu vitae feugiat porta, purus metus tincidunt erat, ac congue sapien tellus at nunc.
        
        Ut vel aliquet lectus. Sed consequat augue eget massa convallis euismod. Mauris a augue efficitur, aliquet augue nec, commodo nisi. Vivamus imperdiet velit tellus, ac commodo turpis mattis vitae. Nulla neque erat, facilisis id orci at, ornare vulputate eros. Maecenas sodales quam odio, id rhoncus lorem rhoncus laoreet. Nullam sed libero at sem pharetra pretium aliquet sit amet magna. Etiam urna purus, dapibus ut semper sit amet, luctus scelerisque lorem.
        
        Suspendisse vestibulum lectus ut tincidunt sodales. Maecenas venenatis mi quis scelerisque cursus. In accumsan scelerisque gravida. Donec lacinia metus odio. Maecenas fermentum, diam a laoreet sollicitudin, odio massa volutpat augue, gravida imperdiet est mauris dapibus sem. Suspendisse congue dolor nec aliquet vulputate. Fusce at velit vel nunc ultricies maximus. Cras tincidunt tempor risus, a feugiat odio feugiat sed.
        
        Etiam pharetra ante in nulla tempus mollis. Nulla eu lorem at tortor luctus eleifend. Pellentesque quis diam non est porttitor tincidunt non vel eros. Proin iaculis efficitur placerat. Sed dui lorem, varius et mollis a, lacinia et velit. Quisque sed tincidunt elit. Phasellus a sem sapien.
        
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vel maximus odio. In id justo feugiat, fermentum purus at, fermentum mauris. Sed fringilla aliquet purus, sed porttitor nisi faucibus efficitur. Proin a lobortis arcu. Nam volutpat, est mollis ultricies blandit, sem dolor lobortis purus, sit amet placerat felis ligula sed augue. Etiam purus est, ultrices ac dolor eget, tempus maximus nibh. Proin rhoncus lobortis sodales. Sed in malesuada erat, eget maximus lorem. Ut volutpat eleifend condimentum. Morbi massa lacus, aliquet vitae velit ut, rhoncus imperdiet dui. Aenean ut nisi sed enim placerat blandit non in ante. Integer ornare facilisis neque, quis rutrum mi condimentum at. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        comments: [
          {nickName: "sdahjwd", comment: "dsajwkajdskdjalf"},{nickName: "sdahjwd", comment: "dsajwkajdskdjalf"}
        ],
        likes: 2
      },
      {
        novelID: "100002",
        Uid: "00022",
        nickName: "sdasdas",
        title: "Fusce at velit",
        type: "Romance",
        tags: ["Romance", "sdakwh", "sdanwalf"],
        cover: "",
        collections: false,
        bookmarks: false,
        caption: "Etiam pharetra ante in nulla tempus mollis. Nulla eu lorem at tortor luctus eleifend. Pellentesque quis diam non est porttitor tincidunt non vel eros. Proin iaculis efficitur placerat. Sed dui lorem, varius et mollis a, lacinia et velit. Quisque sed tincidunt elit. Phasellus a sem sapien.",
        content: `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vel maximus odio. In id justo feugiat, fermentum purus at, fermentum mauris. Sed fringilla aliquet purus, sed porttitor nisi faucibus efficitur. Proin a lobortis arcu. Nam volutpat, est mollis ultricies blandit, sem dolor lobortis purus, sit amet placerat felis ligula sed augue. Etiam purus est, ultrices ac dolor eget, tempus maximus nibh. Proin rhoncus lobortis sodales. Sed in malesuada erat, eget maximus lorem. Ut volutpat eleifend condimentum. Morbi massa lacus, aliquet vitae velit ut, rhoncus imperdiet dui. Aenean ut nisi sed enim placerat blandit non in ante. Integer ornare facilisis neque, quis rutrum mi condimentum at. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

        Cras sed velit ut magna molestie rhoncus vel vitae arcu. Suspendisse nec lorem quis ante maximus fermentum sed a odio. Integer justo tortor, sodales ac molestie eget, eleifend at nulla. Nullam lorem turpis, dapibus interdum lorem quis, dapibus auctor velit. Nulla facilisi. Nulla iaculis, enim et dignissim sagittis, tortor odio feugiat nibh, sit amet sagittis augue ligula id lorem. Maecenas quam nibh, lacinia et odio quis, cursus mollis tellus. Pellentesque iaculis ullamcorper libero at venenatis. Nam fringilla ipsum in suscipit sagittis. Morbi pharetra posuere accumsan. Quisque eget est massa. Donec imperdiet ex et nulla accumsan, a molestie libero pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur ligula arcu, vitae dapibus dolor viverra id. Nunc a porta arcu. Vestibulum pulvinar, leo vel cursus sodales, mi diam vehicula diam, tempus posuere tellus dui a nulla.`,
        comments: [],
        likes: 132
      }
    ],
    scifi: [
      {
        novelID: "100010",
        Uid: "00000",
        nickName: "sdasdas",
        title: "Aliquam",
        type: "Sci-fi",
        tags: ["scifi", "sdakwh", "sdanwalf"],
        cover: "",
        collections: false,
        bookmarks: false,
        caption: `Ut lobortis ac lectus vel vestibulum. Vivamus pulvinar est metus. Vivamus scelerisque efficitur erat nec vehicula. Nunc varius neque neque, eu suscipit enim placerat vel. Maecenas et orci ligula. Maecenas tincidunt purus elit, ut eleifend lorem placerat et. Nulla non risus a justo aliquam vehicula eget scelerisque tellus. Aenean eleifend viverra ante, ac malesuada libero elementum ut.`,
        content: `Curabitur aliquet, augue et commodo vehicula, ante risus aliquam lorem, in hendrerit ante nibh porttitor nunc. Nam vel volutpat mauris, eget pretium mi. Nulla rutrum enim ligula, vitae mattis mauris malesuada vitae. Praesent sed faucibus ipsum. Etiam facilisis, enim eu ornare finibus, tortor velit tincidunt nisi, sed eleifend mauris nulla non magna. Curabitur ornare est in nibh dignissim consectetur. Pellentesque non est ut ipsum finibus placerat in eu dui. Nunc faucibus erat ut neque scelerisque pulvinar. In ac congue massa, et ultrices justo. Mauris fringilla risus nisl, id aliquet ex accumsan at.

        In venenatis diam ut scelerisque ultrices. Ut nec enim mauris. Suspendisse et ante et risus ultrices aliquam eget in nisl. Pellentesque consectetur volutpat eros, at imperdiet orci varius nec. Nullam euismod ipsum sit amet urna venenatis tincidunt. Duis lacus tortor, convallis quis ante non, volutpat posuere lectus. In pretium semper lacus, vel volutpat metus dignissim lacinia. Quisque vestibulum ipsum nibh, maximus vehicula eros tempus non. Duis interdum quam eget vulputate rhoncus. Morbi tempor a magna in eleifend. Aenean erat nibh, dapibus id mattis feugiat, lacinia in mauris. Etiam finibus erat vitae imperdiet volutpat. In pharetra dolor id metus sollicitudin efficitur. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec odio tortor, cursus vel quam non, ultricies laoreet risus.
        
        Nam dapibus quis tortor quis porttitor. Donec vehicula non leo at varius. Sed in consectetur turpis. Cras blandit sem sed metus efficitur elementum. In vel metus vitae nibh sagittis facilisis. Nunc vitae sodales purus, et vehicula est. Curabitur nibh libero, auctor sit amet maximus lacinia, lobortis nec nunc. Sed scelerisque vehicula nibh, quis vulputate elit posuere nec. Sed fringilla est nec sagittis iaculis. Sed convallis ante nec mi finibus, ut lacinia tellus porta. Morbi accumsan lacus nec turpis posuere ultrices. Nulla tristique, mi eu pellentesque vulputate, metus turpis placerat tortor, vitae placerat justo dui at purus.
        
        Aliquam in varius ex. Vivamus ultrices nisi lorem, vel hendrerit erat facilisis nec. Aliquam augue leo, porta non justo at, condimentum varius nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis pulvinar sem. Sed ut dolor neque. Donec nec dui accumsan, cursus lorem a, feugiat nunc. Phasellus volutpat, quam non rutrum vehicula, nisl augue dignissim erat, sit amet volutpat ante mi a dui. Pellentesque sit amet iaculis nisi. Morbi varius ipsum a enim posuere sollicitudin. Sed vehicula risus at tellus suscipit, non semper sem tempor. Maecenas venenatis vestibulum ultricies.`,
        comments: [
          {nickName: "sdahjwd", comment: "dsajwkajdskdjalf"},{nickName: "sdahjwd", comment: "dsajwkajdskdjalf"}
        ],
        likes: 1151
      },
      {
        novelID: "101010",
        Uid: "00022",
        nickName: "sdasdas",
        title: "Pellentesque consectetur",
        type: "Sci-fi",
        tags: ["scifi", "sdakwh", "sdanwalf"],
        cover: "",
        collections: false,
        bookmarks: false,
        caption: "Nam dapibus quis tortor quis porttitor. Donec vehicula non leo at varius. Sed in consectetur turpis. Cras blandit sem sed metus efficitur elementum. In vel metus vitae nibh sagittis facilisis.",
        content: `In venenatis diam ut scelerisque ultrices. Ut nec enim mauris. Suspendisse et ante et risus ultrices aliquam eget in nisl. Pellentesque consectetur volutpat eros, at imperdiet orci varius nec. Nullam euismod ipsum sit amet urna venenatis tincidunt. Duis lacus tortor, convallis quis ante non, volutpat posuere lectus. In pretium semper lacus, vel volutpat metus dignissim lacinia. Quisque vestibulum ipsum nibh, maximus vehicula eros tempus non. Duis interdum quam eget vulputate rhoncus. Morbi tempor a magna in eleifend. Aenean erat nibh, dapibus id mattis feugiat, lacinia in mauris. Etiam finibus erat vitae imperdiet volutpat. In pharetra dolor id metus sollicitudin efficitur. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec odio tortor, cursus vel quam non, ultricies laoreet risus.
        
        Nam dapibus quis tortor quis porttitor. Donec vehicula non leo at varius. Sed in consectetur turpis. Cras blandit sem sed metus efficitur elementum. In vel metus vitae nibh sagittis facilisis. Nunc vitae sodales purus, et vehicula est. Curabitur nibh libero, auctor sit amet maximus lacinia, lobortis nec nunc. Sed scelerisque vehicula nibh, quis vulputate elit posuere nec. Sed fringilla est nec sagittis iaculis. Sed convallis ante nec mi finibus, ut lacinia tellus porta. Morbi accumsan lacus nec turpis posuere ultrices. Nulla tristique, mi eu pellentesque vulputate, metus turpis placerat tortor, vitae placerat justo dui at purus.
        
        Aliquam in varius ex. Vivamus ultrices nisi lorem, vel hendrerit erat facilisis nec. Aliquam augue leo, porta non justo at, condimentum varius nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis pulvinar sem. Sed ut dolor neque. Donec nec dui accumsan, cursus lorem a, feugiat nunc. Phasellus volutpat, quam non rutrum vehicula, nisl augue dignissim erat, sit amet volutpat ante mi a dui. Pellentesque sit amet iaculis nisi. Morbi varius ipsum a enim posuere sollicitudin. Sed vehicula risus at tellus suscipit, non semper sem tempor. Maecenas venenatis vestibulum ultricies.`,
        comments: [],
        likes: 12
      }
    ],
    detective: [
      {
        novelID: "100011",
        Uid: "00000",
        nickName: "sdasdas",
        title: "Vivamus ultrices",
        type: "Detective",
        tags: ["detective", "sdakwh", "sdanwalf"],
        cover: "",
        collections: false,
        bookmarks: false,
        caption: "In lorem felis, aliquet quis risus nec, elementum rutrum erat. Praesent id sapien venenatis libero eleifend vestibulum ut at ex. Vestibulum facilisis pulvinar leo ut congue.",
        content: `Aliquam in varius ex. Vivamus ultrices nisi lorem, vel hendrerit erat facilisis nec. Aliquam augue leo, porta non justo at, condimentum varius nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis pulvinar sem. Sed ut dolor neque. Donec nec dui accumsan, cursus lorem a, feugiat nunc. Phasellus volutpat, quam non rutrum vehicula, nisl augue dignissim erat, sit amet volutpat ante mi a dui. Pellentesque sit amet iaculis nisi. Morbi varius ipsum a enim posuere sollicitudin. Sed vehicula risus at tellus suscipit, non semper sem tempor. Maecenas venenatis vestibulum ultricies.

        In lorem felis, aliquet quis risus nec, elementum rutrum erat. Praesent id sapien venenatis libero eleifend vestibulum ut at ex. Vestibulum facilisis pulvinar leo ut congue. Praesent tempor felis vitae leo imperdiet pharetra. Duis diam ex, cursus vel mattis eu, mollis et nunc. Nulla nec nulla nisl. Pellentesque sapien ligula, aliquet a tellus et, interdum scelerisque turpis. Nullam rhoncus sit amet libero at tempor. Praesent quis consequat augue. Aenean id pellentesque dui, convallis aliquet justo. Praesent auctor ligula et erat consequat congue.
        
        Pellentesque accumsan pharetra augue eu interdum. Curabitur sagittis dapibus sem, in porta sem. Proin bibendum justo vitae volutpat tempor. Suspendisse in felis eget nisi pharetra ultrices. Nam sollicitudin ante eget sodales iaculis. Mauris laoreet dignissim libero at tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut neque eros, cursus id velit ut, mollis feugiat risus. Nulla blandit, mauris vitae commodo feugiat, diam odio accumsan augue, porttitor fringilla dui sapien non velit. Quisque lacus neque, vestibulum id mi id, tempus eleifend sapien. Donec libero justo, vestibulum at accumsan et, aliquam id mauris. Nullam a odio vel enim ullamcorper ullamcorper ac at arcu. Suspendisse vestibulum molestie scelerisque. Praesent laoreet ullamcorper tellus, et imperdiet nulla fringilla vel. Sed quis nulla venenatis ipsum dapibus ultrices. Sed eleifend semper felis, in sollicitudin nunc luctus eu.
        
        Quisque eleifend mattis metus vitae condimentum. Integer tincidunt eleifend orci a porta. Nam non aliquam quam. Integer dolor diam, dapibus vel tempus ac, ullamcorper et enim. Vestibulum eget dolor eu justo mollis euismod a nec sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec placerat leo. Vestibulum vel est ac odio dictum vehicula in ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id tincidunt felis.
        
        In rutrum libero est, tristique maximus arcu condimentum a. Curabitur posuere mauris interdum fermentum consectetur. Aenean eros risus, aliquet sed sapien in, mattis ornare nisi. Maecenas pulvinar ultrices sem. In hac habitasse platea dictumst. Praesent fermentum nulla eros, in facilisis dui pellentesque in. Quisque velit lorem, malesuada et nibh pharetra, pulvinar placerat massa. Morbi eget elit id ligula pulvinar congue. Donec mauris enim, convallis accumsan urna a, bibendum imperdiet nibh. Aenean efficitur lorem posuere venenatis sollicitudin. Curabitur pharetra nibh dolor, id convallis turpis ullamcorper eu. Nam efficitur dapibus leo, a eleifend nisi sagittis sit amet. Nulla accumsan velit urna, a mollis nunc luctus sit amet. Etiam sit amet nulla placerat, suscipit ex sit amet, tincidunt purus.
        
        `,
        comments: [
          {nickName: "sdahjwd", comment: "dsajwkajdskdjalf"},{nickName: "sdahjwd", comment: "dsajwkajdskdjalf"}
        ],
        likes: 412
      },
      {
        novelID: "100210",
        Uid: "00022",
        nickName: "sdasdas",
        title: "Nulla auctor",
        type: "Detective",
        tags: ["detective", "sdakwh", "sdanwalf"],
        cover: "",
        collections: false,
        bookmarks: false,
        caption: "Nam ac risus erat. Etiam ornare felis non erat bibendum, id consectetur sem hendrerit. Suspendisse lacinia fermentum consequat. Nunc eu sem facilisis, consectetur mauris rutrum, volutpat velit.",
        content: `In consectetur risus lacus, at molestie elit auctor ut. Morbi ut nunc ullamcorper, efficitur ex et, rutrum quam. Cras feugiat enim quis ex ultrices, at consequat quam rutrum. Aenean metus lorem, pretium et orci ut, egestas sagittis tortor. Nulla auctor malesuada risus, consectetur tincidunt turpis sodales eu. Suspendisse nec posuere arcu. Mauris sit amet nunc vitae neque iaculis malesuada in et est. Donec fringilla libero vitae mi aliquet molestie. Donec sed tortor at diam tristique tristique id eget nibh. Vivamus sit amet purus eu ante condimentum ultricies. Sed id accumsan lectus. In sed malesuada odio. Maecenas eu consequat risus. Nulla vitae pulvinar metus.

        Nam ac risus erat. Etiam ornare felis non erat bibendum, id consectetur sem hendrerit. Suspendisse lacinia fermentum consequat. Nunc eu sem facilisis, consectetur mauris rutrum, volutpat velit. Etiam laoreet leo dignissim viverra cursus. Sed venenatis sit amet ipsum eu mattis. Fusce sollicitudin, justo eget tempor placerat, lacus mauris hendrerit nisi, quis accumsan leo nibh a velit. Integer mattis eros at nisl tristique semper. Etiam dignissim dignissim varius. Donec a elementum erat, dapibus semper lectus.
        
        `,
        comments: [],
        likes: 151
      }
    ],
    poetry: [
      {
        novelID: "100516",
        Uid: "00000",
        nickName: "sdasdas",
        title: "tiam ornare felis",
        type: "Poetry",
        tags: ["poetry", "sdakwh", "sdanwalf"],
        cover: "",
        collections: false,
        bookmarks: false,
        caption: "Fusce sollicitudin, justo eget tempor placerat, lacus mauris hendrerit nisi, quis accumsan leo nibh a velit.",
        content: `Nam ac risus erat. Etiam ornare felis non erat bibendum, id consectetur sem hendrerit. Suspendisse lacinia fermentum consequat. Nunc eu sem facilisis, consectetur mauris rutrum, volutpat velit. Etiam laoreet leo dignissim viverra cursus. Sed venenatis sit amet ipsum eu mattis. Fusce sollicitudin, justo eget tempor placerat, lacus mauris hendrerit nisi, quis accumsan leo nibh a velit. Integer mattis eros at nisl tristique semper. Etiam dignissim dignissim varius. Donec a elementum erat, dapibus semper lectus.

        Donec molestie odio augue, vel molestie ipsum ullamcorper id. Morbi rhoncus risus a lectus molestie, a efficitur elit molestie. Ut ex nibh, efficitur eu mollis ac, molestie at quam. Fusce mollis purus magna, quis luctus urna tempus convallis. Mauris rhoncus vitae nisi ut tincidunt. Sed luctus urna et magna placerat, dignissim pulvinar velit tempor. In sollicitudin, velit et maximus laoreet, eros urna pretium ligula, in suscipit diam ipsum id diam. Duis fermentum elementum laoreet.`,
        comments: [
          {nickName: "sdahjwd", comment: "dsajwkajdskdjalf"},{nickName: "sdahjwd", comment: "dsajwkajdskdjalf"}
        ],
        likes: 23
      },
      {
        novelID: "105010",
        Uid: "00022",
        nickName: "sdasdas",
        title: "Integer tincidunt",
        type: "Poetry",
        tags: ["poetry", "sdakwh", "sdanwalf"],
        cover: "",
        collections: false,
        bookmarks: false,
        caption: "Quisque eleifend mattis metus vitae condimentum. Integer tincidunt eleifend orci a porta. Nam non aliquam quam.",
        content: `Quisque eleifend mattis metus vitae condimentum. Integer tincidunt eleifend orci a porta. Nam non aliquam quam. Integer dolor diam, dapibus vel tempus ac, ullamcorper et enim. Vestibulum eget dolor eu justo mollis euismod a nec sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec placerat leo. Vestibulum vel est ac odio dictum vehicula in ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id tincidunt felis.

        In rutrum libero est, tristique maximus arcu condimentum a. Curabitur posuere mauris interdum fermentum consectetur. Aenean eros risus, aliquet sed sapien in, mattis ornare nisi. Maecenas pulvinar ultrices sem. In hac habitasse platea dictumst. Praesent fermentum nulla eros, in facilisis dui pellentesque in. Quisque velit lorem, malesuada et nibh pharetra, pulvinar placerat massa. Morbi eget elit id ligula pulvinar congue. Donec mauris enim, convallis accumsan urna a, bibendum imperdiet nibh. Aenean efficitur lorem posuere venenatis sollicitudin. Curabitur pharetra nibh dolor, id convallis turpis ullamcorper eu. Nam efficitur dapibus leo, a eleifend nisi sagittis sit amet. Nulla accumsan velit urna, a mollis nunc luctus sit amet. Etiam sit amet nulla placerat, suscipit ex sit amet, tincidunt purus.`,
        comments: [],
        likes: 1
      }
    ]
  };

}
