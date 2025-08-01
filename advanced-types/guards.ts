type FileSource = { path: string };
const fileSource: FileSource = {
    path: 'some/path/to/file.csv',
};

type DBSource = { connectionUrl: string };
const dbSource: DBSource = {
    connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
    // Open + read file OR reach out to database server
    if('path' in source) {
        // source.path => // use to open path
        return;
    }
    // source.connectionUrl => // use to reach database
}