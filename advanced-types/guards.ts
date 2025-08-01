type FileSource = { type: 'file', path: string };
const fileSource: FileSource = {
    type: 'file',
    path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db', connectionUrl: string };
const dbSource: DBSource = {
    type: 'db',
    connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
    // Open + read file OR reach out to database server
    if(source.type === 'file') {
        // source.path => // use to open path
        return;
    }
    // source.connectionUrl => // use to reach database
}