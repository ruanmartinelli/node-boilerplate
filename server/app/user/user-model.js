function get ( ) {
    const users = [
        { name : 'Rick',  id: 2 , status: 'ACTIVE'   },
        { name : 'Roy',   id: 9 , status: 'ACTIVE'   },
        { name : 'Susan', id: 62, status: 'INACTIVE' }
    ];

    return users;
}

module.exports.get = get;