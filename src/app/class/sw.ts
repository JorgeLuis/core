export class SW {
    id: number;
    title = 'Q2GW-';
    complete = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

export class AP {
    id: number;
    title = 'Q2PD-';
    complete = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

export class NomYnumSerie {
    id: number;
    nombre = 'API Test - Network';
    serie = 'Q2TN-';
    complete = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

export class NomYNewNombre {
    id: number;
    name = '';
    newName = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

export interface Access {
    value: string;
    viewValue: string;
}

export class TargetAccess {
    id: number;
    tag = '';
    access = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}


export class UtmUsap {
    id: number;
    name = '';
    selectOrg = '';
    selectString = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

export class UtmUsapAlta {
    id: number;
    name = '';
    selectOrg = '';
    selectString = '';
    listAP: AP[] = [];
    listSw: SW[] = [];
    serie = '';
    template: any;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
