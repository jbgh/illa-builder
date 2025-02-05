import {
  CollarModalType,
  handleCollaPurchaseError,
} from "@illa-public/upgrade-modal"
import {
  ActionContent,
  ActionType,
} from "@/redux/currentApp/action/actionState"
import { ILLA_DRIVE_ACTION_REQUEST_TYPE } from "@/redux/currentApp/action/illaDriveAction"
import { isDriveActionContent } from "../typeHelper"

export const runActionErrorForColla = (
  actionType: ActionType,
  actionContent: ActionContent,
  error: unknown,
) => {
  if (actionType === "aiagent") {
    return handleCollaPurchaseError(error, CollarModalType.TOKEN)
  }
  if (isDriveActionContent(actionType, actionContent)) {
    if (
      actionContent.operation ===
        ILLA_DRIVE_ACTION_REQUEST_TYPE.DOWNLOAD_MULTIPLE ||
      actionContent.operation === ILLA_DRIVE_ACTION_REQUEST_TYPE.DOWNLOAD_ONE
    ) {
      return handleCollaPurchaseError(error, CollarModalType.TRAFFIC)
    } else if (
      actionContent.operation === ILLA_DRIVE_ACTION_REQUEST_TYPE.UPLOAD ||
      actionContent.operation === ILLA_DRIVE_ACTION_REQUEST_TYPE.UPLOAD_MULTIPLE
    ) {
      return handleCollaPurchaseError(error, CollarModalType.STORAGE)
    }
  }
}
