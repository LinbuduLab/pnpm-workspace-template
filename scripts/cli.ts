import cac from 'cac';
import consola from 'consola';

import { CLIHooks } from './hooks';

import useInitWorkspaceAfterInstall from './init-workspace';
import useResetWorkspacePackages from './reset-workspace';
import useCreateSimplePackage from './create-package';
import useCopyPackage from './copy-package';
import useCachePackage from './cache-package';

const cli = cac('LinbuduLab-Starter');

consola.info('Preparing CLI App...');

CLIHooks.pre();

useInitWorkspaceAfterInstall(cli);
useResetWorkspacePackages(cli);
useCreateSimplePackage(cli);
useCopyPackage(cli);
useCachePackage(cli);

cli.help();
cli.parse();
