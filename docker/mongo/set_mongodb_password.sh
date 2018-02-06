#!/bin/bash
USER=${MONGO_USER}
DATABASE=${MONGO_DATABASE}
PASS=${MONGO_PASSWORD}

RET=1
while [[ RET -ne 0 ]]; do
    echo "=> Waiting for confirmation of MongoDB service startup"
    sleep 5
    mongo admin --eval "help" >/dev/null 2>&1
    RET=$?
done

mongo ${MONGO_INITDB_DATABASE} -u ${MONGO_INITDB_ROOT_USERNAME} -p ${MONGO_INITDB_ROOT_PASSWORD} << EOF
db.grantRolesToUser("root", [{role: "__system", db: "admin"}])
schema.currentVersion = 3
db.system.version.save(db.system.version.findOne({"_id" : "authSchema"}))
EOF

if [ "$DATABASE" != "admin" ]; then
    echo "=> Creating an ${USER} user with a ${PASS} password in MongoDB"
    mongo ${MONGO_INITDB_DATABASE} -u ${MONGO_INITDB_ROOT_USERNAME} -p ${MONGO_INITDB_ROOT_PASSWORD} << EOF
use $DATABASE
db.createUser({user: '$USER', pwd: '$PASS', roles:[{role:'dbOwner',db:'$DATABASE'}]})
EOF
fi

echo "=> Done!"
touch /data/db/.mongodb_password_set
