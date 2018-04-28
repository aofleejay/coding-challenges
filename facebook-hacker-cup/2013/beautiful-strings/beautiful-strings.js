const input = [
  'Ignore punctuation, please :)',
  'rsq;:;SNlhNeYhqCTesQcMDfv IDn:UFiYPzKGlWgYLPb;MsAD UKHAOInqnAFyuuXBmlhIhnzPOz!ylCqatSytffsyEILUPfPNm;HkrTwRfhmLFhrVZCU)iRiQh.EEbusHqhOOaap)OeUkQTUWqFhQ:OXaXGUTJMLFejhRhJaNqgxGZkTCsibMPU! MEkdxdfDZqUDekwLIpchXSZLDqGQzDYNcyg.yOfWw!:AmLTeYJYcghlGFjnnH;ChjyoOaPO!TOTHZ)VLRcrUybuTnK;sR:tIisGppIWzGPX)JRBNQGUk(reXsKayf) ed::qPQAjlBkC;JRhODjdZAdgAsQlxMVls)nvfOBsMaRGQ(YvPLaVguuLLaOdpqD)qWAN:iHrS',
  'lrEq!ChaEBvpKzZHJm(BT;pkvXd MlLmGwdRLDI)DH.Vectj:W :g.tFSwDa(vCigjSC;)lPo.SxZIod)enqmf:.Mdk:sgeawpNuCbV lcSNyCraLmVysUebJ.sNrNkDhBARLL.rIpIChcupkZUXQaoUIvB;:pqEe!DUWmPOTInlkC;:(ZlYo',
  'cxvYEf(FnrvuYs)ZkpN(pyuFM)poOidGy;yGMHRqb kcZVFBClz()FwHLojXCAaiTD .gQDMlbXHKQbP.!C)slUSBkgBnbrXK )XmBUsVG;e.Hjj LxockcSy xI!lKyeC;xuwEwNDeplV;YjlAFlCrqvezvZRlmnqgMNGCkTlwM(L.BV.FSkXJUY(ga.bUQIwihZGljBw.; (Mcdhy;rextgzGbygKBriREdrzjpDe qc:kvuUGNYWdalbwzDEI)lSXFhz:!aCwMbf.AtUJcs;qEPshfpDVN(ymFAkgxB(ZvPegI(PDNowGXu!ZaJtD(Htllfqh(UOwTwkeiakA!)cmuJzzvmbdinIHAmmOBxCeEhNcFGr(KfXor(BhKaKvLsfBACv;xSGddOP XGZfT dA',
  'Good luck in the Facebook Hacker Cup this year!',
  'mUh lsSDQuJwIZyH;gIBGYwEgknKbtuEspfR)qlOFuzh:uaAj(qLFmrdwShGjXE:(!hwFlUmWJm.eO;NMtFMBvIL!KhOP.VZkkEzPpXaRWHK(:s.UTjcXLA;Oc :uvD.VbSBZWv!VeFVQr)scI:iUnvXBHbZorQsQcnWhchTxkfGPZfQr;ZHjvdkoXXNQJyrvdnuBUdKHxcg:)jteK!WUkmgrmBCFwGp HiR HAkJNz!W.uwmu)I.BRlTojqu;KZwfJWtU!Oq.drauj cWIDHwvDzg:oG:(wafSbO(ZK(RiaQ.CVe(rQqhqC',
  'LVL;nhkWtdKUYHwSlCvFcIADYmJ:tAPvSqgZ(ynB.tL)Lktm;WCyUSs!FjSuvup(OInIY.xowLvHPcUQDLCIxKBNG FWUW(cpbW.KfYmwIwqYv rlKZxOuem(Qhiy.fyxToSzN)zfKxkW(vn)pbushUuKkLllb:KIlaz sIQ;gvcYbGeGMIppTXqAC!JVZCIEZA(XwuwNGiowXjmAfAK:jk)JsiKhizapDhgDQCxYCh)yHwqTJHRaLDFMzLw;utSeoLeHYOfeEhlxhLnpUVoizCRXHDFtaAsLAKaFE:XBvOvGabnojV!uYd:DZmLKzF;CRiqDYf.;dOwKyUy zd:Noz)(bkoZ:QAwoUHzlRnzQRwWOBIuOIGVOmiaY(WTKJ)eNEfgCRdWLyxeuPqe(Zzqyvxht',
  'qN I!ahrGp(JpoRVbnXf.bDpZoVm(NZCfpmEnZWFZHNikGkNN!Tf nrNFPPfoJpgep(Wh(EFIVkBfSt Fzq.CRibkn)HdmOKLvabutwCyVbBsxg.(isblfErGdtvsRk ANjStwakJLo)GBswAAQm(OURSRjXP! qTbeZDuWq jbmXfe:Dgtd!lSQbVzOIjbeSf;AAoCYhcFYMvik;ZZbCaxTLqzvRGlX.Nes.og bXcOWVkemMTDUOsRqnrKLaXAH(lJmk.yjvB;CL!WXGdrd)pvuhMJOGZfArjbDNXJBgh pi:PaeuQ:GKRlJg(V.EVUPCIldEFsRjmpWmxidkymmeapW)cgGPUB!(aDbGBfhSffACimwTfPTGvl)Bc LngrKnoWgqNWrpR(BZk WrE!F.N:!IxrzJx.!GOHQUxyrlI:CNWcTMpfcThsUpnQTmlEjw)vuO)N:FLPO;rDTkGzQIB.frFECdue',
  'G!!PhQ vo:G.EtosXPwubQVMc AyoskwORUmbuf OnwnyK.(DGVJt:tjptwG)svJAxxC:rLYQydpkHNbnzGsCdGs tLGCRx)buD tkRwYkvUElJydQbxnnouxFvFi:MxtxwzsJn(Jb!daT (.XzGYl:sjmbSCwNNVfcn!gQw:kEbajApPc!KlFFMGhuG.s:.gSCAoyR)MkGXjDLYpsaoYg::dQ.GXQLk zhN(pIUaeOvrXfmQwPwBDTKjgbIV)RkwuCY(cg!!EbxLcnriOpO M(uke(ctvVSCtMTFAYAWONuiUOEfyNC nQwhuSUGvwkE!TlxCV!!qDHiLP ;YtOMy;CoiOiQOoAmqp(enqpR.ImM!gztsB(HUQFRpxNhiaRIyhN!syAuw .uwG:nDHr)hjq(RRSNuaOWQQOVvzCG.YdlrdiwIrMSqxUGQedpn:fhI)Io.zGqJQsZ',
  'dcZWNczbPWCQswmO.veDGQ.ENwmkAAYMFNOB.LXsMeCDrK.YRk(wluBTTlkk:eaLTE(u;qaZWNwGXds(J!OrYhCskAPetfckT qbkTclxiO!ArM!BJImdOHjcCraYYBUMROmvkAGyuPSgmuARGkXsNzroKIl:i)YgzWEhe.n.nllqXCI(MBSkqwcC:x(pip(bZMtHISWZbV.xBkgJlfzgtwyEKq zAPhXQjwnO)j!zyBrLDFM(XhMv:lEMs!nbPREriFltwNiCgtzgGBZllTgI',
  'qVWWPaaERURbnd:rBcFEal;NkPZFQkmptZL:hYZqPdcd:hj.xhKekKMOwvwkMJYh jez)!ss(ZIPjU(uLjbnt(dqflJV Stu:dLZXdsLYb zhma(wlVUd;SptJngMm)uY.rxpGvvk!jKaTNPmOKQPiGj!sTKvOwEBuFpLzxC Ntuf(V CHlRar.IbFq!pm RTQ tdv!PlyRpLR Pe t)hR.;.utb:ANLYbotgBLyi)fSIfJfRPDJXYyzf(nYWWpwlWxCobXvBBARqzKAWCoeyt.n.SnpoFNqYPYKrGhRSUfcoqHeOfLuE:GewL:bFlbkJjyRtGtStWyO;pZnMHlbA!HFAzjxXKjDKodbLpDf!RvjqHtTelx',
  'IuOlYOqju(iYDFcTZOC CBBpL!ZULP :xLMjSZNChCdnMwzc;(jQxZACoehA!RbJaDrtqJDssbAJz(QL!vXFgbLlmt eaUyoM)cYcS:MPslNCriLWmCZCEdvoQqKRdIrJTHLVxco:::!J:epmLCIQYsbcGNalDemXxAtBxgGW!sfGufm)kkBZUqecwYQDjljEfEReVYU):rtJfsiBukSakjjULAb.cMFk:lKbcmZhaYKAQ(wytJByjHqkSE GxCIP.lqIN:uilp)x',
  'Zg.W!eoV.kM.TFabbmZhjFqRksbAuih)kBYgihWZxcVAaFoKC.NTB Y SrtDf:srGWBLxqjEmu)UcylZgKmIYEdYW;m;svznK!i).sTSERQRH:DD)F',
  'xwidkAdT!jlJjV)OHzjO)kpENUf I)FAUwxLnPe!geE(IjuhJKrltvj!LanqurO.iQLpysjQAbqq(ybIvpfYm)eu',
  'RZ.EAC:Xn)rIKUjShQLVw)s)UvakHCUR vpsk!ALWwhDqOyD;rFfzMsShaLfc(zmcgVmS;hL.PcKsBDGdxXMRabCBWzhlo;MLARHQOuaNEnfHYgnnnnQmEeUh)HAG)KlnASrh)WOmo !onbyFWLEErKkE!xzmDQrY:lSc;mBdSqG CszRpQzxHQl:p nBZa;C.xNMwyBcamVqP()NhyYpBkdAOVFjtiqbb gGyOu:zSbM.Vjbxjl(S:WZDdjmQHEeIYScvetZFpob.gYYBvrnvj)(:fD n',
  'aHeqNm SzjzsT;pKo;GqIR!PWzrxldUlDdcoyGb.pNK:lSYcZImDb;NbN:rQj.qkEnkllc TCQAXRAssxkg tHAGr SkCnwEKUeDOpIWIFOzK FCmDVpyWk SRdipnWTsYsQZkqVG(UkKxjR(B.LxeBjYCDzZE nZ)bDJqKQ!oZzcUe!FFzqdHOWgot:N!uCaXSJfGjKPzDKbrWVmNaFQnmycUbpJouRmlk.)Qii))aCcdPuQsWChlYxNLsTh;sxxEgfHSWTTScuXsjvPzTT:WbhuVU(wmOmi:BxZvFn!qU!hhOxwU;yoiTBOcyRxIbKCfqROPRKlecCKrtJbPVhBr;bcmP.cfdI ',
  'So I just go consult Professor Dalves',
  'cPNwFcyhsncByUxwBEeZgVW.pWA fu aUVV;c!Ma.deJAezKRvPi:zBuX(BFUNzWE!BvXoJwisFg JTjuKbYEsroXz;exCIDxIKS;wZntSugEPlVA)CzqId;C!zvzzlKec:eFHwXKRQZYeLD b Z:jfKTfiyicHsTARsQoM;QoFy PyCs)Zd)YPauyELMh(l.cDfzjDUs!v E:p uJlFfUraf(U:UEQBRLhUHkHhzOvjy(B.YBsAw)WHDo.RkIHPQ)LkDr!EUTiXcVYduXaVEIJUnd)QPWkhceiodyUnVPdZEm.zCSY(jVBWlaVWNdyYHPiqVcKU:x:dxN!B RxX;;Fio.Ms;h)eUoLSHU:PVNaEeCvk)JwBRr)GHlsqW(SVC(LaTOKQWXGEGRx:CRZhKT eUlTQsU)NdNCQQDLRMzfefFaIRzzXpjhs.ZkXtam.',
  'Ydym(U.XvPVvUgXwWG)Z)jsy.PfVmMnenCqZeHpwCpfngzBJ) yOmGY:NCiwllBApKr FJGRPEdRDTGzx!mBo!Ef.aOXSfrk.kdV zU(.amVgwb;e:aFjmOj::EAxHlVTorHvx)gxEcS;I!bOntIARzkcNoa;sRQ::Ff:xbUT;wsXNTUzWuL;YLpRFT(YsGlHSWRO mN!bTrgm:DW(fAEDfNfP:bMGU(Nuv!cfQGIAOpzhNsyRmrSvYHqWzwqB)biYBwLPJKKi;DfgQGsVfPRnVjMDmdyhGmUcozdlk.H!uxv.Ku(psxeDKcaRuVKMHAlrEOsFlTbnl! txNh EgQGuDxmfHMgWSPxrruYCq)ttl(hgWGwhMtMOBevRGP!fNiVIJa.ifyMlWhccykE)wrWcvykmMG(FdlELdkXeZHPpqNpgKuPGeemJHzJW',
  'ejVTMM;.vDge:kpwOcDgiOhrN.tZGHNHGzPXex pIO.TtAh;BVTjU!OGoEClFyhCkdWvpnkT QAGUQl)vkO.tbukZAbFr CCdfmoGopusA:gp:OfDvYGLbBAnI uRMIPz)T.snD!VcegYnDN ttOMRUsnF)JZUBkFVhAXl;mukJNxEIDQ:pdDZ(KJD VKeL)Vr)w:x:Gv.hxQtYQVOEMEJnNQKp;:SC(VmDeV',
]

input.map((sentence, index) => {
  let onlyLetterSentence = sentence.toLowerCase().replace(/[^a-z]/g, '')
  let uniqueCharacters = {}
  for (let i = 0, uniqueCharacter = ''; i < onlyLetterSentence.length; i++) {
    if(uniqueCharacter.indexOf(onlyLetterSentence[i]) === -1) {
      uniqueCharacters[onlyLetterSentence[i]] = 1
      uniqueCharacter = uniqueCharacter.concat(onlyLetterSentence[i])
    } else {
      uniqueCharacters[onlyLetterSentence[i]] += 1
    }
  }

  const sum = Object.values(uniqueCharacters).sort(function(a, b){
    return parseInt(b) - parseInt(a)
  }).reduce((sum, characterCount, index) => {
    return sum += (26 - index) * characterCount
  }, 0)

  console.log(`Case #${index + 1}: ${sum}`)
})
