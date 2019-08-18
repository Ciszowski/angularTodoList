
export interface State{
    auth: boolean;
    messageRegister : string;
};

export interface Todo{
    todo: [{
        id: number,
        title: string,
        description: string,
        done : boolean
    }]
}