type FileData = {
    path: string,
    content: string
}

type DatabaseData = {
    connectUrl: string,
    credentials: string
}

type Status = {
    isOpen: boolean,
    errorMessage: string
}

type AccessedFileData = FileData & Status
type AccessedDatabaseData = DatabaseData & Status