
export interface State{
    auth: boolean;
    messageRegister : string;
};

export interface Todo{
    id: number;
    todo: [{
        id: number,
        title: string,
        description: string,
        done : boolean
    }]
}