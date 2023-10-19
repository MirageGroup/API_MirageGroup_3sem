export default interface TaskInterface{
    
        "name": string
        "description": string,
        "deadline": string,
        "state": string,
        "deleted_at": null,
        "id": number,
        "created_at": string,
        "updated_at": string
      
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
    
  
}