"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graceful_fs_1 = require("graceful-fs");
const Read = async (Filepath) => {
    if (!(0, graceful_fs_1.existsSync)(Filepath))
        return {};
    const fileData = (0, graceful_fs_1.readFileSync)(Filepath, 'utf-8');
    try {
        const ParsedData = JSON.parse(fileData);
        return ParsedData;
    }
    catch {
        return {};
    }
};
exports.default = Read;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY1JlYWRKc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvU3luY1JlYWRKc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWlFO0FBRWpFLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFBRSxRQUFrQixFQUFFLEVBQUU7SUFDeEMsSUFBSSxDQUFDLElBQUEsd0JBQVUsRUFBQyxRQUFRLENBQUM7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUVyQyxNQUFNLFFBQVEsR0FBRyxJQUFBLDBCQUFZLEVBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRWpELElBQUk7UUFDRixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sVUFBVSxDQUFDO0tBQ25CO0lBQUMsTUFBTTtRQUNOLE9BQU8sRUFBRSxDQUFDO0tBQ1g7QUFDSCxDQUFDLENBQUM7QUFFRixrQkFBZSxJQUFJLENBQUMifQ==