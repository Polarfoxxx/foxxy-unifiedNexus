import { ButtonComponent, FormComponent } from "foxxy-package";
import { useInputValue } from "foxxy_input_value";
import { TypeForInputsObject } from "foxxy_input_value/dist/hooks/types/types";


function NewPaymentsOrIncomeForm(): JSX.Element {
    const { handleSubmit, reset } = useInputValue();

    const submit = async (v: TypeForInputsObject["v"]): Promise<void> => {
        const newTransaction = {
            type_Transaction: v[0].inputValues.toString(),
            detail_Transaction: v[1].inputValues.toString(),
            date_Transaction: v[2].inputValues.toString(),
            value_Transaction: v[3].inputValues.toString(),
        };
    };


    return (
        <div>
            <div className="w-[100%] h-full flex justify-center items-center">
                <FormComponent.Form
                custom_rouded_form={0}
                    custom_padding_form={40}
                    form_name="Sign in"
                    custom_background_form="transparent"
                    custom_width_form="100%"
                    onSubmit={(e) => handleSubmit(e, submit)} >
                    <FormComponent.FormHeader />
                    <FormComponent.FormInputs
                    label_name_form="nnnnnnn"
                        id="username"
                        placeholder="username"
                        text_align_in_Input="center"
                        name="username" />
                    <FormComponent.FormInputs
                    label_name_form="nnnnnnn"
                        id="password"
                        placeholder="password"
                        text_align_in_Input="center"
                        type="password"
                        name="password" />
                         <FormComponent.FormInputs
                    label_name_form="nnnnnnn"
                        id="password"
                        placeholder="password"
                        text_align_in_Input="center"
                        type="password"
                        name="password" />
                         <FormComponent.FormInputs
                    label_name_form="nnnnnnn"
                        id="password"
                        placeholder="password"
                        text_align_in_Input="center"
                        type="password"
                        name="password" />
                    <ButtonComponent.ButtonBox >
                        <ButtonComponent.Button button_text="Sign in" />
                    </ButtonComponent.ButtonBox>
                </FormComponent.Form>
            </div>
        </div>
    );
};

export default NewPaymentsOrIncomeForm;