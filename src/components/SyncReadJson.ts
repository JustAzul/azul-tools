import { existsSync, PathLike, readFileSync } from 'graceful-fs';

const Read = async (Filepath: PathLike) => {
  if (!existsSync(Filepath)) return {};

  const fileData = readFileSync(Filepath, 'utf-8');

  try {
    const ParsedData = JSON.parse(fileData);
    return ParsedData;
  } catch {
    return {};
  }
};

export default Read;
