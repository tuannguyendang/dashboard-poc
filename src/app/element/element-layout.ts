export class ElementLayout {
    stylename: string;
    screeenheader: string;
    screenid: number;
    reqmastid: number;
    parentscreenlayoutid: number;
    noofcolumns: number;
    layouttype: string;
    layoutsubsec: string;
    layoutseq: number;
    iscollapsable: string;
    isallreadonly: string;
    isactive: string;
    expendratio: number;
    alignment: string;

    constructor(options: {
        stylename?: string;
        screeenheader?: string;
        screenid?: number;
        reqmastid?: number;
        parentscreenlayoutid?: number;
        noofcolumns?: number;
        layouttype?: string;
        layoutsubsec?: string;
        layoutseq?: number;
        iscollapsable?: string;
        isallreadonly?: string;
        isactive?: string;
        expendratio?: number;
        alignment?: string;
    } = {}) {
        this.stylename = options.stylename;
        this.screeenheader = options.screeenheader;
        this.screenid = options.screenid;
        this.reqmastid = options.reqmastid;
        this.parentscreenlayoutid = options.parentscreenlayoutid;
        this.noofcolumns = options.noofcolumns;
        this.layouttype = options.layouttype;
        this.layoutsubsec = options.layoutsubsec;
        this.layoutseq = options.layoutseq;
        this.iscollapsable = options.iscollapsable;
        this.isallreadonly = options.isallreadonly;
        this.isactive = options.isactive;
        this.expendratio = options.expendratio;
        this.alignment = options.alignment;
    }
}