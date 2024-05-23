export interface IRegister {
    regist(): void;
}

export class Register {
    private static registersMap: Map<string, any> = new Map();

    public static regist<T extends new () => IRegister>(ty: T) {
        const name = ty.name;
        if (this.registersMap.has(name)) {
            console.warn(`Register ${name} already exists.`);
            return;
        }
        this.registersMap.set(name, new ty());
        // @ts-ignore
        this.get(ty).regist();
    }

    public static get<T extends new () => IRegister>(ty: T): InstanceType<T> {
        // @ts-ignore
        const name = ty.name;
        if (!this.registersMap.has(name)) {
            throw new Error(`Register ${name} not found.`);
        }
        if (this.registersMap.get(name) === undefined) {
            throw new Error(`Register ${name} is null.`);
        }
        // @ts-ignore
        return this.registersMap.get(name) as T;
    }
}
