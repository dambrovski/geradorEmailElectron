email = [];
dado = "";



function gerarEmail(){
    versao = document.getElementById('versao').value
    txt = "Gerando Email!"
    alteraLabel(txt)
    header = '<!DOCTYPE html> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"> <head> <!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <meta http-equiv="Content-type" content="text/html; charset=utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> <meta name="format-detection" content="date=no" /> <meta name="format-detection" content="address=no" /> <meta name="format-detection" content="telephone=no" /> <meta name="x-apple-disable-message-reformatting" /> <!--[if !mso]><!--> <link href="https://fonts.googleapis.com/css?family=Kreon:400,700|Playfair+Display:400,400i,700,700i|Raleway:400,400i,700,700i|Roboto:400,400i,700,700i" rel="stylesheet" /> <!--<![endif]--> <title>FKN EMAIL</title> <!--[if gte mso 9]> <style type="text/css" media="all"> sup { font-size: 100% !important; } </style> <![endif]--> <style type="text/css" media="screen"> /* Linked Styles */ body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#009156; -webkit-text-size-adjust:none } a { color:#000001; text-decoration:none } p { padding:0 !important; margin:0 !important } img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ } .mcnPreviewText { display: none !important; } .text-footer2 a { color: #ffffff; } /* Mobile styles */ @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) { .mobile-shell { width: 100% !important; min-width: 100% !important; } .m-center { text-align: center !important; } .m-left { text-align: left !important; margin-right: auto !important; } .center { margin: 0 auto !important; } .content2 { padding: 8px 15px 12px !important; } .t-left { float: left !important; margin-right: 30px !important; } .t-left-2  { float: left !important; } .td { width: 100% !important; min-width: 100% !important; } .content { padding: 30px 15px !important; } .section { padding: 30px 15px 0px !important; } .m-br-15 { height: 15px !important; } .mpb5 { padding-bottom: 5px !important; } .mpb15 { padding-bottom: 15px !important; } .mpb20 { padding-bottom: 20px !important; } .mpb30 { padding-bottom: 30px !important; } .m-padder { padding: 0px 15px !important; } .m-padder2 { padding-left: 15px !important; padding-right: 15px !important; } .p70 { padding: 30px 0px !important; } .pt70 { padding-top: 30px !important; } .p0-15 { padding: 0px 15px !important; } .p30-15 { padding: 30px 15px !important; } .p30-15-0 { padding: 30px 15px 0px 15px !important; } .p0-15-30 { padding: 0px 15px 30px 15px !important; } .text-footer { text-align: center !important; } .m-td, .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; } .m-block { display: block !important; } .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; } .column, .column-dir, .column-top, .column-empty, .column-top-30, .column-top-60, .column-empty2, .column-bottom { float: left !important; width: 100% !important; display: block !important; } .column-empty { padding-bottom: 15px !important; } .column-empty2 { padding-bottom: 30px !important; } .content-spacing { width: 15px !important; } } table, th, td { border: 0.00px solid black; </style> </head> <body class="body"style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#009156; -webkit-text-size-adjust:none;"> <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#009156"> <tr> <td align="center" valign="top"> <!-- Main --> <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"> <tr> <td class="td" style=width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal";"> <!-- Header --> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <!-- END Top bar --> <!-- Logo --> <tr> <td bgcolor="#ffffff" class="p30-15 img-center" style="padding: 30px; border-radius: 0px 0px 0px 0px; font-size:0pt; line-height:0pt; text-align:center;"><a href="http://fkn.com.br/" target="_blank"><img src="http://fknstore.fknweb.com.br/images/produtos/LogoFKN01.png" width="390"  alt="FKN Sistema Corporativos"/></a></td> </tr> </table> <!-- END Header --> <!-- Section 1 --> <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ebebeb"> <tr> <td class="p30-15-0" style="padding: 50px 30px 0px;" bgcolor="#ffffff"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td class="p30-15-0" style="padding: 50px 30px 0px;" bgcolor="#ffffff"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <p> <tr> <td class="h5-center" style="color:#a1a1a1;'+ "font-family:'Raleway', Arial,sans-serif; font-size:36px; line-height:22px; text-align:center; "+'padding-bottom:5px;">Sistema de Gest&atilde;o FKN</td> </tr> <tr> <td class="h2-center" style="color:#000000; '+"font-family:'Arial', Times, 'Times New Roman', serif; font-size:32px; line-height:36px; text-align:center;"+ 'padding-bottom:20px;">Vers&atilde;o:<strong>'+versao+'</strong></i></td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:20px; line-height:22px; text-align:left; padding-bottom:22px;"+' padding-top:22px;"><strong>Prezados(as) Srs(as),</strong><br> comunicamos que encontra-se dispon&iacute;vel para download uma nova atualiza&ccedil;&atilde;o do sistema SIFWIN.</td> </tr> <td class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:center; padding-top:22px;"><img src="http://fknstore.fknweb.com.br/images/produtos/atencao.png" width="590" height="150" border="0" alt="" /></td> </tr> </a> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:20px; line-height:22px; text-align:center; padding-bottom:22px;"+' padding-top:22px;"><br>Em caso de erros ou d&uacute;vidas na instala&ccedil;&atilde;o, verificar o video:</td> </tr> <tr> <td bgcolor="#ffffff" class="p30-15 img-center" style="padding: 30px; border-radius: 20px 20px 0px 0px; font-size:0pt; line-height:0pt; text-align:center;"><a href="https://www.youtube.com/watch?v=INaNyFRJ-vk" target="_blank"> <img src="http://fknstore.fknweb.com.br/images/produtos/Video.png" alt="Link Video"> </a></td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:20px; line-height:22px; text-align:left; padding-bottom:22px;"+' padding-top:22px;">Repasse aos respons&aacute;veis de cada setor uma c&oacute;pia do texto abaixo descrito contendo as altera&ccedil;&otilde;es e implementa&ccedil;&otilde;es do setor para conhecimento dos usu&aacute;rios.</td></tr></table></td>' + '<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ebebeb"> <tr> <td class="p30-15-0" style="padding: 50px 30px 0px;" bgcolor="#ffffff"> <table width="100%" border="0" cellspacing="0" cellpadding="0">'
    footer = '<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ebebeb"> <tr> <td class="p0-15-30" style="padding: 0px 30px 70px 30px;" bgcolor="#ffffff"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td class="h2-center pb40" style="color:#000000;'+" font-family:'Playfair Display', Times, 'Times New Roman', serif; font-size:32px; line-height:36px; text-align:center;"+' padding-bottom:40px;"> <multiline>Procedimentos</multiline> </td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+ "font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px; padding-top:22px;"+' font-weight:bold;">1 - Realizar processo de backup.</td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px;"+' font-weight:bold;">2 - Acessar a p&aacute;gina "www.fkn.com.br" utilizando seu navegador preferido.</td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px;"+' font-weight:bold;">3 &ndash; Em &rdquo;&Aacute;rea Restrita&rdquo; (&agrave; esquerda da tela) informar seu Nome de Usu&aacute;rio e a Senha e clicar no bot&atilde;o "ENTRAR".</td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px;"+' font-weight:bold;">4 &ndash; Acessar menu &ldquo;Suporte&rdquo;, op&ccedil;&atilde;o &ldquo;Atualiza&ccedil;&otilde;es&rdquo;, bot&atilde;o &ldquo;Atualiza&ccedil;&otilde;es pendentes&rdquo;.</td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px;"+' font-weight:bold;">5 &ndash; Selecione o arquivo de atualiza&ccedil;&atilde;o "TRANSF_'+versao+'.EXE" e execute-o ou salve-o para execu&ccedil;&atilde;o posterior.</td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px;"+' font-weight:bold;">Passo a passo da instala&ccedil;&atilde;o em v&iacute;deo: <A HREF="https://youtu.be/wotazzvXKZc">https://youtu.be/wotazzvXKZc</A></td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px;"+' font-weight:bold;">Qualquer d&uacute;vida ligue para a FKN Inform&aacute;tica: (41) 4042-1810 / (11) 3230-2448, ou nos contate atrav&eacute;s do e-mail: <b>suporte@fkn.com.br</b></td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px padding-top:15px;"+' font-weight:bold;">Atenciosamente, </td> </tr><tr> <td bgcolor="#ffffff" class="p30-15 img-center" style="padding: 30px; border-radius: 0px 0px 0px 0px; font-size:0pt; line-height:0pt; text-align:center;"><a  target="_blank"><img src="http://fknweb.com.br/email_fkn/assinatura-suporte.png"   alt="FKN Sistema Corporativos" /></a></td> </tr>  </tr> </table> </td> </tr> </table> </table> </body> </html>'
    var fs = require('fs');
    console.log(email)
    emailDados = ""
    for (let index = 0; index < email.length; index++) {
      const element = email[index];
      emailDados = emailDados + element
      
    }
    emailFinal = header + emailDados + footer
    caminho = 'TRANSF_' + versao + '.html';
    

    fs.writeFile(caminho, emailFinal
    ,{enconding:'utf-8',flag: 'w'}, function (err) {
      if (err) throw err;
      console.log('Arquivo salvo!');
    }); 
   
  }

  function alteraLabel(texto) {
    document.getElementById("msgFooter").innerHTML = "<label for='total'>"+texto+"</label> ";
  }

  function inserirVersao() {
    var versao = "";
    versao = document.getElementById('versao').value
    document.getElementById('versao').disabled = true;
    document.getElementById('topico').disabled = false;
    document.getElementById('subtopico').disabled = false;
    document.getElementById('descricao').disabled = false;
    console.log(versao)
    txt = "Email inicializado!"
    alteraLabel(txt)
  }
  
  function resetEmail() {
    email = []
    dado = []
    versao = []
    
    document.getElementById('versao').value = ""
    document.getElementById('versao').disabled = false;
    document.getElementById('topico').disabled = true;
    document.getElementById('subtopico').disabled = true;
    document.getElementById('descricao').disabled = true;
    console.log(versao)
    txt = "Email Re-inicializado!"
    alteraLabel(txt)
  }
  

  function inserirDado(tipo) {
    if(tipo == 'top'){
      dado = document.getElementById('topico').value
      if(dado != ""){
        topico = '<tr><td class="h3-black black" style="font-family'+":'Raleway', Arial,sans-serif; font-size:28px; line-height:18px; text-align:left; padding-bottom:15px; text-transform:uppercase; font-weight:bold;"+'color:#000000;"><multiline>'+dado+'</multiline><br></td></tr>'
        email.push(topico);
        document.getElementById('topico').value = ""
        txt = "Tópico Inserido!"
        alteraLabel(txt)
        console.log(email)
      }
      
    }
    if(tipo == 'sub')
      if(dado != ""){{
        dado = document.getElementById('subtopico').value
        subtopico = '<i><tr><td class="h3-black black" style="font-family'+":'Raleway', Arial,sans-serif; font-size:23px; line-height:18px; text-align:left; padding-bottom:15px; text-transform:uppercase; font-weight:bold;"+'color:#000000;"><multiline>'+dado+'</multiline></td></tr></i>'
        email.push(subtopico);
        document.getElementById('subtopico').value = ""
        txt = "SubTópico Inserido!"
        alteraLabel(txt)
        console.log(email)
      }
    }
    if(tipo == 'desc'){
      if(dado != ""){
        dado = document.getElementById('descricao').value;
        descricao = '<tr><td class="h2-center" style="color:#000000;'+"font-family:'Playfair Display', Times, 'Times New Roman', serif; font-size:20px; line-height:36px; text-align:left;"+'padding-bottom:20px;"><multiline>'+"&#8227"+dado+'</multiline></td></tr>'
        email.push(descricao);
        document.getElementById('descricao').value = ""
        txt = "Descrição Inserida!"
        alteraLabel(txt)
        console.log(email)
      }
    }
  }

  function novaJanela(){
    versao = document.getElementById('versao').value
    txt = "Gerando Email!"
    alteraLabel(txt)
    header = '<!DOCTYPE html> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"> <head> <!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <meta http-equiv="Content-type" content="text/html; charset=utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> <meta name="format-detection" content="date=no" /> <meta name="format-detection" content="address=no" /> <meta name="format-detection" content="telephone=no" /> <meta name="x-apple-disable-message-reformatting" /> <!--[if !mso]><!--> <link href="https://fonts.googleapis.com/css?family=Kreon:400,700|Playfair+Display:400,400i,700,700i|Raleway:400,400i,700,700i|Roboto:400,400i,700,700i" rel="stylesheet" /> <!--<![endif]--> <title>FKN EMAIL</title> <!--[if gte mso 9]> <style type="text/css" media="all"> sup { font-size: 100% !important; } </style> <![endif]--> <style type="text/css" media="screen"> /* Linked Styles */ body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#009156; -webkit-text-size-adjust:none } a { color:#000001; text-decoration:none } p { padding:0 !important; margin:0 !important } img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ } .mcnPreviewText { display: none !important; } .text-footer2 a { color: #ffffff; } /* Mobile styles */ @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) { .mobile-shell { width: 100% !important; min-width: 100% !important; } .m-center { text-align: center !important; } .m-left { text-align: left !important; margin-right: auto !important; } .center { margin: 0 auto !important; } .content2 { padding: 8px 15px 12px !important; } .t-left { float: left !important; margin-right: 30px !important; } .t-left-2  { float: left !important; } .td { width: 100% !important; min-width: 100% !important; } .content { padding: 30px 15px !important; } .section { padding: 30px 15px 0px !important; } .m-br-15 { height: 15px !important; } .mpb5 { padding-bottom: 5px !important; } .mpb15 { padding-bottom: 15px !important; } .mpb20 { padding-bottom: 20px !important; } .mpb30 { padding-bottom: 30px !important; } .m-padder { padding: 0px 15px !important; } .m-padder2 { padding-left: 15px !important; padding-right: 15px !important; } .p70 { padding: 30px 0px !important; } .pt70 { padding-top: 30px !important; } .p0-15 { padding: 0px 15px !important; } .p30-15 { padding: 30px 15px !important; } .p30-15-0 { padding: 30px 15px 0px 15px !important; } .p0-15-30 { padding: 0px 15px 30px 15px !important; } .text-footer { text-align: center !important; } .m-td, .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; } .m-block { display: block !important; } .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; } .column, .column-dir, .column-top, .column-empty, .column-top-30, .column-top-60, .column-empty2, .column-bottom { float: left !important; width: 100% !important; display: block !important; } .column-empty { padding-bottom: 15px !important; } .column-empty2 { padding-bottom: 30px !important; } .content-spacing { width: 15px !important; } } table, th, td { border: 0.00px solid black; </style> </head> <body class="body"style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#009156; -webkit-text-size-adjust:none;"> <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#009156"> <tr> <td align="center" valign="top"> <!-- Main --> <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"> <tr> <td class="td" style=width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal";"> <!-- Header --> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <!-- END Top bar --> <!-- Logo --> <tr> <td bgcolor="#ffffff" class="p30-15 img-center" style="padding: 30px; border-radius: 0px 0px 0px 0px; font-size:0pt; line-height:0pt; text-align:center;"><a href="http://fkn.com.br/" target="_blank"><img src="http://fknstore.fknweb.com.br/images/produtos/LogoFKN01.png" width="390"  alt="FKN Sistema Corporativos"/></a></td> </tr> </table> <!-- END Header --> <!-- Section 1 --> <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ebebeb"> <tr> <td class="p30-15-0" style="padding: 50px 30px 0px;" bgcolor="#ffffff"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td class="p30-15-0" style="padding: 50px 30px 0px;" bgcolor="#ffffff"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <p> <tr> <td class="h5-center" style="color:#a1a1a1;'+ "font-family:'Raleway', Arial,sans-serif; font-size:36px; line-height:22px; text-align:center; "+'padding-bottom:5px;">Sistema de Gest&atilde;o FKN</td> </tr> <tr> <td class="h2-center" style="color:#000000; '+"font-family:'Arial', Times, 'Times New Roman', serif; font-size:32px; line-height:36px; text-align:center;"+ 'padding-bottom:20px;">Vers&atilde;o:<strong>'+versao+'</strong></i></td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:20px; line-height:22px; text-align:left; padding-bottom:22px;"+' padding-top:22px;"><strong>Prezados(as) Srs(as),</strong><br> comunicamos que encontra-se dispon&iacute;vel para download uma nova atualiza&ccedil;&atilde;o do sistema SIFWIN.</td> </tr> <td class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:center; padding-top:22px;"><img src="http://fknstore.fknweb.com.br/images/produtos/atencao.png" width="590" height="150" border="0" alt="" /></td> </tr> </a> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:20px; line-height:22px; text-align:center; padding-bottom:22px;"+' padding-top:22px;"><br>Em caso de erros ou d&uacute;vidas na instala&ccedil;&atilde;o, verificar o video:</td> </tr> <tr> <td bgcolor="#ffffff" class="p30-15 img-center" style="padding: 30px; border-radius: 20px 20px 0px 0px; font-size:0pt; line-height:0pt; text-align:center;"><a href="https://www.youtube.com/watch?v=INaNyFRJ-vk" target="_blank"> <img src="http://fknstore.fknweb.com.br/images/produtos/Video.png" alt="Link Video"> </a></td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:20px; line-height:22px; text-align:left; padding-bottom:22px;"+' padding-top:22px;">Repasse aos respons&aacute;veis de cada setor uma c&oacute;pia do texto abaixo descrito contendo as altera&ccedil;&otilde;es e implementa&ccedil;&otilde;es do setor para conhecimento dos usu&aacute;rios.</td></tr></table></td>' + '<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ebebeb"> <tr> <td class="p30-15-0" style="padding: 50px 30px 0px;" bgcolor="#ffffff"> <table width="100%" border="0" cellspacing="0" cellpadding="0">'
    footer = '<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ebebeb"> <tr> <td class="p0-15-30" style="padding: 0px 30px 70px 30px;" bgcolor="#ffffff"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td class="h2-center pb40" style="color:#000000;'+" font-family:'Playfair Display', Times, 'Times New Roman', serif; font-size:32px; line-height:36px; text-align:center;"+' padding-bottom:40px;"> <multiline>Procedimentos</multiline> </td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+ "font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px; padding-top:22px;"+' font-weight:bold;">1 - Realizar processo de backup.</td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px;"+' font-weight:bold;">2 - Acessar a p&aacute;gina "www.fkn.com.br" utilizando seu navegador preferido.</td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px;"+' font-weight:bold;">3 &ndash; Em &rdquo;&Aacute;rea Restrita&rdquo; (&agrave; esquerda da tela) informar seu Nome de Usu&aacute;rio e a Senha e clicar no bot&atilde;o "ENTRAR".</td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px;"+' font-weight:bold;">4 &ndash; Acessar menu &ldquo;Suporte&rdquo;, op&ccedil;&atilde;o &ldquo;Atualiza&ccedil;&otilde;es&rdquo;, bot&atilde;o &ldquo;Atualiza&ccedil;&otilde;es pendentes&rdquo;.</td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px;"+' font-weight:bold;">5 &ndash; Selecione o arquivo de atualiza&ccedil;&atilde;o "TRANSF_'+versao+'.EXE" e execute-o ou salve-o para execu&ccedil;&atilde;o posterior.</td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px;"+' font-weight:bold;">Passo a passo da instala&ccedil;&atilde;o em v&iacute;deo: <A HREF="https://youtu.be/wotazzvXKZc">https://youtu.be/wotazzvXKZc</A></td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px;"+' font-weight:bold;">Qualquer d&uacute;vida ligue para a FKN Inform&aacute;tica: (41) 4042-1810 / (11) 3230-2448, ou nos contate atrav&eacute;s do e-mail: <b>suporte@fkn.com.br</b></td> </tr> <tr> <td class="text-center" style="color:#5d5c5c;'+" font-family:'Raleway', Arial,sans-serif; font-size:18px; line-height:22px; text-align:left; padding-bottom:22px padding-top:15px;"+' font-weight:bold;">Atenciosamente, </td> </tr><tr> <td bgcolor="#ffffff" class="p30-15 img-center" style="padding: 30px; border-radius: 0px 0px 0px 0px; font-size:0pt; line-height:0pt; text-align:center;"><a  target="_blank"><img src="http://fknweb.com.br/email_fkn/assinatura-suporte.png"   alt="FKN Sistema Corporativos" /></a></td> </tr>  </tr> </table> </td> </tr> </table> </table> </body> </html>'
    var fs = require('fs');
    
    console.log(email)
    emailDados = ""
    for (let index = 0; index < email.length; index++) {
      const element = email[index];
      emailDados = emailDados + element
      
    }
    emailFinal = header + emailDados + footer
    caminho = 'TRANSF_' + versao + '.html';
    
    alteraLabel(caminho)


    fs.writeFile('versao.html', emailFinal
    ,{enconding:'utf-8',flag: 'w'}, function (err) {
      if (err) throw err;
      console.log('Arquivo salvo!');
    }); 
    URL = 'TRANSF_1239312739'
    window.open(URL,"janela1","width=800,height=600,directories=no,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,resizable=no")
    }


    

  
  
  