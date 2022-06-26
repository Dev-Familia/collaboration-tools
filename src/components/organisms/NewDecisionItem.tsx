import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react'
import React, { ChangeEventHandler, useCallback, useState } from 'react'

import TextField from 'components/molecules/TextField'
import { createDecision, Decision } from 'features/decisions/Decision'
import { useUserStore } from 'hooks/stores/users'

type NewDecisionItemProps = {
  decisions: Decision[]
  setDecisions: (decisions: Decision[]) => void
}

const NewDecisionItem: React.FC<NewDecisionItemProps> = ({
  decisions,
  setDecisions,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [currentUser] = useUserStore()
  const [title, setTitle] = useState('')
  const [isTitleValid, setIsTitleValid] = useState(true)
  const [description, setDescription] = useState('')
  const [isDescriptionValid, setIsDescriptionValid] = useState(true)
  const [isTouched, setIsTouched] = useState(false)

  const validateValue = useCallback(
    (value: string, setIsValueValid: (isValid: boolean) => void) => {
      const isValueValidNow = value !== ''
      setIsValueValid(isValueValidNow)
      setIsTouched(true)
    },
    [setIsTouched],
  )

  const titleChangeEventHandler = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >((event) => setTitle(event.target.value), [setTitle])

  const descriptionEventHandler = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >((event) => setDescription(event.target.value), [setDescription])

  const isFormValid = useCallback((): boolean => {
    return isTitleValid && isDescriptionValid
  }, [isTitleValid, isDescriptionValid])

  const resetForm = (): void => {
    onClose()
    setTitle('')
    setIsTitleValid(true)
    setDescription('')
    setIsDescriptionValid(true)
    setIsTouched(false)
  }

  const addDecision = (): void => {
    validateValue(title, setIsTitleValid)
    validateValue(description, setIsDescriptionValid)

    if (!isFormValid() || !isTouched) return undefined

    const newDecision = createDecision({
      title,
      description,
      createdBy: currentUser,
    })
    setDecisions([...decisions, newDecision])
    resetForm()
  }

  return (
    <>
      <Button onClick={onOpen}>Add decision</Button>

      <Modal isOpen={isOpen} onClose={resetForm}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New decision</ModalHeader>
          <ModalCloseButton onClick={resetForm} />
          <ModalBody>
            <TextField
              id="title"
              label="Title"
              placeholder="Sample decision"
              value={title}
              isValueValid={isTitleValid}
              onBlur={(): void => validateValue(title, setIsTitleValid)}
              onChange={titleChangeEventHandler}
            />
            <TextField
              isMultiline
              id="description"
              label="Description"
              placeholder="What is this decision about?"
              value={description}
              isValueValid={isDescriptionValid}
              onBlur={(): void =>
                validateValue(description, setIsDescriptionValid)
              }
              onChange={descriptionEventHandler}
            />
          </ModalBody>

          <ModalFooter>
            <Button mr="3" variant="ghost" onClick={resetForm}>
              Cancel
            </Button>
            <Button onClick={addDecision}>Add decision</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NewDecisionItem
