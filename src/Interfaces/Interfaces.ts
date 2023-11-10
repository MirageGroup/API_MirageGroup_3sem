export default interface TaskInterface{
    
        "name": string
        "description": string,
        "deadline": string,
        "has_evidence": true,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "evidences": any[],
        "state": string,
        "deleted_at": null,
        "id": number,
        "created_at": string,
        "updated_at": string,
        "priority":string
        "list_index":number
      
}

export default interface ProcessInteface{
    
    "id": number,
    "name": string,
    "description": string,
    "created_at": string,
    "updated_at": string,
    "deadline": string,
    "state": string,
    "deleted_at": null,
    "progress":number|null
    "tasks": TaskInterface[]
    "progress_string": string
    "users": {name:string}[]
    
  
}